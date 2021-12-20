<template>
  <div class="project2">
    <h1>Project</h1>
    <v-container>
      <v-btn small plain @click="sortBy('date')">
        <v-icon dark class="mr-3">date_range</v-icon>
        <span> by date </span>
      </v-btn>
      <v-row justify="test2" class="ma-6">
        <v-expansion-panels inset>
          <v-expansion-panel
            class="mt-1"
            v-for="project in Project_detail"
            :key="project.id"
          >
            <v-expansion-panel-header id="v-expansion-panel-header">
              <div class="titleContainer">
                {{ project.title }}
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="date">Due By {{ project.date }}</div>
              <div class="content">
                프로젝트 내용
                <div class="content_in">{{ project.content }}</div>
              </div>
              <div class="tech">
                사용 기술
                <div class="tech_in">{{ project.tech }}</div>
              </div>
              <div class="planning">
                프로젝트 설계
                <div class="planning_in">{{ project.planning }}</div>
              </div>
              <img :src="require(`../assets/images/${project.image1}.jpg`)" />

              <img v-if="`${project.image2}` === ''" />
              <img
                v-else
                :src="require(`../assets/images/${project.image2}.jpg`)"
              />

              <img v-if="`${project.image3}` === ''" />
              <img
                v-else
                :src="require(`../assets/images/${project.image3}.jpg`)"
              />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { db } from "../firebase/db";

export default {
  data() {
    return {
      Project_detail: [],
      newProject: "",
    };
  },
  methods: {
    async addProject() {
      if (this.newProject) {
        await db.collection("Project_detail").add({
          title: this.newProject,
        });
        this.newProject = "";
      }
    },
    // 삭제
    deleteProject(id) {
      db.collection("Project_detail").doc(id).delete();
    },
    sortBy(prop) {
      this.Project_detail.sort((a, b) => (a[prop] > b[prop] ? -1 : 1));
    },
  },

  firestore: {
    Project_detail: db.collection("Project_detail"),
  },
};
</script>

<style lang="scss">
img {
  margin-top: 40px;
  width: 100%;
}

#v-expansion-panel-header {
  color: rgb(73, 73, 73);
  .titleContainer {
    font-size: 2.2vh;
  }
}

.content {
  margin-top: 20px;
  font-family: "Cafe24Dangdanghae";
  font-weight: 800;
  font-size: 1.9vh;
  color: black;

  .content_in {
    font-family: "Cafe24SsurroundAir";
    color: rgb(94, 94, 94);
    font-weight: 500 !important;
  }
}

.tech {
  margin-top: 20px;
  font-family: "Cafe24Dangdanghae";
  font-weight: 800;
  font-size: 1.9vh;
  color: black;

  .tech_in {
    font-family: "Cafe24SsurroundAir";
    color: rgb(94, 94, 94);
    font-weight: 500 !important;
  }
}

.planning {
  margin-top: 20px;
  font-family: "Cafe24Dangdanghae";
  font-weight: 800;
  font-size: 1.9vh;
  color: black;

  .planning_in {
    font-family: "Cafe24SsurroundAir";
    color: rgb(94, 94, 94);
    font-weight: 500 !important;
  }
}

v-expansion-panels {
  width: 1400px;
}

::v-expansion-panel-header {
  .titleContainer {
    font-size: 40px;
    color: rgb(73, 73, 73);
    color: red;
  }
}
</style>
