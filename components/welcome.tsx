import Link from 'next/link';
import React from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useCurrentAddressId } from '../lib/custom-hooks';
import { Routes } from '../lib/types';

export default function Welcome() {
  const addressId = useCurrentAddressId();

  return (
    <div>
      <Alert variant="success">
        <Alert.Heading>Welcome!</Alert.Heading>
        <p>Please can now browse and buy properties in our marketplace.</p>
        <p>
          Your Address is: <b>{addressId}</b>
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
