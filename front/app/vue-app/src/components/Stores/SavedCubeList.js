import { defineStore } from "pinia";

export const savedCubeList = defineStore("savedCubeList", {
  state: () => ({
    list: [],
  }),
});
