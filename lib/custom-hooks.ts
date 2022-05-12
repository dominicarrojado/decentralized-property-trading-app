import { useEffect, useState } from 'react';
import { getCurrentAddressId } from './eth';

export function useMounted() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
}

export function useCurrentAddressId() {
  const [addressId, setAddressId] = useState('');

  useEffect(() => {
    const updateAddressId = async () => {
      const newAddressId = await getCurrentAddressId();
      setAddressId(newAddressId);
    };

    updateAddressId();
  }, []);

  return addressId;
}
