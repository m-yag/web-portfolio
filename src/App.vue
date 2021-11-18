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
  --bg-light: #FFFFFF;
  --fg-light: #000000;
  --btn-light: #464646;
  --primary: #2C6E49;
}

html,
body,
template {
  background-color: var(--bg-light);
}

.container {
  background-color: var(--bg-light);
}

.routerlink {
  color: var(--primary);
}
.routerlink:hover {
  color: var(--primary);
  font-weight: bold;
}

/* give to Markdown elements for orange links*/
.md a {
  color: var(--primary) !important;
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
    background-color: var(--bg-light);
  }
}

.fixed {
  background-color: var(--bg-light);
}

.orange {
  color: var(--orange);
}

#app {
/* Place fonts here */
  color: var(--fg-light);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
/*  color: #2c3e50; */
}
</style>
