<template>
  <section v-if="marsRoverData">
    <vue-ads-pagination
      :total-items="marsRoverData"
      :page="page"
      :items-per-page="25"
    >
      <template slot="buttons" slot-scope="props">
        <vue-ads-page-button
          v-for="(button, key) in props.buttons"
          :key="key"
          v-bind="button"
          :class="{ 'bg-yellow-dark': button.active }"
          @page-change="page = button.page"
          @range-change="
            start = button.start;
            end = button.end;
          "
        />
      </template>
    </vue-ads-pagination>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VueAdsPagination, { VueAdsPageButton } from "vue-ads-pagination";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../../node_modules/vue-ads-pagination/dist/vue-ads-pagination.css";

export default {
  name: "GalleryPagePagination",
  data() {
    return {
      page: 0,
      loading: false,
      start: 0,
      end: 0,
    };
  },
  computed: {
    ...mapGetters(["marsRoverData"]),
    selectedPage() {
      return this.page + 1;
    },
  },
  mounted() {
    this.setMarsRoverData({
      page: this.selectedPage,
    });
  },
  watch: {
    selectedPage: {
      handler(newVal) {
        if (newVal) {
          this.setMarsRoverData({
            page: newVal,
          });
        }
      },
    },
  },
  methods: {
    ...mapActions(["setMarsRoverData"]),
    pageChange(page) {
      this.page = page;
    },
    rageChange(start, end) {
      this.start = start;
      this.end = end;
    },
  },
  components: {
    VueAdsPagination,
    VueAdsPageButton,
  },
};
</script>

<style lang="scss" scoped></style>
