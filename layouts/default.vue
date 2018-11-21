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
    <transition name="fade">
      <nuxt/>
    </transition>
    <div class="footer has-text-centered">
      <div class="copyright">Copyright © 2018 canister All Rights Reserved.</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#copyright {
  color: #6666;
}

transtion {
  transition: color 2s;
}
/* 表示するときはゆっくり＠文字色だけアニメーションさせない */
/* 遷移中は文字色を透明にしとく */
.fade-enter-active {
  color: transparent;
  transition: all 1s, color 0s;
}
/* 消えるときは素早く */
.fade-leave-active {
  transition: all 0.5s;
}
/* 表示するときは透明度0の左側から */
.fade-enter {
  opacity: 0;
  transform: translateX(-50px);
}
/* 消えるときは透明度0の左側へ */
.fade-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>
