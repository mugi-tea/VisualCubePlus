<template>
  <div class="case">
    <h6 class="carouselTitle"></h6>
    <div class="caseEdit">
      <div class="caseInput d-flex pb-1">
        <input
          class="flex-grow-1"
          type="text"
          v-model="cubeState.case"
          style="border-radius: 7px 0px 0px 7px !important"
        />
        <div class="deleteButtons">
          <button
            class="delete button-primary"
            @click="cubeState.case = cubeState.case.slice(0, -1)"
            style="border-radius: 0px"
          >
            <i class="bx bx-chevron-left"></i>
          </button>
          <button
            class="deleteAll button-primary"
            @click="cubeState.case = ''"
            style="border-radius: 0px 7px 7px 0px !important"
          >
            <i class="bx bx-chevrons-left"></i>
          </button>
        </div>
      </div>

      <div
        class="caseInputButtons d-flex justify-content-center flex-wrap gap-1"
      >
        <div class="btn-group" role="group">
          <button
            v-for="caseSL in caseSingleLayer"
            :class="`${caseSL}Button btn button-secondly`"
            @click="cubeState.case = cubeState.case + caseSL"
            :key="caseSL"
          >
            {{ caseSL }}
          </button>
        </div>
        <div class="btn-group" role="group">
          <button
            v-for="caseDL in caseDoubleLayer"
            :class="`${caseDL}Button btn button-secondly`"
            @click="cubeState.case = cubeState.case + caseDL"
            :key="caseDL"
          >
            {{ caseDL }}
          </button>
        </div>

        <div class="btn-group" role="group">
          <button
            v-for="caseML in caseMiddleLayer"
            :class="`${caseML}Button btn button-secondly`"
            @click="cubeState.case = cubeState.case + caseML"
            :key="caseML"
          >
            {{ caseML }}
          </button>
        </div>
        <div class="btn-group" role="group">
          <button
            v-for="caseR in caseRotation"
            :class="`${caseR}Button btn button-secondly`"
            @click="cubeState.case = cubeState.case + caseR"
            :key="caseR"
          >
            {{ caseR }}
          </button>
        </div>

        <div class="btn-group" role="group">
          <button
            v-for="caseD in caseDirection"
            :class="`${caseD}Button btn button-secondly`"
            @click="cubeState.case = cubeState.case + caseD"
            :key="caseD"
          >
            {{ caseD }}
          </button>
          <button
            class="3Button btn button-secondly"
            v-if="cubeState.pzl >= 6"
            @click="cubeState.alg = cubeState.alg + '3'"
          >
            3
          </button>
          <button
            class="3Button btn button-secondly"
            v-if="cubeState.pzl >= 8"
            @click="cubeState.alg = cubeState.alg + '4'"
          >
            4
          </button>
          <button
            class="3Button btn button-secondly"
            v-if="cubeState.pzl >= 10"
            @click="cubeState.alg = cubeState.alg + '5'"
          >
            5
          </button>
        </div>

        <div class="btn-group" role="group">
          <button
            type="button"
            class="spaceButton btn button-secondly"
            @click="cubeState.case = cubeState.case + ' '"
          >
            Space
          </button>
        </div>

        <div class="btn-group" role="group">
          <button
            type="button"
            class="ollModalButton btn button-secondly"
            data-bs-toggle="modal"
            data-bs-target="#ollCaseModal"
          >
            OLL
          </button>

          <button
            type="button"
            class="pllModalButton btn button-secondly"
            data-bs-toggle="modal"
            data-bs-target="#pllCaseModal"
          >
            PLL
          </button>
        </div>

        <div
          class="modal fade"
          id="ollCaseModal"
          tabindex="-1"
          aria-labelledby="ollModalLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="ollModalLabel">OLL</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="d-flex flex-wrap justify-content-center">
                  <div
                    class="ollSections m-1"
                    v-for="ollCase in ollCases"
                    :value="ollCase.alg"
                    :key="ollCase.label"
                  >
                    <button
                      :class="`${ollCase.label}Section bg-white`"
                      @click="cubeState.case = ollCase.alg"
                      data-bs-dismiss="modal"
                    >
                      <h6 class="ollLabel">{{ ollCase.label }}</h6>
                      <div class="ollImg">
                        <img
                          :src="`/img/oll/${ollCase.label}.svg`"
                          style="height: 130px"
                        />
                      </div>
                    </button>
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
        <div
          class="modal fade"
          id="pllCaseModal"
          tabindex="-1"
          aria-labelledby="pllModalLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="pllModalLabel">OLL</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="d-flex flex-wrap justify-content-center">
                  <div
                    class="pllSections m-1"
                    v-for="pllCase in pllCases"
                    :value="pllCase.alg"
                    :key="pllCase.label"
                  >
                    <button
                      :class="`${pllCase.label}Section bg-white`"
                      @click="cubeState.case = pllCase.alg"
                      data-bs-dismiss="modal"
                    >
                      <h6 class="pllLabel">{{ pllCase.label }}</h6>
                      <div class="pllImg">
                        <img
                          :src="`/img/pll/${pllCase.label}.svg`"
                          style="height: 130px"
                        />
                      </div>
                    </button>
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
      caseSingleLayer: ["U", "D", "R", "L", "F", "B"],
      caseDoubleLayer: ["u", "d", "r", "l", "f", "b"],
      caseMiddleLayer: ["M", "E", "S"],
      caseRotation: ["x", "y", "z"],
      caseDirection: ["'", "2"],
      pllCases: {
        Aa: {
          label: "Aa",
          alg: "R' F R' B2 R F' R' B2 R2",
        },
        Ab: {
          label: "Ab",
          alg: "R2 B2 R F R' B2 R F' R",
        },
        E: {
          label: "E",
          alg: "R2 U R2 U D R2 U' R2 U R2 U' D' R2 U R2 U2 R2",
        },
        F: {
          label: "F",
          alg: "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
        },
        Ga: {
          label: "Ga",
          alg: "R2 U R' U R' U' R U' R2 D U' R' U R D'",
        },
        Gb: {
          label: "Gb",
          alg: "R' U' R U D' R2 U R' U R U' R U' R2 D",
        },
        Gc: {
          label: "Gc",
          alg: "R2 U' R U' R U R' U R2 D' U R U' R' D",
        },
        Gd: {
          label: "Gd",
          alg: "R U R' U' D R2 U' R U' R' U R' U R2 D'",
        },
        H: {
          label: "H",
          alg: "M2 U M2 U2 M2 U M2",
        },
        Ja: {
          label: "Ja",
          alg: "L' U' L F L' U' L U L F' L2 U L",
        },
        Jb: {
          label: "Jb",
          alg: "R U R' F' R U R' U' R' F R2 U' R'",
        },
        Na: {
          label: "Na",
          alg: "R U R' U2 R U R2 F' R U R U' R' F R U' R' U' R U' R'",
        },
        Nb: {
          label: "Nb",
          alg: "R' U R' F R F' R U' R' F' U F R U R' U' R",
        },
        Ra: {
          label: "Ra",
          alg: "L U2 L' U2 L F' L' U' L U L F L2",
        },
        Rb: {
          label: "Rb",
          alg: "R' U2 R U2 R' F R U R' U' R' F' R2",
        },
        T: {
          label: "T",
          alg: "R U R' U' R' F R2 U' R' U' R U R' F'",
        },
        Ua: {
          label: "Ua",
          alg: "R2 U' R' U' R U R U R U' R",
        },
        Ub: {
          label: "Ub",
          alg: "R' U R' U' R' U' R' U R U R2",
        },
        V: {
          label: "V",
          alg: "R' U R' U' R D' R' D R' U D' R2 U' R2 D R2",
        },
        Y: {
          label: "Y",
          alg: "F R U' R' U' R U R' F' R U R' U' R' F R F'",
        },
        Z: {
          label: "Z",
          alg: "M2 U M2 U M' U2 M2 U2 M'",
        },
      },
      ollCases: {
        oll1: {
          label: "OLL1",
          alg: "R U2 R2 F R F' U2 R' F R F'",
        },
        oll2: {
          label: "OLL2",
          alg: "F R U R' U' F' f R U R' U' f'",
        },
        oll3: {
          label: "OLL3",
          alg: "f R U R' U' f' U' F R U R' U' F'",
        },
        oll4: {
          label: "OLL4",
          alg: "f R U R' U' f' U F R U R' U' F'",
        },
        oll5: {
          label: "OLL5",
          alg: "r' U2 R U R' U r",
        },
        oll6: {
          label: "OLL6",
          alg: "r U2 R' U' R U' r'",
        },
        oll7: {
          label: "OLL7",
          alg: "r U R' U R U2 r'",
        },
        oll8: {
          label: "OLL8",
          alg: "r' U' R U' R' U2 r",
        },
        oll9: {
          label: "OLL9",
          alg: "R U R' U' R' F R2 U R' U' F'",
        },
        oll10: {
          label: "OLL10",
          alg: "R U R' U R' F R F' R U2 R'",
        },
        oll11: {
          label: "OLL11",
          alg: "r' R2 U R' U R U2 R' U M'",
        },
        oll12: {
          label: "OLL12",
          alg: "F R U R' U' F' U F R U R' U' F'",
        },
        oll13: {
          label: "OLL13",
          alg: "r U' r' U' r U r' F' U F",
        },
        oll14: {
          label: "OLL14",
          alg: "R' F R U R' F' R F U' F'",
        },
        oll15: {
          label: "OLL15",
          alg: "r' U' r R' U' R U r' U r",
        },
        oll16: {
          label: "OLL16",
          alg: "r U r' R U R' U' r U' r'",
        },
        oll17: {
          label: "OLL17",
          alg: "R U R' U R' F R F' U2 R' F R F'",
        },
        oll18: {
          label: "OLL18",
          alg: "r U R' U R U2 r2 U' R U' R' U2 r",
        },
        oll19: {
          label: "OLL19",
          alg: "M U R U R' U' M' R' F R F'",
        },
        oll20: {
          label: "OLL20",
          alg: "M U R U R' U' M2 U R U' r'",
        },
        oll21: {
          label: "OLL21",
          alg: "R U2 R' U' R U R' U' R U' R'",
        },
        oll22: {
          label: "OLL22",
          alg: "R U2 R2 U' R2 U' R2 U2 R",
        },
        oll23: {
          label: "OLL23",
          alg: "R2 D R' U2 R D' R' U2 R'",
        },
        oll24: {
          label: "OLL24",
          alg: "r U R' U' r' F R F'",
        },
        oll25: {
          label: "OLL25",
          alg: "F' r U R' U' r' F R",
        },
        oll26: {
          label: "OLL26",
          alg: "R U2 R' U' R U' R'",
        },
        oll27: {
          label: "OLL27",
          alg: "R U R' U R U2 R'",
        },
        oll28: {
          label: "OLL28",
          alg: "r U R' U' M U R U' R'",
        },
        oll29: {
          label: "OLL29",
          alg: "M U R U R' U' R' F R F' M'",
        },
        oll30: {
          label: "OLL30",
          alg: "F U R U2 R' U' R U2 R' U' F'",
        },
        oll31: {
          label: "OLL31",
          alg: "R' U' F U R U' R' F' R",
        },
        oll32: {
          label: "OLL32",
          alg: "S R U R' U' R' F R f'",
        },
        oll33: {
          label: "OLL33",
          alg: "R U R' U' R' F R F'",
        },
        oll34: {
          label: "OLL34",
          alg: "R U R2 U' R' F R U R U' F'",
        },
        oll35: {
          label: "OLL35",
          alg: "R U2 R2 F R F' R U2 R'",
        },
        oll36: {
          label: "OLL36",
          alg: "L' U' L U' L' U L U L F' L' F",
        },
        oll37: {
          label: "OLL37",
          alg: "F R U' R' U' R U R' F'",
        },
        oll38: {
          label: "OLL38",
          alg: "R U R' U R U' R' U' R' F R F'",
        },
        oll39: {
          label: "OLL39",
          alg: "L F' L' U' L U F U' L'",
        },
        oll40: {
          label: "OLL40",
          alg: "R' F R U R' U' F' U R",
        },
        oll41: {
          label: "OLL41",
          alg: "R U R' U R U2 R' F R U R' U' F'",
        },
        oll42: {
          label: "OLL42",
          alg: "R' U' R U' R' U2 R F R U R' U' F'",
        },
        oll43: {
          label: "OLL43",
          alg: "f' L' U' L U f",
        },
        oll44: {
          label: "OLL44",
          alg: "f R U R' U' f'",
        },
        oll45: {
          label: "OLL45",
          alg: "F R U R' U' F'",
        },
        oll46: {
          label: "OLL46",
          alg: "R' U' R' F R F' U R",
        },
        oll47: {
          label: "OLL47",
          alg: "F' L' U' L U L' U' L U F",
        },
        oll48: {
          label: "OLL48",
          alg: "F R U R' U' R U R' U' F'",
        },
        oll49: {
          label: "OLL49",
          alg: "r U' r2 U r2 U r2 U' r",
        },
        oll50: {
          label: "OLL50",
          alg: "r' U r2 U' r2 U' r2 U r'",
        },
        oll51: {
          label: "OLL51",
          alg: "f R U R' U' R U R' U' f'",
        },
        oll52: {
          label: "OLL52",
          alg: "R U R' U R d' R U' R' F'",
        },
        oll53: {
          label: "OLL53",
          alg: "r' U' R U' R' U R U' R' U2 r",
        },
        oll54: {
          label: "OLL54",
          alg: "r U R' U R U' R' U R U2 r'",
        },
        oll55: {
          label: "OLL55",
          alg: "R U2 R2 U' R U' R' U2 F R F'",
        },
        oll56: {
          label: "OLL56",
          alg: "r U r' U R U' R' U R U' R' r U' r'",
        },
        oll57: {
          label: "OLL57",
          alg: "R U R' U' M' U R U' r'",
        },
      },
    };
  },
};
</script>

<style></style>
