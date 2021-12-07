<template>
  <div class="Home">
    <div class="intro_section1">
      <span class="start_title1">PORTFOLIO</span>
      <span class="span_deco"></span>
      <span class="start_title2">Developer YOUNG</span>
    </div>
    <div class="intro_section2">
      <img src="../assets/images/sunset.jpg" />
      <div class="img_deco_copy">WEB DEVELOPMENT</div>
    </div>
    <div class="intro_section3">
      <div class="sub_title2">Introduction</div>
      <div class="main_title2">FORNT-END DEVELOPER</div>
      <div class="section_desc">사용자의 감성을 자극하는 개발자 <br /></div>
      <div class="intro_section3_img">
        <img src="../assets/images/project_photo.jpg" class="project_photo" />
      </div>
      <div class="career_list_section">
        <div class="carrer_list_t">
          컴퓨터 공학과 (졸업예정)
          <br />
          FRONT-DEVELOPER
          <br />
          JAVA<br />
          React <br />
          Vue <br />
          CSS <br />
          정보처리기사 보유
        </div>
        <div class="career_deco"></div>
      </div>
    </div>
    <div class="section_top_button">
      <div style="cursor: pointer" onclick="window.scrollTo(0,0);">
        <v-btn elevation="1" icon large outlined raised rounded>
          <v-icon class="top_icon">keyboard_double_arrow_up</v-icon>
        </v-btn>
      </div>
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
  data() {
    return {
      variant: "default",
    };
  },
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
  src: url("../fonts/NanumMyeongjo-ExtraBold.ttf") format("truetype");
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

/* G마켓Bold */
@font-face {
  font-family: "GmarketSansBold";
  font-weight: 700;
  src: url("../fonts/GmarketSansTTFBold.ttf") format("truetype");
}

/* G마켓Light */
@font-face {
  font-family: "GmarketSansLight";
  font-weight: 700;
  src: url("../fonts/GmarketSansTTFLight.ttf") format("truetype");
}

/* G마켓Medium */
@font-face {
  font-family: "GmarketSansMedium";
  font-weight: 700;
  src: url("../fonts/GmarketSansTTFMedium.ttf") format("truetype");
}

/* 카페24*/
@font-face {
  font-family: "Cafe24Dangdanghae";
  font-weight: 700;
  src: url("../fonts/Cafe24Dangdanghae.ttf") format("truetype");
}

/* 카페24*/
@font-face {
  font-family: "Cafe24Ohsquareair";
  font-weight: 700;
  src: url("../fonts/Cafe24Ohsquareair.ttf") format("truetype");
}

/* 카페24*/
@font-face {
  font-family: "Cafe24Simplehae";
  font-weight: 700;
  src: url("../fonts/Cafe24Simplehae.ttf") format("truetype");
}

/* 카페24*/
@font-face {
  font-family: "Cafe24SsurroundAir";
  font-weight: 700;
  src: url("../fonts/Cafe24SsurroundAir.ttf") format("truetype");
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

/*BlackHanSans-Regular*/
@font-face {
  font-family: "BlackHanSans";
  src: url("../fonts/BlackHanSans-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "SEBANG";
  src: url("../fonts/SEBANG Gothic.ttf") format("truetype");
}

.Home {
  margin-top: 840px;
}

.intro_section1 {
  position: absolute;
  margin: 0px;
  padding: 0px;
  font-size: 20px;
  top: 45vh;
  left: 30vw;
  width: 67vh;
  color: #353535;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;

  .start_title1 {
    font-size: 8vw;
    font-family: "GowunDodum-Regular";
    left: 58vh;
    position: absolute;
    margin-top: -10vw;
    margin-left: -28vw;
  }

  .span_deco {
    display: inline-block;
    width: 88vh;
    height: 3px;
    background: #353535;
    vertical-align: middle;
  }

  .start_title2 {
    top: 20vh;
    left: 28vw;
    width: 88vh;
    font-size: 5vw;
    font-family: "GowunDodum-Regular";
    position: absolute;
    margin-top: -10vw;
    margin-left: -28vw;
  }
}

.intro_section2 {
  padding: 0px 150px;
  position: relative;
  top: 84%;

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

.intro_section3 {
  padding: 300px 130px 400px;
  overflow: hidden;
  margin-top: -50px;

  .sub_title2 {
    font-size: 17px;
    font-weight: 800;
    text-transform: uppercase;
  }

  .main_title2 {
    font-size: 28px;
    font-weight: 800;
  }

  .section_desc {
    margin-top: 20px;
    font-size: 40px;
    color: #898989;
    line-height: 34px;
    font-weight: 400;
    font-family: "Y";
  }

  .intro_section3_img {
    width: auto;
    height: auto;
    left: 20%;
    padding: 0px 150px;
    position: relative;
    margin-top: 14px;
    top: 84%;

    .project_photo {
      width: 70%;
    }
  }

  .career_list_section {
    font-family: "Roboto Medium";
    margin-top: 40px;
    font-weight: 800;
    font-size: 3.7vw;
    color: #6b6b6b;
    letter-spacing: 0;
    line-height: 7vw;
    position: relative;
    margin-bottom: -240px;

    .carrer_list_t {
      position: relative;
      z-index: 1;
    }
  }
}

.section_top_button {
  position: relative;
  bottom: 60px;
  font-size: 20px;
  z-index: 2;
  margin-left: 40px;
  left: 50%;

  .top_icon {
    font-size: 34px;
  }
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

a:visited {
  color: #494949;
}

ul,
li {
  margin: 0px;
  padding: 0px;
}
</style>
