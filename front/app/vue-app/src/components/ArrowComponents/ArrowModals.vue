<template>
  <!--Arrow Startpoint Modal-->
  <div
    class="modal fade"
    id="arrowStartpoint"
    tabindex="-1"
    aria-labelledby="arrowStartpointLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="arrowStartpointLabel">
            {{ ln.arrowDefinition }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body container">
          <div class="row">
            <div class="buttons col-lg-10">
              <h5>{{ ln.chooseStartpoint }}</h5>
              <div
                class="d-flex flex-column justify-content-center align-items-center"
              >
                <div class="faces d-flex flex-row">
                  <div class="emptyFace arwFace"></div>
                  <startpointFaceletButtons :face="'u'" />
                  <div class="emptyFace arwFace"></div>
                  <div class="emptyFace arwFace"></div>
                </div>
                <div class="faces d-flex flex-row">
                  <startpointFaceletButtons :face="'l'" />
                  <startpointFaceletButtons :face="'f'" />
                  <startpointFaceletButtons :face="'r'" />
                  <startpointFaceletButtons :face="'b'" />
                </div>
                <div class="faces d-flex flex-row">
                  <div class="emptyFace arwFace"></div>
                  <startpointFaceletButtons :face="'d'" />
                  <div class="emptyFace arwFace"></div>
                  <div class="emptyFace arwFace"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-2">
              <arrowOptions />
              <arrowStatus />
            </div>
          </div>
        </div>

        <div class="modal-footer d-flex justify-content-between">
          <div class="arrowModalNote d-flex flex-row align-items-center gap-1">
            <i class="bx bx-error-circle"></i>
            <div>{{ ln.arrowModalNote }}</div>
          </div>
          <div class="arrowModalFooterButtons d-flex gap-2">
            <button
              class="button-secondly"
              type="button"
              data-bs-dismiss="modal"
              data-bs-target="#arrowPass"
              data-bs-toggle="modal"
              v-if="cubeState.arwTemp.startpoint != ''"
            >
              {{ ln.choosePass }}
            </button>
            <button
              class="button-secondly"
              type="button"
              data-bs-dismiss="modal"
              data-bs-target="#arrowEndpoint"
              data-bs-toggle="modal"
              v-if="cubeState.arwTemp.startpoint != ''"
            >
              {{ ln.chooseEndpoint }}
            </button>
            <button
              class="button-primary"
              type="button"
              data-bs-dismiss="modal"
              v-if="
                cubeState.arwTemp.startpoint != '' &&
                cubeState.arwTemp.endpoint != ''
              "
              @click="cubeState.addArrow()"
            >
              {{ ln.add }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--Arrow Pass Modal-->
  <div
    class="modal fade"
    id="arrowPass"
    tabindex="-1"
    aria-labelledby="arrowPassLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="arrowPassLabel">
            {{ ln.arrowDefinition }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body container">
          <div class="row">
            <div class="buttons col-lg-10">
              <h5>{{ ln.choosePass }}</h5>
              <div
                class="d-flex flex-column justify-content-center align-items-center"
              >
                <div class="faces d-flex flex-row">
                  <div class="emptyFace arwFace"></div>
                  <passFaceletButtons :face="'u'" />
                  <div class="emptyFace arwFace"></div>
                  <div class="emptyFace arwFace"></div>
                </div>
                <div class="faces d-flex flex-row">
                  <passFaceletButtons :face="'l'" />
                  <passFaceletButtons :face="'f'" />
                  <passFaceletButtons :face="'r'" />
                  <passFaceletButtons :face="'b'" />
                </div>
                <div class="faces d-flex flex-row">
                  <div class="emptyFace arwFace"></div>
                  <passFaceletButtons :face="'d'" />
                  <div class="emptyFace arwFace"></div>
                  <div class="emptyFace arwFace"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-2">
              <arrowOptions />
              <arrowStatus />
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-between">
          <div class="arrowModalNote d-flex flex-row align-items-center gap-1">
            <i class="bx bx-error-circle"></i>
            <div>{{ ln.arrowModalNote }}</div>
          </div>
          <div class="arrowModalFooterButtons d-flex gap-2">
            <button
              class="button-secondly"
              type="button"
              data-bs-dismiss="modal"
              data-bs-target="#arrowStartpoint"
              data-bs-toggle="modal"
            >
              {{ ln.chooseStartpoint }}
            </button>
            <button
              class="button-secondly"
              type="button"
              data-bs-dismiss="modal"
              data-bs-target="#arrowEndpoint"
              data-bs-toggle="modal"
              @click="cubeState.arwTemp.pass = ''"
            >
              {{ ln.skipPass }}
            </button>
            <button
              class="button-secondly"
              type="button"
              data-bs-dismiss="modal"
              data-bs-target="#arrowEndpoint"
              data-bs-toggle="modal"
              v-if="cubeState.arwTemp.endpoint != ''"
            >
              {{ ln.chooseEndpoint }}
            </button>
            <button
              class="button-primary"
              type="button"
              data-bs-dismiss="modal"
              v-if="
                cubeState.arwTemp.startpoint != '' &&
                cubeState.arwTemp.endpoint != ''
              "
              @click="cubeState.addArrow(cubeState.arw.length)"
            >
              {{ ln.add }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--Arrow Endpoint Modal-->
  <div
    class="modal fade"
    id="arrowEndpoint"
    tabindex="-1"
    aria-labelledby="arrowEndpointLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="arrowEndpointLabel">
            {{ ln.arrowDefinition }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body container">
          <div class="row">
            <div class="buttons col-lg-10">
              <h5>{{ ln.chooseEndpoint }}</h5>
              <div
                class="d-flex flex-column justify-content-center align-items-center"
              >
                <div class="faces d-flex flex-row">
                  <div class="emptyFace arwFace"></div>
                  <endpointFaceletButtons :face="'u'" />
                  <div class="emptyFace arwFace"></div>
                  <div class="emptyFace arwFace"></div>
                </div>
                <div class="faces d-flex flex-row">
                  <endpointFaceletButtons :face="'l'" />
                  <endpointFaceletButtons :face="'f'" />
                  <endpointFaceletButtons :face="'r'" />
                  <endpointFaceletButtons :face="'b'" />
                </div>
                <div class="faces d-flex flex-row">
                  <div class="emptyFace arwFace"></div>
                  <endpointFaceletButtons :face="'d'" />
                  <div class="emptyFace arwFace"></div>
                  <div class="emptyFace arwFace"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-2">
              <arrowOptions />
              <arrowStatus />
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-between">
          <div class="arrowModalNote d-flex flex-row align-items-center gap-1">
            <i class="bx bx-error-circle"></i>
            <div>{{ ln.arrowModalNote }}</div>
          </div>
          <div class="arrowModalFooterButtons d-flex gap-2">
            <button
              class="button-secondly"
              type="button"
              data-bs-dismiss="modal"
              data-bs-target="#arrowStartpoint"
              data-bs-toggle="modal"
            >
              {{ ln.chooseStartpoint }}
            </button>
            <button
              class="button-secondly"
              type="button"
              data-bs-dismiss="modal"
              data-bs-target="#arrowPass"
              data-bs-toggle="modal"
            >
              {{ ln.choosePass }}
            </button>
            <button
              class="button-primary"
              type="button"
              data-bs-dismiss="modal"
              v-if="
                cubeState.arwTemp.startpoint != '' &&
                cubeState.arwTemp.endpoint != ''
              "
              @click="cubeState.addArrow(cubeState.arw.length)"
            >
              {{ ln.add }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--Comfirmation Modal-->
  <div
    class="modal fade"
    id="comfirmation"
    tabindex="-1"
    aria-labelledby="comfirmationLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="comfirmationLabel">
            {{ ln.arrowDefinition }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body container">
          <div class="row">
            <div class="buttons col-lg-10">
              <div
                class="d-flex flex-column justify-content-center align-items-center"
              >
                <div class="faces d-flex flex-row">
                  <div class="emptyFace arwFace"></div>
                  <confirmation :face="'u'" />
                  <div class="emptyFace arwFace"></div>
                  <div class="emptyFace arwFace"></div>
                </div>
                <div class="faces d-flex flex-row">
                  <confirmation :face="'l'" />
                  <confirmation :face="'f'" />
                  <confirmation :face="'r'" />
                  <confirmation :face="'b'" />
                </div>
                <div class="faces d-flex flex-row">
                  <div class="emptyFace arwFace"></div>
                  <confirmation :face="'d'" />
                  <div class="emptyFace arwFace"></div>
                  <div class="emptyFace arwFace"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-2">
              <arrowOptions />
              <arrowStatus />
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-between">
          <div class="arrowModalNote d-flex flex-row align-items-center gap-1">
            <i class="bx bx-error-circle"></i>
            <div>{{ ln.arrowModalNote }}</div>
          </div>
          <div class="arrowModalFooterButtons d-flex gap-2">
            <button
              class="button-secondly"
              type="button"
              data-bs-dismiss="modal"
              data-bs-target="#arrowStartpoint"
              data-bs-toggle="modal"
            >
              {{ ln.chooseStartpoint }}
            </button>
            <button
              class="button-secondly"
              type="button"
              data-bs-dismiss="modal"
              data-bs-target="#arrowPass"
              data-bs-toggle="modal"
            >
              {{ ln.choosePass }}
            </button>
            <button
              class="button-secondly"
              type="button"
              data-bs-dismiss="modal"
              data-bs-target="#arrowEndpoint"
              data-bs-toggle="modal"
            >
              {{ ln.chooseEndpoint }}
            </button>
            <button
              class="button-primary"
              type="button"
              data-bs-dismiss="modal"
              v-if="
                cubeState.arwTemp.startpoint != '' &&
                cubeState.arwTemp.endpoint != ''
              "
              @click="cubeState.addArrow(cubeState.arw.length)"
            >
              {{ ln.add }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import faceButton from "./FaceButton.vue";
import startpointFaceletButtons from "./startpointFaceletButtons.vue";
import passFaceletButtons from "./passFaceletButtons.vue";
import endpointFaceletButtons from "./endpointFaceletButtons.vue";
import confirmation from "./confirmation.vue";
import arrowOptions from "./ArrowOptions.vue";
import arrowStatus from "./ArrowStatus.vue";
import { cubeState } from "../Stores/CubeState";
import { ln } from "../Stores/Language";
export default {
  components: {
    faceButton,
    startpointFaceletButtons,
    passFaceletButtons,
    endpointFaceletButtons,
    confirmation,
    arrowOptions,
    arrowStatus,
  },
  data() {
    return {
      cubeState: cubeState(),
      ln: ln(),
    };
  },
};
</script>

<style></style>
