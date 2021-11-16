<template>
  <div class="meBody"></div>
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

.meBody {
  font-family: "GowunDodum-Regular";
}

/* .imgContainer {
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
} */
</style>

<!-- <v-row align="center" justify="center" class="ma-4">
    <v-col>
      <div>
        <span class="spantitle">소개</span>
      </div>
      <div class="IntroduceContainer">
        <span class="IntroduceSpan">
          <h3>Name: 최창영</h3>
          <h3>Age: 26</h3>
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
  </v-row> -->
