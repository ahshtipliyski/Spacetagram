<template>
  <div class="card">
    <img class="card__image" :src="item.img_src" :alt="item.camera.name" />
    <h3 class="card__full-name">{{ item.camera.full_name }}</h3>
    <div class="card__like-container" @click="saveLike(item.id)">
      <HeartHollow v-if="!liked" />
      <HeartFull v-if="liked" />
    </div>
    <p>{{ moment(item.earth_date).format("LL") }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "GalleryPageCard",
  data() {
    return {
      liked: false,
    };
  },
  computed: {
    ...mapGetters(["likedImages"]),
  },
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    ...mapActions(["setLikedImages"]),
    saveLike() {
      this.liked = !this.liked;
    },
  },
  components: {
    HeartFull: () => import("../Icons/HeartFull.vue"),
    HeartHollow: () => import("../Icons/HeartHollow.vue"),
  },
};
</script>

<style lang="scss" scoped>
@import "GalleryPageCard.scss";
</style>
