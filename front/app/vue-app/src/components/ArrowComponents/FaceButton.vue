<template>
  <button
    :class="`${face.toUpperCase()}Face arwFace`"
    v-if="faceletColorOption()"
  >
    <div
      :class="`${face.toUpperCase()}Facelet arwFacelet`"
      :key="`${facelet}`"
      :style="`width:${Math.floor(100 / cubeState.pzl)}%; height:${Math.floor(
        100 / cubeState.pzl
      )}%; background-color:${
        cubeState.sch[facelet]
      }; border:solid 1.5px black`"
      v-for="(facelet, index) in cubeState.fd[face].slice(
        0,
        cubeState.pzl ** 2
      )"
      type="button"
      data-bs-dismiss="modal"
      :data-bs-target="`${target}`"
      data-bs-toggle="modal"
      @click="cubeState.arwTemp[output] = `${face.toUpperCase()}${index}`"
    ></div>
  </button>
  <button :class="`${face.toUpperCase()}Face arwFace`" v-else>
    <div
      :class="`${face.toUpperCase()}Facelet arwFacelet`"
      :key="`${facelet}`"
      :style="`width:${Math.floor(100 / cubeState.pzl)}%; height:${Math.floor(
        100 / cubeState.pzl
      )}%; background-color:${
        colorOptions[facelet].value
      }; border: solid 1.5px black`"
      v-for="(facelet, index) in cubeState.fc[face].slice(
        0,
        cubeState.pzl ** 2
      )"
      type="button"
      data-bs-dismiss="modal"
      :data-bs-target="`${target}`"
      data-bs-toggle="modal"
      @click="cubeState.arwTemp[output] = `${face.toUpperCase()}${index}`"
    ></div>
  </button>
</template>

<script>
import { cubeState } from "../Stores/CubeState";
export default {
  data() {
    return {
      cubeState: cubeState(),
    };
  },
  props: {
    face: {
      Type: String,
    },
    target: {
      Type: String,
    },
    output: {
      Type: String,
    },
  },
  methods: {
    faceletColorOption() {
      if (
        this.cubeState.fc.u.every(function (val) {
          return val == "y";
        }) &&
        this.cubeState.fc.r.every(function (val) {
          return val == "r";
        }) &&
        this.cubeState.fc.f.every(function (val) {
          return val == "b";
        }) &&
        this.cubeState.fc.d.every(function (val) {
          return val == "w";
        }) &&
        this.cubeState.fc.l.every(function (val) {
          return val == "o";
        }) &&
        this.cubeState.fc.b.every(function (val) {
          return val == "g";
        })
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style></style>
