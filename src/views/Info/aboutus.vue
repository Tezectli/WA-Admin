<template>
  <div>
    <div class="titleIcon">
      <img src="../../assets/logoWA.png" alt="">
    </div>
    <div class="black-space-30"></div>
    <!-- <el-steps :active="2" align-center style="width:30%,margin: 10px 500px">
      <el-step title="步骤 1" description="这段就没那么长了"></el-step>
      <el-step title="步骤 2" description="这段就没那么长了"></el-step>
      <el-step title="步骤 3" description="这段就没那么长了"></el-step>
    </el-steps> -->
    <div class="block2">
      <el-timeline v-model="table_data.item">
        <el-timeline-item placement="top" v-for="(item, index) in table_data.item" :key="index"
          :timestamp="item.SPTIME">
          <el-card>
            <h4> {{item.SPPIC}} <el-button size="mini" @click="editInfo(index)" class="pull-right-btton">编辑
              </el-button>
            </h4>

            <!-- <p>{{activity.content}}</p> -->
          </el-card>
        </el-timeline-item>
        <!-- <el-timeline-item timestamp="2018/4/3" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/2 20:46</p>
          </el-card>
        </el-timeline-item> -->
      </el-timeline>
    </div>
    <!-- <DialogInfo :flag.sync="dialog_Info" @emitgetlist2="getlist" /> -->
    <DialogEditInfoabout :flag.sync="dialog_Info_edit" :id="infoId" @Emitgetlistabout="getlist" />

  </div>
</template>
<script>
import qs from "qs";
import { AddInfo, GetList, DeleteInfo, Aboutuslist } from "@/api/news";
import { global } from "@/utils/global_V3.0.js";
import DialogInfo from "./dialog/info";
import DialogEditInfoabout from "./dialog/editabout";
import { reactive, ref, watchEffect, onMounted } from "@vue/composition-api";
export default {
  name: "aboutus",
  components: { DialogInfo, DialogEditInfoabout },
  setup(props, { root }) {
    //非reative数据
    //弹窗
    const dialog_Info = ref(false);
    const dialog_Info_edit = ref(false);
    const category_value = ref("");
    const date_value = ref("");
    const search_key = ref("id");
    const search_keyWork = ref("");
    const total = ref(0);
    const infoId = ref("");
    const infoId2 = ref("");
    // const activities = reactive();
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
    const { str: aaa, confirm } = global();
    watchEffect(() => console.log(aaa.value));
    /**
     *详情跳转函数
     */
    const detailed = data => {
      console.log("我是详情");
      console.log(data.SPID);
      root.$router.push({
        name: "infoDetailed",
        query: {
          id: data.SPID,
          name: data.SPMC,
          title: data.SPXQ,
          place: data.SPJG,
          time: data.SPKC,
          pic: data.SPPIC
        }
      });
    };
    const deleteItem = SPID => {
      // root.confirm({
      //   content: "确认删除当前信息？",
      //   tip: "警告1",
      //   fn: confirmDelete,
      //   id: "2222"
      // });
      infoId2.value = SPID;
      console.log(infoId2.value);

      confirm({
        content: "确认删除当前信息？",
        tip: "确认删除",
        fn: confirmDelete,
        id: infoId2.value
      });
    };
    const editInfo = index => {
      console.log(index);
      infoId.value = index;
      dialog_Info_edit.value = true;
    };
    const deleteAll = () => {
      //2.0中的写法：this.aaa();
      //root.aaa();
      confirm({
        content: "确认删除全部信息？",
        fn: confirmDelete,
        id: "11111"
      });
      // root.confirm({
      //   content: "确认删除全部信息？",
      //   fn: confirmDelete,
      //   id: "11111"
      // });
    };
    const confirmDelete = value => {
      console.log(value);

      console.log("可以删除");
      let postData2 = qs.stringify({
        d_id: value
      });
      DeleteInfo(postData2).then(response => {
        console.log("删除成功");
        getlist();
      });
    };
    const page = reactive({
      pageNumber: 1,
      pageSize: 5
    });
    const getlist = () => {
      let postData = qs.stringify({
        // pageNumber: 1,
        // pageSize: 5
        pageNumber: page.pageNumber,
        pageSize: page.pageSize
      });
      Aboutuslist(postData).then(response => {
        let data = response.data.list;
        table_data.item = data;
        console.log(table_data.item[0].SPID);
        console.log(data);

        total.value = parseInt(response.data.total);
        // console.log(typeof total.value);
      });
    };
    /**
    数据
     */
    const options = reactive([
      {
        value: 1,
        label: "黄金糕"
      },
      {
        value: 2,
        label: "双皮奶"
      },
      {
        value: 3,
        label: "蚵仔煎"
      }
    ]);
    const searchOption = reactive([
      {
        value: 1,
        label: "id"
      },
      {
        value: 2,
        label: "ID"
      }
    ]);

    //表格数据

    const table_data = reactive({
      item: []
    });
    onMounted(() => {
      getlist();
      // console.log(table_data);
    });
    return {
      category_value,
      date_value,
      options,
      searchOption,
      search_key,
      search_keyWork,
      table_data,
      handleCurrentChange,
      handleSizeChange,
      dialog_Info,
      close,
      deleteItem,
      deleteAll,
      getlist,
      total,
      dialog_Info_edit,
      editInfo,
      infoId,
      infoId2,
      detailed
    };
  }
};
</script>
<style lang="scss" scoped>
.block2 {
  width: 800px;
  height: 60vh;
  margin: 10px auto;
}
.titleIcon {
  background-color: #525a63;
  width: 50%;
  margin: 0px auto;
  img {
    // margin: 28px auto 25px;
    margin: 0 auto;
    width: 110px;
    @include webkit(transition, all 0.3s ease 0s);
    // box-shadow: 0 3px 16px 0 rgb(0, 0, 0);
    // @include webkit(transition, all 0.3s ease 0s);
  }
}
// @import "../../styles/config.scss";
.box {
  background-color: rgb(218, 116, 116);
  height: 30px;
}
.bc-gray {
  background-color: rgb(130, 174, 182) !important;
  height: 30px;
}
.pull-right-btton {
  float: right;
  margin-top: -7px;
}
</style>