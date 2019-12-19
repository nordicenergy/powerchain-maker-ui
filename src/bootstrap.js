import Ethereum from './Ethereum'

export default () => {
  return new Promise(async (resolve, reject) => {
    try {
      const ethereum = await Ethereum(window.ethereum, window.web3)
      resolve(ethereum)
    } catch (e) {
      console.log(e)
      reject(e)
    }
  })
}
