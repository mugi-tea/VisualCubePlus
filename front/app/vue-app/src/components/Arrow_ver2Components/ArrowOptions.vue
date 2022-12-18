<template>
  <div class="arwOption">
    <h5>{{ ln.arrowOptions }}</h5>
    <div class="arrowScale d-flex flex-column">
      <h6>{{ ln.scale }}</h6>
      <input type="number" min="0" max="9" v-model="cubeState.arwTemp.scale" />
      <input type="range" min="0" max="9" v-model="cubeState.arwTemp.scale" />
    </div>
    <div class="arrowinfluence d-flex flex-column">
      <h6>{{ ln.influence }}</h6>
      <input
        type="number"
        min="0"
        max="9"
        v-model="cubeState.arwTemp.influence"
      />
      <input
        type="range"
        min="0"
        max="9"
        v-model="cubeState.arwTemp.influence"
      />
    </div>
    <div class="color d-flex flex-column">
      <h6>{{ ln.color }}</h6>
      <select
        class="arrowColorSelect"
        v-model="cubeState.arwTemp.color"
        :style="`background-color:${cubeState.arwTemp.color}`"
      >
        <option
          v-for="color in colors"
          :value="color.value"
          :key="color.label"
          :style="`background-color:${color.value}; color:${color.fontColor}`"
        >
          {{ color.label }}
        </option>
      </select>
      <input
        type="color"
        v-model="cubeState.arwTemp.color"
        style="width: 100%; border: black"
      />
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
      colors: [
        {
          label: "Black",
          value: "#000000",
          color: "#000000",
          fontColor: "white",
        },
        {
          label: "Dark Grey",
          value: "#404040",
          color: "#404040",
          fontColor: "white",
        },
        {
          label: "Grey",
          value: "#808080",
          color: "#808080",
          fontColor: "black",
        },
        {
          label: "Silver",
          value: "#bfbfbf",
          color: "#bfbfbf",
          fontColor: "black",
        },
        {
          label: "White",
          value: "#ffffff",
          color: "#ffffff",
          fontColor: "black",
        },
        {
          label: "Yellow",
          value: "#ffff00",
          color: "#ffff00",
          fontColor: "black",
        },
        {
          label: "Red",
          value: "#ff0000",
          color: "#ff0000",
          fontColor: "black",
        },
        {
          label: "Orange",
          value: "#ffa100",
          color: "#ffa100",
          fontColor: "black",
        },
        {
          label: "Blue",
          value: "#0000f3",
          color: "#0000f3",
          fontColor: "black",
        },
        {
          label: "Green",
          value: "#00d800",
          color: "#00d800",
          fontColor: "black",
        },
        {
          label: "Purple",
          value: "#a83dd9",
          color: "#a83dd9",
          fontColor: "black",
        },
        {
          label: "Pink",
          value: "#f33d7b",
          color: "#f33d7b",
          fontColor: "black",
        },
      ],
    };
  },
};
</script>

<style>
.arrowColorSelect {
  border: black 1px solid;
}
</style>
