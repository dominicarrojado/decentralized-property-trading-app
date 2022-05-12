import React, { useContext, useMemo, useState } from 'react';
import { Alert, Button, Form, FormGroup, FormLabel } from 'react-bootstrap';
import { CONTRACT_CREATE_PROP_GAS } from '../lib/constants';
import StoreContext from '../lib/context';
import { getContract } from '../lib/eth';
import { FetchState } from '../lib/types';

export default function TransferShares() {
  const context = useContext(StoreContext);
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [listingId, setListingId] = useState('');
  const [addressId, setAddressId] = useState('');
  const [transferSupply, setTransferSupply] = useState(0);
  const getMessage = async () => {
    try {
      setFetchState(FetchState.LOADING);
      setMessage('');
      setErrorMsg('');

      const contract = await getContract({
        from: context.account?.addressId,
        gas: CONTRACT_CREATE_PROP_GAS,
      });

      // console.log(await contract.methods.propSupplier.call().call());
      console.log(await contract.methods.propSupplier(1).call());
      console.log(context.account?.addressId);

      const res = await contract.methods
        .transfer(addressId, transferSupply, listingId)
        .send();

      setListingId('');
      setAddressId('');
      setTransferSupply(0);
      setMessage(JSON.stringify(res));
      setFetchState(FetchState.SUCCESS);
    } catch (err: any) {
      console.error(err);
      setFetchState(FetchState.ERROR);
      setErrorMsg(err.message);
    }
  };
  const buttonText = useMemo(() => {
    switch (fetchState) {
      case FetchState.LOADING:
        return 'Waiting...';

      case FetchState.ERROR:
        return 'Try Again';

      default:
        return 'Transfer Property Shares';
    }
  }, [fetchState]);

  return (
    <Alert variant="secondary">
      <Alert.Heading>Transfer Property Shares</Alert.Heading>
      <p>
        Transfer your shares from your existing properties to another owner.
      </p>
      <Form>
        <Form.Group className="mb-3" controlId="addressId">
          <Form.Label>Listing ID:</Form.Label>
          <Form.Control
            type="text"
            value={listingId}
            onChange={(e) => setListingId(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="addressId">
          <Form.Label>Transfer to:</Form.Label>
          <Form.Control
            type="text"
            value={addressId}
            onChange={(e) => setAddressId(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Transfer amount:</Form.Label>
          <Form.Control
            type="number"
            value={transferSupply}
            onChange={(e) => setTransferSupply(Number(e.target.value))}
          />
        </Form.Group>
      </Form>
      {message && (
        <p className="text-break">
          Message received: <b>{message}</b>
        </p>
      )}
      <hr />
      {fetchState === FetchState.ERROR && (
        <>
          <p className="text-danger">Oops! Something went wrong...</p>
          <p className="text-danger text-break">{errorMsg}</p>
        </>
      )}
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
