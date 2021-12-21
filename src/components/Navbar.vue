<template>
  <nav>
    <v-toolbar dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"> </v-app-bar-nav-icon>

      <v-toolbar-title> YOUNG </v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn> -->
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-layout column align-center>
        <v-flex class="AvatarSection">
          <div size="160" class="Avatar">
            <img src="../assets/images/colorpaper.jpg" />
          </div>
          <p class="AvatarSectionName">Young</p>
        </v-flex>

        <v-flex class="PopupSection">
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
      { icon: "mdi-human-greeting-variant", text: "It's Me", router: "/" },
      { icon: "mdi-clipboard", text: "Dashboard", router: "/dashboard" },
      { icon: "mdi-projector-screen", text: "My Project", router: "/project" },
      // { icon: "mdi-account", text: "Team", router: "/team" },
      { icon: "mdi-message", text: "Message", router: "/message" },
      // { icon: "mdi-fire", text: "Fire", router: "/firebase-test" },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss">
img {
  size: 40%;
}

.AvatarSection {
  text-align: center;
  justify-content: center;
  align-items: center;
  position: abolute;
  width: auto;
  height: 235px;

  .Avatar {
    border-radius: 100%;
    position: relative;
    bottom: 40%;
  }

  .AvatarSectionName {
    position: relative;
    font-weight: 600;
    font-size: 40px;
    right: 5%;
    text-decoration: underline;
    //font-family: Cafe24Dangdanghae;
    //font-family: GowunDodum-Regular;
    font-family: GowunDodum-Regular;
    bottom: 139%;
  }
}

.PopupSection {
  text-align: center;
  justify-content: center;
  align-items: center;
  position: abolute;
  margin-bottom: 38px;
  margin-top: 45px;
}
</style>
