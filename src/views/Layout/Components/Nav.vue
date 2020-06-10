<template>
  <div id="nav-wrap">
    <h1 class="logo"><img src="../../../assets/logoWA.png" alt=""></h1>
    <!-- <div class="title">- OfferClear Admin -</div> -->
    <!-- <div class="title">WA后台管理系统</div> -->
    <div class="black-space-10"></div>
    <!-- transparent:背景透明 -->
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse" background-color="#454c53"
      text-color="#fff" active-text-color="#ffd04b" router>
      <template v-for="(item,index) in routers">
        <el-submenu v-if="!item.hidden" :key="item.id" :index="index+''">
          <template slot="title">
            <svg-icon :iconClass="item.meta.icon" :className="item.meta.icon" />
            <!-- <svg-icon iconClass="message" className="message" /> -->
            <span slot="title">{{ item.meta.name }}</span>
            <!-- <svg-icon iconClass="message" className="message" /> -->
          </template>
          <template v-for="subItem in item.children">
            <el-menu-item v-if="!subItem.hidden" :key="subItem.id" :index="subItem.path">{{subItem.meta.name}}
            </el-menu-item>
          </template>
          <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
import {
  reactive,
  ref,
  isRef,
  toRefs,
  onMounted,
  computed
} from "@vue/composition-api";
export default {
  name: "navMenu",
  setup(props, { root }) {
    // const isCollapse = ref(false);
    const routers = reactive(root.$router.options.routes);
    /**
     * 监听header按钮的变化
     * ES6写法 只有一行不用写花括号 多行需要花括号+return
     */
    const isCollapse = computed(() => root.$store.state.app.isCollapse);
    /**
     * 下面为定义的函数
     */
    return {
      isCollapse,
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
.title {
  margin: 20px auto;
  width: 120px;
  font-size: 15px;
  color: #ffffff;
  @include webkit(transition, all 0.3s ease 0s);
  font-family: "Microsoft YaHei";
  font-weight: lighter;
}
.logo {
  text-align: center;
  // img {
  //   // margin: 28px auto 25px;
  //   margin: 28px auto;
  //   width: 75px;
  //   @include webkit(transition, all 0.3s ease 0s);
  //   // box-shadow: 0 3px 16px 0 rgb(0, 0, 0);
  //   // @include webkit(transition, all 0.3s ease 0s);
  // }
  img {
    // margin: 28px auto 25px;
    margin: 24px auto;
    width: 110px;
    @include webkit(transition, all 0.3s ease 0s);
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
  background-color: $maincolor;
  @include webkit(transition, all 0.3s ease 0s);
  svg {
    font-size: 18px;
    margin-right: 10px;
    margin-bottom: 2px;
    // margin-left: 10px;
  }
}
.open {
  #nav-wrap {
    width: $sidemenu;
  }
}
.close {
  #nav-wrap {
    width: $navMenueMin;
  }
  .logo img {
    width: 55%;
  }
  .title {
    display: none;
  }
}
</style>