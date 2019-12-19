<template>
  <span :style="circleSize" class="btn-check flex items-center justify-center rounded-full bg-active">
      <svg viewBox="0 0 14 11" :style="checkMarkSize" fill="none" xmlns="http://www.w3.org/2000/svg"><path
              d="M13 1.5L4.75 9.75 1 6" stroke="#f2f2f2" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"/></svg>
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
      if (this.size === 'lg') {
        return {
          width: '60px',
          height: '60px'
        }
      } else if (this.size === 'md') {
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
      } else if (this.size === 'xxs') {
        return {
          width: '16px',
          height: '16px'
        }
      }

      return {
        width: '30px',
        height: '30px'
      }
    },
    checkMarkSize () {
      if (this.size === 'lg') {
        return {
          width: '28px'
        }
      } else if (this.size === 'md') {
        return {
          width: '14px'
        }
      } else if (this.size === 'sm') {
        return {
          width: '12px'
        }
      } else if (this.size === 'xs') {
        return {
          width: '10px'
        }
      } else if (this.size === 'xxs') {
        return {
          width: '8px'
        }
      }

      return {
        width: '14px'
      }
    }
  }
}
</script>
