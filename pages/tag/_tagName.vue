<template>
  <div class="container column is-8">
    <div class="title">タグ検索結果一覧</div>
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
    title: "tagName"
  },
  components: { Posts },
  asyncData({ params, env }) {
    return Promise.all([
      // fetch the owner of the blog
      client.getEntries({
        "sys.id": env.CTF_PERSON_ID
      }),
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: "-sys.createdAt",
        "fields.tags": params.tagName
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
  },
  mounted: function() {
    console.debug(this.posts);
  }
};
</script>

<style lang="scss" scoped>
</style>
