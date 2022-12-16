<template>
  <div
    class="modal fade"
    :id="`${face}FaceStartpointModal`"
    tabindex="-1"
    :aria-labelledby="`${face}FaceStartpointModalLabel`"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="`${face}FaceStartpointModal`">
            {{ face.toUpperCase() }} Face
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container row">
            <div class="arrowFacePreview col-lg-8 col-sm-12">
              <h6>Select Startpoint</h6>
              <div class="arrowFacelet d-flex justify-content-center">
                <div
                  class="arrowFaceletButtons d-flex flex-wrap justify-content-center align-items-center"
                  v-if="faceletDefinitionOption()"
                  style="height: 30vw; width: 30vw; background-color: black"
                >
                  <button
                    :class="`arrow${face.toUpperCase()}FaceletButton arrowFaceletButton`"
                    :key="`arrowUFacelet${index}`"
                    :style="`width:${Math.floor(
                      100 / cubeState.pzl
                    )}%; height:${Math.floor(
                      100 / cubeState.pzl
                    )}%; background-color:${facelet}; border: solid 1.5px black d-flex justify-content-center align-items-center`"
                    v-for="(facelet, index) in cubeState.fc[face].slice(
                      0,
                      cubeState.pzl ** 2
                    )"
                    @click="
                      cubeState.arwTemp.startpoint = `${face.toUpperCase()}${index}`
                    "
                    data-bs-dismiss="modal"
                  >
                    <div
                      class="faceletText"
                      v-if="
                        `${face.toUpperCase()}${index}` ==
                        this.cubeState.arwTemp.startpoint
                      "
                    >
                      {{ ln.s }}
                    </div>
                    <div
                      class="faceletText"
                      v-if="
                        `${face.toUpperCase()}${index}` ==
                        this.cubeState.arwTemp.pass
                      "
                    >
                      {{ ln.p }}
                    </div>
                    <div
                      class="faceletText"
                      v-if="
                        `${face.toUpperCase()}${index}` ==
                        this.cubeState.arwTemp.endpoint
                      "
                    >
                      {{ ln.e }}
                    </div>
                  </button>
                </div>
                <div
                  class="arrowFaceletButtons d-flex flex-wrap justify-content-center align-items-center"
                  v-else
                  style="height: 30vw; width: 30vw; background-color: black"
                >
                  <button
                    :class="`arrow${face.toUpperCase()}FaceletButton arrowFaceletButton d-flex justify-content-center align-items-center`"
                    :key="`arrowUFacelet${index}`"
                    :style="`width:${Math.floor(
                      100 / cubeState.pzl
                    )}%; height:${Math.floor(
                      100 / cubeState.pzl
                    )}%; background-color:${
                      cubeState.sch[facelet]
                    }; border:solid 1.5px black`"
                    v-for="(facelet, index) in cubeState.fd[face].slice(
                      0,
                      cubeState.pzl ** 2
                    )"
                    @click="
                      cubeState.arwTemp.startpoint = `${face.toUpperCase()}${index}`
                    "
                    data-bs-dismiss="modal"
                  >
                    <div
                      class="faceletText"
                      v-if="
                        `${face.toUpperCase()}${index}` ==
                        this.cubeState.arwTemp.startpoint
                      "
                    >
                      {{ ln.s }}
                    </div>
                    <div
                      class="faceletText"
                      v-if="
                        `${face.toUpperCase()}${index}` ==
                        this.cubeState.arwTemp.pass
                      "
                    >
                      {{ ln.p }}
                    </div>
                    <div
                      class="faceletText"
                      v-if="
                        `${face.toUpperCase()}${index}` ==
                        this.cubeState.arwTemp.endpoint
                      "
                    >
                      {{ ln.e }}
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div class="Options col-lg-4 col-sm-12">
              <h6>Options</h6>
              <div class="OptionList"></div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cubeState } from "../Stores/CubeState";
import { ln } from "../Stores/Language";
export default {
  data() {
    return {
      cubeState: cubeState(),
      ln: ln(),
    };
  },
  props: {
    face: {
      Type: String,
    },
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
@media screen and (max-width: 575px) {
  .arrowFaceletButtons {
    height: 60vw !important;
    width: 60vw !important;
  }
}
</style>
