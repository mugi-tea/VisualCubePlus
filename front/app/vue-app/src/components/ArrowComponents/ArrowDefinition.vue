<template>
  <div class="arrowDefinition">
    <div class="arrowDefinitionEdit">
      <div class="arrowList">
        <ul>
          <li
            v-for="(arw, index) in cubeState.arw"
            :key="index"
            class="arrowListli mb-2"
          >
            <div class="px-2 pt-1 d-flex flex-column gap-2">
              <div class="d-flex flex-row gap-3">
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
                  type="color"
                  v-model="cubeState.arw[index].color"
                  style="width: 100%; border: black"
                />
              </div>
            </div>
            <div class="d-flex align-items-center flex-column">
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
          :data-bs-target="`#arrowStartpoint`"
          class="button-primary"
        >
          {{ ln.new }}
        </button>
      </div>
    </div>

    <arrowModal />
  </div>
</template>

<script>
import faceButton from "./FaceButton.vue";
import startpointFaceletButtons from "./startpointFaceletButtons.vue";
import passFaceletButtons from "./passFaceletButtons.vue";
import endpointFaceletButtons from "./endpointFaceletButtons.vue";
import confirmation from "./confirmation.vue";
import arrowOptions from "../ArrowComponents/ArrowOptions.vue";
import arrowStatus from "./ArrowStatus.vue";
import arrowModal from "./ArrowModals.vue";
import { cubeState } from "../Stores/CubeState";
import { ln } from "../Stores/Language";
import { themeColor } from "../Stores/ThemeColor";
export default {
  components: {
    faceButton,
    startpointFaceletButtons,
    passFaceletButtons,
    endpointFaceletButtons,
    confirmation,
    arrowOptions,
    arrowStatus,
    arrowModal,
  },
  data() {
    return {
      cubeState: cubeState(),
      ln: ln(),
      themeColor: themeColor(),
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
.arwFace {
  background-color: black;
  border: 1px solid black;
  border-radius: 2px;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;

  width: 10vw;
  height: 10vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.emptyFace {
  background-color: transparent;
}

@media screen and (max-width: 610px) {
  .arwFace {
    width: 20vw;
    height: 20vw;
  }
}

.arrowListli {
  list-style: none;
  border: v-bind(themeColor.color) 2px solid;
  border-radius: 10px;
}

.deleteArrow {
  border-radius: 10px;
  width: 98%;
  margin-bottom: 5px;
}

.editArrow {
  border-radius: 10px;
  width: 98%;
  margin-bottom: 5px;
}

.arwFacelet {
  transform: all ease 0.5s;
}

.arwFacelet:hover {
  transform: scale(1.3);
}
</style>
