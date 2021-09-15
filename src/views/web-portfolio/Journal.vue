<template>
  <Journal :links="journal" />
</template>

<script>
import Journal from '@/components/journal/Journal'

const data = {
  journal: [
    {
      entry: 'test',
      path: '/web-portfolio/journal/test'
    }
  ]
}

export default {
  data() {
    return data
  },
  components: {Journal}
}
</script>

<style scoped>
</style>
