<template>
  <button :class="backgroundColor" class="flex items-center justify-between rounded-lg text-white py-2 px-4 font-medium focus:outline-none" :disabled="disabled">
    <span><slot></slot></span>
    <svg viewBox="0 0 14 12" class="w-3 ml-4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6h10M8 1l5 5-5 5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
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
