<template>
  <div id="mtop">
    <b-carousel id="carousel-1" v-model="slide" :interval="3000" controls indicators background="#ababab"
      img-width="1920" img-height="1080" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">
      <!-- Text slides with image -->
      <b-carousel-slide caption="欢迎光临W&A服饰商城" text="Welcome to W&A Project"
        img-src="http://192.168.1.105:8080/Z_web/pic/WA/banner1.png"></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="http://192.168.1.105:8080/Z_web/pic/WA/banner5.png">
        <h4>Welcome!</h4>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="http://192.168.1.105:8080/Z_web/pic/WA/banner3.png"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <!-- <b-carousel-slide>
        <template v-slot:img>
          <img class="d-block img-fluid w-100" width="1024" height="480" src="https://picsum.photos/1024/480/?image=55"
            alt="image slot">
        </template>
      </b-carousel-slide> -->

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->
    </b-carousel>

    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>
<style scoped>
#mtop {
  margin-top: 56px;
}
</style>