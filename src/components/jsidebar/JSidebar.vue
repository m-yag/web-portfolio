<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">

    <span
      class="collapse-icon mb-3"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>

    <div v-if="!collapsed">
      <div v-for="link in links" :key="link.entry">
        <JSidebarLink :to="link.path">{{link.entry}}</JSidebarLink>
      </div>
    </div>
  </div>
</template>

<script>
import JSidebarLink from './JSidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: ['links'],
  components: { JSidebarLink },
  setup() {
    if(window.matchMedia("(min-width: 960px)").matches) {
      collapsed.value = false
    } else {
      collapsed.value = true
    }
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<style scoped>
.sidebar {
  color: black;

  border-right: 1px solid;

  display: flex;
  flex-direction: column;
}

.collapse-icon {
  position: relative;
  bottom: 0;
  padding: 0.75em;

  color: black;
}

.rotate-180 {
  transform: rotate(180deg);
}
</style>
