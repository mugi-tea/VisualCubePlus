<template>
  <div class="puzzle">
    <div class="d-flex">
      <h4
        class="editSectionTitle puzzleSectionTitle d-flex align-items-center gap-1"
      >
        <i class="bx bx-cube pt-1"></i>{{ ln.puzzle }}
      </h4>
    </div>

    <div class="row">
      <PuzzleType class="col-6" />
      <View class="col-6" />
    </div>
  </div>
</template>

<script>
import { ln } from "./Stores/Language";
import PuzzleType from "./PuzzleComponents/PuzzleType.vue";
import View from "./PuzzleComponents/View.vue";
export default {
  components: {
    PuzzleType,
    View,
  },
  data() {
    return {
      ln: ln(),
    };
  },
};
</script>

<style></style>
