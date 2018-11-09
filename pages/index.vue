<template>
  <div>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            ええ感じのブログ
          </h1>
          <h2 class="subtitle">
            あなたは666人目の訪問者です★キリ番踏み逃げ禁止★
          </h2>
          <p v-for="post in posts" v-bind:key="post.id">
              {{ post.fields.title }}
          </p>
        </div>
      </div>
    </section>
    <posts />
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
const client = createClient();

export default {
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
