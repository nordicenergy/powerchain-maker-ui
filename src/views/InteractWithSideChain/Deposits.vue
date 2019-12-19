<template>
  <div>
    <div class="flex flex-col items-center">
      <h1 class="font-powerchain text-3xl font-bold">{{ $t('headline.deposits') }}</h1>
      <div class="mt-8 flex">
        <div :class="{ 'btn-tile-active': selected === 'interact.deposit_in_chain' }" class="btn-tile"
             @click="pickOption('interact.deposit_in_chain')">
          <Check v-if="selected === 'interact.deposit_in_chain'"></Check>
          <span>{{ $t('deposits.deposit_in_chain') }}</span>
        </div>
        <div :class="{ 'btn-tile-active': selected === 'interact.withdraw_deposit' }" class="ml-2 btn-tile"
             @click="pickOption('interact.withdraw_deposit')">
          <Check v-if="selected === 'interact.withdraw_deposit'"></Check>
          <span>{{ $t('deposits.withdraw_deposit') }}</span>
        </div>
        <div :class="{ 'btn-tile-active': selected === 'interact.confirm_deposit_withdrawal' }" class="ml-2 text-center btn-tile"
             @click="pickOption('interact.confirm_deposit_withdrawal')">
          <Check v-if="selected === 'interact.confirm_deposit_withdrawal'"></Check>
          <span>{{ $t('deposits.confirm_deposit_withdrawal') }}</span>
        </div>
      </div>
    </div>
    <div class="mt-12 flex justify-between">
      <BackButton @click.native="previous">{{ $t('button.interact_with_chain_menu') }}</BackButton>
      <NextButton :disabled="!selected" @click.native="next">{{ $t('button.next') }}</NextButton>
    </div>
  </div>
</template>

<script>
  import BackButton from '../../components/BackButton'
  import NextButton from '../../components/NextButton'
  import Check from '../../components/Check'

  export default {
  props: {
    chain: {
      type: String
    },
    network: {
      type: String
    }
  },
  data () {
    return {
      selected: null
    }
  },
  components: { BackButton, NextButton, Check },
  methods: {
    pickOption (optionNumber) {
      if (this.selected === optionNumber) {
        this.selected = null
      } else {
        this.selected = optionNumber
      }
    },
    previous () {
      this.$router.push({ name: 'interact', params: { chain: this.chain } })
    },
    next () {
      if (this.selected === 'interact.deposit_in_chain') {
        this.$router.push({ name: 'interact.deposit_in_chain', params: { chain: this.chain } })
      } else if (this.selected === 'interact.withdraw_deposit') {
        this.$router.push({ name: 'interact.withdraw_deposit', params: { chain: this.chain } })
      } else if (this.selected === 'interact.confirm_deposit_withdrawal') {
        this.$router.push({ name: 'interact.confirm_deposit_withdrawal', params: { chain: this.chain } })
      }
    }
  }
}
</script>
