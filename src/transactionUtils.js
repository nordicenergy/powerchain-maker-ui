export const getChainId = (transaction) => {
  return transaction.events.NewChain.returnValues.chainId
}

export const getSpender = (transaction) => {
  return transaction.events.Approval.returnValues.spender
}
