<template>
  <div id="layout">
    <LayoutHeader />
    <LayoutBanner />
    <div class="titlepic"></div>
    <LayoutSecond />
    <div class="titlepic2"></div>
    <LayoutThird />
    <LayoutFourth />
    <div class="footerm wow fadeInUp">
      <h3>Thanks for you visiting</h3>
      <p>W&A Project disigned by Chenshiting and Chenyijun</p>
    </div>
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
  }
};
</script>
<style scoped>
#layout {
  height: 373vh;
  /*377*/
}
@media (max-width: 1688px) {
  #layout {
    height: 400vh;
    /*377*/
  }
}

.titlepic {
  /* background: rgb(151, 33, 33); */
  width: 294px;
  height: 44px;
  margin: 30px auto 10px auto;
  background-image: url(http://192.168.1.105:8080/Z_web/pic/WA/活动专区.png);
  background-size: cover;
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
</style>