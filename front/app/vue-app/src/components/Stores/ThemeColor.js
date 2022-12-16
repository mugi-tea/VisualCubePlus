import { defineStore } from "pinia";

export const themeColor = defineStore("themeColor", {
  state: () => ({
    color: "#303b73",
  }),
});
