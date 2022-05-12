import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-bootstrap';
import StoreContext from '../lib/context';
import { getContract } from '../lib/eth';
import { FetchState } from '../lib/types';

export default function PropertyShares() {
  const context = useContext(StoreContext);
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [balance, setBalance] = useState(0);
  const [hasBalance, setHasBalance] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const getMessage = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const contract = await getContract();
      const addressId = context.account?.addressId;
      const res = await contract.methods.balanceOf(addressId).call();

      setBalance(res || 0);
      setHasBalance(true);
      setFetchState(FetchState.SUCCESS);
    } catch (err: any) {
      console.error(err);
      setFetchState(FetchState.ERROR);
      setErrorMsg(err.message);
    }
  };

  const subscribeToEvents = async () => {
    const contract = await getContract();

    contract.events
      .Transfer({
        filter: {
          value: [],
        },
        fromBlock: 0,
      })
      .on('data', getMessage);
  };

  useEffect(() => {
    getMessage();
    subscribeToEvents();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Alert variant="secondary">
      <Alert.Heading>Property Shares</Alert.Heading>
      <p className="text-break">
        Balance: <b>{hasBalance ? balance : '----'}</b>
      </p>
      {fetchState === FetchState.ERROR && (
        <>
          <p className="text-danger">Oops! Something went wrong...</p>
          <p className="text-danger">{errorMsg}</p>
        </>
      )}
    </Alert>
  );
}
