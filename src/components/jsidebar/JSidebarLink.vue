<template>
  <router-link :to="to" class="link link-bottom justify-content-center" :class="{ active: isActive }">
    <slot />
  </router-link>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { collapsed } from './state'

export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: false }
  },
  setup(props) {
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)
    return { isActive, collapsed }
  }
}
</script>

<style scoped>
.link {
  display: flex;
  align-items: center;
  position: relative;

  cursor: pointer;

  color: black;
  text-decoration: none;
}
</style>
