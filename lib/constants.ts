export const MAIN_ORIGIN = 'https://dominicarrojado.com';
export const MAIN_PATH = '/decentralized-property-trading-app/';
export const MAIN_URL = `${MAIN_ORIGIN}${MAIN_PATH}`;
export const MAIN_TITLE = 'Decentralized Property Trading App';

export const CONTRACT_ABI = [
  { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
  {
    inputs: [],
    name: 'getMessage',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'message',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'string', name: 'newMessage', type: 'string' }],
    name: 'setMessage',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
export const CONTRACT_ADDRESS = '0x764094175256Fb3fB375fF1202b924348b7c81F4';
