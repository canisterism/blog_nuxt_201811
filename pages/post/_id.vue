<template>
  <div class="main-content">
    <div class="container column is-4">
      <h2 class="title">{{ entry.title}}</h2>
      <h5 class="subtitle">{{ entry.published }}</h5>
      <h5 class="subtitle">{{ entry.description }}</h5>
      <div class="content" v-html="markdown(entry.body)"></div>
    </div>
  </div>
</template>

<script>
import marked from "marked";
const createClient = require("~/plugins/contentful.js");
const client = createClient.default();

export default {
  head: {
    title: "hogetitle"
  },
  asyncData({ params }) {
    return Promise.all([client.getEntry(params.id)])
      .then(([entry]) => {
        return {
          entry: entry.fields
        };
      })
      .catch(console.error);
  },
  methods: {
    markdown: function(text) {
      return marked(text);
    }
  }
};
</script>

<style scoped>
</style>
