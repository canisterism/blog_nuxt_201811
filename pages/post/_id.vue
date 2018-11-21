<template>
  <div class="main-content">
    <div class="container column is-5">
      <img :src="heroImage" alt="">
      <h2 class="title">{{ entry.title }}</h2>
      <h5 id="pusblished" class="subtitle">{{ entry.published | moment }}</h5>
      <div class="content" v-html="markdown(entry.body)"></div>
      <div class="tags">
        <tag v-for="(tag, index) in entry.tags" :key="index" :label="tag"/>
      </div>
    </div>
  </div>
</template>

<script>
import marked from "marked";
import moment from "~/utils/filters";
import Tag from "~/components/Tag.vue";

const createClient = require("~/plugins/contentful.js");
const client = createClient.default();

export default {
  head: {
    title: "hogetitle"
  },
  components: {
    Tag
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

<style scoped lang=scss>
#pusblished {
  color: hsl(0, 0%, 71%);
}
.tags {
  margin: 2rem 2rem 2rem 0;
}

.content {
  padding: 1rem;
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
}
</style>
