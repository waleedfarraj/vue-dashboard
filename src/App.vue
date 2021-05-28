<template>
  <v-app
    style="
    color: #696771;
    background: #51A2D2;"
  >
    <Header />
    <v-main>
      <WidgetMaker />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import WidgetMaker from "./components/WidgetMaker";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    WidgetMaker,
    Footer,
    Header
  },
  data: () => ({
    //
  })
};
</script>
