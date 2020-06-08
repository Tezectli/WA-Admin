<template>
  <el-dialog title="修改" :visible.sync="dialog_Info_flag" width="580px" @close="close" @opened="openDialog">
    <el-form :model="form" ref="addInfoForm">
      <el-form-item label="分组选项" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择类别图标">
          <el-option label="选项一" value="shanghai"></el-option>
          <el-option label="选项二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="公司名称" :label-width="formLabelWidth">
        <el-input v-model="form.t_name" autocomplete="off" style="width:200px"></el-input>
      </el-form-item>
      <el-form-item label="招聘地点" :label-width="formLabelWidth">
        <el-input v-model="form.t_nandu" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="招聘时间" :label-width="formLabelWidth">
        <el-input v-model="form.t_fenzu" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="招聘详情" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="form.t_info" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="submit" :loading="submitLoding">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { AddInfo, GetList, EditInfo } from "@/api/news";
import { reactive, ref, watchEffect } from "@vue/composition-api";
import qs from "qs";
export default {
  name: "dialogInfo",
  //父组件-->子组件通过属性传参 数据为单项数据流 不能反向修改
  props: {
    flag: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ""
    }
  },
  setup(props, { emit, root }) {
    const dialog_Info_flag = ref(false);
    const formLabelWidth = ref("70px");
    const form = reactive({
      t_name: "",
      t_nandu: "",
      t_fenzu: "",
      t_info: "",
      name: "",
      region: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: ""
    });
    watchEffect(() => {
      console.log(props.flag);

      dialog_Info_flag.value = props.flag;
      //   console.log(dialog_Info_flag.value);
      //   console.log(111);
    });
    const submitLoding = ref(false);
    const close = () => {
      dialog_Info_flag.value = false;
      emit("update:flag", false);
      console.log(222222);
    };
    const openDialog = () => {
      // data.categoryOption = props.category;
      getInfo();
      console.log(props.id);
    };
    const getInfo = () => {
      let requestData = qs.stringify({
        pageNumber: 1,
        pageSize: 1,
        id: props.id
      });
      GetList(requestData).then(response => {
        console.log(response.data.list[0]);
        let responseData = response.data.list[0];
        form.t_name = responseData.SPMC;
        form.t_nandu = responseData.SPJG;
        form.t_fenzu = responseData.SPKC;
        form.t_info = responseData.SPXQ;
      });
    };
    //重置表单方法
    const resetForm = () => {
      form.t_name = "";
      form.t_nandu = "";
      form.t_fenzu = "";
      form.t_info = "";
    };
    const submit = () => {
      console.log("submit方法激活");
      let requestData = {
        t_name: form.t_name,
        t_nandu: form.t_nandu,
        t_fenzu: form.t_fenzu,
        t_info: form.t_info,
        t_id: props.id
      };
      let postData = qs.stringify({
        t_name: form.t_name,
        t_nandu: form.t_nandu,
        t_fenzu: form.t_fenzu,
        t_info: form.t_info,
        t_id: props.id
      });
      //判断是否为空
      if (!form.t_name) {
        root.$message({
          message: "商品名称不能为空！",
          type: "error"
        });
        return false;
      }
      submitLoding.value = true;
      EditInfo(postData)
        .then(response => {
          console.log(response.data);
          submitLoding.value = false;
          // root.$refs.addInfoForm.resetFields();
          //两种刷新数据的方式
          //1.暴力取数据刷新
          //2.返回列表，手动修改指定的数据
          emit("Emitgetlist");
          close();
        })
        .catch(error => {
          submitLoding.value = false;
        });
    };
    return {
      dialog_Info_flag,
      form,
      formLabelWidth,
      close,
      submit,
      submitLoding,
      resetForm,
      openDialog
    };
  }
  //   watch: {
  //     flag: {
  //       handler(newValue, oldValue) {
  //         this.dialog_Info_flag = newValue;
  //         console.log(newValue);
  //       }
  //     }
  //   }
};
</script>
<style scoped>
</style>