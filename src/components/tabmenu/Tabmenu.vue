<template>

<div class="container">
  <div class="row justify-content-center">
    <router-link :to="to_code" class="col-sm-2 slanted-left text-white">
      <h2 class="text-center text-white">Code</h2>
    </router-link>
    <router-link :to="to_journal" class="col-sm-2 slanted-right text-white">
      <h2 class="text-center">Journal</h2>
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

<style>
:root {
  --sidebar-bg-color: #05080D;
  --sidebar-active: #262828;
  --sidebar-hover: #b35900;
}
</style>

<style scoped>
.slanted-left {
  background-color: var(--btn-light);
}

.slanted-left:focus {
  -webkit-clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 24%);
  clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 24%);
  background-color: #b35900;
}

.slanted-left:active {
  -webkit-clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 24%);
  clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 24%);
  background-color: #b35900;
}

.slanted-right {
  background-color: var(--btn-light);
}

.slanted-right:focus {
  -webkit-clip-path: polygon(92% 0, 100% 24%, 100% 100%, 0 100%, 0 0%);
  clip-path: polygon(92% 0, 100% 24%, 100% 100%, 0 100%, 0 0%);
  background-color: var(--orange);
}

.slanted-right:active {
  -webkit-clip-path: polygon(92% 0, 100% 24%, 100% 100%, 0 100%, 0 0%);
  clip-path: polygon(92% 0, 100% 24%, 100% 100%, 0 100%, 0 0%);
  background-color: var(--orange);
}
</style>
