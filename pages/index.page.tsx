import CreateProperty from '../components/createProperty';
import MetaMaskConnected from '../components/metaMaskConnected';
import TransferShares from '../components/transferShares';
import Welcome from '../components/welcome';

export default function Home() {
  return (
    <MetaMaskConnected>
      <Welcome />
      <CreateProperty />
      <TransferShares />
    </MetaMaskConnected>
  );
}
