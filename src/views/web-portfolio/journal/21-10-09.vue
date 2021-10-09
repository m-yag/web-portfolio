<template>
    <Markdown :html="true" :linkify="true" :abbr="true" :source="source" />
</template>

<script>
import Markdown from 'vue3-markdown-it'
import entry from './21-10-09.md'
export default {
  data() {return {source: entry}},
  components: {Markdown}
}
</script>
