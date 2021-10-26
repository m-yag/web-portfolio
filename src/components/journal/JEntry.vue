<template>
  <div :style="{'margin-left': sidebarWidth}">
    <router-view class="md"></router-view>
  </div>
</template>

<script>
import {sidebarWidth} from './state'

export default {
  setup() {
    return {sidebarWidth}
  }
}
</script>
