<template>
  <el-dialog title="新增" :visible.sync="dialog_Info_flag" width="580px" @close="close">
    <el-form :model="form">
      <el-form-item label="商品选项" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择类别图标">
          <el-option label="选项一" value="shanghai"></el-option>
          <el-option label="选项二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" style="width:200px"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品库存" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="商品信息" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { reactive, ref, watch } from "@vue/composition-api";
export default {
  name: "dialogInfo",
  //父组件-->子组件通过属性传参 数据为单项数据流 不能反向修改
  props: {
    flag: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit, root }) {
    const dialog_Info_flag = ref(false);
    const formLabelWidth = ref("70px");
    const form = reactive({
      name: "",
      region: "",
      date1: "",
      date2: "",
      delivery: false,
      type: [],
      resource: "",
      desc: ""
    });
    watch(() => {
      console.log(props.flag);

      dialog_Info_flag.value = props.flag;
      //   console.log(dialog_Info_flag.value);
      //   console.log(111);
    });
    const close = () => {
      dialog_Info_flag.value = false;
      emit("update:flag", false);
      console.log(222222);
    };
    return {
      dialog_Info_flag,
      form,
      formLabelWidth,
      close
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