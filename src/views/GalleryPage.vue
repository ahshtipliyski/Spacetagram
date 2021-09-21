<template>
  <section class="gallery">
    <h2 class="gallery__header">
      Brought to you by NASA's Mars Rover Photos API
    </h2>
    <div v-if="!isLoading" class="gallery__cards-container">
      <div
        class="gallery__single-card-container"
        v-for="(item, index) in currentPage"
        :key="`${index}${item.id}`"
      >
        <GalleryPageCard :item="item" />
      </div>
    </div>
    <div v-else class="gallery__spinner"><Spinner /></div>
    <GalleryPagePagination />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "GalleryPage",
  computed: {
    ...mapGetters(["currentPage", "isLoading"]),
  },
  components: {
    GalleryPagePagination: () =>
      import("../components/GalleryPagePagination.vue"),
    GalleryPageCard: () =>
      import("../components/GalleryPageCard/GalleryPageCard.vue"),
    Spinner: () => import("../components/Spinner/Spinner.vue"),
  },
};
</script>

<style lang="scss" scoped>
@import "GalleryPage.scss";
</style>
