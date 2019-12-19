<template>
  <div>
    <div class="flex flex-col items-center">
      <h1 class="font-powerchain text-3xl font-bold">Automator</h1>
      <div class="flex flex-col mt-2">
        <label class="text-xs text-powerchain-gray font-medium">SC address</label>
        <TextInput v-model="smartContractAddress"></TextInput>
      </div>
      <div class="flex flex-col mt-2">
        <label class="text-xs text-powerchain-gray font-medium">Chain Id</label>
        <TextInput v-model="chainId"></TextInput>
      </div>
      <div class="flex flex-col items-start w-full">
        <div class="flex flex-col mt-2">
          <label class="text-xs text-powerchain-gray font-medium">Vesting</label>
          <CheckboxInput :value="isVesting" @input="toggleVesting"></CheckboxInput>
          <TextInput class="mt-2" v-if="isVesting" v-model="vesting"></TextInput>
        </div>
        <div class="flex flex-col mt-2">
          <label class="text-xs text-powerchain-gray font-medium">Deposit</label>
          <CheckboxInput :value="isDeposit" @input="toggleDeposit"></CheckboxInput>
          <TextInput class="mt-2" v-if="isDeposit" v-model="deposit"></TextInput>
        </div>
      </div>
      <div class="flex flex-col mt-2 w-full">
        <label class="text-xs text-powerchain-gray font-medium">Run these actions</label>
        <label class="text-xs text-powerchain-gray font-medium">Mint</label>
        <CheckboxInput v-model="shouldMint"></CheckboxInput>
        <label class="text-xs text-powerchain-gray font-medium">Approve</label>
        <CheckboxInput v-model="shouldApprove"></CheckboxInput>
        <label class="text-xs text-powerchain-gray font-medium">Vest</label>
        <CheckboxInput v-model="shouldVest"></CheckboxInput>
        <label class="text-xs text-powerchain-gray font-medium">Confirm Vest</label>
        <CheckboxInput v-model="shouldConfirmVest"></CheckboxInput>
        <label class="text-xs text-powerchain-gray font-medium">Deposit</label>
        <CheckboxInput v-model="shouldDeposit"></CheckboxInput>
      </div>
      <div class="mt-8">
        <ConfirmButton @click.native="handleRunAutomation">Run automation</ConfirmButton>
      </div>
      <div class="mt-4 text-sm" v-if="step">
        <p>
          <span v-if="step >= 1">Minting ... </span><span v-if="step >= 2">Minted</span>
        </p>
        <p>
          <span v-if="step >= 2">Approving ... </span><span v-if="step >= 3">Approved</span>
        </p>
        <p>
          <span v-if="step >= 3">Vesting or depositing ... </span><span v-if="step >= 4">Vested or deposited</span>
        </p>
        <p>
          <span v-if="step >= 4">Confirming vesting ... </span><span v-if="step >= 5">Vesting confirmed</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import TextInput from '../components/TextInput'
  import ConfirmButton from '../components/ConfirmButton'
  // import PowerChainERC20Abi from '../abi/ERC20'
  // import PowerChainRegistryAbi from '../abi/dev/PowerChainRegistry'
  import CheckboxInput from '../components/CheckboxInput'

  export default {
  inject: ['ethereum'],
  components: { TextInput, ConfirmButton, CheckboxInput },
  data () {
    return {
      address: null,
      smartContractAddress: '0x4f80f1254B8783dDd8f81d996605fe85780BfcB4',
      isVesting: true,
      isDeposit: false,
      vesting: '20000',
      deposit: '20000',
      chainId: null,
      step: null,
      shouldMint: true,
      shouldApprove: true,
      shouldVest: true,
      shouldConfirmVest: true,
      shouldDeposit: false
    }
  },
  async beforeRouteLeave (to, from, next) {
    await this.ethereum.reinitialize();
    next()
  },
  methods: {
    async handleRunAutomation () {
      try {
        this.ethereum.reinitialize(PowerChainERC20Abi, PowerChainRegistryAbi, '0x4f80f1254B8783dDd8f81d996605fe85780BfcB4', this.smartContractAddress);

        const tokens = 100000;

        this.step = 1;
        if (this.shouldMint) {
          await this.ethereum.mint(tokens)
        }
        this.step = 2;
        console.log('minting finished');
        if (this.shouldApprove) {
          await this.ethereum.approve(tokens)
        }
        console.log('tokens approved');
        this.step = 3;
        if (this.isVesting) {
          if (this.shouldVest) {
            await this.ethereum.requestVestInChain(this.chainId, parseInt(this.vesting))
          }
          console.log('vesting processed');
          this.step = 4;
          if (this.shouldConfirmVest) {
            await this.ethereum.confirmVestInChain(this.chainId)
          }
          this.step = 5
        } else if (this.isDeposit) {
          if (this.shouldDeposit) {
            await this.ethereum.requestDepositInChain(this.chainId, parseInt(this.deposit))
          }
          this.step = 4
        }
      } catch (e) {
        this.step = null;
        console.log(e)
      }
    },
    toggleVesting (isVesting) {
      this.isVesting = isVesting;
      this.isDeposit = !isVesting;
      this.shouldVest = isVesting;
      this.shouldConfirmVest = isVesting;
      this.shouldDeposit = !isVesting
    },
    toggleDeposit (isDeposit) {
      this.isDeposit = isDeposit;
      this.isVesting = !isDeposit;
      this.shouldVest = !isDeposit;
      this.shouldConfirmVest = !isDeposit;
      this.shouldDeposit = isDeposit
    }
  }
}
</script>
