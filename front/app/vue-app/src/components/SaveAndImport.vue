<template>
  <div class="saveAndImportButtons mt-2 d-flex justify-content-center gap-2">
    <button
      class="button-secondly flex-grow-1 d-flex justify-content-center align-items-center gap-1"
      style="height: 40px"
      data-bs-toggle="offcanvas"
      data-bs-target="#savedCubeList"
      aria-controls="savedCubeList"
    >
      {{ ln.import }}
      <h5 class="d-flex pt-2">
        <i class="bx bx-download"></i>
      </h5>
    </button>
    <button
      class="button-secondly flex-grow-1 d-flex justify-content-center align-items-center gap-1"
      data-bs-target="#saveSetting"
      data-bs-toggle="modal"
      style="height: 40px"
    >
      {{ ln.save }}
      <h5 class="d-flex pt-2">
        <i class="bx bx-upload"></i>
      </h5>
    </button>
  </div>

  <!--Modal-->
  <div
    class="modal fade"
    id="saveSetting"
    tabindex="-1"
    aria-labelledby="saveSettingsLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="saveSettingLabel">
            {{ ln.saveSettings }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div
            class="saveSettingsPreview col-12 d-flex justify-content-center gap-2 align-items-center"
          >
            {{ ln.name }}:
            <input type="text" v-model="this.saveSettingName" />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="button-primary"
            data-bs-dismiss="modal"
            v-if="this.saveSettingName != ''"
            @click="this.addtoList"
            data-bs-toggle="offcanvas"
            data-bs-target="#savedCubeList"
            aria-controls="savedCubeList"
          >
            {{ ln.save }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Offcanvas-->
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="savedCubeList"
    aria-labelledby="savedCubeListLabel"
  >
    <div class="offcanvas-header">
      <h5 id="savedCubeListLabel">{{ ln.savedSettings }}</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body d-flex flex-column align-items-center gap-2">
      <div
        class="savedCubeList row w-100"
        v-for="(item, index) in this.savedCubeList.list"
        :key="index"
      >
        <div
          class="d-flex flex-column justify-content-evenly m-2"
          style="width: 50%"
        >
          <div class="savedCubePreviewStatus">
            <h6 class="savedCubeName">{{ item.name }}</h6>
            <div class="saveDate">
              {{ item.date.time }} {{ item.date.month }}/{{ item.date.day }}/{{
                item.date.year
              }}
            </div>
          </div>
          <div
            class="savedCubeListButtons d-flex justify-content-between gap-1"
          >
            <button
              class="button-secondly flex-grow-1"
              data-bs-target="#deleteWarning"
              data-bs-toggle="modal"
            >
              {{ ln.delete }}
            </button>
            <button
              class="button-primary flex-grow-1"
              @click="this.importData(item.data)"
              type="button"
              data-bs-dismiss="offcanvas"
            >
              {{ ln.import }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--delet warning modal-->
  <div
    class="modal fade"
    id="deleteWarning"
    tabindex="-1"
    aria-labelledby="deleteWarningLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteWarningLabel">{{ ln.warning }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">{{ ln.warningText }}</div>
        <div class="modal-footer">
          <button type="button" class="button-secondly" data-bs-dismiss="modal">
            {{ ln.no }}
          </button>
          <button
            type="button"
            class="button-primary"
            data-bs-dismiss="modal"
            @click="savedCubeList.list.splice(index, 1)"
          >
            {{ ln.yes }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ln } from "./Stores/Language";
import { cubeState } from "./Stores/CubeState";
import { savedCubeList } from "./Stores/SavedCubeList";

export default {
  data() {
    return {
      saveSettingName: "",
      ln: ln(),
      cubeState: cubeState(),
      savedCubeList: savedCubeList(),
      srcBase: "http://cube.rider.biz/visualcube.php?size=50&fmt=svg",
    };
  },
  methods: {
    addtoList() {
      this.today = new Date();
      this.savedCubeList.list[this.savedCubeList.list.length] = JSON.parse(
        JSON.stringify({
          name: this.saveSettingName,
          data: this.cubeState.$state,
          date: {
            year: this.today.getFullYear(),
            month: this.today.getMonth() + 1,
            day: this.today.getDay(),
            time: this.outputHours(
              this.today.getHours(),
              this.today.getMinutes()
            ),
          },
        })
      );
      this.saveSettingName = "";
    },
    outputHours(hours, minutes) {
      if (hours >= 12) {
        return `${hours - 12}:${minutes}PM`;
      } else {
        return `${hours}:${minutes}AM`;
      }
    },
    previewImgSrc(data) {
      return `${this.srcBase}&pzl=${data.pzl}&view=${data.view}&stage=${
        data.stage
      }-${data.stage}&r=x${data.rotation.x}y${data.rotation.y}z${
        data.rotation.z
      }&alg=${data.alg}&case=${data.case}&sch=${data.sch.u.slice(
        1
      )},${data.sch.r.slice(1)},${data.sch.f.slice(1)},${data.sch.d.slice(
        1
      )},${data.sch.l.slice(1)},${data.sch.b.slice(1)}&bg=${data.bg.slice(
        1
      )}&cc=${data.cc.slice(1)}&fd=${data.fd.u
        .slice(0, data.pzl ** 2)
        .join("")}${data.fd.r.slice(0, data.pzl ** 2).join("")}${data.fd.f
        .slice(0, data.pzl ** 2)
        .join("")}${data.fd.d.slice(0, data.pzl ** 2).join("")}${data.fd.l
        .slice(0, data.pzl ** 2)
        .join("")}${data.fd.b
        .slice(0, data.pzl ** 2)
        .join("")}${this.faceletColorOption(data)}&fo=${data.fo}&co=${
        data.co
      }&dist=${this.dist(data)}&arw=${this.arw(data)}`;
    },
    faceletColorOption(data) {
      if (
        data.fc.u.every(function (val) {
          return val == "y";
        }) &&
        data.fc.r.every(function (val) {
          return val == "r";
        }) &&
        data.fc.f.every(function (val) {
          return val == "b";
        }) &&
        data.fc.d.every(function (val) {
          return val == "w";
        }) &&
        data.fc.l.every(function (val) {
          return val == "o";
        }) &&
        data.fc.b.every(function (val) {
          return val == "g";
        })
      ) {
        return "";
      } else {
        return `&fc=${data.fc.u.slice(0, data.pzl ** 2).join("")}${data.fc.r
          .slice(0, data.pzl ** 2)
          .join("")}${data.fc.f.slice(0, data.pzl ** 2).join("")}${data.fc.d
          .slice(0, data.pzl ** 2)
          .join("")}${data.fc.l.slice(0, data.pzl ** 2).join("")}${data.fc.b
          .slice(0, data.pzl ** 2)
          .join("")}`;
      }
    },
    dist(data) {
      return (
        Math.floor(
          (-Math.pow(100000000 - data.dist ** 4, 1 / 4) + 100) * 1000
        ) /
          1000 +
        1
      );
    },
    arw(data) {
      this.temp = "";
      for (const value of data.arw) {
        this.temp = `${this.temp}${value.startpoint}${value.endpoint}${
          value.pass
        }-s${value.scale}-i${value.influence}-${value.color.slice(1)},`;
      }
      return this.temp;
    },
    importData(data) {
      this.temp = JSON.parse(JSON.stringify(data));
      this.cubeState.pzl = this.temp.pzl;
      this.cubeState.view = this.temp.view;
      this.cubeState.stage = this.temp.stage;
      this.cubeState.stageRotation = this.temp.stageRotation;
      this.cubeState.rotation = this.temp.rotation;
      this.cubeState.alg = this.temp.alg;
      this.cubeState.case = this.temp.case;
      this.cubeState.cc = this.temp.cc;
      this.cubeState.bg = this.temp.bg;
      this.cubeState.sch = this.temp.sch;
      this.cubeState.fd = this.temp.fd;
      this.cubeState.fc = this.temp.fc;
      this.cubeState.fo = this.temp.fo;
      this.cubeState.co = this.temp.co;
      this.cubeState.size = this.temp.size;
      this.cubeState.dist = this.temp.dist;
      this.cubeState.arw = this.temp.arw;
      this.cubeState.fmt = this.temp.fmt;
    },
  },
};
</script>

<style></style>
