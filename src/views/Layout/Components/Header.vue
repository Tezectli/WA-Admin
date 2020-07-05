<template>
  <div id="header-wrap">
    <div class="pull-left header-icon" @click="navMenuState">
      <svg-icon iconClass="menu" className="menu" />
    </div>
    <div class="pull-right">
      <div class="user-info pull-left">
        <img src="../../../assets/face.png" alt="">
        {{username}}
      </div>
      <div class="header-icon2 pull-left">
        <svg-icon iconClass="open" className="open" />
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "@vue/composition-api";
export default {
  name: "layoutHeader",
  setup(props, { root }) {
    const username = computed(() => root.$store.state.app.username);
    const navMenuState = () => {
      root.$store.commit("app/SET_COLLAPSE");
      // root.$store.dispatch("setMenuStatus", { name: "ddd" });
    };
    return {
      navMenuState,
      username
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
#header-wrap {
  position: fixed;
  top: 0;
  right: 0;
  left: $sidemenu;
  height: 55px;
  line-height: 55px;
  background-color: #fff;
  @include webkit(box-shadow, 0 3px 16px 0 rgba(0, 0, 0, 0.1));
  @include webkit(transition, all 0.3s ease 0s);
}
.open {
  #nheader-wrap {
    left: $sidemenu;
  }
}
.close {
  #header-wrap {
    left: $navMenueMin;
  }
}
.header-icon {
  // padding: 3px 32px;
  padding: 0 32px;
  svg {
    font-size: 24px;
    cursor: pointer;
    // margin-bottom: -23px;
  }
}
.header-icon2 {
  // padding: 3px 20px;
  padding: 0 20px;
  svg {
    font-size: 20px;
    cursor: pointer;
    // margin-bottom: -23px;
  }
}
.user-info {
  height: 100%;
  padding: 0 32px;
  border-right: 1px solid #ededed;
  img {
    display: inline-block;
    margin-bottom: -12px;
    margin-right: 20px;
    border-radius: 50px;
    background-color: rgb(238, 238, 238);
  }
}
</style>