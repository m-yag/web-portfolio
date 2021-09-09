<template>

<div class="container">
  <div class="row justify-content-center">
    <router-link :to="to_code" class="col-sm-2 slanted-left text-white" :class="{current: isCodeActive}">
      <h2 class="text-center text-white">Code</h2>
    </router-link>
    <router-link :to="to_journal" class="col-sm-2 slanted-right text-white" :class="{current: isJournalActive}">
      <h2 class="text-center">Journal</h2>
    </router-link>
  </div>
</div>

</template>

<script>
import {computed} from 'vue'
import {useRoute} from 'vue-router'

export default {
  props: {
    to_code: {type: String, required: true},
    to_journal: {type: String, required: true}
  },
  setup(props) {
    const route = useRoute()
    const isCodeActive = computed(()=> route.path === props.to_code)
    const isJournalActive = computed(()=> route.path === props.to_journal)
    return {isCodeActive, isJournalActive}
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
  -webkit-clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 24%);
  clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%, 0 24%);
}

.slanted-left:focus {
  background-color: #b35900;
}

.slanted-right {
  background-color: var(--btn-light);
  -webkit-clip-path: polygon(92% 0, 100% 24%, 100% 100%, 0 100%, 0 0%);
  clip-path: polygon(92% 0, 100% 24%, 100% 100%, 0 100%, 0 0%);
}

.slanted-right:focus {
  background-color: var(--orange);
}

.current {
  background-color: #b35900;
}
</style>
