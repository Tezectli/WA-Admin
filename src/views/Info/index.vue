<template>
  <div>
    <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline"> -->
    <el-form :inline="true" class="demo-form-inline">
      <el-row :gutter="13">
        <el-col :span="4">
          <el-form-item label="类型：">
            <el-select v-model="category_value" placeholder="请选择" style="width:100px">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="日期：">
            <el-date-picker v-model="date_value" type="daterange" range-separator="至" start-placeholder="开始日期"
              end-placeholder="结束日期" style="width:310px">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="关键字：">
            <el-select v-model="search_key" placeholder="请选择" style="width:90px">
              <el-option v-for="item in searchOption" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-input v-model="search_keyWork" placeholder="请输入内容">
          </el-input>
        </el-col>
        <el-col :span="2">
          <el-button type="danger" size="medium">搜索</el-button>
        </el-col>
        <el-col :span="2">
          <el-button type="danger" size="medium" class="pull-right" @click="dialog_Info = true">
            新增</el-button>
        </el-col>
      </el-row>
    </el-form>
    <div class="black-space-30"></div>
    <!-- 以下是ofclear的代码 -->
    <!-- <el-table :data="table_data.item" border style="width: 100%">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="SPMC" label="公司名称" width="155">
      </el-table-column>
      <el-table-column prop="SPXQ" label="招聘详情" width="550">
      </el-table-column>
      <el-table-column prop="SPJG" label="招聘地点" width="140">
      </el-table-column>
      <el-table-column prop="SPKC" label="招聘时间" width="140">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="detailed(scope.row)">详情</el-button>
          <el-button size="mini" @click="editInfo(scope.row.SPID)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteItem(scope.row.SPID)">删除</el-button>
        </template>
      </el-table-column>
    </el-table> -->
    <!-- 以下是ofclear的代码 -->

    <el-table :data="table_data.item" border style="width: 100%">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="SPMC" label="商品名称" width="155">
      </el-table-column>
      <el-table-column prop="SPXQ" label="商品详情" width="550">
      </el-table-column>
      <el-table-column prop="SPJG" label="商品价格" width="140">
      </el-table-column>
      <el-table-column prop="SPKC" label="商品库存" width="140">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="detailed(scope.row)">详情</el-button>
          <el-button size="mini" @click="editInfo(scope.row.SPID)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteItem(scope.row.SPID)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="black-space-30"></div>
    <el-row>
      <el-col :span="12">
        <el-button size="medium" @click="deleteAll">批量操作</el-button>
      </el-col>
      <el-col :span="12">
        <el-pagination background layout="total,sizes,prev, pager, next,jumper" :total="total" :current-page="1"
          :page-sizes="[5]" @size-change="handleSizeChange" @current-change="handleCurrentChange" class="pull-right">
        </el-pagination>
      </el-col>
    </el-row>

    <!-- 弹窗 -->
    <!-- 需要修改逻辑处理的话可以使用回调函数，不涉及的话可以用修饰器 -->
    <!-- <DialogInfo :flag.sync="dialog_Info" @close="closeDialog" /> -->
    <DialogInfo :flag.sync="dialog_Info" @emitgetlist2="getlist" />
    <DialogEditInfo :flag.sync="dialog_Info_edit" :id="infoId" @Emitgetlist="getlist" />

  </div>
</template>
<script>
import qs from "qs";
import { AddInfo, GetList, DeleteInfo } from "@/api/news";
import { global } from "@/utils/global_V3.0.js";
import DialogInfo from "./dialog/info";
import DialogEditInfo from "./dialog/edit";
import { reactive, ref, watchEffect, onMounted } from "@vue/composition-api";
export default {
  name: "infoIndex",
  components: { DialogInfo, DialogEditInfo },
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
    const editInfo = SPID => {
      console.log(SPID);
      infoId.value = SPID;
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
      GetList(postData).then(response => {
        let data = response.data.list;
        table_data.item = data;
        console.log(table_data);
        total.value = parseInt(response.data.total);
        console.log(typeof total.value);
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
// @import "../../styles/config.scss";
.box {
  background-color: rgb(218, 116, 116);
  height: 30px;
}
.bc-gray {
  background-color: rgb(130, 174, 182) !important;
  height: 30px;
}
</style>