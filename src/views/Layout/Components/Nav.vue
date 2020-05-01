<template>
  <div id="nav-wrap">
    <h1 class="logo"><img src="../../../assets/logo.png" alt=""></h1>
    <!-- transparent:背景透明 -->
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      :collapse="isCollapse" background-color="transparent" text-color="#fff" active-text-color="#fff" router>
      <template v-for="(item,index) in routers">
        <el-submenu v-if="!item.hidden" :key="item.id" :index="index+''">
          <template slot="title">
            <svg-icon :iconClass="item.meta.icon" :className="item.meta.icon" />
            <!-- <svg-icon iconClass="message" className="message" /> -->
            <span slot="title">{{ item.meta.name }}</span>
            <!-- <svg-icon iconClass="message" className="message" /> -->
          </template>
          <el-menu-item v-for="subItem in item.children" :key="subItem.id" :index="subItem.path">{{subItem.meta.name}}
          </el-menu-item>
          <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
import { reactive, ref, isRef, toRefs, onMounted } from "@vue/composition-api";
export default {
  name: "navMenu",
  setup(props, { root }) {
    const isCollapse = ref(false);
    const routers = reactive(root.$router.options.routes);
    console.log(routers);
    /**
     * 下面为定义的函数
     */
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      isCollapse,
      handleOpen,
      handleClose,
      routers
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
.el-menu {
  border-right: 0;
}
.logo {
  text-align: center;
  img {
    margin: 28px auto 25px;
    width: 75px;
    // box-shadow: 0 3px 16px 0 rgb(0, 0, 0);
    // @include webkit(transition, all 0.3s ease 0s);
  }
}
#nav-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: $sidemenu;
  height: 100vh;
  //   border-top-right-radius: 8px;
  //   border-bottom-right-radius: 8px;
  background-color: $maincolor;
  svg {
    font-size: 18px;
    margin-right: 10px;
    margin-bottom: 2px;
    // margin-left: 10px;
  }
}
</style>