import { useRouter } from 'next/router';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Button, Alert, Badge, Spinner } from 'react-bootstrap';
import { getContract } from '../../lib/eth';
import MetaMaskConnected from '../../components/metaMaskConnected';
import StoreContext from '../../lib/context';
import { CONTRACT_CREATE_PROP_GAS } from '../../lib/constants';
import { FetchState } from '../../lib/types';
import { useCurrentAddressId } from '../../lib/custom-hooks';

export default function CreateProperty() {
  const autoCompleteDoneRef = useRef(false);
  const router = useRouter();
  const { autoComplete } = router.query;
  const context = useContext(StoreContext);
  const currentAddressId = useCurrentAddressId();
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [message, setMessage] = useState({
    destinationAcc: null,
    tokensCount: null,
  });

  const tokenizeProperty = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const contract = await getContract({
        from: currentAddressId,
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

  const dividentCheck = async () => {
    const contract = await getContract({
      from: context.account?.addressId,
      gas: CONTRACT_CREATE_PROP_GAS,
    });
    const res = await contract.methods
      .createProperty(10000000, 23451243, '550321', 10)
      .send();

    console.log('create property', res);

    const divRes = await contract.methods
      .releaseDividend()
      .send({ value: 500000000, gas: 50000 });

    console.log('divi', divRes);
  };

  useEffect(() => {
    const autoCompleteDone = autoCompleteDoneRef.current;

    if (!autoCompleteDone && autoComplete === '1' && currentAddressId) {
      autoCompleteDoneRef.current = true;
      tokenizeProperty();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoComplete, currentAddressId]);

  return (
    <MetaMaskConnected>
      <div>
        <Button variant={buttonVariant} onClick={tokenizeProperty}>
          {buttonText}{' '}
          {fetchState === FetchState.LOADING && (
            <Spinner animation="border" variant="dark" size="sm" />
          )}
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
      <div>
        <Button variant="secondary" onClick={dividentCheck}>
          Release Divident
        </Button>
      </div>
    </MetaMaskConnected>
  );
}
