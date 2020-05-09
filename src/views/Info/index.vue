<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-row :gutter="15">
        <el-col :span="4">
          <el-form-item label="类型：">
            <el-select v-model="value" placeholder="请选择" style="width:100px">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="日期：">
            <el-date-picker v-model="value2" type="datetimerange" align="right" start-placeholder="开始日期"
              end-placeholder="结束日期" :default-time="['12:00:00', '08:00:00']">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item label="关键字：">
            <el-select v-model="search_key" placeholder="请选择" style="width:100px">
              <el-option v-for="item in searchOption" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-input v-model="search_keyWork" placeholder="请选择">

          </el-input>
        </el-col>
      </el-row>
    </el-form>
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
    const value = ref("");
    const value2 = ref("");
    const search_key = ref("id");
    const search_keyWork = ref("");
    return {
      value,
      value2,
      options,
      searchOption,
      search_key,
      search_keyWork
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