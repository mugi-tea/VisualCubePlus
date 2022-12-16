<template>
  <div class="puzzleType">
    <h6>{{ ln.puzzleType }}</h6>
    <div class="puzzleTypeEdit d-flex flex-column">
      <select v-model="cubeState.pzl" class="text-center">
        <option v-for="option in pzlOptions" :key="option">
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { ln } from "../Stores/Language";
import { cubeState } from "../Stores/CubeState";

export default {
  data() {
    return {
      pzlOptions: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      cubeState: cubeState(),
      ln: ln(),
    };
  },
};
</script>

<style></style>
