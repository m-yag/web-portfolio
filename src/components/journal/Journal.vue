<template>
  <div class="container">
    <div class="row">
      <div class="col-1">
        <JSidebar :links="links"/>
      </div>
      <div class="col mt-5">
        <JEntry />
      </div>
    </div>
  </div>
</template>

<script>
import JSidebar from './JSidebar'
import JEntry from './JEntry'

export default {
  props: ['links'],
  components: {JSidebar, JEntry}
}
</script>

<style scoped>
.container {
  min-height: 250px;

  border-right: 1px solid var(--btn-light);
  border-left: 1px solid var(--btn-light);
  border-bottom: 1px solid var(--btn-light);

}
</style>
