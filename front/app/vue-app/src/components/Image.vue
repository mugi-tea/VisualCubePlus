<template>
  <div class="image">
    <div class="d-flex">
      <h4
        class="editSectionTitle imageSectionTitle d-flex align-items-center gap-1"
      >
        <i class="bx bx-image-alt pt-1"></i> {{ ln.image }}
      </h4>
    </div>

    <div class="row">
      <ProjectionDistance class="col-6 d-flex flex-column" />
      <Size class="col-6 d-flex flex-column" />
      <!--
      <Format class="col-4 d-flex flex-column" />
      -->
    </div>
  </div>
</template>

<script>
import Size from "./ImageComponents/Size.vue";
import ProjectionDistance from "./ImageComponents/ProjectionDistance.vue";
import Format from "./ImageComponents/Format.vue";
import { ln } from "./Stores/Language";
export default {
  components: {
    Size,
    ProjectionDistance,
    Format,
  },
  data() {
    return {
      ln: ln(),
    };
  },
};
</script>

<style></style>
