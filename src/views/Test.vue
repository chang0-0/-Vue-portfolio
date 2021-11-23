<template>
  <div class="test">
    <h1>Test</h1>
    <v-container>
      <v-row justify="test" class="ma-12">
        <v-expansion-panels inset>
          <v-expansion-panel
            class="mb-5"
            v-for="project in projects"
            :key="project.title"
          >
            <v-expansion-panel-header>
              <div class="titleContainer">
                {{ project.title }}
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="Due">Due By {{ project.due }}</div>
              <div>{{ project.content }}</div>
              <img :src="project.image1" />
              <img :src="project.image2" />
              <img :src="project.image3" />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "부산광역시 정보고속망 네트워크 시뮬레이션",
          person: "Young",
          due: "2019.09",
          state: "complete",
          image1: require("../assets/images/project1-1.jpg"),
          image2: require("../assets/images/project1-2.jpg"),
          image3: "",
        },
        {
          title: "안드로이드 독서기록 어플리케이션",
          person: "Young",
          due: "2019.10",
          state: "complete",
          image1: require("../assets/images/project2-1.jpg"),
          image2: "",
          image3: "",
        },
        {
          title: "토익테스트 웹 프로그램",
          person: "Young",
          due: "2020.04",
          state: "complete",
          image1: require("../assets/images/project3-1.jpg"),
          image2: require("../assets/images/project3-2.jpg"),
          image3: "",
        },
        {
          title: "해파리 프로젝트",
          person: "FrontEnd: Young, BackEnd: 백경준",
          due: "2020.10",
          state: "complete",
          image1: require("../assets/images/project4-1.jpg"),
          image2: require("../assets/images/project4-2.jpg"),
          image3: require("../assets/images/project4-3.jpg"),
        },
        {
          title: "ColorPaper",
          person: "Young",
          due: "2021.04 ~",
          state: "ongoing",
          image1: require("../assets/images/project5-1.jpg"),
          image2: require("../assets/images/project5-2.jpg"),
          image3: require("../assets/images/project5-3.jpg"),
        },
        {
          title: "포트폴리오제작",
          person: "Young",
          due: "2021.10~",
          state: "ongoing",
          image1: "",
          image2: "",
          image3: "",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
img {
  margin-top: 40px;
  width: 100%;
}
</style>
