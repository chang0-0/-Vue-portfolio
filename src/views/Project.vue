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
          title: "프로젝트1",
          person: "My Team1",
          due: "2020.11.12",
          state: "complete",
          content: "내용입니다.",
          avatar: "/doctorStrange.jpg",
        },
        {
          title: "프로젝트2",
          person: "Only me",
          due: "2020.11.12",
          state: "complete",
          content: "내용입니다.",
          avatar: "/doctorStrange.jpg",
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
