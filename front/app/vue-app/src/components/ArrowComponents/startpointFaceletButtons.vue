<template>
  <button
    :class="`${face.toUpperCase()}Face arwFace`"
    v-if="faceletColorOption()"
  >
    <div
      :class="`${face.toUpperCase()}Facelet arwFacelet d-flex justify-content-center align-items-center`"
      :key="`${facelet}${index}`"
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
      data-bs-target="#arrowPass"
      data-bs-toggle="modal"
      @click="cubeState.arwTemp.startpoint = `${face.toUpperCase()}${index}`"
    >
      <div
        class="faceletText"
        v-if="
          `${face.toUpperCase()}${index}` == this.cubeState.arwTemp.startpoint
        "
      >
        {{ ln.s }}
      </div>
      <div
        class="faceletText"
        v-if="`${face.toUpperCase()}${index}` == this.cubeState.arwTemp.pass"
      >
        {{ ln.p }}
      </div>
      <div
        class="faceletText"
        v-if="
          `${face.toUpperCase()}${index}` == this.cubeState.arwTemp.endpoint
        "
      >
        {{ ln.e }}
      </div>
    </div>
  </button>
  <button :class="`${face.toUpperCase()}Face arwFace`" v-else>
    <div
      :class="`${face.toUpperCase()}Facelet arwFacelet d-flex justify-content-center align-items-center`"
      :key="`${facelet}${index}`"
      :style="`width:${Math.floor(100 / cubeState.pzl)}%; height:${Math.floor(
        100 / cubeState.pzl
      )}%; background-color:${facelet}; border: solid 1.5px black`"
      v-for="(facelet, index) in cubeState.fc[face].slice(
        0,
        cubeState.pzl ** 2
      )"
      type="button"
      data-bs-dismiss="modal"
      data-bs-target="#arrowPass"
      data-bs-toggle="modal"
      @click="cubeState.arwTemp.startpoint = `${face.toUpperCase()}${index}`"
    >
      <div
        class="faceletText"
        v-if="
          `${face.toUpperCase()}${index}` == this.cubeState.arwTemp.startpoint
        "
      >
        {{ ln.s }}
      </div>
      <div
        class="faceletText"
        v-if="`${face.toUpperCase()}${index}` == this.cubeState.arwTemp.pass"
      >
        {{ ln.p }}
      </div>
      <div
        class="faceletText"
        v-if="
          `${face.toUpperCase()}${index}` == this.cubeState.arwTemp.endpoint
        "
      >
        {{ ln.e }}
      </div>
    </div>
  </button>
</template>

<script>
import { ln } from "../Stores/Language";
import { cubeState } from "../Stores/CubeState";
export default {
  data() {
    return {
      ln: ln(),
      cubeState: cubeState(),
      colorOptions: {
        n: {
          label: "Balck",
          value: "#000000",
        },
        d: {
          label: "Dark Gray",
          value: "#404040",
        },
        l: {
          label: "Light Gray",
          value: "#808080",
        },
        s: {
          label: "Silver",
          value: "#bfbfbf",
        },
        w: {
          label: "White",
          value: "#ffffff",
        },
        y: {
          label: "Yellow",
          value: "#ffff00",
        },
        r: {
          label: "Red",
          value: "#ff0000",
        },
        o: {
          label: "Orange",
          value: "#ffa100",
        },
        b: {
          label: "Blue",
          value: "#0000f3",
        },
        g: {
          label: "Green",
          value: "#00d800",
        },
        m: {
          label: "Purple",
          value: "#a83dd9",
        },
        p: {
          label: "Pink",
          value: "#f33d7b",
        },
        t: {
          label: "Transparent",
          value: "#ffffff",
        },
      },
    };
  },
  props: {
    face: {
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
