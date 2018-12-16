<template>
  <section class="aboutMe columns">
      <div class="column is-one-quarter">
        <figure>
          <img src="face_icon.png" class="is-rounded" alt="face_icon">
        </figure>
      </div>
      <div class="content_area column is-three-quarter">
        <div class="description_area is-full has-text-left">
          <p class="is-size-5 has-text-grey">東京で働くwebエンジニアです。</p>
          <p class="is-size-5 has-text-grey">RubyやVueを書いています。</p>
        </div>
        <div class="sns_icons_area level is-full m-t-sm ">
          <div class="level-left">
            <span class="icon is-medium level-item has-text-black">
              <a href="https://twitter.com/canisterism">
                <i class="fab fa-twitter fa-lg"></i>
              </a>
            </span>
            <span class="icon is-medium level-item has-text-black">
              <a href="https://github.com/canisterism">
                <i class="fab fa-github fa-lg">
                </i>
              </a>
            </span>
          </div>
        </div>

      </div>

  </section>
</template>

<script>
export default {
  name: "aboutMe"
};
</script>

<style scoped>
.is-horizontal-center {
  justify-content: center;
}
</style>
