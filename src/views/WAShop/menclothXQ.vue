<template>
  <div id="layout">
    <LayoutHeader />
    <div class="toppic"></div>
    <h4 class="hf">商品详情</h4>
    <b-card no-body class="overflow-hidden cardxq">
      <b-row no-gutters>
        <b-col md="3">
          <b-card-img :src="src" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="9">
          <b-card-body :title="form.t_name">
            <b-card-text>
              {{form.t_info}}
            </b-card-text>
            售价: {{form.t_nadu}}.0
            <b-card-text>
              库存: {{form.t_fenzu}}
            </b-card-text>
            <b-card-text>
              ID: {{form.t_id}}
            </b-card-text>
            <b-button variant="primary">立即购买</b-button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <div class="middlepic wow fadeInDown"><img src="http://192.168.1.105:8080/Z_web/pic/WA/男装-3-详情页.jpg" class="img">
    </div>
  </div>
</template>
<script>
import qs from "qs";
import {
  AddInfo,
  GetList,
  DeleteInfo,
  Aboutuslist,
  GetListMan
} from "@/api/news";
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
    let id = root.$route.query.id;
    let name = root.$route.query.name;
    let title = root.$route.query.title;
    let place = root.$route.query.place;
    let time = root.$route.query.time;
    let pic = root.$route.query.pic;
    console.log(id);
    console.log(title);
    console.log(place);
    console.log(time);
    console.log(pic);
    console.log(name);
    const form = reactive({
      t_name: "",
      t_nandu: "",
      t_fenzu: "",
      t_info: "",
      t_id: "",
      name: "",
      region: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: ""
    });
    const src = ref(pic);
    const fit = ref("contain");
    onMounted(() => {
      form.t_name = name;
      form.t_nadu = place;
      form.t_fenzu = time;
      form.t_info = title;
      form.t_id = id;
    });
    return {
      src,
      form,
      fit
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
  margin: 40px auto 30px auto;
  /* background-image: url(http://192.168.1.105:8080/Z_web/pic/WA/活动专区.png);
  background-size: cover; */
}
.titlepic2 {
  /* background: rgb(151, 33, 33); */
  width: 192px;
  height: 45px;
  margin: 40px auto 30px auto;
  background-image: url(http://192.168.1.105:8080/Z_web/pic/WA/部分商品.png);
  background-size: cover;
}
.btn[data-v-2598717a]:not(:disabled):not(.disabled) {
  cursor: pointer;
  /* width: 98%; */
  float: right;
  background-color: #bf5127a1;
  border: none;
  margin-top: 13px;
}
p[data-v-37a9fbe2] {
  margin-top: 5px;
  margin-bottom: 5px;
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
.hf {
  margin: 70px 20px 10px auto;
  padding-left: 345px;
}
p {
  display: block;
  margin-top: 5px;
}
.toppic {
  width: 100%;
  margin-top: -129px;
  height: 403px;
  background-image: url(http://192.168.1.105:8080/Z_web/pic/WA/1-banner.png);
  background-size: 100%;
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
  width: 75%;
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
  width: 70%;
  border: 1px solid transparent;
}
.card-img,
.card-img-top {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  height: 245px;
}
.card-img[data-v-2598717a],
.card-img-top[data-v-2598717a] {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  height: 240px;
}
.mb-2,
.my-2 {
  margin-bottom: 2.5rem !important;
  margin-right: 0.9rem;
}
.btn[data-v-37a9fbe2]:not(:disabled):not(.disabled) {
  cursor: pointer;
  /* width: 98%; */
  float: right;
  background-color: #bf5127a1;
  border: none;
  margin-top: 18px;
}

.bottompic {
  width: 1688px;
  /* height: 1194px;
  background-image: url(http://192.168.1.105:8080/Z_web/pic/WA/1-品牌概念-按钮2.png); */
}
.img {
  width: 100%;
}
.text {
  color: #888888;
}
p {
  margin-top: 0;
  margin-bottom: 5px;
}
.card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.15rem;
}
.check {
  float: right;
  margin: 20px 253px !important;
}
.cardxq {
  margin: 20px auto 20px auto;
  max-width: 991px;
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
  .titlepic2[data-v-a468ab02] {
    /* background: rgb(151, 33, 33); */
    width: 133px;
    height: 31px;
    margin: 40px auto 30px auto;
    background-image: url(http://192.168.1.105:8080/Z_web/pic/WA/部分商品.png);
    background-size: cover;
  }
  .mb-2,
  .my-2 {
    margin-bottom: 2.5rem !important;
    margin-right: 0;
  }
  .check[data-v-a468ab02] {
    float: right;
    margin: 20px 51px !important;
    width: 350px;
  }
  .hf {
    margin: 18px 20px 10px auto;
    padding-left: 160px;
  }
  .cardxq {
    margin: 20px auto 20px auto;
    max-width: 265px;
  }
  .btn[data-v-37a9fbe2]:not(:disabled):not(.disabled) {
    cursor: pointer;
    /* width: 98%; */
    float: right;
    background-color: #bf5127a1;
    border: none;
    margin-top: 0;
    margin-bottom: 10px;
  }
  .toppic {
    width: 100%;
    margin-top: 35px;
    height: 145px;
    background-image: url(http://192.168.1.105:8080/Z_web/pic/WA/1-banner.png);
    background-size: 100%;
  }
}
</style>