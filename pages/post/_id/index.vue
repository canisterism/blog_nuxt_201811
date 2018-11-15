<template lang="md">
  <div class="main-content">
    <div class="container">
      <h2 class="title is-2">{{ entry.title}}</h2>
      <h5 class="title is-8">{{ entry.published }}</h5>
      <h4 class="title is-8">{{ entry.description }}</h4>
      <div v-for="(paragraph,index) in entry.body.content":key="index">
        <div lang="md" v-html="paragraph.content[0].value"></div>
        <br>
        <br>
        <br>
      </div>
    </div>
  </div></template>

<script>
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
  }
};
</script>

<style>
</style>
