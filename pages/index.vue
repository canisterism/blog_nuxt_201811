<template>
  <div class="container column is-8">
    <div class="title">最近の投稿</div>
    <posts :posts="posts"/>
  </div>
</template>

<script>
const createClient = require("~/plugins/contentful.js");
const client = createClient.default();

import Posts from "~/components/Posts.vue";
import moment from "~/utils/filters";

export default {
  head: {
    title: "Top"
  },
  components: {
    posts: Posts
  },
  // `env` is available in the context object
  asyncData({ env }) {
    return client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: "-sys.createdAt"
      })
      .then(posts => {
        // return data that should be available
        // in the template
        return {
          posts: posts.items
        };
      })
      .catch(console.error);
  }
};
</script>

<style>
img {
  width: 100%;
  height: auto;
}
