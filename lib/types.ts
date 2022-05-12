declare global {
  interface Window {
    ethereum: any;
  }
}

export enum Routes {
  HOME = '/',
  PROPERTIES = '/properties',
}

export enum ConnectState {
  DEFAULT = 'DEFAULT',
  CONNECTING = 'CONNECTING',
  CONNECTED = 'CONNECTED',
  ERROR = 'ERROR',
}
