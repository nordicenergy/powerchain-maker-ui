import Web3 from 'web3'
import config from './config'

export const tokensToNetPrecision = (tokens) => {
  let BN = Web3.utils.BN;
  let bigNumberTokens = new BN('1000000000000000000').mul(new BN(tokens));
  return Web3.utils.toHex(bigNumberTokens)
};

export const fromNetPrecisionToTokens = (tokens) => {
  let BN = Web3.utils.BN;

  return (new BN(tokens).div(new BN('1000000000000000000'))).toString()
};

export const etherScanTransaction = (network, transactionHash) => {
  return `https://${network}.etherscan.io/tx/${transactionHash}`
};

export const etherScanAddress = (network, address) => {
  return `https://${network}.etherscan.io/address/${address}`
};

export const etherScanToken = (network, address) => {
  if (network === 'main') {
    return `https://etherscan.io/token/${address}`
  }

  return `https://${network}.etherscan.io/address/${address}`
};

export const isNumeric = (number) => {
  return !isNaN(parseFloat(number)) && isFinite(number)
};

export const isValidNetwork = (network) => {
  const allowedNetworks = ['ropsten', 'main'];

  return allowedNetworks.indexOf(network) !== -1
};

export const getErc20ContractAddress = (network = 'ropsten') => {
  if (network === 'main') {
    return config.erc20Address.main
  } else if (network === 'ropsten') {
    return config.erc20Address.ropsten
  }
};

export const getpowerChainRegistryAddress = (network = 'ropsten') => {
  if (network === 'main') {
    return config.registryAddress.main
  } else if (network === 'ropsten') {
    return config.registryAddress.ropsten
  }
};

export const getValidatorAddress = (network = 'ropsten') => {
  if (network === 'main') {
    return config.validtorAddress.main
  } else if (network === 'ropsten') {
    return config.validtorAddress.ropsten
  }
};
