<template>
  <input
          @focus="focus"
          @blur="blur"
          @input="change"
          :value="value"
          type="text"
          :class="classes"
          :placeholder="dynamicPlaceholder"
          class="w-64 h-10 appearance-none focus:outline-none rounded-md border-2 bg-white text-sm font-medium"
  >
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null
    },
    placeholder: {
      type: String
    }
  },
  computed: {
    classes () {
      if (this.inputActive) {
        return 'px-4 border-active'
      }

      return 'border-gray px-4'
    },
    dynamicPlaceholder () {
      if (this.focused) {
        return null
      }

      return this.placeholder
    },
    inputActive () {
      return this.focused || (this.value && this.value.length > 0)
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
