<template>
  <section id="bbs">
    <div class="container">
      <div class="row wow fadeInUp">
        <div class="col-md-3">
          <img src="http://192.168.1.105:8080/Z_web/pic/WA/T恤.png" class="img-responsive" alt="">
          <h3>T恤</h3>
          <p>Personal clothes</p>
        </div>
        <div class="col-md-3">
          <img src="http://192.168.1.105:8080/Z_web/pic/WA/卫衣.png" class="img-responsive" alt="">
          <h3>卫衣</h3>
          <p>Personal clothes</p>
        </div>
        <div class="col-md-3">
          <img src="http://192.168.1.105:8080/Z_web/pic/WA/外套.png" class="img-responsive" alt="">
          <h3>外套</h3>
          <p>Personal clothes</p>
        </div>
        <div class="col-md-3">
          <img src="http://192.168.1.105:8080/Z_web/pic/WA/吊带.png" class="img-responsive" alt="">
          <h3>吊带</h3>
          <p>Personal clothes</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
#bbs {
  padding: 50px 0 15px 0;
  text-align: center;
}
#bbs .col-md-3 {
  padding: 25px 30px;
  transition: all 1s;
}
#bbs .col-md-3:hover {
  background: #f1f1f1;
  box-shadow: 1px 1px 4px #ccc;
}
#bbs img {
  margin: 0 auto;
  width: 200px;
}
#bbs h3 {
  margin-top: 25px;
  font-weight: bold;
}
</style>
