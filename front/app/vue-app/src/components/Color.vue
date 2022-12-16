<template>
  <div class="color">
    <div class="d-flex">
      <h4
        class="editSectionTitle colorSectionTitle d-flex align-items-center gap-1"
      >
        <i class="bx bx-palette pt-1"></i> {{ ln.color }}
      </h4>
    </div>

    <div
      id="colorCarousel"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="false"
      data-bs-touch="false"
    >
      <div
        class="carouselButtons d-flex justify-content-evenly"
        style="width: 99.8%"
      >
        <button
          :class="{ sectionSelectButton: true, active: isActive1 }"
          type="button"
          data-bs-target="#colorCarousel"
          data-bs-slide-to="0"
          aria-current="true"
          aria-label="fd"
          @click="active1"
        >
          <h6>{{ ln.faceletDefinition }}</h6>
        </button>
        <button
          :class="{ sectionSelectButton: true, active: isActive2 }"
          type="button"
          data-bs-target="#colorCarousel"
          data-bs-slide-to="1"
          aria-label="fc"
          @click="active2"
        >
          <h6>{{ ln.faceletColors }}</h6>
        </button>
        <button
          :class="{ sectionSelectButton: true, active: isActive3 }"
          type="button"
          data-bs-target="#colorCarousel"
          data-bs-slide-to="2"
          aria-label="sch"
          @click="active3"
        >
          <h6>{{ ln.scheme }}</h6>
        </button>
        <button
          :class="{ sectionSelectButton: true, active: isActive4 }"
          type="button"
          data-bs-target="#colorCarousel"
          data-bs-slide-to="3"
          aria-label="sch"
          @click="active4"
        >
          <h6>{{ ln.color }}</h6>
        </button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <FaceletDefinition />
        </div>
        <div class="carousel-item">
          <FaceletColors />
        </div>
        <div class="carousel-item">
          <Scheme />
        </div>
        <div class="carousel-item">
          <CubeColor class="pb-2" />
          <BackgroundColor />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ln } from "./Stores/Language";
import FaceletDefinition from "./ColorComponents/FaceletDefinition.vue";
import FaceletColors from "./ColorComponents/FaceletColors.vue";
import Scheme from "./ColorComponents/Scheme.vue";
import BackgroundColor from "./ColorComponents/BackgroundColor.vue";
import CubeColor from "./ColorComponents/CubeColor.vue";

export default {
  components: {
    FaceletDefinition,
    FaceletColors,
    Scheme,
    BackgroundColor,
    CubeColor,
  },
  data() {
    return {
      ln: ln(),
      isActive1: true,
      isActive2: false,
      isActive3: false,
      isActive4: false,
    };
  },
  methods: {
    active1() {
      this.isActive1 = true;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
    },
    active2() {
      this.isActive1 = false;
      this.isActive2 = true;
      this.isActive3 = false;
      this.isActive4 = false;
    },
    active3() {
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = true;
      this.isActive4 = false;
    },
    active4() {
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = true;
    },
  },
};
</script>

<style></style>
