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
          <el-button type="danger" size="medium" class="pull-right" @click="dialog_Info = true">新增</el-button>
        </el-col>
      </el-row>
    </el-form>
    <div class="black-space-30"></div>
    <!-- 表格 -->
    <el-table :data="table_data.item" border style="width: 100%">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="SPMC" label="商品名称" width="155">
      </el-table-column>
      <el-table-column prop="SPXQ" label="商品信息" width="650">
      </el-table-column>
      <el-table-column prop="SPJG" label="商品价格" width="140">
      </el-table-column>
      <el-table-column prop="SPKC" label="商品库存" width="140">
      </el-table-column>
      <el-table-column label="操作">
        <!-- <template slot-scope="scope"> -->
        <template>
          <el-button size="mini" @click="dialog_Info = true">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteItem">删除</el-button>
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
          :page-sizes="[5, 10, 20, 30]" @size-change="handleSizeChange" @current-change="handleCurrentChange"
          class="pull-right">
        </el-pagination>
      </el-col>
    </el-row>

    <!-- 弹窗 -->
    <!-- 需要修改逻辑处理的话可以使用回调函数，不涉及的话可以用修饰器 -->
    <!-- <DialogInfo :flag.sync="dialog_Info" @close="closeDialog" /> -->
    <DialogInfo :flag.sync="dialog_Info" />

  </div>
</template>
<script>
import qs from "qs";
import { AddInfo, GetList } from "@/api/news";
import { global } from "@/utils/global_V3.0.js";
import DialogInfo from "./dialog/info";
import { reactive, ref, watchEffect, onMounted } from "@vue/composition-api";
export default {
  name: "infoIndex",
  components: { DialogInfo },
  setup(props, { root }) {
    //非reative数据
    //弹窗
    const dialog_Info = ref(false);
    const category_value = ref("");
    const date_value = ref("");
    const search_key = ref("id");
    const search_keyWork = ref("");
    const total = ref(0);
    //分页数据
    const handleSizeChange = val => {
      console.log(111111);
      page.pageSize = val;
    };
    const handleCurrentChange = val => {
      console.log(222222);
      page.pageNumber = val;
      getlist();
    };
    const { str: aaa, confirm } = global();
    watchEffect(() => console.log(aaa.value));

    const deleteItem = () => {
      // root.confirm({
      //   content: "确认删除当前信息？",
      //   tip: "警告1",
      //   fn: confirmDelete,
      //   id: "2222"
      // });
      confirm({
        content: "确认删除当前信息？",
        tip: "警告1",
        fn: confirmDelete,
        id: "2222"
      });
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
        console.log(table_data.item);
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
      // {
      //   name: "抱枕1",
      //   info: "上抱枕（pillow）是家居生活中常见用品，类似枕头",
      //   price: "80",
      //   store: "99"
      // },
      // {
      //   name: "抱枕1",
      //   info: "上抱枕（pillow）是家居生活中常见用品，类似枕头啦啦啦啦啦啦",
      //   price: "80",
      //   store: "99"
      // },
      // {
      //   name: "抱枕1",
      //   info: "上抱枕（pillow）是家居生活中常见用品，类似枕头",
      //   price: "80",
      //   store: "99"
      // },
      // {
      //   name: "抱枕1",
      //   info: "上抱枕（pillow）是家居生活中常见用品，类似枕头么么么么么么么",
      //   price: "80",
      //   store: "99"
      // }
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
      total
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