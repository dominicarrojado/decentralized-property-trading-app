import React, { useContext, useMemo, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { CONTRACT_CREATE_PROP_GAS } from '../lib/constants';
import StoreContext from '../lib/context';
import { getContract } from '../lib/eth';
import { FetchState } from '../lib/types';

export default function ContractCaller() {
  const context = useContext(StoreContext);
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [message, setMessage] = useState('');
  const getMessage = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const contract = await getContract({
        from: context.account?.addressId,
        gas: CONTRACT_CREATE_PROP_GAS,
      });
      const res = await contract.methods.createProperty(1, 1, '1', 1000).send();

      setMessage(JSON.stringify(res));
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
        return 'Create Property';
    }
  }, [fetchState]);

  return (
    <Alert variant="secondary">
      <Alert.Heading>Contract Caller</Alert.Heading>
      <p>Let's see if we can interact with the contract.</p>
      {message && (
        <p className="text-break">
          Message received: <b>{message}</b>
        </p>
      )}
      <hr />
      <div className="d-flex justify-content-end">
        <Button
          variant="secondary"
          onClick={getMessage}
          disabled={fetchState === FetchState.LOADING}
        >
          {buttonText}
        </Button>
      </div>
    </Alert>
  );
}
