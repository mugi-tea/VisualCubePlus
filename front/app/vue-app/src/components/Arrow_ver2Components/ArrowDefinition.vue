<template>
  <div class="arrowDefinition">
    <div class="arrowDefinitionEdit">
      <div class="arrowList">
        <ul>
          <li
            v-for="(arw, index) in cubeState.arw"
            :key="index"
            class="arrowListli mb-2"
            :style="`border:2px solid ${themeColor.color}`"
          >
            <div class="px-2 pt-1 d-flex flex-column gap-2">
              <div
                class="d-flex flex-row justify-content-lg-start justify-content-sm-evenly gap-3"
              >
                <div class="fw-bold">
                  {{ ln.startpoint }}: {{ arw.startpoint }}
                </div>
                <div class="fw-bold">{{ ln.pass }}: {{ arw.pass }}</div>
                <div class="fw-bold">{{ ln.endpoint }}: {{ arw.endpoint }}</div>
              </div>

              <div class="arrowScaleEdit row">
                <div class="arrowEditTitle fw-bold">{{ ln.scale }}</div>
                <div class="arrowScaleEditInput d-flex flex-row gap-2">
                  <input
                    class="text-center"
                    type="number"
                    min="0"
                    max="9"
                    v-model="cubeState.arw[index].scale"
                  />
                  <input
                    type="range"
                    min="0"
                    max="9"
                    v-model="cubeState.arw[index].scale"
                  />
                </div>
              </div>

              <div class="arrowInfluenceEdit row">
                <div class="arrowEditTitle fw-bold">{{ ln.influence }}</div>
                <div class="arrowInfluenceEdit d-flex flex-row gap-2">
                  <input
                    class="text-center"
                    type="number"
                    min="0"
                    max="9"
                    v-model="cubeState.arw[index].influence"
                  />
                  <input
                    type="range"
                    min="0"
                    max="9"
                    v-model="cubeState.arw[index].influence"
                  />
                </div>
              </div>

              <div class="arrowColorEdit">
                <div class="arrowEditTitle fw-bold">{{ ln.color }}</div>
                <select
                  class="arrowColorSelect text-center"
                  v-model="cubeState.arw[index].color"
                  :style="`background-color:${cubeState.arw[index].color}; width:100%`"
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
                  class="mt-1"
                  type="color"
                  v-model="cubeState.arw[index].color"
                  style="width: 100%; border: black"
                />
              </div>
            </div>
            <div class="d-flex align-items-center flex-column mt-2">
              <button
                class="deleteArrow button-primary"
                @click="cubeState.arw.splice(index, 1)"
              >
                {{ ln.delete }}
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div class="buttons">
        <button
          @click="
            (cubeState.arwTemp.startpoint = ''),
              (cubeState.arwTemp.pass = ''),
              (cubeState.arwTemp.endpoint = ''),
              (cubeState.arwTemp.color = '#bfbfbf'),
              (cubeState.arwTemp.scale = 9),
              (cubeState.arwTemp.influence = 9)
          "
          type="button"
          data-bs-toggle="modal"
          :data-bs-target="`#chooseFaceModal`"
          class="button-primary"
        >
          {{ ln.new }}
        </button>
      </div>
    </div>
    <ChooseFace />
    <Startpoint
      :face="face"
      v-for="face in faces"
      :key="`${face}FaceStartpoint`"
    />
    <Pass :face="face" v-for="face in faces" :key="`${face}FacePass`" />
    <Endpoint :face="face" v-for="face in faces" :key="`${face}FaceEndpoint`" />
    <Confirmation
      :face="face"
      v-for="face in faces"
      :key="`${face}FaceConfirmation`"
    />
  </div>
</template>

<script>
import { cubeState } from "../Stores/CubeState";
import { ln } from "../Stores/Language";
import { themeColor } from "../Stores/ThemeColor";
import ChooseFace from "./ChooseFace.vue";
import Startpoint from "./Startpoint.vue";
import Pass from "./Pass.vue";
import Endpoint from "./Endpoint.vue";
import Confirmation from "./Confirmation.vue";
export default {
  components: {
    ChooseFace,
    Startpoint,
    Pass,
    Endpoint,
    Confirmation,
  },
  data() {
    return {
      cubeState: cubeState(),
      ln: ln(),
      themeColor: themeColor(),
      faces: ["u", "l", "f", "r", "b", "d"],
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

<style></style>
