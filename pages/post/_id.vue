<template>
  <div class="main-content">
    <div class="container column is-5">
      <div class="hero-body">
        <img :src="heroImage" alt="">
      </div>
      <h2 class="title">{{ entry.title }}</h2>
      <h5 id="pusblished" class="subtitle">{{ entry.published | moment }}</h5>
      <div class="content" v-html="markdown(entry.body)"></div>
    </div>
  </div>
</template>

<script>
import marked from "marked";
import moment from "~/utils/filters";

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
  },
  computed: {
    heroImage: function() {
      return this.entry.heroImage.fields.file.url;
    }
  }
};
</script>

<style scoped lang=sass>
#pusblished {color: hsl(0, 0%, 71%)}
</style>
