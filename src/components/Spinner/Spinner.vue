<template>
  <div class="earth"></div>
</template>

<script>
export default {
  name: "Spinner",
};
</script>

<style lang="scss" scoped>
.earth {
  --d: 18.75rem;
  width: var(--d);
  height: var(--d);
  display: inline-block;
  margin: 0.313rem;
  border-radius: 50%;
  box-shadow: -1.25rem -1.25rem 3.125rem 0.125rem #000 inset,
    0 0 1.25rem 0.125rem #000;
  background: url("../../assets/mars.jpg") 0 / auto 100%;
  animation: spin 3s linear infinite;
}

@keyframes spin {
  to {
    background-position: 200% 0;
  }
}
</style>
