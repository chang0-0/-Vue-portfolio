<template>
  <div class="project">
    <h1>Project</h1>
    <v-container>
      <v-row justify="test" class="ma-10">
        <v-expansion-panels inset>
          <v-expansion-panel
            class="mt-1"
            v-for="project in projects"
            :key="project.title"
          >
            <v-expansion-panel-header id="v-expansion-panel-header">
              <div class="titleContainer">
                {{ project.title }}
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="Due">Due By {{ project.due }}</div>
              <div class="content">
                프로젝트 내용
                <div class="content_in">{{ project.content }}</div>
              </div>
              <div class="tech">
                사용 기술
                <div>{{ project.tech }}</div>
              </div>
              <div class="planning">
                프로젝트 설계
                <div>{{ project.planning }}</div>
              </div>
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
          content:
            "현재 부산에 있는 '부산정보고속도로망'을 만들어 보고 직접통신망을 구축해보는 프로젝트",
          tech: "Cisco Packet Tracer",
          planning:
            "부산 시청과 소방재난본부, 구청 등을 백본링으로 구성하고 엑세스링은 보건행정센터, 경찰서 나머지는 119센터나 상수도 센터로 설정. ",
          image1: require("../assets/images/project1-1.jpg"),
          image2: require("../assets/images/project1-2.jpg"),
          image3: "",
        },
        {
          title: "안드로이드 독서기록 어플리케이션",
          person: "Young",
          due: "2019.10",
          content: "complete",
          image1: require("../assets/images/project2-1.jpg"),
          image2: "",
          image3: "",
        },
        {
          title: "토익테스트 웹 프로그램",
          person: "Young",
          due: "2020.04",
          content: "complete",
          image1: require("../assets/images/project3-1.jpg"),
          image2: require("../assets/images/project3-2.jpg"),
          image3: "",
        },
        {
          title: "해파리 프로젝트",
          person: "FrontEnd: Young, BackEnd: 백경준",
          due: "2020.10",
          content: "complete",
          image1: require("../assets/images/project4-1.jpg"),
          image2: require("../assets/images/project4-2.jpg"),
          image3: require("../assets/images/project4-3.jpg"),
        },
        {
          title: "ColorPaper",
          person: "Young",
          due: "2021.04 ~",
          content: "ongoing",
          image1: require("../assets/images/project5-1.jpg"),
          image2: require("../assets/images/project5-2.jpg"),
          image3: require("../assets/images/project5-3.jpg"),
        },
        {
          title: "포트폴리오제작",
          person: "Young",
          due: "2021.10~",
          content: "ongoing",
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

#v-expansion-panel-header {
  color: rgb(73, 73, 73);
  .titleContainer {
    font-size: 2.2vh;
  }
}

.content {
  margin-top: 20px;
  font-family: "GmarketSansTTFBold";
  font-weight: bold;
  font-size: 1.9vh;

  .content_in {
    color: rgb(94, 94, 94);
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
