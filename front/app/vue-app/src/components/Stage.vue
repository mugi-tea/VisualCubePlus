<template>
  <div class="stage">
    <div class="d-flex">
      <h4
        class="editSectionTitle stageSectionTitle d-flex align-items-center gap-1"
      >
        <i class="bx bxs-cube pt-1"></i>{{ ln.stage }}
      </h4>
    </div>
    <div class="stageEdit">
      <div class="stageSelect">
        <div class="row">
          <div class="stage col-6 d-flex flex-column">
            <h6>{{ ln.stage }}</h6>
            <select v-model="cubeState.stage" class="text-center">
              <option
                v-for="option in stageOptions"
                :value="option.value"
                :key="option.label"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
          <div class="rotation col-6 d-flex flex-column">
            <h6>{{ ln.rotation }}</h6>
            <select v-model="cubeState.stageRotation" class="text-center">
              <option
                v-for="option in stageRotationOptions"
                :value="option.value"
                :key="option.label"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <button
        class="button-primary mt-2"
        @click="(cubeState.stage = ''), (cubeState.stageRotation = '')"
      >
        {{ ln.reset }}
      </button>
    </div>
    <div></div>
  </div>
</template>

<script>
import { cubeState } from "./Stores/CubeState";
import { ln } from "./Stores/Language";
export default {
  data() {
    return {
      cubeState: cubeState(),
      ln: ln(),
      stageOptions: [
        { label: "Default", value: "" },
        { label: "FL", value: "fl" },
        { label: "F2L", value: "f2l" },
        { label: "LL", value: "ll" },
        { label: "CLL", value: "cll" },
        { label: "ELL", value: "ell" },
        { label: "OLL", value: "oll" },
        { label: "OCLL", value: "ocll" },
        { label: "OELL", value: "oell" },
        { label: "OCELL", value: "ocell" },
        { label: "WV", value: "wv" },
        { label: "VH", value: "vh" },
        { label: "ELS", value: "els" },
        { label: "CLS", value: "cls" },
        { label: "CMLL", value: "cmll" },
        { label: "CROSS", value: "cross" },
        { label: "F2L_1", value: "f2l_1" },
        { label: "F2L_2", value: "f2l_2" },
        { label: "F2L_3", value: "f2l_3" },
        { label: "F2L_SM", value: "f2l_sm" },
        { label: "F2B", value: "f2b" },
        { label: "Line", value: "line" },
        { label: "2x2x2", value: "2x2x2" },
        { label: "2x2x3", value: "2x2x3" },
      ],
      stageRotationOptions: [
        { label: "Default", value: "" },
        { label: "x", value: "x" },
        { label: "x'", value: "x'" },
        { label: "x2", value: "x2" },
        { label: "y", value: "y" },
        { label: "y'", value: "y'" },
        { label: "y2", value: "y2" },
        { label: "z", value: "z" },
        { label: "z'", value: "z'" },
        { label: "z2", value: "z2" },
      ],
    };
  },
};
</script>

<style></style>
