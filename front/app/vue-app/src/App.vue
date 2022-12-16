<template>
  <NavBar />
  <Editor />
  <Footer />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Editor from "./components/Editor.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    NavBar,
    Editor,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
