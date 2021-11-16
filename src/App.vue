<template>
  <v-app>
    <Navbar></Navbar>
    <v-content class="">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped></style>
