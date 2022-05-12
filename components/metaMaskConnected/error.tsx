import React from 'react';
import { Alert, Button } from 'react-bootstrap';

type Props = {
  buttonOnClick: () => void;
};

export default function Error({ buttonOnClick }: Props) {
  return (
    <div>
      <Alert variant="error">
        <Alert.Heading>Unexpected Error</Alert.Heading>
        <p>Something went wrong. Please try again...</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button variant="error" onClick={buttonOnClick}>
            Retry Again
          </Button>
        </div>
      </Alert>
    </div>
  );
}
