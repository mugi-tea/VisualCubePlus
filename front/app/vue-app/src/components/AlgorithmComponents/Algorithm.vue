<template>
  <div class="algorithm">
    <h6 class="carouselTitle"></h6>
    <div class="algEdit">
      <div class="algInput d-flex pb-1">
        <input
          type="text"
          v-model="cubeState.alg"
          class="flex-grow-1"
          style="border-radius: 7px 0px 0px 7px !important"
        />
        <div class="deleteButtons">
          <button
            class="delete button-primary"
            @click="cubeState.alg = cubeState.alg.slice(0, -1)"
            style="border-radius: 0px"
          >
            <i class="bx bx-chevron-left"></i>
          </button>
          <button
            class="deteleAll button-primary"
            @click="cubeState.alg = ''"
            style="border-radius: 0px 7px 7px 0px !important"
          >
            <i class="bx bx-chevrons-left"></i>
          </button>
        </div>
      </div>

      <div
        class="algInputButtons d-flex justify-content-center flex-wrap gap-1"
      >
        <div class="btn-group" role="group">
          <button
            v-for="algSL in algSingleLayer"
            :class="`${algSL}Button btn button-secondly`"
            @click="cubeState.alg = cubeState.alg + algSL"
            :key="algSL"
          >
            {{ algSL }}
          </button>
        </div>
        <div class="btn-group" role="group">
          <button
            v-for="algDL in algDoubleLayer"
            :class="`${algDL}Button btn button-secondly`"
            @click="cubeState.alg = cubeState.alg + algDL"
            :key="algDL"
          >
            {{ algDL }}
          </button>
        </div>
        <div class="btn-group" role="group">
          <button
            v-for="algML in algMiddleLayer"
            :class="`${algML}Button btn button-secondly`"
            @click="cubeState.alg = cubeState.alg + algML"
            :key="algML"
          >
            {{ algML }}
          </button>
        </div>

        <div class="btn-group" role="group">
          <button
            v-for="algR in algRotation"
            :class="`${algR}Button btn button-secondly`"
            @click="cubeState.alg = cubeState.alg + algR"
            :key="algR"
          >
            {{ algR }}
          </button>
        </div>

        <div class="btn-group" role="group">
          <button
            v-for="algD in algDirection"
            :class="`${algD}Button btn button-secondly`"
            @click="cubeState.alg = cubeState.alg + algD"
            :key="algD"
          >
            {{ algD }}
          </button>
          <button
            class="3Button btn button-secondly"
            v-if="cubeState.pzl >= 6"
            @click="cubeState.alg = cubeState.alg + '3'"
          >
            3
          </button>
          <button
            class="4Button btn button-secondly"
            v-if="cubeState.pzl >= 8"
            @click="cubeState.alg = cubeState.alg + '4'"
          >
            4
          </button>
          <button
            class="5Button btn button-secondly"
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
            @click="cubeState.alg = cubeState.alg + ' '"
          >
            Space
          </button>
        </div>

        <div class="btn-group" role="group">
          <button
            type="button"
            class="ollModalButton btn button-secondly"
            data-bs-toggle="modal"
            data-bs-target="#ollAlgModal"
          >
            OLL
          </button>

          <button
            type="button"
            class="pllModalButton btn button-secondly"
            data-bs-toggle="modal"
            data-bs-target="#pllAlgModal"
          >
            PLL
          </button>
        </div>

        <div
          class="modal fade"
          id="ollAlgModal"
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
                    v-for="ollAlg in ollAlgs"
                    :value="ollAlg.alg"
                    :key="ollAlg.label"
                  >
                    <button
                      :class="`${ollAlg.label}Section bg-white`"
                      @click="cubeState.alg = ollAlg.alg"
                      data-bs-dismiss="modal"
                    >
                      <h6 class="ollLabel">{{ ollAlg.label }}</h6>
                      <div class="ollImg">
                        <img
                          :src="`/img/oll/${ollAlg.label}.svg`"
                          style="height: 120px"
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
          id="pllAlgModal"
          tabindex="-1"
          aria-labelledby="pllModalLabel"
          aria-hidden="true"
        >
          <div
            class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="pllModalLabel">PLL</h5>
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
                    v-for="pllAlg in pllAlgs"
                    :value="pllAlg.alg"
                    :key="pllAlg.label"
                  >
                    <button
                      :class="`${pllAlg.label}Section bg-white`"
                      @click="cubeState.alg = pllAlg.alg"
                      data-bs-dismiss="modal"
                    >
                      <h6 class="pllLabel">{{ pllAlg.label }}</h6>
                      <div class="pllImg">
                        <img
                          :src="`/img/pll/${pllAlg.label}.svg`"
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
      algSingleLayer: ["U", "D", "R", "L", "F", "B"],
      algDoubleLayer: ["u", "d", "r", "l", "f", "b"],
      algMiddleLayer: ["M", "E", "S"],
      algRotation: ["x", "y", "z"],
      algDirection: ["'", "2"],
      pllAlgs: {
        Aa: { label: "Aa", alg: "R2 B2 R F R' B2 R F' R" },
        Ab: { label: "Ab", alg: "R' U2 R2 U' L' U R' U' L U R' U2 R" },
        E: {
          label: "E",
          alg: "R' F R' B2 R F' R' B2 R2",
        },
        F: {
          label: "F",
          alg: "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
        },
        Ga: {
          label: "Ga",
          alg: "R' U' R D' U R2 U R' U R U' R U' R2 D",
        },
        Gb: {
          label: "Gb",
          alg: "D' R2 U R' U R' U' R U' R2 D U' R' U R",
        },
        Gc: {
          label: "Gc",
          alg: "D' R U R' U' D R2 U' R U' R' U R' U R2",
        },
        Gd: {
          label: "Gd",
          alg: "D R2 U' R U' R U R' U R2 D' U R U' R'",
        },
        H: {
          label: "H",
          alg: "M2 U M2 U2 M2 U M2",
        },
        Ja: {
          label: "Ja",
          alg: "L' U' L2 F L' U' L' U L F' L' U L",
        },
        Jb: {
          label: "Jb",
          alg: "R U R2 F' R U R U' R' F R U' R'",
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
          alg: "L2 F' L' U' L' U L F L' U2 L U2 L'",
        },
        Rb: {
          label: "Rb",
          alg: "R2 F R U R U' R' F' R U2 R' U2 R",
        },
        T: {
          label: "T",
          alg: "R U R' U' R' F R2 U' R' U' R U R' F'",
        },
        Ua: {
          label: "Ua",
          alg: "R' U R' U' R' U' R' U R U R2",
        },
        Ub: {
          label: "Ub",
          alg: "R2 U' R' U' R U R U R U' R",
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
      ollAlgs: {
        oll1: {
          label: "OLL1",
          alg: "F R' F' R U2 F R' F' R2 U2 R'",
        },
        oll2: {
          label: "OLL2",
          alg: "f U R U' R' f' F U R U' R' F'",
        },
        oll3: {
          label: "OLL3",
          alg: "M U' r U2 r' U' R U' R2 r",
        },
        oll4: {
          label: "OLL4",
          alg: "r' R2 U R' U r U2 r' U M'",
        },
        oll5: {
          label: "OLL5",
          alg: "r' U' R U' R' U2 r",
        },
        oll6: {
          label: "OLL6",
          alg: "r U R' U R U2 r'",
        },
        oll7: {
          label: "OLL7",
          alg: "r U2 R' U' R U' r'",
        },
        oll8: {
          label: "OLL8",
          alg: "r' U2 R U R' U r",
        },
        oll9: {
          label: "OLL9",
          alg: "F U R U' R2 F' R U R U' R'",
        },
        oll10: {
          label: "OLL10",
          alg: "R U2 R' F R' F' R U' R U' R'",
        },
        oll11: {
          label: "OLL11",
          alg: "M U' R U2 R' U' R U' R' M'",
        },
        oll12: {
          label: "OLL12",
          alg: "F U R U' R' F' U' F U R U' R' F'",
        },
        oll13: {
          label: "OLL13",
          alg: "F R U' R' U R U2 R' U' F'",
        },
        oll14: {
          label: "OLL14",
          alg: "F U F' R' F R U' R' F' R",
        },
        oll15: {
          label: "OLL15",
          alg: "r' U' r U' R' U R r' U r",
        },
        oll16: {
          label: "OLL16",
          alg: "r U r' U R U' R' r U' r'",
        },
        oll17: {
          label: "OLL17",
          alg: "F R' F' R U2 F R' F' R U' R U' R'",
        },
        oll18: {
          label: "OLL18",
          alg: "r' U2 R U R' U r2 U2 R' U' R U' r'",
        },
        oll19: {
          label: "OLL19",
          alg: "F R' F' R M U R U' R' U' M'",
        },
        oll20: {
          label: "OLL20",
          alg: "r U R' U' M2 U R U' R' U' M'",
        },
        oll21: {
          label: "OLL21",
          alg: "R U2 R' U' R U R' U' R U' R'",
        },
        oll22: {
          label: "OLL22",
          alg: "R' U2 R2 U R2 U R2 U2 R'",
        },
        oll23: {
          label: "OLL23",
          alg: "R U2 R D R' U2 R D' R2",
        },
        oll24: {
          label: "OLL24",
          alg: "F R' F' r U R U' r'",
        },
        oll25: {
          label: "OLL25",
          alg: "L F R' F' L' F R F'",
        },
        oll26: {
          label: "OLL26",
          alg: "R U R' U R U2 R'",
        },
        oll27: {
          label: "OLL27",
          alg: "R' U' R U' R' U2 R",
        },
        oll28: {
          label: "OLL28",
          alg: "R U R' U' M' U R U' r'",
        },
        oll29: {
          label: "OLL29",
          alg: "F' U F U R U2 R' F R' F' R",
        },
        oll30: {
          label: "OLL30",
          alg: "F U R U2 R' U R U2 R' U' F'",
        },
        oll31: {
          label: "OLL31",
          alg: "R' F R U R' U' F' U R",
        },
        oll32: {
          label: "OLL32",
          alg: "f R' F' R U R U' R' S'",
        },
        oll33: {
          label: "OLL33",
          alg: "F R' F' R U R U' R'",
        },
        oll34: {
          label: "OLL34",
          alg: "F U R' U' R' F' R U R2 U' R'",
        },
        oll35: {
          label: "OLL35",
          alg: "R U2 R' F R' F' R2 U2 R'",
        },
        oll36: {
          label: "OLL36",
          alg: "F' L F L' U' L' U' L U L' U L",
        },
        oll37: {
          label: "OLL37",
          alg: "F R U' R' U R U R' F'",
        },
        oll38: {
          label: "OLL38",
          alg: "F R' F' R U R U R' U' R U' R'",
        },
        oll39: {
          label: "OLL39",
          alg: "L U F' U' L' U L F L'",
        },
        oll40: {
          label: "OLL40",
          alg: "R' U' F U R U' R' F' R",
        },
        oll41: {
          label: "OLL41",
          alg: "F U R U' R' F' R U2 R' U' R U' R'",
        },
        oll42: {
          label: "OLL42",
          alg: "F U R U' R' F' R' U2 R U R' U R",
        },
        oll43: {
          label: "OLL43",
          alg: "f' U' L' U L f",
        },
        oll44: {
          label: "OLL44",
          alg: "f U R U' R' f'",
        },
        oll45: {
          label: "OLL45",
          alg: "F U R U' R' F'",
        },
        oll46: {
          label: "OLL46",
          alg: "R' U' F R' F' R U R",
        },
        oll47: {
          label: "OLL47",
          alg: "F' U' L' U L U' L' U L F",
        },
        oll48: {
          label: "OLL48",
          alg: "F U R U' R' U R U' R' F'",
        },
        oll49: {
          label: "OLL49",
          alg: "r' U r2 U' r2 U' r2 U r'",
        },
        oll50: {
          label: "OLL50",
          alg: "r U' r2 U r2 U r2 U' r",
        },
        oll51: {
          label: "OLL51",
          alg: "f U R U' R' U R U' R' f'",
        },
        oll52: {
          label: "OLL52",
          alg: "R' F' U' F U' R U R' U R",
        },
        oll53: {
          label: "OLL53",
          alg: "r' U2 R U R' U' R U R' U r",
        },
        oll54: {
          label: "OLL54",
          alg: "r U2 R' U' R U R' U' R U' r'",
        },
        oll55: {
          label: "OLL55",
          alg: "F R' F' U2 R U R' U R2 U2 R'",
        },
        oll56: {
          label: "OLL56",
          alg: "r U r' R U R' U' R U R' U' r U' r'",
        },
        oll57: {
          label: "OLL57",
          alg: "r U R' U' M U R U' R'",
        },
      },
    };
  },
};
</script>

<style></style>
