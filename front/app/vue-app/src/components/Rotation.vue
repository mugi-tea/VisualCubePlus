<template>
  <div class="rotation">
    <div class="d-flex">
      <h4
        class="editSectionTitle rotationSectionTitle d-flex align-items-center gap-1"
      >
        <i class="bx bx-rotate-right pt-1"></i>{{ ln.rotation }}
      </h4>
    </div>

    <div class="rotationEdit">
      <div class="xRotation">
        X
        <div class="buttonsAndInput d-flex">
          <button
            class="button-secondly"
            @click="
              (cubeState.rotation.x = cubeState.rotation.x - 90),
                cubeState.rotationRange()
            "
            style="border-radius: 7px 0px 0px 7px"
          >
            -90
          </button>
          <button
            class="button-secondly"
            @click="
              (cubeState.rotation.x = cubeState.rotation.x - 45),
                cubeState.rotationRange()
            "
            style="border-radius: 0px"
          >
            -45
          </button>
          <input
            class="flex-grow-1 text-center"
            type="number"
            min="-180"
            max="180"
            v-model="cubeState.rotation.x"
            style="border-radius: 0px !important"
          />
          <button
            class="button-secondly"
            @click="
              (cubeState.rotation.x = cubeState.rotation.x + 45),
                cubeState.rotationRange()
            "
            style="border-radius: 0px"
          >
            +45
          </button>
          <button
            class="button-secondly"
            @click="
              (cubeState.rotation.x = cubeState.rotation.x + 90),
                cubeState.rotationRange()
            "
            style="border-radius: 0px 7px 7px 0px"
          >
            +90
          </button>
        </div>
        <div class="rangeInput">
          <input
            type="range"
            min="-180"
            max="180"
            v-model="cubeState.rotation.x"
          />
        </div>
      </div>

      <div class="yRotation">
        Y
        <div class="buttonsAndInput d-flex">
          <button
            class="button-secondly"
            @click="
              (cubeState.rotation.y = cubeState.rotation.y - 90),
                cubeState.rotationRange()
            "
            style="border-radius: 7px 0px 0px 7px"
          >
            -90
          </button>
          <button
            class="button-secondly"
            @click="
              (cubeState.rotation.y = cubeState.rotation.y - 45),
                cubeState.rotationRange()
            "
            style="border-radius: 0px"
          >
            -45
          </button>
          <input
            class="flex-grow-1 text-center"
            type="number"
            min="-180"
            max="180"
            v-model="cubeState.rotation.y"
            style="border-radius: 0px"
          />
          <button
            class="button-secondly"
            @click="
              (cubeState.rotation.y = cubeState.rotation.y + 45),
                cubeState.rotationRange()
            "
            style="border-radius: 0px"
          >
            +45
          </button>
          <button
            class="button-secondly"
            @click="
              (cubeState.rotation.y = cubeState.rotation.y + 90),
                cubeState.rotationRange()
            "
            style="border-radius: 0px 7px 7px 0px"
          >
            +90
          </button>
        </div>
        <div class="rangeInput">
          <input
            type="range"
            min="-180"
            max="180"
            v-model="cubeState.rotation.y"
          />
        </div>
      </div>
      <div class="zRotation">
        Z
        <div class="buttonsAndInput d-flex">
          <button
            class="button-secondly"
            @click="
              (cubeState.rotation.z = cubeState.rotation.z - 90),
                cubeState.rotationRange()
            "
            style="border-radius: 7px 0px 0px 7px"
          >
            -90
          </button>
          <button
            class="button-secondly"
            @click="
              (cubeState.rotation.z = cubeState.rotation.z - 45),
                cubeState.rotationRange()
            "
            style="border-radius: 0px"
          >
            -45
          </button>
          <input
            class="flex-grow-1 text-center"
            type="number"
            min="-180"
            max="180"
            v-model="cubeState.rotation.z"
            style="border-radius: 0px"
          />
          <button
            class="button-secondly"
            @click="
              (cubeState.rotation.z = cubeState.rotation.z + 45),
                cubeState.rotationRange()
            "
            style="border-radius: 0px"
          >
            +45
          </button>
          <button
            class="button-secondly"
            @click="
              (cubeState.rotation.z = cubeState.rotation.z + 90),
                cubeState.rotationRange()
            "
            style="border-radius: 0px 7px 7px 0px"
          >
            +90
          </button>
        </div>
        <div class="rangeInput">
          <input
            type="range"
            min="-180"
            max="180"
            v-model="cubeState.rotation.z"
          />
        </div>
      </div>
    </div>
    <button
      class="button-primary"
      @click="cubeState.rotation = { x: -43, y: 36, z: 28 }"
    >
      {{ ln.reset }}
    </button>
  </div>
</template>

<script>
import { ln } from "./Stores/Language";
import { cubeState } from "./Stores/CubeState";
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
