<template>
  <div class="team">
    <h1>Team</h1>
    <v-container>
      <v-row wrap>
        <v-col
          cols="12"
          sm="4"
          md="3"
          v-for="person in team"
          :key="person.name"
        >
          <v-card flat outlined class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100">
                <!-- 이미지 영역 -->
                <img :src="person.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "캡틴아메리카",
          role: "web Developer Team Leader",
          avatar: "/captinAmerica.jpg",
        },
        { name: "아이언맨", role: "Graphic", avatar: "/ironman.jpg" },
        { name: "헐크", role: "Database Developer", avatar: "/hulk.jpg" },
        { name: "스파이더만", role: "Back-End", avatar: "/spiderman.jpg" },
        {
          name: "닥터스트레인지",
          role: "Front-End",
          avatar: "/doctorStrange.jpg",
        },
      ],
    };
  },
};
</script>
