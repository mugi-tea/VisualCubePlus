<template>
  <div class="projectionDistance">
    <h6>{{ ln.projectionDistance }}</h6>
    <div class="projectionDistanceEdit d-flex flex-column">
      <input
        class="text-center"
        type="number"
        min="1"
        max="100"
        v-model="cubeState.dist"
      />
      <input type="range" min="1" max="100" v-model="cubeState.dist" />
    </div>
    <button class="button-primary" @click="this.cubeState.dist = 62.31">
      {{ ln.reset }}
    </button>
  </div>
</template>

<script>
import { cubeState } from "../Stores/CubeState";
import { ln } from "../Stores/Language";

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
