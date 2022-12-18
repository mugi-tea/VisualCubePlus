<template>
  <div class="backgroundColor">
    <h6 class="carouselTitle">{{ ln.backgroundColor }}</h6>
    <div class="backgroundColorEdit d-flex flex-column gap-1">
      <div
        class="colorButtons btn-group d-flex flex-rown overflow-auto"
        role="group"
      >
        <button
          :class="`inputColor${color.label} btn `"
          v-for="color in colors"
          :value="color.value"
          :key="color.label"
          :style="`background-color:${color.color}; color:${color.fontColor} ; border:black 2px solid !important`"
          @click="cubeState.bg = color.value"
        >
          {{ color.label }}
        </button>
      </div>
      <div class="d-flex">
        <input
          class="flex-grow-1"
          type="color"
          v-model="cubeState.bg"
          style="border: 2px black solid !important"
        />
      </div>
    </div>
    <button class="button-primary mt-1" @click="cubeState.bg = '#ffffff'">
      {{ ln.reset }}
    </button>
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
      colors: [
        { label: "B", value: "#000000", color: "#000000", fontColor: "white" },
        { label: "D", value: "#404040", color: "#404040", fontColor: "white" },
        { label: "L", value: "#808080", color: "#808080", fontColor: "black" },
        { label: "S", value: "#bfbfbf", color: "#bfbfbf", fontColor: "black" },
        { label: "W", value: "#ffffff", color: "#ffffff", fontColor: "black" },
        { label: "Y", value: "#ffff00", color: "#ffff00", fontColor: "black" },
        { label: "R", value: "#ff0000", color: "#ff0000", fontColor: "black" },
        { label: "O", value: "#ffa100", color: "#ffa100", fontColor: "black" },
        { label: "B", value: "#0000f3", color: "#0000f3", fontColor: "black" },
        { label: "G", value: "#00d800", color: "#00d800", fontColor: "black" },
        { label: "M", value: "#a83dd9", color: "#a83dd9", fontColor: "black" },
        { label: "P", value: "#f33d7b", color: "#f33d7b", fontColor: "black" },
        //{ label: "Trans", value: "#t", color: "#ffffff", fontColor: "black" },
      ],
    };
  },
};
</script>

<style></style>
