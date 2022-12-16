<template>
  <div class="view">
    <h6>{{ ln.view }}</h6>
    <div class="viewEdit d-flex flex-column">
      <select v-model="cubeState.view" class="text-center">
        <option
          v-for="option in viewOptions"
          :value="option.value"
          :key="option"
        >
          {{ option.label }}
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
      viewOptions: [
        { label: "Default", value: "" },
        { label: "Plan", value: "plan" },
      ],
    };
  },
};
</script>

<style></style>
