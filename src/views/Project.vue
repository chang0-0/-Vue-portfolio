<template>
  <div class="project">
    <h1>Project</h1>

    <v-container>
      <v-expansion-panels>
        <v-expansion-panel v-for="project in projects" :key="project.title">
          <v-expansion-panel-header>
            {{ project.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="font-weight-bold">Due By {{ project.due }}</div>
            <img :src="project.image1" />
            <img :src="project.image2" />
            <div>{{ project.content }}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
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
        },
        {
          title: "안드로이드 독서기록 어플리케이션",
          person: "Young",
          due: "2019.10",
          state: "complete",
          image1: require("../assets/images/sunset.jpg"),
          image2: require("../assets/images/sunset.jpg"),
        },
        {
          title: "토익테스트 웹 프로그램",
          person: "Young",
          due: "2020.04",
          state: "complete",
          image1: require("../assets/images/sunset.jpg"),
          image2: require("../assets/images/sunset.jpg"),
        },
        {
          title: "해파리 프로젝트",
          person: "FrontEnd: Young, BackEnd: 백경준",
          due: "2020.10",
          state: "complete",
          image1: require("../assets/images/sunset.jpg"),
          image2: require("../assets/images/sunset.jpg"),
        },
        {
          title: "ColorPaper",
          person: "Young",
          due: "2021.04 ~",
          state: "ongoing",
          image1: require("../assets/images/sunset.jpg"),
          image2: require("../assets/images/sunset.jpg"),
        },
        {
          title: "포트폴리오제작",
          person: "Young",
          due: "2021.10~",
          state: "ongoing",
          image1: require("../assets/images/sunset.jpg"),
          image2: require("../assets/images/sunset.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss">
img {
  margin-top: 40px;
  width: 70%;
}
</style>
