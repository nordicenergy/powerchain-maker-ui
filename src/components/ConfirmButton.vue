<template>
  <button :class="backgroundColor" class="flex items-center justify-between rounded-lg text-white py-2 px-4 font-medium focus:outline-none" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    backgroundColor () {
      return this.disabled ? 'bg-disabled' : 'bg-active'
    }
  }
}
</script>
