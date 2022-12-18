<template>
  <footer>
    <div
      class="container d-flex flex-column justify-content-between gap-1 py-3"
    >
      <div class="d-flex justify-content-center text-white">
        Visual Cube Plus ver4.0.0
      </div>
      <div class="d-flex justify-content-center aling-items-center gap-2">
        <button
          class="languageJapanese"
          @click="ln.changeLanguage('jp')"
          :style="`background-color: white; border: 2px solid ${themeColor.color};border-radius:5px`"
        >
          <span class="flag-icon flag-icon-jp"></span>
        </button>
        <button
          class="languageEnglish"
          @click="ln.changeLanguage('en')"
          :style="`background-color: white; border: 2px solid ${themeColor.color}; border-radius:5px`"
        >
          <span class="flag-icon flag-icon-us"></span>
        </button>
        <input type="color" v-model="themeColor.color" />
      </div>
    </div>
  </footer>
</template>

<script>
import { themeColor } from "./Stores/ThemeColor";
import { ln } from "./Stores/Language";
export default {
  data() {
    return {
      themeColor: themeColor(),
      ln: ln(),
    };
  },
};
</script>

<style>
footer {
  background-color: v-bind("themeColor.color");
}
</style>
