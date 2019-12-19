<template>
  <div>
    <div class="flex flex-col items-center">
      <h1 class="font-powerchain text-3xl font-bold">Request deposit in chain completed</h1>
    </div>
    <div v-if="lastDepositInChain" class="mt-6">
      <div class="mt-2">
        <div class="flex items-center">
          <Check size="xxs"></Check>
          <p class="ml-4 text-md font-bold">{{ lastDepositInChain.tokens }} NET tokens successfully requested to be deposited
            from</p>
        </div>
        <p class="ml-8 text-md text-powerchain-gray">
          <a class="hover:text-secondary" :href="etherScan(network, lastDepositInChain.transaction)" target="_blank">{{
            lastDepositInChain.transaction.from
            }}</a>
        </p>
      </div>
    </div>
    <div class="mt-12 flex justify-between">
      <BackButton @click.native="previous">Back to Deposit menu</BackButton>
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
      'lastDepositInChain'
    ])
  },
  methods: {
    previous () {
      this.$router.push({ name: 'interact.deposits', params: { network: this.network } })
    }
  }
}
</script>
