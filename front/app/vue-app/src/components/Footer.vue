<template>
  <footer>
    <div
      class="container d-flex flex-column justify-content-between gap-2 py-2"
    >
      <div class="d-flex justify-content-center text-white">
        Visual Cube Plus ver4.0.0
      </div>
      <div class="d-flex justify-content-center aling-items-center gap-2">
        <button
          class="languageButton languageJapanese"
          @click="ln.changeLanguage('jp')"
        >
          <span class="flag-icon flag-icon-jp"></span>
        </button>
        <button
          class="languageButton languageEnglish"
          @click="ln.changeLanguage('en')"
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

.languageButton {
  background-color: rgba(255, 255, 255, 0.352);
  border: 2px solid v-bind("themeColor.color");
  border-radius: 5px;
}
</style>
