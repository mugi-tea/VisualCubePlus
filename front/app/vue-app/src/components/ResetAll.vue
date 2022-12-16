<template>
  <button
    class="button-primary w-100 mt-2"
    style="height: 40px"
    data-bs-target="#resetAllWarning"
    data-bs-toggle="modal"
  >
    {{ ln.resetAll }}
  </button>

  <div
    class="modal fade"
    id="resetAllWarning"
    tabindex="-1"
    aria-labelledby="resetAllWarningLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="resetAllWarningLabel">
            {{ ln.warning }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          {{ ln.resetAllWarningText }}
        </div>
        <div class="modal-footer">
          <button type="button" class="button-secondly" data-bs-dismiss="modal">
            {{ ln.no }}
          </button>
          <button
            type="button"
            class="button-primary"
            data-bs-dismiss="modal"
            @click="cubeState.$reset"
          >
            {{ ln.yes }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cubeState } from "./Stores/CubeState";
import { ln } from "./Stores/Language";
export default {
  data() {
    return {
      ln: ln(),
      cubeState: cubeState(),
    };
  },
};
</script>

<style></style>
