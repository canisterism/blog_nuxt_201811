<template>
  <div class="container column is-8">
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
    Posts
  },
  // `env` is available in the context object
  asyncData({ env }) {
    return Promise.all([
      // fetch the owner of the blog
      client.getEntries({
        "sys.id": env.CTF_PERSON_ID
      }),
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: "-sys.createdAt"
      })
    ])
      .then(([entries, posts]) => {
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
