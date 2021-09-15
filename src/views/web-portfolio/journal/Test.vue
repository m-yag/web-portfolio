<template>
    <Markdown :source="source" />
</template>

<script>
import Markdown from 'vue3-markdown-it'
import test from './test.md'
export default {
  data() {return {source: test}},
  components: {Markdown}
}
</script>
