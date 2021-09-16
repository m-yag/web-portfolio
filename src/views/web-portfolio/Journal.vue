<template>
  <Journal :links="journal" />
</template>

<script>
import Journal from '@/components/journal/Journal'

const data = {
  journal: [
    {
      entry: '21-09-16',
      path: '/web-portfolio/journal/21-09-16'
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
