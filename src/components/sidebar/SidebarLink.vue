<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { collapsed } from './state'

export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true }
  },
  setup(props) {
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)
    return { isActive, collapsed }
  }
}
</script>

<template>
  <router-link :to="to" class="link link-bottom" :class="{ active: isActive }">
    <i class="icon" :class="icon" />
    <transition name="fade">
      <span v-if="!collapsed">
        <slot/>
      </span>
    </transition>
  </router-link>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.link {
  display: flex;
  align-items: center;

  cursor: pointer;
  position: relative;
  font-weight: 450;
  user-select: none;

  margin: 0.1em 0;
  height: 1.5em;

  color: white;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 4px;
}

.link.active {
  background-color: var(--btn-light);
}

.link .icon {
  flex-shrink: 0;
  width: 22px;
  margin-right: 10px;
}
</style>
