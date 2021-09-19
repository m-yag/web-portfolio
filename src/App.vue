<template>
  <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar/Sidebar'
import { sidebarWidth } from '@/components/sidebar/state'

export default {
  components: { Sidebar },
  setup() {
    return { sidebarWidth }
  }
}
</script>

<style>
:root {
  --bg-light: #F5F5F5;
  --fg-light: #000000;
  --btn-light: #464646;
  --nav-light: #191919;
  --orange: #B35900;
}

.link-bottom:hover::before,
.link-bottom:hover::after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  background: transparent;
  transition: 1s;
}
.link-bottom:hover::before {
  bottom: -2px;
  left: -2px;
  border-bottom: 2px solid var(--orange);
  border-left: 2px solid var(--orange);
}
.link-bottom:hover::after {
  bottom: -2px;
  right: -2px;
  border-bottom: 2px solid var(--orange);
  border-right: 2px solid var(--orange);
}

.routerlink {
  color: var(--orange);
}
.routerlink:hover {
  color: var(--orange);
  font-weight: bold;
}

/* give to Markdown elements for orange links*/
.md a {
  color: var(--orange) !important;
}
.md a:hover {
  font-weight: bold;
}

/* Any screen smaller than 960px loads with sidebar collapsed.
// This rule ensures that any screen smaller than 769px does not squeeze the
// the content of the element selected. Since the position is fixed, the
// sidebar will simply 'overlap' the content when expanded. */
@media (max-width:769px) {
  .fixed {
    position: absolute;
    left: 11%;
  }
}

#app {
  font-family: 'Courier New', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: var(--fg-light);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
/*  color: #2c3e50; */
}

#nav a.router-link-exact-active {
/*  color: #42b983; */
}
</style>
