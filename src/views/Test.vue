<template>
  <v-row justify="test" class="ma-12">
    <v-expansion-panels inset>
      <v-expansion-panel class="mb-5" v-for="test in tests" :key="test.title">
        <div class="imgContainer">
          <img src="../images/sunset.jpg" />
        </div>
        <v-expansion-panel-header>
          <div class="titleContainer">
            {{ test.title }}
          </div>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="font-weight-bold">Due By {{ test.due }}</div>

          <div>{{ test.content }}</div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      tests: [
        {
          title: "부산광역시 정보고속도로",
          person: "My Team1",
          due: "2020.11.12",
          state: "complete",
          content: "내용입니다.",
          avatar: "/간판.jpg",
        },
        {
          title: "프로젝트2",
          person: "Only me",
          due: "2020.11.12",
          state: "complete",
          content: "내용입니다.",
          avatar: "../images/sunset.jpg",
        },
        {
          title: "프로젝트3",
          person: "My Team3",
          due: "2020.11.12",
          state: "complete",
          content: "내용입니다.",
          avatar: "/doctorStrange.jpg",
        },
        {
          title: "프로젝트4",
          person: "My Team4",
          due: "2020.11.12",
          state: "complete",
          content: "내용입니다.",
          avatar: "/doctorStrange.jpg",
        },
        {
          title: "프로젝트5",
          person: "Only me",
          due: "2020.11.12",
          state: "complete",
          content: "내용입니다.",
          avatar: "/doctorStrange.jpg",
        },
        {
          title: "포트폴리오제작",
          person: "CHANG YOUNG",
          due: "2021.10.01",
          state: "ongoing",
          content: "내용입니다.",
          avatar: "/doctorStrange.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.imgContainer {
  position: inherit;
  width: 100%;
  height: 300px;
  overflow: hidden;
  clip: rect(202px, 220px, 220px, 20px);
}
.titleContainer {
  font-size: 20px;
  font-weight: bold;
}
</style>
