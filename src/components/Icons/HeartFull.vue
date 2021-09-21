<template>
  <svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.5 40.0313L19.7813 37.5563C10.125 28.8 3.75 23.025 3.75 15.9375C3.75 10.1625 8.2875 5.625 14.0625 5.625C17.325 5.625 20.4563 7.14375 22.5 9.54375C24.5438 7.14375 27.675 5.625 30.9375 5.625C36.7125 5.625 41.25 10.1625 41.25 15.9375C41.25 23.025 34.875 28.8 25.2188 37.575L22.5 40.0313Z"
      fill="#EB6664"
    />
  </svg>
</template>

<script>
export default {
  name: "HeartFull",
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins";
@import "@/assets/styles/variables";
svg {
  height: 1.563rem;
  width: 1.563rem;
  @include desktop {
    height: 2.188rem;
    width: 2.188rem;
  }
}
</style>
