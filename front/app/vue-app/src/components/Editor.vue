<template>
  <div class="edtior">
    <div class="container">
      <div class="row">
        <div class="previewSection col-lg-6 pb-3">
          <h2 class="sectionTitle">{{ ln.preview }}</h2>
          <Preview />
        </div>
        <div class="editorSections col-lg-6 pb-3">
          <h2 class="sectionTitle">{{ ln.editor }}</h2>

          <div class="sectionList" style="height: 72vh">
            <Puzzle class="editorSection" />
            <Stage class="editorSection" />
            <Color class="editorSection" />
            <Algorithm class="editorSection" />
            <Rotation class="editorSection" />
            <!--
              <Arrow class="editorSection" />
            -->
            <Arrow_ver2 class="editorSection" />
            <Opacity class="editorSection" />
            <Image class="editorSection" />
          </div>
          <ResetAll />
          <SaveAndImport />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cubeState } from "./Stores/CubeState";
import { ln } from "./Stores/Language";
import { themeColor } from "./Stores/ThemeColor";
import Preview from "./Preview.vue";
import Puzzle from "./Puzzle.vue";
import Stage from "./Stage.vue";
import Rotation from "./Rotation.vue";
import Algorithm from "./Algorithm.vue";
import Color from "./Color.vue";
import Opacity from "./Opacity.vue";
import Image from "./Image.vue";
import Arrow from "./Arrow.vue";
import Arrow_ver2 from "./Arrow_ver2.vue";
import ResetAll from "./ResetAll.vue";
import GenerateImageButton from "./GenerateImageButton.vue";
import SaveAndImport from "./SaveAndImport.vue";

export default {
  components: {
    Preview,
    Puzzle,
    Stage,
    Rotation,
    Algorithm,
    Color,
    Opacity,
    Image,
    Arrow,
    Arrow_ver2,
    ResetAll,
    GenerateImageButton,
    SaveAndImport,
  },
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
.sectionList {
  overflow-x: hidden;
}

@media screen and (max-width: 992px) {
  .sectionList {
    height: 60vh !important;
  }
}

.carouselTitle {
  padding-top: 8px;
}

li {
  list-style: none;
}

select {
  border: 3px v-bind("themeColor.color") solid !important;
  border-radius: 5px;
  font-weight: bold;
  color: black;
  background-color: white;
}

input[type="color"] {
  border: v-bind("themeColor.color") solid 3px !important;
}

input {
  border: 2px v-bind("themeColor.color") solid;
  border-radius: 5px;
  font-weight: bold;
}

input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  background: v-bind("themeColor.color");
  height: 7px;
  width: 100%;
  margin: 10px 0px 10px 0px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 18px;
  width: 18px;
  border: 2px solid v-bind("themeColor.color");
  border-radius: 50%;
  background: white;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
}

.savedCubeList {
  border: 2px solid v-bind("themeColor.color");
  border-radius: 7px;
}

.sectionTitle {
  margin: 10px;
  border-bottom: 5px double v-bind("themeColor.color");
}
.editorSection {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: v-bind("themeColor.color") 2px dashed;
}
.editSectionTitle {
  border-bottom: 2px v-bind("themeColor.color") solid;
  padding: 0 5px 3px 5px;
  margin-bottom: 15px;
}

.button-primary {
  border: none;
  background-color: v-bind("themeColor.color");
  color: white;
  border: v-bind("themeColor.color") solid 2px;
  border-radius: 7px;
  transition: 0.2s all ease;
}

.button-primary:hover {
  background-color: white;
  color: black;
  font-weight: bold;
}

.button-secondly {
  border: none;
  background-color: white;
  color: black;
  font-weight: bold;
  border: v-bind("themeColor.color") solid 2px;
  border-radius: 7px;
  transition: 0.2s all ease;
}
.button-secondly:hover {
  background-color: v-bind("themeColor.color");
  color: white;
}

.setDefault {
  border: none;
  background-color: v-bind("themeColor.color");
  color: white;
  border: v-bind("themeColor.color") solid 1px;
  border-radius: 7px;
}

.sectionSelectButton {
  width: 100%;
  border: none;
  transition: all 0.3s ease;
  background-color: white;
  border: v-bind("themeColor.color") 3px solid;
  color: black;

  border-radius: 7px 7px 0px 0px;
}

.sectionSelectButton:hover {
  transform: translateY(-4px);
}

.carouselButtons .active {
  background-color: v-bind("themeColor.color");
  transition: all ease 0.3s;
  border-radius: 7px 7px 0px 0px;
  transform: translateY(-8px);
}

.sectionSelectButton h6 {
  color: black;
}

.carouselButtons .active h6 {
  color: white;
}

.carouselButtons {
  background: linear-gradient(
    180deg,
    white 0%,
    white 10%,
    v-bind("themeColor.color") 10%,
    v-bind("themeColor.color") 100%
  );
}

.btn:active,
.btn:focus,
.btn.active {
  background-image: none;
  outline: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
}

@media screen and (max-width: 992px) {
  .previewImg {
    width: 40% !important;
  }
}

/*arwのfaceletのやつ*/
.faceletText {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 80%;
  opacity: 1;
  background-color: white;
  border-radius: 50%;
  font-weight: bold;
  border: solid 1px v-bind("themeColor.color");
}
</style>
