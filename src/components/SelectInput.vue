<template>
  <div class="relative">
    <select @input="select" :class="borderColor" class="w-64 h-10 px-4 appearance-none focus:outline-none rounded-lg border-2 bg-white text-sm font-medium">
      <option class="text-powerchain-gray" selected disabled><slot></slot></option>
      <option v-for="(option, index) in options" :key="index" :value="option.value">{{ option.text }}</option>
    </select>
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg class="w-4 h-4" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.34 5.01l3.34 3.34 3.34-3.34" stroke="#000" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    borderColor () {
      return this.selected ? 'border-active' : 'border-gray'
    }
  },
  data () {
    return {
      selected: null
    }
  },
  methods: {
    select (event) {
      this.selected = event.target.value;
      this.$emit('select:change', event.target.value)
    }
  }
}
</script>
