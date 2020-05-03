<template>
  <div id="main-wrap">
    <div class="main-content">
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
#main-wrap {
  height: 100vh;
  //background-color: #fff;
  // position: fixed;
  // left: $sidemenu;
  // top: 55px;
  // right: 0;
  // bottom: 0;
  // border: 30px solid #f1efef;
  // border-bottom: none;
  // -webkit-box-sizing: border;
}
.main-content {
  width: 100%;
  height: 100%;
  padding-top: $layoutHeader + 30;
  padding-left: $sidemenu + 30;
  padding-right: 30px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  @include webkit(box-sizing, border-box);
  @include webkit(transition, all 0.3s ease 0s);
}
.open {
  .main-content {
    padding-left: $sidemenu + 30;
  }
}
.close {
  .main-content {
    padding-left: $navMenueMin + 30;
  }
}
.content {
  width: 100%;
  height: 100%;
  padding: 28px 30px 0 30px;
  background-color: rgb(255, 255, 255);
  @include webkit(box-sizing, border-box);
}
</style>