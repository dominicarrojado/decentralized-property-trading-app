import { ReactNode, useEffect, useState } from 'react';
import { getCurrentAddressId } from '../../lib/eth';
import { useMounted } from '../../lib/custom-hooks';
import { ConnectState } from '../../lib/types';
import Connect from './connect';
import Error from './error';
import Install from './install';

type Props = {
  children: ReactNode;
};

export default function MetaMaskConnected({ children }: Props) {
  const [connectState, setConnectState] = useState(ConnectState.DEFAULT);
  const isMounted = useMounted();
  const [isInstalled, setIsInstalled] = useState(false);
  const [_addressId, setAddressId] = useState('');
  const connectToAccount = async () => {
    setConnectState(ConnectState.CONNECTING);

    try {
      const newAddressId = await getCurrentAddressId();

      if (!newAddressId) {
        setConnectState(ConnectState.ERROR);
      } else {
        setAddressId(newAddressId);
        setConnectState(ConnectState.CONNECTED);
      }
    } catch (error) {
      console.error(error);
      setConnectState(ConnectState.ERROR);
    }
  };

  useEffect(() => {
    const checkMetaMaskInstalled = () => {
      const { ethereum } = window;
      const isMetaMaskInstalled = Boolean(ethereum && ethereum.isMetaMask);

      setIsInstalled(isMetaMaskInstalled);
    };

    checkMetaMaskInstalled();
  }, []);

  if (!isMounted) {
    return null;
  }

  if (!isInstalled) {
    return <Install />;
  }

  if (connectState === ConnectState.ERROR) {
    return <Error buttonOnClick={connectToAccount} />;
  }

  if (connectState !== ConnectState.CONNECTED) {
    return (
      <Connect
        buttonOnClick={connectToAccount}
        buttonLoading={connectState === ConnectState.CONNECTING}
      />
    );
  }

  return <>{children}</>;
}
