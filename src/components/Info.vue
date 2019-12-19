<template>
  <span :style="circleSize" class="btn-check flex items-center justify-center rounded-full bg-active">
    <span :class="iSize" class="text-white">i</span>
    </span>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: 'md'
    }
  },
  computed: {
    circleSize () {
      if (this.size === 'md') {
        return {
          width: '30px',
          height: '30px'
        }
      } else if (this.size === 'sm') {
        return {
          width: '26px',
          height: '26px'
        }
      } else if (this.size === 'xs') {
        return {
          width: '20px',
          height: '20px'
        }
      }

      return {
        width: '30px',
        height: '30px'
      }
    },
    iSize () {
      if (this.size === 'md') {
        return {
          width: 'text-md'
        }
      } else if (this.size === 'sm') {
        return {
          width: 'text-sm'
        }
      } else if (this.size === 'xs') {
        return {
          width: 'text-xs'
        }
      }

      return {
        width: 'text-md'
      }
    }
  }
}
</script>
