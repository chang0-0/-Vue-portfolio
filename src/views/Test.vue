<template>
  <v-row justify="test" class="ma-10">
    <v-expansion-panels inset>
      <v-expansion-panel class="mb-5" v-for="test in tests" :key="test.title">
        <v-expansion-panel-header> {{ test.title }} </v-expansion-panel-header>
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
          title: "프로젝트1",
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
