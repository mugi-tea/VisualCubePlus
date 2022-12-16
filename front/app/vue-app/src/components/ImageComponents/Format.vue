<template>
  <div class="format">
    <h6>{{ ln.format }}</h6>
    <div class="formatEdit d-flex flex-column">
      <select class="text-center" v-model="cubeState.fmt">
        <option v-for="fmt in fmtOptions" :key="fmt.label" :value="fmt.value">
          {{ fmt.label }}
        </option>
      </select>
    </div>
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
      fmtOptions: [
        { label: "PNG", value: "png" },
        { label: "GIF", value: "git" },
        { label: "JPG", value: "jpg" },
        { label: "SVG", value: "svg" },
        { label: "TIFF", value: "tiff" },
      ],
    };
  },
};
</script>

<style></style>
