<template>
  <div id="layout">
    <LayoutHeader />
    <div class="toppic"></div>
    <!-- <div class="toppic"><img src="http://192.168.1.105:8080/Z_web/pic/WA/1-banner2.png" class="img"></div>
    <div class="middlepic wow fadeInUp"><img src="http://192.168.1.105:8080/Z_web/pic/WA/2-品牌概念2.png" class="img"></div> -->
    <div class="titlepic2">
      <h3>微信关注</h3>
    </div>
    <div class="cardList wow fadeInUp">
      <b-card no-body class="overflow-hidden cardxq" v-for="item in table_data" :key="item">
        <b-row no-gutters>
          <b-col md="3">
            <b-card-img :src="item.headimgurl" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="9">
            <b-card-body :title="item.nickname">
              <b-card-text>
                openid: {{item.openid}}
              </b-card-text>
              语言: {{item.language}}
              <b-card-text>
                省份:{{item.province}}
              </b-card-text>
              <b-card-text>
                国家:{{item.country}}
              </b-card-text>
              <b-button variant="primary">取消关注</b-button>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <!-- <el-pagination background layout="total,sizes,prev, pager, next,jumper" :total="total" :current-page="1"
      :page-sizes="[8]" @size-change="handleSizeChange" @current-change="handleCurrentChange" class="check">
    </el-pagination> -->
  </div>
</template>
<script>
import qs from "qs";
import {
  AddInfo,
  GetList,
  DeleteInfo,
  Aboutuslist,
  GetListMan,
  WX_userGet
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
    const total = ref(0);
    const menuStatus = computed(() => root.$store.state.app.isCollapse);
    const page = reactive({
      pageNumber: 1,
      pageSize: 0
    });
    const table_data = reactive({
      item: []
    });
    //分页数据
    const handleSizeChange = val => {
      // console.log(111111);
      page.pageSize = val;
    };
    const handleCurrentChange = val => {
      // console.log(222222);
      page.pageNumber = val;
      getlist();
    };
    const getlist = () => {
      let postData = qs.stringify({
        // pageNumber: 1,
        // pageSize: 5
        pageNumber: page.pageNumber,
        pageSize: page.pageSize
      });
      WX_userGet(postData).then(response => {
        let data = response;
        table_data.item = data.data;
        // console.log(table_data.item[0].SPID);
        console.log(data.data);
        // console.log(total.value);
        // total.value = parseInt(response.data.total);
        // console.log(total.value);
      });
    };
    //详情跳转
    const detailed = item => {
      console.log("我是详情");
      console.log(item);
      root.$router.push({
        name: "menclothXQ",
        query: {
          id: item.SPID,
          name: item.SPMC,
          title: item.SPXQ,
          place: item.SPJG,
          time: item.SPKC,
          pic: item.SPPIC
        }
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
      table_data,
      total,
      handleSizeChange,
      handleCurrentChange,
      detailed
    };
  }
};
</script>
<style scoped>
#layout {
  height: 50vh;
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
  text-align: center;
  /* background-image: url(http://192.168.1.105:8080/Z_web/pic/WA/部分商品.png);
  background-size: cover; */
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
.cardxq {
  width: 77% !important;
}
.toppic {
  width: 100%;
  margin-top: 56px;
  height: 155px;
  background-image: url(http://192.168.1.105:8080/Z_web/pic/WA/bgr.jpg);
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
/* .cardList::after {
  content: "";
  width: 70%;
  border: 1px solid transparent;
} */
.card-img,
.card-img-top {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  height: 245px;
}
.mb-2,
.my-2 {
  margin-bottom: 2.5rem !important;
  margin-right: 0.9rem;
  transition: all 0.8s;
}
.mb-2:hover,
.my-2:hover {
  margin-bottom: 2.5rem !important;
  margin-right: 0.9rem;
  /* background: #f3f3f3; */
  box-shadow: 0 2px 6px #ccc;
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
  .check[data-v-fcb78a32] {
    float: right;
    margin: 20px 51px !important;
    width: 350px;
  }
  .btn[data-v-e9874ef8]:not(:disabled):not(.disabled) {
    cursor: pointer;
    /* width: 98%; */
    float: right;
    background-color: #bf5127a1;
    border: none;
    margin-top: 0;
    margin-bottom: 10px;
  }
}
.bottompic {
  width: 1688px;
  /* height: 1194px;
  background-image: url(http://192.168.1.105:8080/Z_web/pic/WA/1-品牌概念-按钮2.png); */
}
/* .img {
  width: 100%;
  clip: rect(0, 0, 200px, 0);
} */
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
p[data-v-e9874ef8] {
  margin-top: 5px;
  margin-bottom: 5px;
}
.btn[data-v-e9874ef8]:not(:disabled):not(.disabled) {
  cursor: pointer;
  /* width: 98%; */
  float: right;
  background-color: #bf5127a1;
  border: none;
  margin-top: 15px;
}
</style>