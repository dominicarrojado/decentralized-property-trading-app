import { createContext, Dispatch, SetStateAction } from 'react';
import { EthAccount } from './types';

const StoreContext = createContext(
  {} as {
    account: EthAccount | null;
    setAccount: Dispatch<SetStateAction<EthAccount | null>>;
  }
);

export default StoreContext;
