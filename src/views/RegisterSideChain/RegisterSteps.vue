<template>
  <div v-if="currentStep !== null">
    <span class="inline-block text-md text-white mt-8 ml-8">{{ $t('steps') }}</span>
    <ul class="mt-4 ml-8 w-48 text-md">
      <li class="flex items-center justify-between text-white">
        <span><router-link :to="{ name: 'register.network' }">1. {{ $t('register.steps.one') }}</router-link></span>
        <span v-show="currentStep > 1"><Check size="xs"></Check></span>
      </li>
      <li v-if="network !== 'main'" :class="{ 'text-white': currentStep >= 2, 'text-inactive': currentStep < 2 }"
          class="mt-4 flex items-center justify-between">
        <span><router-link :to="{ name: 'register.mint_test_tokens', params: { network: network } }">2. {{ $t('register.steps.two') }}</router-link></span>
        <span v-show="currentStep > 2"><Check size="xs"></Check></span>
      </li>
      <li :class="{ 'text-white': currentStep >= 3, 'text-inactive': currentStep < 3 }"
          class="mt-4 flex items-center justify-between">
        <span><router-link :to="{ name: 'register.approve_spender', params: { network: network } }">{{ stepThree }}. {{ $t('register.steps.three') }}</router-link></span>
        <span v-show="currentStep > 3"><Check size="xs"></Check></span>
      </li>
      <li :class="{ 'text-white': currentStep >= 4, 'text-inactive': currentStep < 4 }"
          class="mt-4 flex items-center justify-between">
        <span><router-link :to="{ name: 'register.new_chain', params: { network: network } }">{{ stepFour }}. {{ $t('register.steps.four') }}</router-link></span>
        <span v-show="currentStep > 4"><Check size="xs"></Check></span>
      </li>
    </ul>
  </div>
</template>

<script>
import Check from '../../components/Check'
import { mapGetters } from 'vuex'

export default {
  components: { Check },
  computed: {
    ...mapGetters([
      'network'
    ]),
    currentStep () {
      const currentRoute = this.$route.name
      const routeToStep = {
        'register.network': 1,
        'register.mint_test_tokens': 2,
        'register.minted_test_tokens': 2.5,
        'register.approve_spender': 3,
        'register.approve_transactions': 3.5,
        'register.new_chain': 4,
        'register.completed': 5
      }

      if (!Object.prototype.hasOwnProperty.call(routeToStep, currentRoute)) {
        return null
      }

      return routeToStep[currentRoute]
    },
    stepThree () {
      if (this.network === 'main') {
        return '2'
      }

      return '3'
    },
    stepFour () {
      if (this.network === 'main') {
        return '3'
      }

      return '4'
    }
  }
}
</script>
