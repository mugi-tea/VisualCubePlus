<template>
  <div class="FaceletColors">
    <h6 class="carouselTitle">{{ ln.chooseFace }}</h6>
    <div class="FaceletColorsEdit">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="faces d-flex flex-row">
          <div class="emptyFace fcFace"></div>

          <button
            class="UFace fcFace"
            data-bs-target="#UFaceletColorModal"
            data-bs-toggle="modal"
          >
            <div
              class="UFacelet fcFacelet"
              :style="`width:${Math.floor(
                100 / cubeState.pzl
              )}%; height:${Math.floor(
                100 / cubeState.pzl
              )}%; background-color:${u}; border: solid 1.5px black`"
              v-for="(u, index) in cubeState.fc.u.slice(0, cubeState.pzl ** 2)"
              :key="`u${index}`"
            ></div>
          </button>

          <div class="emptyFace fcFace"></div>
          <div class="emptyFace fcFace"></div>
        </div>
        <div class="faces d-flex flex-row">
          <button
            class="LFace fcFace"
            data-bs-target="#LFaceletColorModal"
            data-bs-toggle="modal"
          >
            <div
              class="LFacelet fcFacelet"
              :style="`width:${Math.floor(
                100 / cubeState.pzl
              )}%; height:${Math.floor(
                100 / cubeState.pzl
              )}%; background-color:${l}; border: solid 1.5px black`"
              v-for="(l, index) in cubeState.fc.l.slice(0, cubeState.pzl ** 2)"
              :key="`l${index}`"
            ></div>
          </button>
          <button
            class="FFace fcFace"
            data-bs-target="#FFaceletColorModal"
            data-bs-toggle="modal"
          >
            <div
              class="FFacelet fcFacelet"
              :style="`width:${Math.floor(
                100 / cubeState.pzl
              )}%; height:${Math.floor(
                100 / cubeState.pzl
              )}%; background-color:${f}; border: solid 1.5px black`"
              v-for="(f, index) in cubeState.fc.f.slice(0, cubeState.pzl ** 2)"
              :key="`f${index}`"
            ></div>
          </button>
          <button
            class="RFace fcFace"
            data-bs-target="#RFaceletColorModal"
            data-bs-toggle="modal"
          >
            <div
              class="RFacelet fcFacelet"
              :style="`width:${Math.floor(
                100 / cubeState.pzl
              )}%; height:${Math.floor(
                100 / cubeState.pzl
              )}%; background-color:${r}; border: solid 1.5px black`"
              v-for="(r, index) in cubeState.fc.r.slice(0, cubeState.pzl ** 2)"
              :key="`r${index}`"
            ></div>
          </button>
          <button
            class="BFace fcFace"
            data-bs-target="#BFaceletColorModal"
            data-bs-toggle="modal"
          >
            <div
              class="BFacelet fcFacelet"
              :style="`width:${Math.floor(
                100 / cubeState.pzl
              )}%; height:${Math.floor(
                100 / cubeState.pzl
              )}%; background-color:${b}; border: solid 1.5px black`"
              v-for="(b, index) in cubeState.fc.b.slice(0, cubeState.pzl ** 2)"
              :key="`b${index}`"
            ></div>
          </button>
        </div>
        <div class="faces d-flex flex-row">
          <div class="emptyFace fcFace"></div>
          <button
            class="DFace fcFace"
            data-bs-target="#DFaceletColorModal"
            data-bs-toggle="modal"
          >
            <div
              class="DFacelet fcFacelet"
              :style="`width:${Math.floor(
                100 / cubeState.pzl
              )}%; height:${Math.floor(
                100 / cubeState.pzl
              )}%; background-color:${d}; border: solid 1.5px black`"
              v-for="(d, index) in cubeState.fc.d.slice(0, cubeState.pzl ** 2)"
              :key="`d${index}`"
            ></div>
          </button>
          <div class="emptyFace fcFace"></div>
          <div class="emptyFace fcFace"></div>
        </div>

        <div
          class="modal fade"
          :id="`${face.toUpperCase()}FaceletColorModal`"
          tabindex="-1"
          :key="face"
          :aria-labelledby="`${face.toUpperCase()}FaceletColorModalLabel`"
          aria-hidden="true"
          v-for="face in this.faces"
        >
          <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5
                  class="modal-title"
                  :id="`${face.toUpperCase()}FaceletColorModal`"
                >
                  {{ face.toUpperCase() }} {{ ln.face }}
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body row">
                <div class="col-lg-8 col-sm-12 pb-3">
                  <h5>{{ ln.facelet }}</h5>
                  <div class="d-flex justify-content-center align-items-center">
                    <div
                      class="d-flex flex-wrap overflow-hidden"
                      style="width: 300px; height: 300px"
                    >
                      <button
                        class="faceletColorSelect"
                        v-for="(value, index) in cubeState.fc[face].slice(
                          0,
                          cubeState.pzl ** 2
                        )"
                        :key="`face${face}${index}`"
                        :style="`background-color:${
                          cubeState.fc[face][index]
                        }; width:${Math.floor(
                          100 / cubeState.pzl
                        )}%; height:${Math.floor(
                          100 / cubeState.pzl
                        )}%; border:solid black 2px !important; border-radius:3px !important`"
                        @click="cubeState.fc[face][index] = selectedColor"
                      ></button>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-12">
                  <div class="fcColorOptions">
                    <h5>{{ ln.colorOptions }}</h5>

                    <div class="d-flex justify-content-evenly flex-wrap">
                      <button
                        v-for="(color, index) in colors"
                        :key="`facelet${face}${index}`"
                        class="colorSelectButton m-1 d-flex justify-content-center fw-bold align-items-center"
                        :style="`background-color: ${color.color}; height:70px; width:70px; color:${color.fontColor}; border:black 2px solid; border-radius: 10px`"
                        @click="selectedColor = color.value"
                      >
                        {{ color.label }}
                      </button>
                      <input
                        type="color"
                        v-model="selectedColor"
                        style="
                          margin-top: 4px;
                          height: 70px;
                          width: 70px;
                          border: black 2px solid !important;
                          border-radius: 10px !important;
                          color: black;
                        "
                      />
                    </div>
                  </div>
                  <div class="selectedColor">
                    <h5>{{ ln.selectedColor }}</h5>

                    <div
                      :style="`background-color:${selectedColor}; height:70px; width:70px; border:2px solid black; border-radius:10px`"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="closeButton button-primary"
                  data-bs-dismiss="modal"
                >
                  {{ ln.close }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="button-primary"
        @click="
          cubeState.fc = {
            u: [...Array(100)].map(() => '#ffff00'),
            r: [...Array(100)].map(() => '#ff0000'),
            f: [...Array(100)].map(() => '#0000f3'),
            d: [...Array(100)].map(() => '#ffffff'),
            l: [...Array(100)].map(() => '#ffa100'),
            b: [...Array(100)].map(() => '#00d800'),
          }
        "
      >
        {{ ln.reset }}
      </button>
      <div class="text d-flex flex-row align-items-center gap-1 pt-1">
        <i class="bx bx-error-circle"></i>
        <div>
          {{ ln.faceletColorsNote }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ln } from "../Stores/Language";
import { cubeState } from "../Stores/CubeState";
export default {
  data() {
    return {
      ln: ln(),
      cubeState: cubeState(),
      faces: ["u", "r", "f", "b", "l", "d"],
      selectedColor: "",
      colors: [
        {
          label: "Black",
          value: "#000000",
          color: "#000000",
          fontColor: "white",
        },
        {
          label: "Dark Grey",
          value: "#404040",
          color: "#404040",
          fontColor: "white",
        },
        {
          label: "Grey",
          value: "#808080",
          color: "#808080",
          fontColor: "black",
        },
        {
          label: "Silver",
          value: "#bfbfbf",
          color: "#bfbfbf",
          fontColor: "black",
        },
        {
          label: "White",
          value: "#ffffff",
          color: "#ffffff",
          fontColor: "black",
        },
        {
          label: "Yellow",
          value: "#ffff00",
          color: "#ffff00",
          fontColor: "black",
        },
        {
          label: "Red",
          value: "#ff0000",
          color: "#ff0000",
          fontColor: "black",
        },
        {
          label: "Orange",
          value: "#ffa100",
          color: "#ffa100",
          fontColor: "black",
        },
        {
          label: "Blue",
          value: "#0000f3",
          color: "#0000f3",
          fontColor: "black",
        },
        {
          label: "Green",
          value: "#00d800",
          color: "#00d800",
          fontColor: "black",
        },
        {
          label: "Purple",
          value: "#a83dd9",
          color: "#a83dd9",
          fontColor: "black",
        },
        {
          label: "Pink",
          value: "#f33d7b",
          color: "#f33d7b",
          fontColor: "black",
        },
        {
          label: "Trans",
          value: "",
          color: "#ffffff",
          fontColor: "black",
        },
      ],
    };
  },
};
</script>

<style>
.fcFace {
  background-color: black;

  border: 1px solid black;
  border-radius: 2px;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;

  width: 7vw;
  height: 7vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.fcFacelet {
  border: 1px solid black;
  border-radius: 2px;
}

.colorSelectButton {
  transition: ease all 0.2s;
}

.colorSelectButton:hover {
  transform: scale(1.1);
}

@media screen and (max-width: 992px) {
  .fcFace {
    width: 17vw;
    height: 17vw;
  }
}
</style>
