<template>
  <div id="layout">
    <LayoutHeader />
    <div class="toppic"><img src="http://192.168.1.105:8080/Z_web/pic/WA/mbanner1.png" class="img"></div>
    <a href="http://192.168.1.105:8081/#/menClouthSecond">
      <div class="middlepic wow fadeInDown"><img src="http://192.168.1.105:8080/Z_web/pic/WA/男装1.png" class="img">
      </div>
    </a>
  </div>
</template>
<script>
import LayoutHeader from "./Components/nav";
import LayoutBanner from "./Components/banner";
import LayoutSecond from "./Components/secondlayout";
import LayoutThird from "./Components/thirdlayout";
import LayoutFourth from "./Components/forthlayout";
// import LayoutNav from "./Components/Nav";
import { computed } from "@vue/composition-api";
import WOW from "wowjs";
export default {
  name: "layout",
  components: {
    LayoutHeader,
    LayoutBanner,
    LayoutSecond,
    LayoutThird,
    LayoutFourth
  },
  setup(props, { root }) {
    const menuStatus = computed(() => root.$store.state.app.isCollapse);
    return {
      menuStatus
    };
  },
  mounted() {
    let wow = new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true
    });
    wow.init();
  }
};
</script>
<style scoped>
#layout {
  height: 281vh;
  /* text-align: center; */
}
.titlepic {
  /* background: rgb(151, 33, 33); */
  width: 294px;
  height: 44px;
  margin: 30px auto 10px auto;
  /* background-image: url(http://192.168.1.105:8080/Z_web/pic/WA/活动专区.png);
  background-size: cover; */
}
.titlepic2 {
  /* background: rgb(151, 33, 33); */
  width: 294px;
  height: 55px;
  margin: 30px auto 10px auto;
  background-image: url(http://192.168.1.105:8080/Z_web/pic/WA/新品上市.png);
  background-size: cover;
}
.footerm {
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  bottom: 0;
  width: 100%;
  height: 466px;
  margin-top: 85px;
  height: 260px;
  background-color: rgba(145, 37, 37, 0.603);
  color: white;
  text-align: center;
  justify-content: center;
}
h3 {
}
p {
  display: block;
  margin-top: 5px;
}
.toppic {
  width: 100%;
  margin-top: 56px;
  /* height: 749px; */
  /* background-image: url(http://192.168.1.105:8080/Z_web/pic/WA/1-banner.png);
  background-size: 100%; */
}
.middlepic {
  text-align: center;
  margin: 40px auto 0px auto;
  width: 50%;
  /* height: 2165px; */
  /* background-image: url(http://192.168.1.105:8080/Z_web/pic/WA/1-联系我们3.png); */
  background-repeat: no-repeat;
  background-size: 100%;
}
@media (max-width: 500px) {
  .middlepic {
    text-align: center;
    margin: 20px auto 0px auto;
    width: 100%;
    /* height: 2165px; */
    /* background-image: url(http://192.168.1.105:8080/Z_web/pic/WA/1-联系我们3.png); */
    background-repeat: no-repeat;
    background-size: 100%;
  }
  #layout {
    height: 96vh;
    /* text-align: center; */
  }
}
.bottompic {
  width: 1688px;
  /* height: 1194px;
  background-image: url(http://192.168.1.105:8080/Z_web/pic/WA/1-品牌概念-按钮2.png); */
}
.img {
  width: 100%;
}
</style>