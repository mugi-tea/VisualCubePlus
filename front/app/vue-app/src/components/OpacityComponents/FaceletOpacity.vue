<template>
  <div class="faceletOpacity">
    <h6>{{ ln.faceletOpacity }}</h6>
    <div class="faceletOpacityEdit d-flex flex-column">
      <input
        class="text-center"
        type="number"
        min="0"
        max="100"
        v-model="cubeState.fo"
      />
      <input type="range" min="0" max="100" v-model="cubeState.fo" />
    </div>
  </div>
</template>

<script>
import { cubeState } from "../Stores/CubeState";
import { ln } from "../Stores/Language";
export default {
  data() {
    return {
      ln: ln(),
      cubeState: cubeState(),
    };
  },
};
</script>

<style></style>
