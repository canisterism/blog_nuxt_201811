<template>
  <span class="tag">
    <nuxt-link
      :to="`/`">
      {{ label }}
    </nuxt-link>
  </span>

</template>

<script>
export default {
  props: ["label"]
};
</script>

<style scoped lang="scss">
.tag {
  margin-left: 1rem;
  border-radius: 15%;
  border: #3d3d3d;
  color: #3d3d3d;
}
</style>
