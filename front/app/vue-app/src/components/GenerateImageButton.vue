<template>
  <div class="bottomButtons d-flex justify-content-between gap-2 py-3">
    <a
      class="button-primary flex-grow-1"
      :href="previewImgSrc"
      style="
        text-align: center;
        text-decoration: none;
        height: 40px;
        display: block;
        line-height: 34px;
      "
      >{{ ln.generateImage }}</a
    >
  </div>
</template>

<script>
import { cubeState } from "./Stores/CubeState";
import { ln } from "./Stores/Language";
export default {
  data() {
    return {
      ln: ln(),
      cubeState: cubeState(),
      srcBase: "http://cube.rider.biz/visualcube.php?",
    };
  },
  computed: {
    previewImgSrc() {
      return `${this.srcBase}fmt=${this.cubeState.fmt}&size=${
        this.cubeState.size
      }&pzl=${this.cubeState.pzl}&view=${this.cubeState.view}&stage=${
        this.cubeState.stage
      }-${this.cubeState.stageRotation}&r=x${this.cubeState.rotation.x}y${
        this.cubeState.rotation.y
      }z${this.cubeState.rotation.z}&alg=${this.cubeState.alg}&case=${
        this.cubeState.case
      }&sch=${this.cubeState.sch.u.slice(1)},${this.cubeState.sch.r.slice(
        1
      )},${this.cubeState.sch.f.slice(1)},${this.cubeState.sch.d.slice(
        1
      )},${this.cubeState.sch.l.slice(1)},${this.cubeState.sch.b.slice(
        1
      )}&bg=${this.cubeState.bg.slice(1)}&cc=${this.cubeState.cc.slice(
        1
      )}&fd=${this.cubeState.fd.u
        .slice(0, this.cubeState.pzl ** 2)
        .join("")}${this.cubeState.fd.r
        .slice(0, this.cubeState.pzl ** 2)
        .join("")}${this.cubeState.fd.f
        .slice(0, this.cubeState.pzl ** 2)
        .join("")}${this.cubeState.fd.d
        .slice(0, this.cubeState.pzl ** 2)
        .join("")}${this.cubeState.fd.l
        .slice(0, this.cubeState.pzl ** 2)
        .join("")}${this.cubeState.fd.b
        .slice(0, this.cubeState.pzl ** 2)
        .join("")}${this.faceletColorOption}&fo=${this.cubeState.fo}&co=${
        this.cubeState.co
      }&dist=${this.dist}&arw=${this.arw}`;
    },
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
        return "";
      } else {
        return `&fc=${this.cubeState.fc.u
          .slice(0, this.cubeState.pzl ** 2)
          .join("")}${this.cubeState.fc.r
          .slice(0, this.cubeState.pzl ** 2)
          .join("")}${this.cubeState.fc.f
          .slice(0, this.cubeState.pzl ** 2)
          .join("")}${this.cubeState.fc.d
          .slice(0, this.cubeState.pzl ** 2)
          .join("")}${this.cubeState.fc.l
          .slice(0, this.cubeState.pzl ** 2)
          .join("")}${this.cubeState.fc.b
          .slice(0, this.cubeState.pzl ** 2)
          .join("")}`;
      }
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
    arw() {
      this.temp = "";
      for (const value of this.cubeState.arw) {
        this.temp = `${this.temp}${value.startpoint}${value.endpoint}${
          value.pass
        }-s${value.scale}-i${value.influence}-${value.color.slice(1)},`;
      }
      return this.temp;
    },
  },
};
</script>

<style></style>
