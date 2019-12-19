<template>
  <div>
    <div class="flex flex-col items-center">
      <h1 class="font-powerchain text-3xl font-bold">Withdraw vesting from chain completed</h1>
    </div>
    <div v-if="lastWithdrawVestInChain" class="mt-6">
      <div class="mt-2">
        <div class="flex items-center">
          <Check size="xxs"></Check>
          <p class="ml-4 text-md font-bold">{{ lastWithdrawVestInChain.tokens }} NET tokens successfully withdrawn</p>
        </div>
        <p class="ml-8 text-md text-powerchain-gray">
          <a class="hover:text-secondary" :href="etherScan(network, lastWithdrawVestInChain.transaction)" target="_blank">{{ lastWithdrawVestInChain.transaction.from }}</a>
        </p>
      </div>
    </div>
    <div class="mt-12 flex justify-between">
      <BackButton @click.native="previous">Back to Vesting menu</BackButton>
    </div>
  </div>
</template>

<script>
  import Check from '../../components/Check'
  import {mapGetters} from 'vuex'
  import WithEtherScan from '../../components/WithEtherScan'
  import BackButton from '../../components/BackButton'

  export default {
  mixins: [WithEtherScan],
  props: {
    chain: {
      type: String
    },
    network: {
      type: String
    }
  },
  components: { Check, BackButton },
  computed: {
    ...mapGetters([
      'lastWithdrawVestInChain'
    ])
  },
  methods: {
    previous () {
      this.$router.push({ name: 'interact.vesting', params: { network: this.network } })
    }
  }
}
</script>
