<template>
  <div>
    <div class="flex flex-col items-center">
      <h1 class="font-powerchain text-3xl font-bold">Request vesting in chain completed</h1>
    </div>
    <div v-if="lastVestInChain" class="mt-6">
      <div class="mt-2">
        <div class="flex items-center">
          <Check size="xxs"></Check>
          <p class="ml-4 text-md font-bold">{{ lastVestInChain.tokens }} NET tokens successfully requested to be vested
            from</p>
        </div>
        <p class="ml-8 text-md text-powerchain-gray">
          <a class="hover:text-secondary" :href="etherScan(network, lastVestInChain.transaction)" target="_blank">{{
            lastVestInChain.transaction.from
            }}</a>
        </p>
      </div>
    </div>
    <div class="mt-12 flex justify-between">
      <BackButton @click.native="previous">Back to Vesting menu</BackButton>
      <NextButton @click.native="next">Confirm vest</NextButton>
    </div>
  </div>
</template>

<script>
  import Check from '../../components/Check'
  import {mapGetters} from 'vuex'
  import WithEtherScan from '../../components/WithEtherScan'
  import BackButton from '../../components/BackButton'
  import NextButton from '../../components/NextButton'

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
  components: { Check, BackButton, NextButton },
  computed: {
    ...mapGetters([
      'lastVestInChain'
    ])
  },
  methods: {
    next () {
      this.$router.push({ name: 'interact.confirm_vest', params: { network: this.network } })
    },
    previous () {
      this.$router.push({ name: 'interact.vesting', params: { network: this.network } })
    }
  }
}
</script>
