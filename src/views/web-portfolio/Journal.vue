<template>
  <div class="container">
    <div class="row">
      <div class="col-1">
        <JSidebar :links="[
          {entry: '12-12-12', path: '/web-portfolio/journal/test'}
        ]"/>
      </div>
      <div class="col mt-5">
        <div :style="{'margin-left': sidebarWidth}" style="float: left">
          <router-view><Markdown :source="source" /></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JSidebar from '@/components/jsidebar/JSidebar'
import {sidebarWidth} from '@/components/jsidebar/state'

import Markdown from 'vue3-markdown-it'

import Test from 'raw-loader!./journal/Test.md'

export default {
  components: {JSidebar, Markdown},
  setup() {
    return {sidebarWidth, JSidebar}
  },
  data() {
    return {
      source: Test
    }
  }
}
</script>

<style scoped>

.container {
  min-height: 250px;

  border-right: 1px solid var(--btn-light);
  border-left: 1px solid var(--btn-light);
  border-bottom: 1px solid var(--btn-light);
}


/* To be erased */
.nav {
  float: left;
  z-index: 1;
  padding: 1em;

  display: flex;
  flex-direction: column;

  position: relative;
}

.test {
  position: absolute;
  margin-top: 110px;
}

/* DO NOT ERASE (styling to be used for 'current' route status) */
/*.nav {        // change to status
  float: left;
  position: fixed;
  z-index: 1;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}*/
</style>
