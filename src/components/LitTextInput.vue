<template>
  <div class="relative w-full flex items-center">
    <span v-if="inputActive" class="absolute text-sm font-medium" style="margin-left: 18px">NET</span>
    <input
            @focus="focus"
            @blur="blur"
            @input="change"
            :value="value"
            type="text"
            :class="classes"
            :placeholder="dynamicPlaceholder"
            class="w-full h-10 appearance-none focus:outline-none rounded-lg border-2 bg-white text-sm font-medium"
    >
    <NormalButton @click.native="$emit('action')" :class="buttonActive"
                  class="w-20 flex justify-center absolute right-0 ml-12 rounded-l-none"
                  :disabled="!buttonActive">
      <span v-if="loading && buttonActive" class="spinner h-5"></span>
      <span v-else><slot></slot></span>
    </NormalButton>
  </div>
</template>

<script>
import NormalButton from './NormalButton'

export default {
  components: { NormalButton },
  props: {
    value: {
      type: String,
      default: null
    },
    placeholder: {
      type: String
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      if (this.inputActive) {
        return 'pl-10 border-active'
      }

      return 'border-off px-4'
    },
    dynamicPlaceholder () {
      if (this.focused) {
        return null
      }

      return this.placeholder
    },
    inputActive () {
      return this.focused || (this.value && this.value.length > 0)
    },
    buttonActive () {
      return !this.inputActive ? 'bg-disabled' : 'bg-active'
    }
  },
  data () {
    return {
      focused: false
    }
  },
  methods: {
    change (event) {
      this.$emit('input', event.target.value)
    },
    focus () {
      this.focused = true
    },
    blur () {
      this.focused = false
    }
  }
}
</script>
