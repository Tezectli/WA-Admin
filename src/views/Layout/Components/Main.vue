<template>
  <div id="main-wrap">
    <router-view />
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
@import "../../../styles/config.scss";
#main-wrap {
  //background-color: #fff;
  position: fixed;
  left: $sidemenu;
  top: 55px;
  right: 0;
  bottom: 0;
  border: 30px solid #f1efef;
  border-bottom: none;
  -webkit-box-sizing: border;
}
</style>