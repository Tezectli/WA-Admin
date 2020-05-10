<template>
  <div>
    <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline"> -->
    <el-form :inline="true" class="demo-form-inline">
      <el-row :gutter="13">
        <el-col :span="4">
          <el-form-item label="类型：">
            <el-select v-model="value" placeholder="请选择" style="width:100px">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="日期：">
            <el-date-picker v-model="value2" type="daterange" range-separator="至" start-placeholder="开始日期"
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
          <el-button type="danger" size="medium" class="pull-right">新增</el-button>
        </el-col>
      </el-row>
    </el-form>
    <div class="black-space-30"></div>
    <!-- 表格 -->
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="name" label="商品名称" width="155">
      </el-table-column>
      <el-table-column prop="info" label="商品信息" width="650">
      </el-table-column>
      <el-table-column prop="price" label="商品价格" width="140">
      </el-table-column>
      <el-table-column prop="store" label="商品库存" width="140">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini">编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="black-space-30"></div>
    <el-row>
      <el-col :span="12">
        <el-button size="medium">批量操作</el-button>
      </el-col>
      <el-col :span="12">
        <el-pagination background layout="total,sizes,prev, pager, next,jumper" :total="1000" :current-page="1"
          :page-sizes="[10, 20, 30, 40]" @size-change="handleSizeChange" @current-change="handleCurrentChange"
          class="pull-right">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { reactive, ref } from "@vue/composition-api";
export default {
  name: "infoIndex",
  setup(props) {
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
    const tableData = reactive([
      {
        name: "抱枕1",
        info: "上抱枕（pillow）是家居生活中常见用品，类似枕头",
        price: "80",
        store: "99"
      },
      {
        name: "抱枕1",
        info: "上抱枕（pillow）是家居生活中常见用品，类似枕头啦啦啦啦啦啦",
        price: "80",
        store: "99"
      },
      {
        name: "抱枕1",
        info: "上抱枕（pillow）是家居生活中常见用品，类似枕头",
        price: "80",
        store: "99"
      },
      {
        name: "抱枕1",
        info: "上抱枕（pillow）是家居生活中常见用品，类似枕头么么么么么么么",
        price: "80",
        store: "99"
      }
    ]);
    const value = ref("");
    const value2 = ref("");
    const search_key = ref("id");
    const search_keyWork = ref("");
    //分页数据
    const handleSizeChange = val => {};
    const handleCurrentChange = val => {};
    return {
      value,
      value2,
      options,
      searchOption,
      search_key,
      search_keyWork,
      tableData,
      handleCurrentChange,
      handleSizeChange
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