import ropstenErc20Abi from './ropsten/ERC20.json'
import ropstenPowerChainRegistryAbi from './ropsten/PowerChainRegistry.json'
import mainErc20Abi from './main/ERC20.json'
import mainPowerChainRegistryAbi from './main/PowerChainRegistry.json'

export const getErc20Abi = (network = 'ropsten') => {
  if (network === 'main') {
    return mainErc20Abi
  } else if (network === 'ropsten') {
    return ropstenErc20Abi
  }
};

export const getpowerChainRegistryAbi = (network = 'ropsten') => {
  if (network === 'main') {
    return mainPowerChainRegistryAbi
  } else if (network === 'ropsten') {
    return ropstenPowerChainRegistryAbi
  }
};
