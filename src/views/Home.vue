<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

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
          <v-btn small plain @click="sortBy('due')">
            <v-icon dark class="mr-3">date_range</v-icon>
            <span> by due </span>
          </v-btn>
        </v-row>

        <v-card
          flat
          class="white"
          enable-transition
          outlined
          v-for="project in projects"
          :key="project.title"
        >
          <v-row no-gutters :class="`pa-5 project ${project.state}`">
            <v-col cols="12" md="6">
              <div class="caption grey--text">Project Title</div>
              <div>{{ project.title }}</div>
            </v-col>
            <v-col cols="4" md="2" sm="4">
              <div class="caption grey--text">Person</div>
              <div>{{ project.person }}</div>
            </v-col>
            <v-col cols="8" md="2" sm="5">
              <div class="caption grey--text">Due</div>
              <div>{{ project.due }}</div>
            </v-col>
            <v-col cols="4" md="2" sm="5">
              <div class="caption grey--text">State</div>
              <div :class="`${project.state} state`">{{ project.state }}</div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </v-card>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "부산광역시 정보고속망 네트워크 시뮬레이션",
          person: "최창영",
          due: "2019.09",
          state: "complete",
        },
        {
          title: "프로젝트2",
          person: "Only me",
          due: "2020.11.12",
          state: "complete",
        },
        {
          title: "프로젝트3",
          person: "My Team3",
          due: "2020.11.12",
          state: "complete",
        },
        {
          title: "프로젝트4",
          person: "My Team4",
          due: "2020.11.12",
          state: "complete",
        },
        {
          title: "프로젝트5",
          person: "Only me",
          due: "2020.11.12",
          state: "complete",
        },
        {
          title: "포트폴리오제작",
          person: "CHANG YOUNG",
          due: "2021.10.01",
          state: "ongoing",
        },
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] > b[prop] ? -1 : 1));
    },
  },
};
</script>

<style>
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
</style>
