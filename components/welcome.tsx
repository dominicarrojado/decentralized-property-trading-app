import Link from 'next/link';
import React, { useContext } from 'react';
import { Alert, Button } from 'react-bootstrap';
import StoreContext from '../lib/context';
import { Routes } from '../lib/types';

export default function Welcome() {
  const { account } = useContext(StoreContext);

  return (
    <div>
      <Alert variant="success">
        <Alert.Heading>Welcome!</Alert.Heading>
        <p>Please can now browse and buy properties in our marketplace.</p>
        <p>
          Your address is: <b>{account?.addressId}</b>
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Link href={Routes.PROPERTIES} passHref>
            <Button variant="outline-success">Browse Properties</Button>
          </Link>
        </div>
      </Alert>
    </div>
  );
}
