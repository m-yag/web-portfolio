<template>
  <Journal :links="journal" />
</template>

<script>
import Journal from '@/components/journal/Journal'

const data = {
  journal: [
    {
      entry: 'entry2',
      path: '/web-portfolio/journal/entry2'
    },
    {
      entry: 'entry1',
      path: '/web-portfolio/journal/entry1'
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
