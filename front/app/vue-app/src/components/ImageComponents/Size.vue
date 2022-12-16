<template>
  <div class="size">
    <h6>{{ ln.size }}</h6>
    <div class="sizeEdit d-flex flex-column">
      <input
        class="text-center"
        type="number"
        min="0"
        max="1024"
        v-model="cubeState.size"
      />
      <input type="range" min="0" max="1024" v-model="cubeState.size" />
    </div>
    <button class="button-primary" @click="this.cubeState.size = 300">
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
      ln: ln(),
      cubeState: cubeState(),
    };
  },
};
</script>

<style></style>
