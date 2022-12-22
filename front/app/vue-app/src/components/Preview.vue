<template>
  <div class="preview d-flex justify-content-center align-items-center">
    <!--
    <img class="previewImg" :src="previewImgSrc" alt="#" style="width: 70%" />
    -->
    <div id="visualCube" class="previewImage"></div>
  </div>
</template>

<script>
import { cubeState } from "./Stores/CubeState";
import { cubePNG, Face, Axis } from "sr-visualizer";
export default {
  data() {
    return {
      srcBase: "http://cube.rider.biz/visualcube.php?size=50&fmt=svg",
      cubeState: cubeState(),
    };
  },

  mounted() {
    const element = document.getElementById("visualCube");

    cubePNG(element, {
      cubeSize: Number(this.cubeState.pzl),
      cubeColor: this.cubeState.cc,
      backgroundColor: this.cubeState.bg,
      view: this.cubeState.view,
      mask: this.cubeState.stage,
      maskAlg: this.cubeState.stageRotation,
      algorithm: this.cubeState.alg,
      case: this.cubeState.case,
      dist: this.dist(),
      height: this.cubeState.size,
      width: this.cubeState.size,
      cubeOpacity: this.cubeState.co,
      stickerOpacity: this.cubeState.fo,

      stickerColors: this.faceletColor(),
      facelets: this.faceletDefinition(),

      arrows: this.arrow(),

      colorScheme: {
        [Face.U]: this.cubeState.sch.u,
        [Face.R]: this.cubeState.sch.r,
        [Face.F]: this.cubeState.sch.f,
        [Face.D]: this.cubeState.sch.d,
        [Face.L]: this.cubeState.sch.l,
        [Face.B]: this.cubeState.sch.b,
      },

      viewportRotations: [
        [Axis.X, this.cubeState.rotation.x],
        [Axis.Y, this.cubeState.rotation.y],
        [Axis.Z, this.cubeState.rotation.z],
      ],
    });
  },

  methods: {
    faceletDefinition() {
      if (
        this.cubeState.fd.u.every(function (val) {
          return val == "u";
        }) &&
        this.cubeState.fd.r.every(function (val) {
          return val == "r";
        }) &&
        this.cubeState.fd.f.every(function (val) {
          return val == "f";
        }) &&
        this.cubeState.fd.d.every(function (val) {
          return val == "d";
        }) &&
        this.cubeState.fd.l.every(function (val) {
          return val == "l";
        }) &&
        this.cubeState.fd.b.every(function (val) {
          return val == "b";
        })
      ) {
        return null;
      } else {
        let temp = [];
        return temp.concat(
          this.cubeState.fd.u.slice(0, this.cubeState.pzl ** 2),
          this.cubeState.fd.r.slice(0, this.cubeState.pzl ** 2),
          this.cubeState.fd.f.slice(0, this.cubeState.pzl ** 2),
          this.cubeState.fd.d.slice(0, this.cubeState.pzl ** 2),
          this.cubeState.fd.l.slice(0, this.cubeState.pzl ** 2),
          this.cubeState.fd.b.slice(0, this.cubeState.pzl ** 2)
        );
      }
    },
    faceletColor() {
      if (
        this.cubeState.fc.u.every(function (val) {
          return val == "#ffff00";
        }) &&
        this.cubeState.fc.r.every(function (val) {
          return val == "#ff0000";
        }) &&
        this.cubeState.fc.f.every(function (val) {
          return val == "#0000f3";
        }) &&
        this.cubeState.fc.d.every(function (val) {
          return val == "#ffffff";
        }) &&
        this.cubeState.fc.l.every(function (val) {
          return val == "#ffa100";
        }) &&
        this.cubeState.fc.b.every(function (val) {
          return val == "#00d800";
        })
      ) {
        return null;
      } else {
        let temp = [];
        return temp.concat(
          this.cubeState.fc.u.slice(0, this.cubeState.pzl ** 2),
          this.cubeState.fc.r.slice(0, this.cubeState.pzl ** 2),
          this.cubeState.fc.f.slice(0, this.cubeState.pzl ** 2),
          this.cubeState.fc.d.slice(0, this.cubeState.pzl ** 2),
          this.cubeState.fc.l.slice(0, this.cubeState.pzl ** 2),
          this.cubeState.fc.b.slice(0, this.cubeState.pzl ** 2)
        );
      }
    },
    arrow() {
      let temp = "";
      this.cubeState.arw.forEach((element) => {
        temp += `${element.startpoint}${element.endpoint}${element.pass}-s${
          element.scale
        }-i${element.influence}-${element.color.slice(1)},`;
      });

      return temp;
    },
    dist() {
      return (
        Math.floor(
          (-Math.pow(100000000 - this.cubeState.dist ** 4, 1 / 4) + 100) * 1000
        ) /
          1000 +
        1
      );
    },
  },
};
</script>

<style>
@media screen and (max-width: 540px) {
  .preview {
    height: 300px;
  }
}
</style>
