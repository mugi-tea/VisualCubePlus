import { defineStore } from "pinia";

export const cubeState = defineStore("cubeState", {
  state: () => ({
    pzl: 3,
    view: "",
    stage: "",
    stageRotation: "",
    rotation: {
      x: -43,
      y: 36,
      z: 28,
    },
    alg: "",
    case: "",
    cc: "#000000",
    bg: "#ffffff",
    sch: {
      u: "#ffff00",
      r: "#ff0000",
      f: "#0000f3",
      d: "#ffffff",
      l: "#ffa100",
      b: "#00d800",
      n: "#404040",
      o: "#808080",
      t: "#ffffff",
    },
    fd: {
      u: [...Array(100)].map(() => "u"),
      r: [...Array(100)].map(() => "r"),
      f: [...Array(100)].map(() => "f"),
      d: [...Array(100)].map(() => "d"),
      l: [...Array(100)].map(() => "l"),
      b: [...Array(100)].map(() => "b"),
    },
    fc: {
      u: [...Array(100)].map(() => "#ffff00"),
      r: [...Array(100)].map(() => "#ff0000"),
      f: [...Array(100)].map(() => "#0000f3"),
      d: [...Array(100)].map(() => "#ffffff"),
      l: [...Array(100)].map(() => "#ffa100"),
      b: [...Array(100)].map(() => "#00d800"),
    },
    dafaultFacelets: {
      u: [...Array(100)].map(() => "u"),
      r: [...Array(100)].map(() => "r"),
      f: [...Array(100)].map(() => "f"),
      d: [...Array(100)].map(() => "d"),
      l: [...Array(100)].map(() => "l"),
      b: [...Array(100)].map(() => "b"),
    },
    fo: 100,
    co: 100,
    size: 300,
    dist: 62.31,
    arw: [],
    arwTemp: {
      startpoint: "",
      pass: "",
      endpoint: "",
      scale: 9,
      influence: 9,
      color: "#bfbfbf",
    },
    fmt: "svg",
  }),
  actions: {
    rotationRange() {
      if (this.rotation.x >= 180) {
        this.rotation.x = 180;
      }
      if (this.rotation.x <= -180) {
        this.rotation.x = -180;
      }
      if (this.rotation.y >= 180) {
        this.rotation.y = 180;
      }
      if (this.rotation.y <= -180) {
        this.rotation.y = -180;
      }
      if (this.rotation.z >= 180) {
        this.rotation.z = 180;
      }
      if (this.rotation.z <= -180) {
        this.rotation.z = -180;
      }
    },

    addArrow() {
      this.arw[this.arw.length] = JSON.parse(JSON.stringify(this.arwTemp));
    },
  },
});
