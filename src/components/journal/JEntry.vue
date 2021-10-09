<template>
  <div :style="{'margin-left': sidebarWidth}">
    <router-view class="md"></router-view>
  </div>
</template>

<script>
import {sidebarWidth} from './state'
import Markdown from 'vue3-markdown-it'

export default {
  setup() {
    return {sidebarWidth, Markdown}
  }
}
</script>
