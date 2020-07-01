<template>
  <section id="html5">
    <div class="row container">
      <div class="col-md-6 wow fadeInLeft">
        <img src="http://192.168.1.105:8080/Z_web/pic/WA/新品上市-2.png" class="imgfa" alt="" />
      </div>
      <div class="col-md-6 wow fadeInRight paddingl">
        <h2>春夏服饰</h2>
        <p>四大时装周每年两届，分为秋冬时装周（2、3月）</p>
        <p><span class="glyphicon glyphicon-grain mai-icon"></span>和春夏时装周（9、10月上旬）两个部分</p>
        <p><span class="glyphicon glyphicon-grain mai-icon"></span>每次在大约一个月的时间内相继举办300余场时装发布会。</p>
        <p><span class="glyphicon glyphicon-grain mai-icon"></span>具体时间不一定，但都在这个时段内发布。</p>
        <p><span class="glyphicon glyphicon-grain mai-icon"></span>测试长度。</p>
      </div>
    </div>
  </section>
</template>

<script>
import WOW from "wowjs";
export default {
  data() {
    return {};
  },
  mounted() {
    let wow = new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true
    });
    wow.init();
  }
};
</script>

<style scoped>
#html5 {
  /* background: #f8f8f8; */
}
#html5,
#bootstrap {
  padding: 80px 0;
}
#html5 h2,
#bootstrap h2 {
  font-weight: bold;
  padding-top: 81px;
  padding-bottom: 10px;
}
#html5 p,
#bootstrap p {
  line-height: 25px;
}
.imgfa {
  width: 100%;
}
.container {
  margin: 10px auto;
}
.col-md-6 {
  padding: 10px;
}
.paddingl {
  padding-left: 95px;
  /* padding-right: -20px;  */
}
@media (max-width: 500px) {
  .paddingl {
    padding-left: 5px;
  }
}
</style>
