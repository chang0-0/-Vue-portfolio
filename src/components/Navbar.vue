<template>
  <nav>
    <v-toolbar dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"> </v-app-bar-nav-icon>

      <v-toolbar-title> YOUNG </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-layout column align-center>
        <v-flex class="mt-4">
          <v-avatar size="100">
            <img src="../assets/images/iceburg.jpg" />
          </v-avatar>
          <p class="white--gray subheading pl--3 mt-3">YOUNG</p>
        </v-flex>

        <v-flex class="mt-4 mb-5">
          <Popup></Popup>
        </v-flex>
      </v-layout>

      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="light-blue--text text-darken-4"
        >
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.router">
            <v-list-item-icon>
              <v-icon>{{ item.icon }} </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup.vue";
export default {
  components: { Popup },
  data: () => ({
    drawer: false,
    group: null,
    items: [
      { icon: "mdi-account", text: "It's Me", router: "/" },
      { icon: "mdi-domain", text: "Dashboard", router: "/dashboard" },
      { icon: "mdi-inbox", text: "My Project", router: "/project" },
      // { icon: "mdi-account", text: "Team", router: "/team" },
      { icon: "mdi-school", text: "School", router: "/school" },
      { icon: "mdi-fire", text: "Fire", router: "/firebase-test" },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
