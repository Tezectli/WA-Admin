<template>
  <div id="df">
    <b-navbar toggleable="lg" type="dark" variant="">
      <img src="https://s1.ax1x.com/2020/06/28/Ncgern.png" class="d-inline-block align-top imgtop" alt="Kitten">
      <!-- <b-navbar-brand href="#">
        NavBar
      </b-navbar-brand> -->

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="paddingleftlist">
          <b-nav-item href="http://localhost:8081/#/mainpage">首页</b-nav-item>
          <b-nav-item href="http://localhost:8081/#/womenclothList">女装</b-nav-item>
          <b-nav-item href="http://localhost:8081/#/aboutWA">关于我们</b-nav-item>
          <b-nav-item href="http://localhost:8081/#/WAproduct">品牌概念</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form class="navLeft">
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0 maincolor" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="语言" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>{{username}}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import { computed } from "@vue/composition-api";
export default {
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
<style scoped>
#df {
  background: #700b01;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
}
.imgtop {
  width: 75px;
  height: 32px;
  margin: 0 25px;
}
.navLeft {
  padding: 2px 15px;
}
.maincolor {
  /* background-color: #700b01; */
  background-color: #ffffff36;
  border: none;
}
.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.8) !important;
}
@media (max-width: 500px) {
  .ml-auto {
    display: none;
  }
  .imgtop {
    width: 65px;
    height: 28px;
    margin: 0 11px;
  }
  .paddingleftlist {
    padding-left: 12px;
  }
}
</style>
