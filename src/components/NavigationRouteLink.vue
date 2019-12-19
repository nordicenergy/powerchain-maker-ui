<template>
  <router-link :to="{ name: route }" :class="{ 'text-sidebar-active': hasPathSegment }"><slot></slot></router-link>
</template>

<script>
export default {
  props: {
    route: {
      type: String,
      default: null
    },
    activeOnSegment: {
      type: String,
      default: null
    }
  },
  computed: {
    hasPathSegment () {
      return this.$route.fullPath.indexOf(this.activeOnSegment) !== -1
    }
  }
}
</script>
