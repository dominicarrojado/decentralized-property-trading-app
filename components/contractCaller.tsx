import React, { useMemo, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { getContract } from '../lib/eth';
import { FetchState } from '../lib/types';

export default function ContractCaller() {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [message, setMessage] = useState('');
  const getMessage = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const contract = await getContract();
      const res = await contract.methods.getMessage().call();

      setMessage(res);
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
        return 'Get Message';
    }
  }, [fetchState]);

  return (
    <Alert variant="secondary">
      <Alert.Heading>Contract Caller</Alert.Heading>
      <p>Let's see if we can interact with the contract.</p>
      {message && (
        <p>
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
