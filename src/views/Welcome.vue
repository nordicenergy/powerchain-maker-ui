<template>
  <div>
    <div class="flex flex-col items-center">
      <h1 class="font-powerchain text-3xl font-bold">{{ $t('headline.welcome') }}</h1>
      <div class="mt-8 flex">
        <div :class="{ 'btn-tile-active': selected === 'register' }" class="btn-tile" @click="pickOption('register')">
          <Check v-if="selected === 'register'"></Check>
          <span>{{ $t('welcome.register') }}</span>
          <span>{{ $t('welcome.new_chain') }}</span>
        </div>
        <div :class="{ 'btn-tile-active': selected === 'interact' }" class="ml-2 btn-tile" @click="pickOption('interact')">
          <Check v-if="selected === 'interact'"></Check>
          <span>{{ $t('welcome.interact') }}</span>
          <span>{{ $t('welcome.with_chain') }}</span>
        </div>
      </div>
    </div>
    <div class="mt-12 flex justify-end">
      <NextButton @click.native="next" :disabled="!selected">{{ $t('button.next') }}</NextButton>
    </div>
  </div>
</template>

<script>
  import Check from '../components/Check'
  import NextButton from '../components/NextButton'

  export default {
  components: { Check, NextButton },
  data () {
    return {
      selected: null
    }
  },
  methods: {
    pickOption (optionNumber) {
      if (this.selected === optionNumber) {
        this.selected = null
      } else {
        this.selected = optionNumber
      }
    },
    next () {
      if (this.selected === 'register') {
        this.$router.push({ name: 'register.network' })
      } else if (this.selected === 'interact') {
        this.$router.push({ name: 'interact.provide_sidechain_id' })
      }
    }
  }
}
</script>
