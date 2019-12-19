<template>
  <div>
    <div class="flex flex-col items-center">
      <h1 class="font-powerchain text-3xl font-bold" v-html="$t('headline.register.network', { network: network }) "></h1>
      <p class="mt-2 text-powerchain-gray font-medium" v-html="$t('subheadline.register.network_change')"></p>
      <h1 class="mt-8 font-powerchain text-3xl font-bold">{{ $t('headline.provide_sidechain') }}</h1>
      <div class="mt-8 flex flex-col">
        <label class="text-xs text-powerchain-gray font-medium">{{ $t('label.sidechain_id') }}</label>
        <TextInput v-model="chain"></TextInput>
      </div>
    </div>
    <div class="mt-12 flex justify-between">
      <BackButton @click.native="previous">{{ $t('button.main_menu') }}</BackButton>
      <NextButton :disabled="!valid" @click.native="next">{{ $t('button.interact_with_chain') }}</NextButton>
    </div>
  </div>
</template>

<script>
  import BackButton from '../../components/BackButton'
  import NextButton from '../../components/NextButton'
  import TextInput from '../../components/TextInput'
  import {isNumeric} from '../../utils'
  import {mapGetters} from 'vuex'

  export default {
  components: { TextInput, BackButton, NextButton },
  data () {
    return {
      chain: null
    }
  },
  computed: {
    ...mapGetters([
      'network'
    ]),
    valid () {
      return isNumeric(this.chain)
    }
  },
  methods: {
    next () {
      this.$router.push({ name: 'interact', params: { network: this.network, chain: this.chain } })
    },
    previous () {
      this.$router.push({ name: 'welcome' })
    }
  }
}
</script>
