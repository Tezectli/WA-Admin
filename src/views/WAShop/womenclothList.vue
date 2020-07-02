<template>
  <div id="layout">
    <LayoutHeader />
    <div class="toppic"><img src="http://192.168.1.105:8080/Z_web/pic/WA/banner4.png" class="img"></div>
    <!-- <div class="toppic"><img src="http://192.168.1.105:8080/Z_web/pic/WA/1-banner2.png" class="img"></div>
    <div class="middlepic wow fadeInUp"><img src="http://192.168.1.105:8080/Z_web/pic/WA/2-品牌概念2.png" class="img"></div> -->
    <div class="titlepic2"></div>
    <ul class="cardList wow fadeInUp">
      <b-card :title="item.SPPIC" :img-src="item.SPPIC" img-alt="Image" img-top tag="article" style="max-width: 17rem;"
        class="mb-2" v-for="(item, index) in table_data.item" :key="index">
        <b-card-text>
          {{item.SPPIC}}
        </b-card-text>

        <b-button href="#" variant="primary">立即购买</b-button>
      </b-card>
    </ul>
  </div>
</template>
<script>
import qs from "qs";
import { AddInfo, GetList, DeleteInfo, Aboutuslist } from "@/api/news";
import {
  reactive,
  ref,
  watchEffect,
  onMounted,
  root
} from "@vue/composition-api";
import { global } from "@/utils/global_V3.0.js";
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
    const total = ref(0);
    const menuStatus = computed(() => root.$store.state.app.isCollapse);
    const page = reactive({
      pageNumber: 1,
      pageSize: 5
    });
    const table_data = reactive({
      item: []
    });
    const getlist = () => {
      let postData = qs.stringify({
        // pageNumber: 1,
        // pageSize: 5
        pageNumber: page.pageNumber,
        pageSize: page.pageSize
      });
      GetList(postData).then(response => {
        let data = response.data.list;
        table_data.item = data;
        console.log(table_data.item[0].SPID);
        console.log(data);

        total.value = parseInt(response.data.total);
        // console.log(typeof total.value);
      });
    };
    onMounted(() => {
      getlist();
      let wow = new WOW.WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: true,
        live: true
      });
      wow.init();
      // console.log(table_data);
    });
    return {
      menuStatus,
      page,
      getlist,
      table_data
    };
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
  width: 192px;
  height: 45px;
  margin: 30px auto 20px auto;
  background-image: url(http://192.168.1.105:8080/Z_web/pic/WA/部分商品.png);
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
  width: 60%;
  /* height: 2165px; */
  /* background-image: url(http://192.168.1.105:8080/Z_web/pic/WA/1-联系我们3.png); */
  background-repeat: no-repeat;
  background-size: 100%;
}
.cardList {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 auto;
  /* background-color: rgb(238, 69, 69); */
  flex-wrap: wrap;
  padding-top: 10px;
  padding-bottom: 20px;
  text-align: left;
}
.cardList::after {
  content: "";
  width: 68%;
  border: 1px solid transparent;
}
.card-img,
.card-img-top {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  height: 180px;
}
.mb-2,
.my-2 {
  margin-bottom: 2.5rem !important;
}
.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
  /* width: 98%; */
  float: right;
  background-color: #bf5127a1;
  border: none;
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