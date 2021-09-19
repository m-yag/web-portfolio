<template>
  <div v-if="large" class="sidebar" :style="{'width': sidebarWidth}">
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
  <div v-else class="sidebar" :style="{'width': sidebarWidthSmall}">
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
import { collapsed, toggleSidebar, sidebarWidth, sidebarWidthSmall } from './state'

export default {
  props: ['links'],
  components: { JSidebarLink },
  data() {
    var large = window.matchMedia("(min-width: 960px)").matches
    return {large}
  },
  setup() {
    if(window.matchMedia("(min-width: 960px)").matches) {
      collapsed.value = false
    } else {
      console.log(sidebarWidth.value)
      console.log(sidebarWidthSmall.value)
      collapsed.value = true
    }
    return { collapsed, toggleSidebar, sidebarWidth, sidebarWidthSmall }
  }
}
</script>

<style scoped>
@media (max-width:769px) {
  .sidebarWidth {
    width: sidebarWidthSmall;
  }
}

.sidebar {
  color: black;

  border-right: 1px solid;

  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 250px;
  margin-bottom: 5px;
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
