<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-row :gutter="80">
        <el-col :span="10">
          <div class="block2">
            <span class="demonstration"></span>
            <el-image :src="src" :fit="fit"></el-image>
          </div>
        </el-col>
        <div class="el">
          <el-col :span="14">
            <div class="black-space-30"></div>
          </el-col>
          <el-col :span="14">
            <el-form-item label="商品ID" label-width="70px" class="el iu">
              <el-input v-model="form.t_id" autocomplete="off" style="width:200px" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="14">
            <el-form-item label="商品名称" label-width="70px" class="el iu">
              <el-input v-model="form.t_name" autocomplete="off" style="width:200px" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="14">
            <el-form-item label="商品价格" label-width="70px" class="el iu">
              <el-input v-model="form.t_nadu" autocomplete="off" style="width:200px" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="14">
            <el-form-item label="商品库存" label-width="70px" class="el iu">
              <el-input v-model="form.t_fenzu" autocomplete="off" style="width:200px" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="14">
            <el-form-item label="商品详情" label-width="70px " class="el iu">
              <el-input v-model="form.t_info" autocomplete="off" style="width:400px" :disabled="true">
              </el-input>
            </el-form-item>
          </el-col>
        </div>
      </el-row>
    </el-form>
  </div>
  <!-- <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-row :gutter="80">
        <el-col :span="10">
          <div class="block2">
            <span class="demonstration"></span>
            <el-image :src="src" :fit="fit"></el-image>
          </div>
        </el-col>
        <div class="el">
          <el-col :span="14">
            <div class="black-space-30"></div>
          </el-col>
          <el-col :span="14">
            <el-form-item label="公司ID" label-width="70px" class="el iu">
              <el-input v-model="form.t_id" autocomplete="off" style="width:200px" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="14">
            <el-form-item label="公司名称" label-width="70px" class="el iu">
              <el-input v-model="form.t_name" autocomplete="off" style="width:200px" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="14">
            <el-form-item label="招聘地点" label-width="70px" class="el iu">
              <el-input v-model="form.t_nadu" autocomplete="off" style="width:200px" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="14">
            <el-form-item label="招聘时间" label-width="70px" class="el iu">
              <el-input v-model="form.t_fenzu" autocomplete="off" style="width:200px" :disabled="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="14">
            <el-form-item label="招聘详情" label-width="70px " class="el iu">
              <el-input v-model="form.t_info" autocomplete="off" style="width:400px" :disabled="true">
              </el-input>
            </el-form-item>
          </el-col>
        </div>
      </el-row>
    </el-form>
  </div> -->
</template>
<script>
import { reactive, ref, watchEffect, onMounted } from "@vue/composition-api";
export default {
  name: "infoDetailed",
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
    const src = pic;
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
<style lang="scss" scoped>
.block2 {
  width: 100%;
  height: 500px;
  img {
    width: 200px;
  }
}
.label2 {
  padding: 0 12px 24px 0 !important;
}
.el {
  // padding-bottom: 30px !important;
  // line-height: 60px;
  &.iu {
    padding: 0 12px 24px 0 !important;
  }
}
</style>