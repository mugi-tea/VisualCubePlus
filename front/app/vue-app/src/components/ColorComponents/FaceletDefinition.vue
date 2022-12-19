<template>
  <div class="faceletDefinition">
    <h6 class="carouselTitle">{{ ln.chooseFace }}</h6>
    <div class="faceletDefinitionEdit">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="faces d-flex flex-row">
          <div class="emptyFace fdFace"></div>
          <button
            class="UFace fdFace"
            data-bs-toggle="modal"
            data-bs-target="#UFaceletModal"
          >
            <div
              class="UFacelet fdFacelet"
              :key="`ufacelet${index}`"
              :style="`width:${Math.floor(
                100 / cubeState.pzl
              )}%; height:${Math.floor(
                100 / cubeState.pzl
              )}%; background-color:${
                cubeState.sch[u]
              }; border:solid 1.5px black`"
              v-for="(u, index) in cubeState.fd.u.slice(0, cubeState.pzl ** 2)"
            ></div>
          </button>
          <div class="emptyFace fdFace"></div>
          <div class="emptyFace fdFace"></div>
        </div>

        <div class="faces d-flex flex-row">
          <button
            class="LFace fdFace"
            data-bs-toggle="modal"
            data-bs-target="#LFaceletModal"
          >
            <div
              class="LFacelet fdFacelet"
              :key="`lfacelet${index}`"
              :style="`width:${Math.floor(
                100 / cubeState.pzl
              )}%; height:${Math.floor(
                100 / cubeState.pzl
              )}%; background-color:${
                cubeState.sch[l]
              }; border:solid 1.5px black`"
              v-for="(l, index) in cubeState.fd.l.slice(0, cubeState.pzl ** 2)"
            ></div>
          </button>
          <button
            class="FFace fdFace"
            data-bs-toggle="modal"
            data-bs-target="#FFaceletModal"
          >
            <div
              class="FFacelet fdFacelet"
              :key="`ffacelet${index}`"
              :style="`width:${Math.floor(
                100 / cubeState.pzl
              )}%; height:${Math.floor(
                100 / cubeState.pzl
              )}%; background-color:${
                cubeState.sch[f]
              }; border:solid 1.5px black`"
              v-for="(f, index) in cubeState.fd.f.slice(0, cubeState.pzl ** 2)"
            ></div>
          </button>
          <button
            class="RFace fdFace"
            data-bs-toggle="modal"
            data-bs-target="#RFaceletModal"
          >
            <div
              class="RFacelet fdFacelet"
              :key="`rfacelet${index}`"
              :style="`width:${Math.floor(
                100 / cubeState.pzl
              )}%; height:${Math.floor(
                100 / cubeState.pzl
              )}%; background-color:${
                cubeState.sch[r]
              }; border:solid 1.5px black`"
              v-for="(r, index) in cubeState.fd.r.slice(0, cubeState.pzl ** 2)"
            ></div>
          </button>
          <button
            class="BFace fdFace"
            data-bs-toggle="modal"
            data-bs-target="#BFaceletModal"
          >
            <div
              class="BFacelet fdFacelet"
              :key="`bfacelet${index}`"
              :style="`width:${Math.floor(
                100 / cubeState.pzl
              )}%; height:${Math.floor(
                100 / cubeState.pzl
              )}%; background-color:${
                cubeState.sch[b]
              }; border:solid 1.5px black`"
              v-for="(b, index) in cubeState.fd.b.slice(0, cubeState.pzl ** 2)"
            ></div>
          </button>
        </div>

        <div class="faces d-flex flex-row">
          <div class="emptyFace fdFace"></div>
          <button
            class="Dface fdFace"
            data-bs-toggle="modal"
            data-bs-target="#DFaceletModal"
          >
            <div
              class="DFacelet fdFacelet"
              :key="`dfacelet${index}`"
              :style="`width:${Math.floor(
                100 / cubeState.pzl
              )}%; height:${Math.floor(
                100 / cubeState.pzl
              )}%; background-color:${
                cubeState.sch[d]
              }; border:solid 1.5px black`"
              v-for="(d, index) in cubeState.fd.d.slice(0, cubeState.pzl ** 2)"
            ></div>
          </button>
          <div class="emptyFace fdFace"></div>
          <div class="emptyFace fdFace"></div>
        </div>

        <!--modal-->
        <div
          class="modal fade"
          :id="`${face.toUpperCase()}FaceletModal`"
          tabindex="-1"
          :aria-labelledby="`${face.toUpperCase()}FaceletModalLabel`"
          aria-hidden="true"
          v-for="face in faces"
          :key="face"
        >
          <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5
                  class="modal-title"
                  :id="`${face.toUpperCase()}FaceletModal`"
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
                      style="width: 400px; height: 400px"
                    >
                      <button
                        class="faceletColorSelect"
                        v-for="(value, index) in cubeState.fd[face].slice(
                          0,
                          cubeState.pzl ** 2
                        )"
                        :key="`face${face}${index}`"
                        :style="`background-color:${
                          cubeState.sch[value]
                        }; width:${Math.floor(
                          100 / cubeState.pzl
                        )}%; height:${Math.floor(
                          100 / cubeState.pzl
                        )}%; border:solid black 2px !important; border-radius:3px !important;`"
                        @click="cubeState.fd[face][index] = selectedFace"
                      ></button>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-12">
                  <div class="fdColorOptions">
                    <h5>{{ ln.colorOptions }}</h5>

                    <div
                      class="selectColorButtons d-flex justify-content-evenly flex-wrap"
                    >
                      <button
                        v-for="face in faces"
                        :key="`facelet${face}`"
                        class="colorSelectButton m-1 d-flex justify-content-center fw-bold align-items-center"
                        :style="`background-color:${cubeState.sch[face]}; height:70px; width:70px; border:2px solid black; border-radius:10px; color:black`"
                        @click="selectedFace = face"
                      >
                        {{ face.toUpperCase() }}
                      </button>
                      <button
                        class="colorSelectButton m-1 d-flex justify-content-center fw-bold align-items-center"
                        :style="`background-color:${cubeState.sch['n']}; height:70px; width:70px; border: 2px solid black; border-radius:10px; color:white`"
                        @click="selectedFace = 'n'"
                      >
                        N
                      </button>
                      <button
                        class="colorSelectButton m-1 d-flex justify-content-center fw-bold align-items-center"
                        :style="`background-color:${cubeState.sch['o']}; height:70px; width:70px; border:2px solid black; border-radius:10px; color:black`"
                        @click="selectedFace = 'o'"
                      >
                        O
                      </button>
                      <button
                        class="colorSelectButton m-1 d-flex justify-content-center fw-bold align-items-center"
                        :style="`background-color:white; height:70px; width:70px; border:2px solid black; border-radius:10px; color:black`"
                        @click="selectedFace = 't'"
                      >
                        Trans
                      </button>
                    </div>
                  </div>
                  <div class="selectedColor">
                    <h5>{{ ln.selectedColor }}</h5>
                    <div
                      :style="`background-color:${cubeState.sch[selectedFace]}; height:70px; width:70px;border:2.5px solid black; border:black 2px solid; border-radius: 10px`"
                    ></div>
                  </div>
                  <div
                    class="faceletDecinitionNote d-flex align-items-center gap-2 pt-2"
                  >
                    <i class="bx bx-error-circle"></i>
                    <div>
                      {{ ln.faceletDefinitionNote }}
                    </div>
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
          cubeState.fd = {
            u: [...Array(100)].map(() => 'u'),
            r: [...Array(100)].map(() => 'r'),
            f: [...Array(100)].map(() => 'f'),
            d: [...Array(100)].map(() => 'd'),
            l: [...Array(100)].map(() => 'l'),
            b: [...Array(100)].map(() => 'b'),
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
      selectedFace: "",
    };
  },
};
</script>

<style>
.fdFace {
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

.fdFacelet {
  border: 1px solid black;
  border-radius: 2px;
}

.modal-body {
  display: flex;
  justify-content: center;
}
.faceletColorSelects {
  width: 20vw;
  height: 20vw;
}

@media screen and (max-width: 992px) {
  .fdFace {
    width: 17vw;
    height: 17vw;
  }
}

@media screen and (max-width: 673px) {
  .faceletColorSelects {
    width: 65vw;
    height: 65vw;
  }
}
</style>
