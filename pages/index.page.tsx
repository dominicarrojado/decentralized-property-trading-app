import CreateProperty from '../components/createProperty';
import MetaMaskConnected from '../components/metaMaskConnected';
import PropertyShares from '../components/propertyShares';
import TransferShares from '../components/transferShares';
import Welcome from '../components/welcome';

export default function Home() {
  return (
    <MetaMaskConnected>
      <Welcome />
      <PropertyShares />
      <CreateProperty />
      <TransferShares />
    </MetaMaskConnected>
  );
}
