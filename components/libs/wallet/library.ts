import Web3 from "web3";
import { provider } from "web3-core";

function getLibrary(provider: provider) {
  return new Web3(provider);
}

export { getLibrary };
