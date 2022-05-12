import ContractCaller from '../components/contractCaller';
import MetaMaskConnected from '../components/metaMaskConnected';
import Welcome from '../components/welcome';

export default function Home() {
  return (
    <MetaMaskConnected>
      <Welcome />
      <ContractCaller />
    </MetaMaskConnected>
  );
}
