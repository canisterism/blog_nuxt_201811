<template>
  <div>
    <!-- navigation -->
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <nuxt-link to="/" class="nav-item">
            ええ感じのブログ
          </nuxt-link>
          <nuxt-link active-class="is-active" to="/" class="nav-item is-tab" exact>Home</nuxt-link>
          <nuxt-link active-class="is-active" to="/about" class="nav-item is-tab" exact>About</nuxt-link>
        </div>
      </div>
    </nav>
    <!-- /navigation -->

    <!-- displays page content -->
    <nuxt/>

    <div class="footer has-text-centered">
      <div class="copyright">Copyright © 2018 canister All Rights Reserved.</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#copyright {
  color: #6666;
}
</style>
