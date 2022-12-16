<template>
  <div class="opacity">
    <div class="d-flex">
      <h4
        class="editSectionTitle opacitySectionTitle d-flex align-items-center gap-1"
      >
        <i class="bx bx-border-none pt-1"></i> {{ ln.opacity }}
      </h4>
    </div>

    <div class="row">
      <FaceletOpacity class="col-6" />
      <CubeOpacity class="col-6" />
    </div>
  </div>
</template>

<script>
import FaceletOpacity from "./OpacityComponents/FaceletOpacity.vue";
import CubeOpacity from "./OpacityComponents/CubeOpacity.vue";
import { ln } from "./Stores/Language";
export default {
  components: {
    FaceletOpacity,
    CubeOpacity,
  },
  data() {
    return {
      ln: ln(),
    };
  },
};
</script>

<style></style>
