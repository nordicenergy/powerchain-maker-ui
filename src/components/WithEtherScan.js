import { etherScanTransaction } from '../utils'

export default {
  methods: {
    etherScan (network, transaction) {
      return etherScanTransaction(network, transaction.transactionHash)
    }
  }
}
