<template>
  <div class="pt-3">
    <v-row class="d-flex justify-center">
      <v-col cols="6">
        <v-text-field
          label="New Project"
          outlined
          v-model="newProject"
          @keyup.enter="addProject"
        >
        </v-text-field>
      </v-col>
      <v-col cols="1">
        <v-btn large color="primary" @click="addProject">Add</v-btn>
      </v-col>
    </v-row>
    <transition-group name="fade">
      <v-card
        class="mx-auto pa-3 ma-2 text-center"
        max-width="400"
        v-for="Project in Projects"
        :key="Project.id"
      >
        <v-row>
          <v-cols cols="8">
            <v-list-item-title class="headline mb-1"
              >{{ Project.title }}
            </v-list-item-title></v-cols
          >
          <v-cols cols="4">
            <v-btn icon color="red" @click="deleteProject(Project.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-cols>
        </v-row>
      </v-card>
    </transition-group>

    <vue-dropzone
      ref="imgDropzone"
      :options="dropzoneOptions"
      @vdropzone-complete="afterComplete"
    ></vue-dropzone>

    <div v-if="images.length > 0">
      <div v-for="image in images" :key="image.src">
        <img :src="iamge.src" />
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/db";
//import firebase from "firebase/compat/app";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
let uuid = require("uuid");

export default {
  name: "FireTest",
  components: {
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      Projects: [],
      newProject: "",
      images: [],
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        addRemoveLinks: false,
        acceptedFiles: ".jpg, .jpeg, .png",
      },
    };
  },
  methods: {
    // 추가
    async addProject() {
      if (this.newProject) {
        await db.collection("Projects").add({
          title: this.newProject,
        });
        this.newProject = "";
      }
    },
    // 삭제
    deleteProject(id) {
      db.collection("Projects").doc(id).delete();
    },

    async afterComplete(file) {
      try {
        const imageName = uuid.v1();
        const metaData = {
          contentType: "image/png",
        };

        const storageRef = db.storage().ref();
        const imageRef = storageRef.child(`images/${imageName}.png`);

        await imageRef.put(file, metaData);

        const downloadUrl = await imageRef.getDownloadURL();
        this.images.push({ src: downloadUrl });
        this.$refs.imgDropzone.removeFile(file);
      } catch (error) {
        console.log(error);
      }
    },
  },

  firestore: {
    Projects: db.collection("Projects"),
  },
};
</script>

<style lang="scss">
.Firebody {
  position: relative;
  align-content: center;
  justify-content: center;
  text-align: center;

  .input_div {
    position: absolute;
    right: 40%;
    align-content: center;
    justify-content: center;
    padding: 40px;
    width: 540px;
  }
}
</style>
