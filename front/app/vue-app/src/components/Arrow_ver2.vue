<template>
  <div class="arrow">
    <div class="d-flex">
      <h4 class="editSectionTitle arrowSectionTitle d-flex align-items-center">
        <i class="bx bx-right-top-arrow-circle"></i>{{ ln.arrow }}
      </h4>
    </div>
    <ArrowDefinition />
  </div>
</template>

<script>
import { cubeState } from "./Stores/CubeState";
import { ln } from "./Stores/Language";
import ArrowDefinition from "./Arrow_ver2Components/ArrowDefinition.vue";
export default {
  components: {
    ArrowDefinition,
  },
  data() {
    return {
      cubeState: cubeState(),
      ln: ln(),
    };
  },
};
</script>

<style></style>
