// Special thanks to Justin Brooks for providing the base code for the Sidebar.
// I've modified it, but the original can be found here:
// https://github.com/codingwithjustin/vue3-sidebar

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1 class="text-center">
      <span v-if="collapsed">
        <div>J</div>
        <div>S</div>
      </span>
      <span v-else>Jane Smith</span>
    </h1>

    <!-- Menu links go here. -->
    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/projects" icon="fas fa-code">Projects</SidebarLink>
    <hr>
    <SidebarLink to="/about" icon="fas fa-user">About</SidebarLink>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  components: { SidebarLink },
  setup() {
    setMaxCollapseWidth(960);
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}

// Set maximum width at which sidebar will collapse on load.
const setMaxCollapseWidth = function(width) {
  if(window.matchMedia(`(min-width: ${width}px)`).matches) {
    collapsed.value = false
  } else {
    collapsed.value = true
  }
}
</script>

<style scoped>
.sidebar {
  color: var(--bg-light);
  background-color: var(--primary);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
