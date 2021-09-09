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
