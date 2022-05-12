import React, { useContext, useMemo, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { getContract } from '../../lib/eth';
import MetaMaskConnected from '../../components/metaMaskConnected';
import StoreContext from '../../lib/context';
import { CONTRACT_CREATE_PROP_GAS } from '../../lib/constants';
import { FetchState } from '../../lib/types';
import { Alert, Badge } from 'react-bootstrap';

export default function CreateProperty() {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [message, setMessage] = useState({
    destinationAcc: null,
    tokensCount: null,
  });
  const context = useContext(StoreContext);

  const tokenizeProperty = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const contract = await getContract({
        from: context.account?.addressId,
        gas: CONTRACT_CREATE_PROP_GAS,
      });
      const res = await contract.methods
        .createProperty(10000000, 23451242, '550321', 10)
        .send();

      setMessage({
        destinationAcc: res.events.Transfer.returnValues.to,
        tokensCount: res.events.Transfer.returnValues.value,
      });
      setFetchState(FetchState.SUCCESS);
    } catch (err) {
      console.error(err);
      setFetchState(FetchState.ERROR);
    }
  };

  const buttonText = useMemo(() => {
    switch (fetchState) {
      case FetchState.LOADING:
        return 'Waiting...';

      case FetchState.ERROR:
        return 'Try Again';

      default:
        return 'Confirm Token Genration';
    }
  }, [fetchState]);

  const buttonVariant = useMemo(() => {
    switch (fetchState) {
      case FetchState.LOADING:
        return 'warning';

      case FetchState.ERROR:
        return 'danger';

      default:
        return 'primary';
    }
  }, [fetchState]);

  return (
    <MetaMaskConnected>
      <div>
        <Button variant={buttonVariant} onClick={tokenizeProperty}>
          {buttonText}
        </Button>
      </div>
      <br />
      {message.destinationAcc && message.tokensCount && (
        <div>
          <Alert variant="success">
            <Alert.Heading>Tokens Generated</Alert.Heading>
            <div>
              <span>Account: </span>
              <span>{message.destinationAcc}</span>
            </div>

            <div>
              <span>Tokens: </span>
              <Badge bg="secondary">{message.tokensCount}</Badge>
            </div>
          </Alert>
        </div>
      )}
    </MetaMaskConnected>
  );
}
