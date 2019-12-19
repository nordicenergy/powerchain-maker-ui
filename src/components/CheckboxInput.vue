<template>
  <span @click="toggleCheck" :class="classes" class="flex items-center justify-center inline-block w-4 h-4 border-2 cursor-pointer" style="border-radius: 4px;">
      <svg v-if="value" class="w-3 h-3" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path
              d="M13 1.5L4.75 9.75 1 6" stroke="#f2f2f2" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"/></svg>
    </span>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return this.value ? 'border-active bg-active' : 'border-gray bg-white'
    }
  },
  methods: {
    toggleCheck () {
      this.$emit('input', !this.value)
    }
  }
}
</script>
