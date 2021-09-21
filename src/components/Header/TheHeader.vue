<template>
  <header class="header">
    <div class="header__text-logo-container">
      <span>Spacetagram</span> <SpaceShuttle />
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  components: {
    SpaceShuttle: () => import("../Icons/SpaceShuttle.vue"),
  },
};
</script>

<style lang="scss" scoped>
@import "TheHeader.scss";
</style>
