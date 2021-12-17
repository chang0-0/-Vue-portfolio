<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="dark-lighten-1" dark v-bind="attrs" v-on="on">
        Add New Project
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <span class="text-h5">Add s New Project</span>
      </v-card-title>

      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="folder"
            :rules="inputRules"
          ></v-text-field>
          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-textarea>

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
                label="Date"
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

          <v-btn class="success mx-0 mt-3" @click="submit">Add Project </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
//import { db } from "../firebase/db";
import format from "date-fns/format";

export default {
  data() {
    return {
      title: "",
      content: "",
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu2: false,
    };
  },

  // methods: {
  //   async submit() {
  //     if (this.$refs.form.validate()) {
  //       const project = {
  //         title: this.title,
  //         content: this.content,
  //         date: format(this.date, "DD/MM/YYYY"),
  //       };
  //       db.collection("projects")
  //         .add(project)
  //         .then(() => {
  //           console.log("added to db");
  //         })
  //         .set({ title: this.title, content: this.content, data: this.date })
  //         .then(function () {
  //           console.log("saved!");
  //         })
  //         .catch(function (error) {
  //           console.log("Error writing document: ", error);
  //         });
  //     }
  //   },
  // },

  computed: {
    formattedDate() {
      return this.date ? format(this.date, "DD/MM/YYYY") : "";
    },
  },
};
</script>
