import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const API_KEY = "dAXrEEJ9tb4DNsE4scbZs9P5hgUvm2hfGuX5NgzN";
const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity`;
const headers = { Accept: "application/json" };

const store = new Vuex.Store({
  state: {
    marsRoverData: null,
    currentPage: null,
    isLoading: false,
    likedImages: [],
  },
  plugins: [createPersistedState()],
  mutations: {
    setMarsRoverData(state, payload) {
      state.marsRoverData = payload;
    },
    setCurrentPage(state, payload) {
      state.currentPage = payload;
    },
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
    setLikedImages(state, payload) {
      state.likedImages = payload;
    },
  },
  actions: {
    async setMarsRoverData(state, payload) {
      state.commit("setIsLoading", true);
      const data = await fetch(`${url}/photos?sol=1000&api_key=${API_KEY}`, {
        headers,
      });
      const responseData = await data.json();
      const currentPageData = await fetch(
        `${url}/photos?sol=1000&page=${payload.page}&api_key=${API_KEY}`,
        {
          headers,
        }
      );
      const currentPage = await currentPageData.json();
      state.commit("setMarsRoverData", responseData.photos.length);
      state.commit("setCurrentPage", currentPage.photos);
      state.commit("setIsLoading", false);
    },
    setLikedImages(state, payload) {
      state.commit("setLikedImages", payload);
    },
  },
  getters: {
    marsRoverData: (state) => state.marsRoverData,
    currentPage: (state) => state.currentPage,
    isLoading: (state) => state.isLoading,
    likedImages: (state) => state.likedImages,
  },
});

export default store;
