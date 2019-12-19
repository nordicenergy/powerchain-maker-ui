export default {
  nav: {
    register_new_chain: 'Register new chain',
    interact_with_chain: 'Interact with chain'
  },
  welcome: {
    register: 'Register',
    new_chain: 'new chain',
    interact: 'Interact',
    with_chain: 'with chain'
  },
  button: {
    next: 'Next',
    previous: 'Previous',
    main_menu: 'Main menu',
    choose_network: 'Choose network',
    mint_tokens: 'Mint test tokens',
    approve_spender: 'Approve spender',
    mint: 'Mint',
    approve: 'Approve',
    register_chain: 'Register chain',
    registering: 'Registering ...',
    interact_with_chain: 'Interact with chain',
    interact_with_chain_menu: 'Interact with chain menu'
  },
  headline: {
    welcome: 'What do you want to do ?',
    register: {
      network: "You are using <span class='text-secondary'>{network}</span> network"
    },
    mint: {
      mint: 'Mint',
      minted: 'Minted',
      lit: 'NET',
      test_tokens: 'Test Tokens'
    },
    approve_spender: 'Approve spender',
    register_chain: 'Register chain',
    registration_completed: 'Chain registration completed!',
    provide_sidechain: 'What is your sidechain id ?',
    interact: 'Which interaction would you like to do ?',
    vesting: 'Vesting',
    deposits: 'Deposits',
    vest_in_chain: 'Request vesting in chain'
  },
  subheadline: {
    register: {
      network: 'Currently PowerChain.io works only on the Ropsten Network',
      network_change: 'You can change the network in <a class="text-secondary hover:underline" href="#tutorial" target="_blank">metamask extension</a>'
    }
  },
  mint: {
    metamask: 'If you don\'t have existing Ethereum wallet, <a class=\'text-secondary hover:underline\' href=\'https://metamask.io/\' target=\'_blank\'>create one using Metamask</a>',
    skip: {
      first: 'If you already have NET Tokens',
      second: 'skip to approve sender section'
    },
    minting_tokens: 'Minting tokens ...',
    see_mints: 'Previous mint transactions',
    mint_more: 'Mint more'
  },
  approve: {
    smart_contract: 'Approve our <a class=\'text-secondary hover:underline\' href=\'{smartContractLink}\' target=\'_blank\'>smart contract</a> to manipulate with your tokens',
    skip: {
      first: 'If you already have approved the spender,',
      second: 'skip to chain registration section'
    },
    approving_spender: 'Approving spender ...',
    see_approves: 'Previous approval transactions',
    approve_another: 'Approve another spender'
  },
  register: {
    select_network: 'Select network',
    steps: {
      one: 'Choose network',
      two: 'Mint test tokens',
      three: 'Approve spender',
      four: 'Register chain'
    }
  },
  registration_completed: {
    chain_id: 'Chain id',
    description: 'Description',
    endpoint: 'Endpoint',
    max_validators: 'Max number of validators',
    max_transactors: 'Max number of transactors',
    vesting_cond: 'Involved vesting > 50%',
    participation_cond: '2/3 + 1 Participation'
  },
  interact: {
    vesting: 'Vesting',
    deposits: 'Deposit',
    mining: 'Mining'
  },
  interaction_menu: {
    vesting: 'Vesting',
    vest_in_chain: 'Vest in chain',
    withdraw_vesting: 'Withdraw vesting',
    confirm_vest: 'Confirm vesting',
    deposits: 'Deposit',
    deposit_in_chain: 'Deposit in chain',
    withdraw_deposit: 'Withdraw deposit',
    confirm_deposit_withdrawal: 'Confirm deposit withdrawal',
    mining: 'Mining'
  },
  vesting: {
    vest_in_chain: 'Vest in chain',
    withdraw_vesting: 'Withdraw vesting',
    confirm_vest: 'Confirm vest'
  },
  deposits: {
    deposit_in_chain: 'Deposit in chain',
    withdraw_deposit: 'Withdraw deposit',
    confirm_deposit_withdrawal: 'Confirm deposit withdrawal'
  },
  step: 'Step',
  steps: 'Steps',
  label: {
    tokens: 'Tokens',
    description: 'Description',
    init_endpoint: 'Initial endpoint',
    chain_validator: 'Chain validator address',
    vesting: 'Vesting tokens',
    deposit: 'Deposit tokens',
    max_validators: 'Maximum number of validators',
    max_transactors: 'Maximum number of transactors',
    notary_conditions: 'Notary conditions',
    vesting_cond: 'Involved vesting > 50%',
    participation_cond: '2/3 + 1 Participation',
    sidechain_id: 'Sidechain id'
  }
}
