import React, { ReactNode } from 'react';
import { Container } from 'react-bootstrap';
import Header from './header';
import MetaTags from './metaTags';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <MetaTags />
      <Header />
      <main>
        <Container className="py-4">{children}</Container>
      </main>
    </>
  );
}
