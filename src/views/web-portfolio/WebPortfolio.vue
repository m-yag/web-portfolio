<template>
  <div class="fixed">
  <div class="container mt-5">
    <div class="row">
      <h1 class="text-center">web-portfolio</h1>
    </div>
    <div class="row mt-5">
      <Tabmenu to_code="/web-portfolio/code" to_journal="/web-portfolio/journal"></Tabmenu>
      <router-view />
    </div>
  </div>
  </div>
</template>

<script>
import Tabmenu from '@/components/tabmenu/Tabmenu'

export default {
  components: {Tabmenu}
}
</script>
