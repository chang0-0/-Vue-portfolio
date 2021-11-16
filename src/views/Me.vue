<template>
  <div class="meBody">
    <div class="intro_section1">
      <span class="start_title1">PORTFOLIO</span>
      <span class="span_deco"></span>
      <span class="start_title2">Developer</span>
    </div>
    <div class="intro_section2">
      <img src="../images/sunset.jpg" />
      <div class="img_deco_copy">WEB DEVELOPMENT</div>
    </div>
    <div class="sns_section">
      <span class="sns_deco"></span>
      <ul class="sns_section_ul">
        <li class="sns_section_li">
          <a href="https://github.com/chang0-0">Git</a>
        </li>
        <li class="sns_section_li">
          <a href="https://velog.io/@lifeisbeautiful">Ve</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    variant: "default",
  }),
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "GowunDodum-Regular";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}

/* 나눔 명조 */
@font-face {
  font-family: "Nanum Myeongjo";
  font-weight: 700;
  src: url("../fonts/NanumMyeongjoBold.ttf") format("truetype");
}

/* 로보토 */
@font-face {
  font-family: "Roboto Regular";
  font-weight: 400;
  src: url("../fonts/Roboto-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "Roboto Medium";
  font-weight: 500;
  src: url("../fonts/Roboto-Medium.ttf") format("truetype");
}

@font-face {
  font-family: "Roboto Bold";
  font-weight: 700;
  src: url("../fonts/Roboto-Bold.ttf") format("truetype");
}

/*나눔스퀘어*/
@font-face {
  font-family: "NanumSquare";
  src: url("../fonts/Roboto-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "Y";
  src: url("../fonts/Y 너만을 비춤체.ttf") format("truetype");
}

@font-face {
  font-family: "SEBANG";
  src: url("../fonts/SEBANG Gothic.ttf") format("truetype");
}

.meBody {
  position: absolute;
  width: 100%;
  height: 100%;
  font-family: "Roboto-Bold" "NanumSquare", sans-serif;

  .intro_section1 {
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    color: #353535;
    position: absolute;
    margin-top: 500px;
    left: 11%;
    width: 550px;
    height: 300px;
    font-family: "Roboto-Bold" "NanumSquare", sans-serif;
    font-size: 8vw;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    z-index: 4;

    .start_title1 {
      left: 67%;
      margin-top: -190px;
      position: absolute;
      font-weight: 600;
      text-align: center;
    }

    .span_deco {
      position: absolute;
      display: inline-block;
      width: 1000px;
      height: 3px;
      background: #353535;
      vertical-align: middle;
    }

    .start_title2 {
      font-weight: 100;
      position: absolute;
    }
  }
}

.intro_section2 {
  padding: 0px 150px;
  position: absolute;
  top: 70%;

  img {
    width: 88%;
  }
}

.intro_section2 .img_deco_copy {
  position: absolute;
  top: 65%;
  right: -10%;
  font-size: 8vw;
  font-weight: 800;
  font-family: "Y";
}

.sns_section {
  position: fixed;
  bottom: 60px;
  right: 77px;
  font-size: 20px;
  z-index: 2;
}

.sns_section .sns_deco {
  display: inline-block;
  width: 110px;
  height: 3px;
  background: #353535;
  vertical-align: middle;
  margin-top: -5px;
  margin-right: 40px;
}

.sns_section {
  font-family: "Roboto-Bold" "NanumSquare", sans-serif;
  ul {
    display: inline-block;
  }

  ul li {
    font-weight: 800;
    font-size: 22px;
    display: inline-block;
    margin-left: 40px;
    vertical-align: middle;
  }

  ul li :first-child {
    margin-left: 0px;
  }
}

a {
  text-decoration: none;
  color: #494949;
}

ul,
li {
  margin: 0px;
  padding: 0px;
}
</style>

> /* .imgContainer { position: absolute; width: 100%; height: 300px; overflow:
hidden; clip: rect(202px, 220px, 220px, 20px); } .titleContainer { font-size:
20px; font-weight: bold; } .spantitle { font-size: 50px; margin-top: 40px; }
.cardSpan { margin-top: 140px; } */

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
