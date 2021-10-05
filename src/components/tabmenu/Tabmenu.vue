<template>

<div class="container">
  <div class="row justify-content-center" style="border-bottom: solid var(--btn-light)">
    <router-link :to="to_code" class="col-xl-2 col-md-3 col-sm-4 col-5 slanted-left text-white routerlink">
      <h2 class="text-center link-bottom menu-text">Code</h2>
    </router-link>
    <router-link :to="to_journal" class="col-xl-2 col-md-3 col-sm-4 col-5 slanted-right text-white routerlink">
      <h2 class="text-center link-bottom menu-text">Journal</h2>
    </router-link>
  </div>
</div>

</template>

<script>
export default {
  props: {
    to_code: {type: String, required: true},
    to_journal: {type: String, required: true}
  }
}
</script>

<style scoped>
.slanted-left {
  background-color: var(--btn-light);
  -webkit-clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 24%);
  clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 24%);
}

.slanted-right {
  background-color: var(--btn-light);
  -webkit-clip-path: polygon(92% 0, 100% 24%, 100% 100%, 0 100%, 0 0%);
  clip-path: polygon(92% 0, 100% 24%, 100% 100%, 0 100%, 0 0%);
}

.router-link-active {
  background-color: var(--orange);
}

.current {
  background-color: #b35900;
}

.routerlink {
  text-decoration: none;
}

.link-bottom {
  position: relative;
}

.menu-text {
  margin-top: 3px;
  margi-bottom: 0px;
}
</style>
