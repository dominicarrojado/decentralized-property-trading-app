import MetaMaskConnected from '../components/metaMaskConnected';
import Welcome from '../components/welcome';

export default function Home() {
  return (
    <MetaMaskConnected>
      <Welcome />
    </MetaMaskConnected>
  );
}
