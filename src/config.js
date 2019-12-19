export default {
  version: process.env.VUE_APP_VERSION || '0.0.1',
  locale: process.env.VUE_APP_LOCALE || 'en',
  erc20Address: {
    main: process.env.VUE_APP_MAIN_SC_ERC20_ADDRESS || '0x1383b6EFe917e2BB5d80a55a8B1A81f360eD06bd',
    ropsten: process.env.VUE_APP_ROPSTEN_SC_ERC20_ADDRESS || '0x4f80f1254B8783dDd8f81d996605fe85780BfcB4'
  },
  registryAddress: {
    main: process.env.VUE_APP_MAIN_SC_POWERCHAIN_REGISTRY_ADDRESS || '0x4ebf99AC929FC9A7Df2350Fd6f4fb7C21Bd6Bc3B',
    ropsten: process.env.VUE_APP_ROPSTEN_SC_POWERCHAIN_REGISTRY_ADDRESS || '0xA8659cee561B7C6118B2FB0D8f73e18aA8aC4ba4'
  },
  validtorAddress: {
    main: process.env.VUE_APP_MAIN_SC_POWERCHAIN_VALIDATOR_ADDRESS || '0xA0e928cd96189a3A9778aB0213E8CE1E2BEb4c5a',
    ropsten: process.env.VUE_APP_ROPSTEN_SC_POWERCHAIN_VALIDATOR_ADDRESS || '0x9d7fec2796F810f758cd1b1EecAd4F6F38ab0655'
  }
}
