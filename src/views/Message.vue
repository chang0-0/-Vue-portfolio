<template>
  <div class="MessagePage">
    <h1 class="MessagePageTitle">Message</h1>
    <v-menu offset-y v-model="menuValue"> </v-menu>
    <div class="MessageBody">
      <v-row class="MessageInputSection">
        <v-col cols="6">
          <v-text-field
            class="MessageTitleInput"
            label="New Message"
            color="rgb(100,140,200)"
            outlined
            v-model="newMessage"
            @keyup.enter="addMessage"
          >
          </v-text-field>
        </v-col>
        <v-col cols="1">
          <v-btn
            class="MessageButton"
            color="rgb(255, 255, 255)"
            @click="addMessage"
            >Write Message</v-btn
          >
        </v-col>
      </v-row>
      <v-col cols="6" class="MessageContentSection">
        <v-container fluid>
          <v-textarea
            clearable
            clear-icon="mdi-close-circle"
            label="content"
            v-model="content"
            value="Message Content"
          ></v-textarea>
        </v-container>
      </v-col>

      <transition-group name="fade" class="MessageItemListSection">
        <v-card
          class="MessageCard"
          max-width="400"
          v-for="Message in Messages"
          :key="Message.id"
        >
          <v-row class="MessageItemV-row">
            <v-cols cols="10" class="MessageItemTitleCols">
              <v-list-item-title class="MessageItemTitle">
                {{ Message.title }}
              </v-list-item-title>
            </v-cols>
            <v-cols cols="10" class="MessageItemContentCols">
              <v-list-item-title class="MessageItemContent">
                {{ Message.content }}
              </v-list-item-title>
            </v-cols>
            <v-cols cols="4" class="MessageDeleteSection">
              <v-btn
                small
                icon
                color="red"
                @click="deleteMessage(Message.id)"
                class="MessageDeleteButton"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-cols>
          </v-row>
        </v-card>
        <h1>TEST</h1>
      </transition-group>

      <vue-dropzone
        class="ImageDropSection"
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
  </div>
</template>

<script>
import { db } from "../firebase/db";
//import firebase from "firebase/compat/app";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
let uuid = require("uuid");

export default {
  name: "FireMessage",
  components: {
    vueDropzone: vue2Dropzone,
  },
  data() {
    return {
      Messages: [],
      newMessage: "",
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
    async addMessage() {
      if (this.newMessage) {
        await db.collection("Messages").add({
          title: this.newMessage,
          content: this.content,
        });
        this.newMessage = "";
        this.content = "";
      }
    },
    // 삭제
    deleteMessage(id) {
      db.collection("Messages").doc(id).delete();
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
    Messages: db.collection("Messages"),
  },
};
</script>

<style lang="scss">
.MessagePage {
  position: relative;
  padding-top: 40px;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  .MessagePageTitle {
    margin-left: 40px;
    font-weight: 900;
    font-family: "GowunDodum-Regular";
  }

  .MessageBody {
    position: relative;
    left: 36%;
    width: 100%;

    .MessageInputSection {
      width: 900px;

      .MessageTitleInput {
        justify-content: center;
        align-items: center;
      }

      .MessageButton {
        color: lightsalmon;
        background-color: rgb(255, 255, 255);
        margin-top: 8px;
      }
    }

    .MessageContentSection {
      margin-left: -47px;
      width: 600px;
    }

    .MessageItemListSection {
      text-align: center;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: auto;

      .MessageCard {
        .MessageItemV-row {
          text-align: center;
          justify-content: center;
          align-items: center;
          margin-top: 40px;

          .MessageItemTitleCols {
            text-align: center;
            justify-content: center;
            align-items: center;

            .MessageItemTitle {
              font-family: "GowunDodum-Regular";
              font-weight: 900;
              font-size: 20px;
            }
          }

          .MessageItemContentCols {
            text-align: center;
            justify-content: center;
            align-items: center;

            .MessageItemContent {
              font-family: "GowunDodum-Regular";
              font-weight: 900;
              font-size: 15px;
            }
          }

          .MessageDeleteSection {
            text-align: center;
            justify-content: center;
            align-items: center;
            .MessageDeleteButton {
              left: 140%;
            }
          }
        }
      }
    }
  }

  .ImageDropSection {
    align-content: center;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 1200px;
    margin-top: 80px;
    height: 300px;
    margin-left: -330px;
  }
}
</style>
