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
        </div>
      </div>
    </section>
    <posts />
  </div>
</template>

<script>
import Posts from '~/components/Posts.vue'

export default {
  head: {
    title: 'Home'
  },
  components: {
    Posts
  }
}
</script>

<style>
