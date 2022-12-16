<template>
  <div class="algorithm">
    <div class="d-flex">
      <h4
        class="editSectionTitle algorithmSectionTitle d-flex align-items-center gap-1"
      >
        <i class="bx bxs-chess pt-1"></i>
        {{ ln.algorithm }}
      </h4>
    </div>
    <div
      id="algorithmCarousel"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="false"
      data-bs-touch="false"
    >
      <div class="carouselButtons d-flex justify-content-evenly">
        <button
          :class="{ sectionSelectButton: true, active: isActive1 }"
          type="button"
          data-bs-target="#algorithmCarousel"
          data-bs-slide-to="0"
          aria-current="true"
          aria-label="type"
          @click="active1"
        >
          <h6>{{ ln.algToApply }}</h6>
        </button>
        <button
          :class="{ sectionSelectButton: true, active: isActive2 }"
          type="button"
          data-bs-target="#algorithmCarousel"
          data-bs-slide-to="1"
          aria-label="view"
          @click="active2"
        >
          <h6>{{ ln.algToSolve }}</h6>
        </button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <Algorithm />
        </div>
        <div class="carousel-item">
          <Case />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Algorithm from "./AlgorithmComponents/Algorithm.vue";
import Case from "./AlgorithmComponents/Case.vue";
import { ln } from "./Stores/Language";
export default {
  components: { Algorithm, Case },
  data() {
    return {
      ln: ln(),
      isActive1: true,
      isActive2: false,
    };
  },
  methods: {
    active1() {
      this.isActive1 = true;
      this.isActive2 = false;
    },
    active2() {
      this.isActive1 = false;
      this.isActive2 = true;
    },
  },
};
</script>

<style></style>
