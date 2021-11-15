<template>
  <v-card height="auto">
    <v-footer>
      <v-card flat tile width="100%" class="red lighten-1 text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text text-h4">
          {{ new Date().getFullYear() }}
        </v-card-text>
      </v-card>
    </v-footer>

    <v-row align="center" justify="center" class="ma-4">
      <v-col>
        <div>
          <span class="spantitle">소개</span>
        </div>
        <div class="IntroduceContainer">
          <span class="IntroduceSpan">
            <h3>Name: 최창영</h3>
            <h3>Age: 26</h3>
            <img src="../images/sunset.jpg" />
          </span>
        </div>
        <v-divider class="ma-10"></v-divider>
        <div>
          <span class="spantitle">자격증</span>
        </div>
        <div class="IntroduceContainer">
          <span class="cardSpan">
            <h3>Name: 최창영</h3>
            <h3>Age: 26</h3>
          </span>
        </div>
        <v-divider></v-divider>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    variant: "default",
  }),
};
</script>

<style>
@font-face {
  font-family: "GowunDodum-Regular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
div {
  font-family: "GowunDodum-Regular";
}

.imgContainer {
  position: absolute;
  width: 100%;
  height: 300px;
  overflow: hidden;
  clip: rect(202px, 220px, 220px, 20px);
}
.titleContainer {
  font-size: 20px;
  font-weight: bold;
}
.spantitle {
  font-size: 50px;
  margin-top: 40px;
}

.cardSpan {
  margin-top: 140px;
}
</style>
