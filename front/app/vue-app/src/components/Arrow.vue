<template>
  <div class="arrow">
    <div class="d-flex">
      <h4 class="editSectionTitle arrowSectionTitle d-flex align-items-center">
        <i class="bx bx-right-top-arrow-circle"></i>{{ ln.arrow }}
      </h4>
    </div>

    <ArrowDefinition />
  </div>
</template>

<script>
import ArrowDefinition from "./ArrowComponents/ArrowDefinition.vue";
import DefaultArrowColor from "./ArrowComponents/DefaultArrowColor.vue";
import faceButton from "./ArrowComponents/FaceButton.vue";
import startpointFaceletButtons from "./ArrowComponents/startpointFaceletButtons.vue";
import passFaceletButtons from "./ArrowComponents/passFaceletButtons.vue";
import endpointFaceletButtons from "./ArrowComponents/endpointFaceletButtons.vue";
import confirmation from "./ArrowComponents/confirmation.vue";
import ArrowOptions from "./ArrowComponents/ArrowOptions.vue";
import ArrowStatus from "./ArrowComponents/ArrowStatus.vue";
import ArrowModals from "./ArrowComponents/ArrowModals.vue";
import { cubeState } from "./Stores/CubeState";
import { ln } from "./Stores/Language";

export default {
  components: {
    ArrowDefinition,
    DefaultArrowColor,
    faceButton,
    startpointFaceletButtons,
    passFaceletButtons,
    endpointFaceletButtons,
    confirmation,
    ArrowOptions,
    ArrowStatus,
    ArrowModals,
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
