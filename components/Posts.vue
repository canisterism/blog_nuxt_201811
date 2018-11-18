<template>
  <section class="main-content">
    <div class="container column is-6">
      <h1 class="title has-text-centered">
        Recent Posts
      </h1>
      <div class="columns is-multiline">
        <div class="" v-for="post in posts" :key="post.slug">
          <div class="card is-full">
           <header class="card-header">
            <p class="card-header-title">
              {{ post.fields.title }}
            </p>
          </header>
            <section class="hero">
              <img :src="post.fields.heroImage.fields.file.url" alt="">
            </section>
          <div class="card-content">
            <div class="content">
              {{ post.fields.description }}
              <br>
              <small>
                {{ post.fields.published | moment }}
              </small>
            </div>
          </div>
          <footer class="card-footer">
            <nuxt-link
              :to="`/post/${post.sys.id}`"
              :post="post.fields"
              class="card-footer-item">
              Read More
            </nuxt-link>
          </footer>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "posts",
  props: ["posts"]
};
</script>

<style>
img {
  width: 100%;
  height: auto;
}

.card {
  margin-bottom: 1rem;
}
</style>
