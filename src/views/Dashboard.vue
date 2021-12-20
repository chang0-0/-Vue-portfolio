<template>
  <div class="DashboardPage">
    <h1 class="DashboardPageTitle">Dashboard</h1>

    <v-content>
      <v-container class="my-3 mt-12">
        <v-row class="mb-3">
          <v-btn small plain @click="sortBy('title')">
            <v-icon dark class="mr-3">sort</v-icon>
            <span> by project title </span>
          </v-btn>
          <v-btn small plain @click="sortBy('person')">
            <v-icon dark class="mr-3">person</v-icon>
            <span> by developer </span>
          </v-btn>
          <v-btn small plain @click="sortBy('date')">
            <v-icon dark class="mr-3">date_range</v-icon>
            <span> by date </span>
          </v-btn>
        </v-row>

        <v-card
          flat
          class="white"
          enable-transition
          outlined
          v-for="Project in Projects"
          :key="Project.id"
        >
          <v-row no-gutters :class="`pa-5 project ${Project.state}`">
            <v-col cols="12" md="6">
              <div class="caption grey--text">Project Title</div>
              <div class="DashboardPageProject.title">{{ Project.title }}</div>
            </v-col>
            <v-col cols="4" md="2" sm="4">
              <div class="caption grey--text">Person</div>
              <div>{{ Project.person }}</div>
            </v-col>
            <v-col cols="8" md="2" sm="5">
              <div class="caption grey--text">Date</div>
              <div>{{ Project.date }}</div>
            </v-col>
            <v-col cols="4" md="2" sm="5">
              <div class="caption grey--text">State</div>
              <div :class="`${Project.state} state`">
                {{ Project.state }}

                <v-cols cols="4" class="deleteSection">
                  <v-btn
                    icon
                    color="rgb(100,200,200)"
                    @click="deleteProject(Project.id)"
                    large
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-cols>
              </div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </v-card>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import { db } from "../firebase/db";

export default {
  data() {
    return {
      // projects: [
      //   {
      //     title: "부산광역시 정보고속망 네트워크 시뮬레이션",
      //     person: "Young",
      //     due: "2019.09",
      //     state: "complete",
      //   },
      //   {
      //     title: "안드로이드 독서기록 어플리케이션",
      //     person: "Young",
      //     due: "2019.10",
      //     state: "complete",
      //   },
      //   {
      //     title: "토익테스트 웹 프로그램",
      //     person: "Young",
      //     due: "2020.04",
      //     state: "complete",
      //   },
      //   {
      //     title: "해파리 프로젝트",
      //     person: "FrontEnd: Young, BackEnd: 백경준",
      //     due: "2020.10",
      //     state: "complete",
      //   },
      //   {
      //     title: "ColorPaper",
      //     person: "Young",
      //     due: "2021.04 ~",
      //     state: "ongoing",
      //   },
      //   {
      //     title: "포트폴리오제작",
      //     person: "Young",
      //     due: "2021.10~",
      //     state: "ongoing",
      //   },
      // ],
      Projects: [],
      newProject: "",
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
    sortBy(prop) {
      this.Projects.sort((a, b) => (a[prop] > b[prop] ? -1 : 1));
    },
  },

  firestore: {
    Projects: db.collection("Projects"),
  },
};
</script>

<style lang="scss">
.DashboardPage {
  margin-top: 40px;

  .DashboardPageTitle {
    margin-left: 40px;
    font-weight: 900;
    font-family: "GowunDodum-Regular";
  }

  .DashboardPageProject.title {
    font-size: 200px;
  }

  .deleteSection {
    margin-left: 40px;
    padding-left: 30px;
  }
}

@font-face {
  font-family: "GowunDodum-Regular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

.project.complete {
  border-left: 4px solid coral;
}
.project.ongoing {
  border-left: 4px solid #ffc107;
}
.state.complete {
  color: coral;
}
.state.ongoing {
  color: #ffc107;
}

div {
  font-family: "GowunDodum-Regular";
}
</style>
