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
  const [listingId, setListingId] = useState('550321');
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

      const res = await contract.methods
        .transferToken(addressId, transferSupply, listingId)
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
      <p>
        <ul>
          <li>
            Arijit's wallet address -{' '}
            <b>0x6F529b138Eb5d99ff8b2691BCBF0129a5dAe7679</b>
          </li>
          <li>
            Ketan's wallet address -{' '}
            <b>0xe31058855f1b75f52498d4004C6fb3d3D4F06C5A</b>
          </li>
          <li>
            Sud's wallet address -{' '}
            <b>0xe20517bdef7b9dE86225dA8ACd981fa992974729</b>
          </li>
        </ul>
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
          <Form.Label>Transfer amount / Quantity of shares:</Form.Label>
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
