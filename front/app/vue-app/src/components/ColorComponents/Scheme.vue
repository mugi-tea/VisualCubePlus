<template>
  <div class="scheme">
    <div class="schemeEdit pt-3">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="faces d-flex flex-row">
          <div class="emptyFace schemeFace"></div>
          <div
            class="UFace schemeFace"
            :style="`background-color:${cubeState.sch.u}`"
          >
            <select
              class="colorSelect"
              style="height: 100%; width: 100%"
              :style="`background-color:${cubeState.sch.u}`"
              v-model="cubeState.sch.u"
            >
              <option
                :style="`background-color:${color.color}; color:${color.fontColor}`"
                v-for="color in colors"
                :value="color.value"
                :key="color.label"
              >
                {{ color.label }}
              </option>
            </select>
          </div>
          <div class="emptyFace schemeFace"></div>
          <div class="emptyFace schemeFace"></div>
        </div>
        <div class="faces d-flex flex-row">
          <div
            class="LFace schemeFace"
            :style="`background-color:${cubeState.sch.l}`"
          >
            <select
              class="colorSelect"
              style="height: 100%; width: 100%"
              :style="`background-color:${cubeState.sch.l}`"
              v-model="cubeState.sch.l"
            >
              <option
                :style="`background-color:${color.color}; color:${color.fontColor}`"
                v-for="color in colors"
                :value="color.value"
                :key="color.label"
              >
                {{ color.label }}
              </option>
            </select>
          </div>
          <div
            class="FFace schemeFace"
            :style="`background-color:${cubeState.sch.f}`"
          >
            <select
              class="colorSelect"
              style="height: 100%; width: 100%"
              :style="`background-color:${cubeState.sch.f}`"
              v-model="cubeState.sch.f"
            >
              <option
                :style="`background-color:${color.color}; color:${color.fontColor}`"
                v-for="color in colors"
                :value="color.value"
                :key="color.label"
              >
                {{ color.label }}
              </option>
            </select>
          </div>
          <div
            class="RFace schemeFace"
            :style="`background-color:${cubeState.sch.r}`"
          >
            <select
              class="colorSelect"
              style="height: 100%; width: 100%"
              :style="`background-color:${cubeState.sch.r}`"
              v-model="cubeState.sch.r"
            >
              <option
                :style="`background-color:${color.color}; color:${color.fontColor}`"
                v-for="color in colors"
                :value="color.value"
                :key="color.label"
              >
                {{ color.label }}
              </option>
            </select>
          </div>
          <div
            class="BFace schemeFace"
            :style="`background-color:${cubeState.sch.b}`"
          >
            <select
              class="colorSelect"
              style="height: 100%; width: 100%"
              :style="`background-color:${cubeState.sch.b}`"
              v-model="cubeState.sch.b"
            >
              <option
                :style="`background-color:${color.color}; color:${color.fontColor}`"
                v-for="color in colors"
                :value="color.value"
                :key="color.label"
              >
                {{ color.label }}
              </option>
            </select>
          </div>
        </div>
        <div class="faces d-flex flex-row">
          <div class="emptyFace schemeFace"></div>
          <div
            class="DFace schemeFace"
            :style="`background-color:${cubeState.sch.d}`"
          >
            <select
              class="colorSelect"
              style="height: 100%; width: 100%"
              :style="`background-color:${cubeState.sch.d}`"
              v-model="cubeState.sch.d"
            >
              <option
                :style="`background-color:${color.color}; color:${color.fontColor}`"
                v-for="color in colors"
                :value="color.value"
                :key="color.label"
              >
                {{ color.label }}
              </option>
            </select>
          </div>
          <div class="emptyFace schemeFace"></div>
          <div class="emptyFace schemeFace"></div>
        </div>
      </div>
    </div>
    <button
      class="button-primary"
      @click="
        (cubeState.sch.u = '#ffff00'),
          (cubeState.sch.r = '#ff0000'),
          (cubeState.sch.f = '#0000f3'),
          (cubeState.sch.d = '#ffffff'),
          (cubeState.sch.l = '#ffa100'),
          (cubeState.sch.b = '#00d800')
      "
    >
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
      cubeState: cubeState(),
      ln: ln(),
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
        {
          label: "Trans",
          value: "#t",
          color: "#transparent",
          fontColor: "black",
        },
      ],
    };
  },
};
</script>

<style>
.colorSelect {
  border: 1px black solid !important;
  text-align: center;
}
.schemeFace {
  width: 7vw;
  height: 7vw;
  border: solid 1px black;
  border-radius: 5px;
}

@media screen and (max-width: 992px) {
  .schemeFace {
    width: 17vw;
    height: 17vw;
  }
}

.emptyFace {
  border: none !important;
  background-color: white;
}
</style>
