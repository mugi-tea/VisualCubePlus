import { createApp, getTransitionRawChildren, watch } from "vue";
import { createPinia } from "pinia";
import { cubePNG, Face, Axis } from "sr-visualizer";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();
pinia.use((context) => {
  //get id
  const storeId = context.store.$id;

  const fromStorage = JSON.parse(window.localStorage.getItem(storeId));
  //save into local storage
  context.store.$subscribe((mutation, state) => {
    window.localStorage.setItem(storeId, JSON.stringify(state));

    if (Object.keys(state).length > 10 && Object.keys(state).length < 30) {
      const element = document.getElementById("visualCube");

      if (element != null) {
        element.removeChild(element.lastElementChild);

        cubePNG(element, {
          cubeSize: Number(state.pzl),
          cubeColor: state.cc,
          backgroundColor: state.bg,
          view: state.view,
          mask: state.stage,
          maskAlg: state.stageRotation,
          algorithm: state.alg,
          case: state.case,
          dist: dist(),
          height: state.size,
          width: state.size,
          cubeOpacity: state.co,
          stickerOpacity: state.fo,

          stickerColors: faceletColor(),
          facelets: faceletDefinition(),

          arrows: arrow(),

          colorScheme: {
            [Face.U]: state.sch.u,
            [Face.R]: state.sch.r,
            [Face.F]: state.sch.f,
            [Face.D]: state.sch.d,
            [Face.L]: state.sch.l,
            [Face.B]: state.sch.b,
          },

          viewportRotations: [
            [Axis.X, state.rotation.x],
            [Axis.Y, state.rotation.y],
            [Axis.Z, state.rotation.z],
          ],
        });
      }
    }

    function faceletDefinition() {
      if (
        state.fd.u.every(function (val) {
          return val == "u";
        }) &&
        state.fd.r.every(function (val) {
          return val == "r";
        }) &&
        state.fd.f.every(function (val) {
          return val == "f";
        }) &&
        state.fd.d.every(function (val) {
          return val == "d";
        }) &&
        state.fd.l.every(function (val) {
          return val == "l";
        }) &&
        state.fd.b.every(function (val) {
          return val == "b";
        })
      ) {
        return null;
      } else {
        let temp = [];
        return temp.concat(
          state.fd.u.slice(0, state.pzl ** 2),
          state.fd.r.slice(0, state.pzl ** 2),
          state.fd.f.slice(0, state.pzl ** 2),
          state.fd.d.slice(0, state.pzl ** 2),
          state.fd.l.slice(0, state.pzl ** 2),
          state.fd.b.slice(0, state.pzl ** 2)
        );
      }
    }
    function faceletColor() {
      if (
        state.fc.u.every(function (val) {
          return val == "#ffff00";
        }) &&
        state.fc.r.every(function (val) {
          return val == "#ff0000";
        }) &&
        state.fc.f.every(function (val) {
          return val == "#0000f3";
        }) &&
        state.fc.d.every(function (val) {
          return val == "#ffffff";
        }) &&
        state.fc.l.every(function (val) {
          return val == "#ffa100";
        }) &&
        state.fc.b.every(function (val) {
          return val == "#00d800";
        })
      ) {
        return null;
      } else {
        let temp = [];
        return temp.concat(
          state.fc.u.slice(0, state.pzl ** 2),
          state.fc.r.slice(0, state.pzl ** 2),
          state.fc.f.slice(0, state.pzl ** 2),
          state.fc.d.slice(0, state.pzl ** 2),
          state.fc.l.slice(0, state.pzl ** 2),
          state.fc.b.slice(0, state.pzl ** 2)
        );
      }
    }
    function arrow() {
      let temp = "";
      state.arw.forEach((element) => {
        temp += `${element.startpoint}${element.endpoint}${element.pass}-s${
          element.scale
        }-i${element.influence}-${element.color.slice(1)},`;
      });

      return temp;
    }
    function dist() {
      return (
        Math.floor(
          (-Math.pow(100000000 - state.dist ** 4, 1 / 4) + 100) * 1000
        ) /
          1000 +
        1
      );
    }
  });

  //call from local storage
  if (fromStorage) {
    context.store.$patch(fromStorage);
  }
});
app.use(pinia);
app.mount("#app");
