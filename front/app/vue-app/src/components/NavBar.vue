<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a
        class="navbar-brand fw-bold text-white d-flex align-items-center justify-content-center"
        href="#"
      >
        <i class="bx bx-customize pe-2 fs-1"></i>
        <div class="title fs-3">Visual Cube Plus</div>
      </a>
    </div>
  </nav>
</template>

<script>
import { ln } from "./Stores/Language";
import { cubeState } from "./Stores/CubeState";
import { themeColor } from "./Stores/ThemeColor";
export default {
  data() {
    return {
      cubeState: cubeState(),
      ln: ln(),
      themeColor: themeColor(),
    };
  },
};
</script>

<style>
.navbar {
  background-color: v-bind("themeColor.color");
}
</style>
