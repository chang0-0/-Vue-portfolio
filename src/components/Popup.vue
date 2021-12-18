<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="dark-lighten-1" dark v-bind="attrs" v-on="on">
        Add New Project
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <span class="text-h5">Add New Project</span>
      </v-card-title>

      <v-card-text>
        <v-form class="px-3">
          <v-text-field
            label="Title"
            v-model="newProject"
            prepend-icon="folder"
          ></v-text-field>
          <v-text-field
            label="Person"
            v-model="person"
            prepend-icon="edit"
          ></v-text-field>

          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Due Date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu>

          <v-col class="select" cols="2" sm="5">
            <v-select
              v-model="state"
              :items="items"
              label="State"
              prepend-icon="mdi-flag"
            ></v-select>
          </v-col>

          <v-btn class="success mx-0 mt-3" @click="addProject"
            >Add Project
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { db } from "../firebase/db";

//import { format } from "date-fns/format";

export default {
  data() {
    return {
      Projects: [],
      newProject: "",
      person: "",
      date: null,
      state: null,
      items: ["complete", "ongoing"],

      // date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      //   .toISOString()
      //   .substr(0, 10),
      //menu2: false,
    };
  },
  methods: {
    async addProject() {
      if (this.newProject) {
        await db.collection("Projects").add({
          title: this.newProject,
          person: this.person,
          date: this.date,
          state: this.state,
        });
        this.newProject = "";
        this.person = "";
        this.date = null;
        this.state = "";
      }
    },
  },
  computed: {
    // formattedDate() {
    //   return this.date ? format(this.date, "YYYY") : null;
    // },
  },

  firestore: {
    Projects: db.collection("Projects"),
  },
};
</script>

<style lang="scss">
.select {
  margin-left: -12px;
}
</style>
