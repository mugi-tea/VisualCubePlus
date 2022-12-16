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
          :data-bs-target="`#chooseFaceModal`"
          class="button-primary"
        >
          {{ ln.new }}
        </button>
      </div>
    </div>
  </div>
  <ChooseFace />
  <Startpoint
    :face="face"
    v-for="face in faces"
    :key="`${face}FaceStartpoint`"
  />
</template>

<script>
import { cubeState } from "../Stores/CubeState";
import { ln } from "../Stores/Language";
import ChooseFace from "./ChooseFace.vue";
import Startpoint from "./Startpoint.vue";
export default {
  components: {
    ChooseFace,
    Startpoint,
  },
  data() {
    return {
      cubeState: cubeState(),
      ln: ln(),
      faces: ["u", "l", "f", "r", "b", "d"],
    };
  },
};
</script>

<style></style>
