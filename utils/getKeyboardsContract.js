import { ethers } from 'ethers';

import abi from '../utils/Keyboards.json';

const contractAddress = '0xe8FcD170584f38450d3F3902D67e2e559c822890';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
