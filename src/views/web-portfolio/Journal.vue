<template>
  <div class="container">
    <div class="row">
      <div class="col-1">
        <JSidebar :links="[
          {entry: '12-12-12', path: '/web-portfolio/journal/test'},
          {entry: '11-11-11', path: '#'}
        ]"/>
      </div>
      <div class="col mt-5">
        <div :style="{'margin-left': sidebarWidth}" style="float: left">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JSidebar from '@/components/jsidebar/JSidebar'
import {sidebarWidth} from '@/components/jsidebar/state'

export default {
  components: {JSidebar},
  setup() {
    return {sidebarWidth, JSidebar}
  }
}
</script>

<style scoped>

.nav {
  float: left;
  z-index: 1;
  padding: 1em;

  display: flex;
  flex-direction: column;

  position: relative;
  border-right: solid 1px;
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
