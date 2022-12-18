<template>
  <div class="mt-4">
    <h5>{{ ln.currentArrowStatus }}</h5>
    <div class="ps-2">
      <h6>{{ ln.startpoint }}: {{ cubeState.arwTemp.startpoint }}</h6>
      <h6>{{ ln.pass }}: {{ cubeState.arwTemp.pass }}</h6>
      <h6>{{ ln.endpoint }}: {{ cubeState.arwTemp.endpoint }}</h6>
    </div>
  </div>
</template>

<script>
import { ln } from "../Stores/Language";
import { cubeState } from "../Stores/CubeState";
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
