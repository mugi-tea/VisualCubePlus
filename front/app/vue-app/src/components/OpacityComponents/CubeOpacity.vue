<template>
  <div class="cubeOpacity">
    <h6>{{ ln.cubeOpacity }}</h6>
    <div class="cubeOpacityEdit d-flex flex-column">
      <input
        class="text-center"
        type="number"
        min="0"
        max="100"
        v-model="cubeState.co"
      />
      <input type="range" min="0" max="100" v-model="cubeState.co" />
    </div>
  </div>
</template>

<script>
import { ln } from "../Stores/Language";
import { cubeState } from "../Stores/CubeState";
export default {
  data() {
    return {
      cubeState: cubeState(),
      ln: ln(),
    };
  },
};
</script>

<style></style>
