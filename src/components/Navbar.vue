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
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      { icon: "mdi-domain", text: "Dashboard", router: "/" },
      { icon: "mdi-inbox", text: "My Project", router: "/project" },
      { icon: "mdi-account", text: "Team", router: "/team" },
      { icon: "mdi-school", text: "School", router: "/school" },
      { icon: "mdi-circle", text: "Test", router: "/test" },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
