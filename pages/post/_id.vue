<template>
  <div class="main-content">
    <div class="container">
      <h2 class="title is-2">{{ entry.title}}</h2>
      <h5 class="is-8">{{ entry.published }}</h5>
      <h5 class="is-8">{{ entry.description }}</h5>
      <div v-html="markdown(entry.body)"></div>
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

<style>
</style>
