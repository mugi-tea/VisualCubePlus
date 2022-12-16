<template>
  <div
    class="modal fade"
    id="chooseFaceModal"
    tabindex="-1"
    aria-labelledby="chooseFaceModallLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="chooseFaceModalLabel">Choose Face</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex flex-column">
          <h6>Choose face that you want to add arrow on.</h6>
          <div class="d-flex justify-content-center">
            <div class="faceSelectButtons">
              <div class="d-flex">
                <div class="arrowEmptyFace arrowFace"></div>

                <!--arrowUButton-->
                <button
                  class="arrowFace arrowUFace notEmptyFace d-flex flex-wrap justify-content-center align-items-center"
                  v-if="faceletDefinitionOption()"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#uFaceStartpointModal"
                  data-bs-dismiss="modal"
                >
                  <div
                    class="arrowUFacelet arrowFacelet"
                    :key="`arrowUFacelet${index}`"
                    :style="`width:${Math.floor(
                      100 / cubeState.pzl
                    )}%; height:${Math.floor(
                      100 / cubeState.pzl
                    )}%; background-color:${u}; border: solid 1.5px black`"
                    v-for="(u, index) in cubeState.fc.u.slice(
                      0,
                      cubeState.pzl ** 2
                    )"
                  ></div>
                </button>
                <button
                  class="arrowFace arrowUFace notEmptyFace d-flex flex-wrap justify-content-center align-items-center"
                  v-else
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#uFaceStartpointModal"
                  data-bs-dismiss="modal"
                >
                  <div
                    class="arrowUFacelet arrowFacelet"
                    :key="`arrowUFacelet${index}`"
                    :style="`width:${Math.floor(
                      100 / cubeState.pzl
                    )}%; height:${Math.floor(
                      100 / cubeState.pzl
                    )}%; background-color:${
                      cubeState.sch[u]
                    }; border:solid 1.5px black`"
                    v-for="(u, index) in cubeState.fd.u.slice(
                      0,
                      cubeState.pzl ** 2
                    )"
                  ></div>
                </button>

                <div class="arrowEmptyFace arrowFace"></div>
                <div class="arrowEmptyFace arrowFace"></div>
              </div>
              <div class="d-flex">
                <!--arrowLButton-->
                <button
                  class="arrowFace arrowLFace notEmptyFace d-flex flex-wrap justify-content-center align-items-center"
                  v-if="faceletDefinitionOption()"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#lFaceStartpointModal"
                  data-bs-dismiss="modal"
                >
                  <div
                    class="arrowLFacelet arrowFacelet"
                    :key="`arrowLFacelet${index}`"
                    :style="`width:${Math.floor(
                      100 / cubeState.pzl
                    )}%; height:${Math.floor(
                      100 / cubeState.pzl
                    )}%; background-color:${l}; border: solid 1.5px black`"
                    v-for="(l, index) in cubeState.fc.l.slice(
                      0,
                      cubeState.pzl ** 2
                    )"
                  ></div>
                </button>
                <button
                  class="arrowFace arrowLFace notEmptyFace d-flex flex-wrap justify-content-center align-items-center"
                  v-else
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#lFaceStartpointModal"
                  data-bs-dismiss="modal"
                >
                  <div
                    class="arrowLFacelet arrowFacelet"
                    :key="`arrowLFacelet${index}`"
                    :style="`width:${Math.floor(
                      100 / cubeState.pzl
                    )}%; height:${Math.floor(
                      100 / cubeState.pzl
                    )}%; background-color:${
                      cubeState.sch[l]
                    }; border:solid 1.5px black`"
                    v-for="(l, index) in cubeState.fd.l.slice(
                      0,
                      cubeState.pzl ** 2
                    )"
                  ></div>
                </button>

                <!--arrowFButton-->
                <button
                  class="arrowFace arrowLFace notEmptyFace d-flex flex-wrap justify-content-center align-items-center"
                  v-if="faceletDefinitionOption()"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#fFaceStartpointModal"
                  data-bs-dismiss="modal"
                >
                  <div
                    class="arrowFFacelet arrowFacelet"
                    :key="`arrowFFacelet${index}`"
                    :style="`width:${Math.floor(
                      100 / cubeState.pzl
                    )}%; height:${Math.floor(
                      100 / cubeState.pzl
                    )}%; background-color:${f}; border: solid 1.5px black`"
                    v-for="(f, index) in cubeState.fc.f.slice(
                      0,
                      cubeState.pzl ** 2
                    )"
                  ></div>
                </button>
                <button
                  class="arrowFace arrowFFace notEmptyFace d-flex flex-wrap justify-content-center align-items-center"
                  v-else
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#fFaceStartpointModal"
                  data-bs-dismiss="modal"
                >
                  <div
                    class="arrowFFacelet arrowFacelet"
                    :key="`arrowFFacelet${index}`"
                    :style="`width:${Math.floor(
                      100 / cubeState.pzl
                    )}%; height:${Math.floor(
                      100 / cubeState.pzl
                    )}%; background-color:${
                      cubeState.sch[f]
                    }; border:solid 1.5px black`"
                    v-for="(f, index) in cubeState.fd.f.slice(
                      0,
                      cubeState.pzl ** 2
                    )"
                  ></div>
                </button>
                <!--arrowRButton-->
                <button
                  class="arrowFace arrowRFace notEmptyFace d-flex flex-wrap justify-content-center align-items-center"
                  v-if="faceletDefinitionOption()"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#rFaceStartpointModal"
                  data-bs-dismiss="modal"
                >
                  <div
                    class="arrowRFacelet arrowFacelet"
                    :key="`arrowRFacelet${index}`"
                    :style="`width:${Math.floor(
                      100 / cubeState.pzl
                    )}%; height:${Math.floor(
                      100 / cubeState.pzl
                    )}%; background-color:${r}; border: solid 1.5px black`"
                    v-for="(r, index) in cubeState.fc.r.slice(
                      0,
                      cubeState.pzl ** 2
                    )"
                  ></div>
                </button>
                <button
                  class="arrowFace arrowRFace notEmptyFace d-flex flex-wrap justify-content-center align-items-center"
                  v-else
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#rFaceStartpointModal"
                  data-bs-dismiss="modal"
                >
                  <div
                    class="arrowRFacelet arrowFacelet"
                    :key="`arrowRFacelet${index}`"
                    :style="`width:${Math.floor(
                      100 / cubeState.pzl
                    )}%; height:${Math.floor(
                      100 / cubeState.pzl
                    )}%; background-color:${
                      cubeState.sch[r]
                    }; border:solid 1.5px black`"
                    v-for="(r, index) in cubeState.fd.r.slice(
                      0,
                      cubeState.pzl ** 2
                    )"
                  ></div>
                </button>

                <!--arrowBButton-->
                <button
                  class="arrowFace arrowBFace notEmptyFace d-flex flex-wrap justify-content-center align-items-center"
                  v-if="faceletDefinitionOption()"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#bFaceStartpointModal"
                  data-bs-dismiss="modal"
                >
                  <div
                    class="arrowBFacelet arrowFacelet"
                    :key="`arrowBFacelet${index}`"
                    :style="`width:${Math.floor(
                      100 / cubeState.pzl
                    )}%; height:${Math.floor(
                      100 / cubeState.pzl
                    )}%; background-color:${b}; border: solid 1.5px black`"
                    v-for="(b, index) in cubeState.fc.b.slice(
                      0,
                      cubeState.pzl ** 2
                    )"
                  ></div>
                </button>
                <button
                  class="arrowFace arrowBFace notEmptyFace d-flex flex-wrap justify-content-center align-items-center"
                  v-else
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#bFaceStartpointModal"
                  data-bs-dismiss="modal"
                >
                  <div
                    class="arrowBFacelet arrowFacelet"
                    :key="`arrowBFacelet${index}`"
                    :style="`width:${Math.floor(
                      100 / cubeState.pzl
                    )}%; height:${Math.floor(
                      100 / cubeState.pzl
                    )}%; background-color:${
                      cubeState.sch[b]
                    }; border:solid 1.5px black`"
                    v-for="(b, index) in cubeState.fd.b.slice(
                      0,
                      cubeState.pzl ** 2
                    )"
                  ></div>
                </button>
              </div>
              <div class="d-flex">
                <div class="arrowEmptyFace arrowFace"></div>
                <!--arrowDButton-->
                <button
                  class="arrowFace arrowDFace notEmptyFace d-flex flex-wrap justify-content-center align-items-center"
                  v-if="faceletDefinitionOption()"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#dFaceStartpointModal"
                  data-bs-dismiss="modal"
                >
                  <div
                    class="arrowDFacelet arrowFacelet"
                    :key="`arrowDFacelet${index}`"
                    :style="`width:${Math.floor(
                      100 / cubeState.pzl
                    )}%; height:${Math.floor(
                      100 / cubeState.pzl
                    )}%; background-color:${d}; border: solid 1.5px black`"
                    v-for="(d, index) in cubeState.fc.d.slice(
                      0,
                      cubeState.pzl ** 2
                    )"
                  ></div>
                </button>
                <button
                  class="arrowFace arrowDFace notEmptyFace d-flex flex-wrap justify-content-center align-items-center"
                  v-else
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#dFaceStartpointModal"
                  data-bs-dismiss="modal"
                >
                  <div
                    class="arrowDFacelet arrowFacelet"
                    :key="`arrowDFacelet${index}`"
                    :style="`width:${Math.floor(
                      100 / cubeState.pzl
                    )}%; height:${Math.floor(
                      100 / cubeState.pzl
                    )}%; background-color:${
                      cubeState.sch[d]
                    }; border:solid 1.5px black`"
                    v-for="(d, index) in cubeState.fd.d.slice(
                      0,
                      cubeState.pzl ** 2
                    )"
                  ></div>
                </button>
                <div class="arrowEmptyFace arrowFace"></div>
                <div class="arrowEmptyFace arrowFace"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { cubeState } from "../Stores/CubeState";
import { ln } from "../Stores/Language";
import Startpoint from "./Startpoint.vue";
export default {
  components: {
    Startpoint,
  },
  data() {
    return {
      cubeState: cubeState(),
      ln: ln(),
    };
  },
  methods: {
    faceletDefinitionOption() {
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
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
.arrowFace {
  background-color: black;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;

  height: 10vw;
  width: 10vw;
}

.notEmptyFace {
  transition: ease all 0.2s;
}

.notEmptyFace:hover {
  transform: scale(1.1);
}

@media screen and (max-width: 617px) {
  .arrowFace {
    height: 20vw;
    width: 20vw;
  }
}

.arrowEmptyFace {
  background-color: white !important;
  transition: none !important;
}
</style>
