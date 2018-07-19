<template>
  <div class="hello" v-hammer:swipe="onSwipe">
    <h1>{{ msg }}</h1>
    <div class="swiper">
      <div class="swiper__list" v-bind:style="{ transform: `translate3d(${nums}px, 0px, 0px)`}">
        <div class="swaper__elem">
          <a href="https://ru.vuejs.org/" class="swaper__link">
            <img src="https://unsplash.it/g/300/300?image=502" @mousedown="startDrag" class="swaper__image" unselectable="on">
          </a>
        </div>
        <div class="swaper__elem">
          <a href="https://yandex.ru/maps/" class="swaper__link">
            <img src="https://unsplash.it/g/300/300?image=402" @mousedown="startDrag"  draggable="false" class="swaper__image">
          </a>
        </div>
        <div class="swaper__elem">
          <a href="https://www.google.ru/" class="swaper__link">
            <img src="https://unsplash.it/g/300/300?image=562" @mousedown="startDrag" class="swaper__image">
          </a>
        </div>
        <div class="swaper__elem">
          <a href="https://yandex.ru/" class="swaper__link">
            <img src="https://unsplash.it/g/300/300?image=102" @mousedown="startDrag" class="swaper__image">
          </a>
        </div>
        <div class="swaper__elem">
          <a href="http://www.kremlin.ru/" class="swaper__link">
            <img src="https://unsplash.it/g/300/300?image=602" @mousedown="startDrag" class="swaper__image">
          </a>
        </div>
        <div class="swaper__elem">
          <a href="http://hammerjs.github.io/" class="swaper__link">
            <img src="https://unsplash.it/g/300/300?image=122" @mousedown="startDrag" class="swaper__image">
          </a>
        </div>
        <div class="swaper__elem">
          <a href="https://github.com/" class="swaper__link">
            <img src="https://unsplash.it/g/300/300?image=302" @mousedown="startDrag" class="swaper__image">
          </a>
        </div>
        <div class="swaper__elem">
          <a href="https://habr.com/" class="swaper__link">
            <img src="https://unsplash.it/g/300/300?image=305" @mousedown="startDrag" class="swaper__image">
          </a>
        </div>
        <div class="swaper__elem">
          <a href="#" class="swaper__link">
            <img src="https://unsplash.it/g/300/300?image=402" @mousedown="startDrag" class="swaper__image">
          </a>
        </div>
        <div class="swaper__elem">
          <a href="#" class="swaper__link">
            <img src="https://unsplash.it/g/300/300?image=282" @mousedown="startDrag" class="swaper__image">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      nums: 0
    }
  },
  mounted: function () {

  },
  methods: {
    onSwipe: function (e) {
      const vert = e.overallVelocity
      this.nums += 150*e.overallVelocity
      console.log(this.nums)
      if (this.nums > 260) {
        this.nums = 0
      } 
    },
    startDrag: function (e) {
      e.preventDefault();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swaper__image{
  	display: block;
		height: auto;
    cursor: grab;
    z-index: 0;
}
.swaper__link{

}
.swaper__elem{
  float: left;
  margin: 10px;
}
.swiper__list{
    width: 12048px;
    transition: .5s;
}
.swiper{
  text-align: center;
  z-index: 1;
  position: relative;
  width: 950px;
  overflow: hidden;
  display: inline-block;
}
.hello{
  text-align: center
}
@media screen and (max-width: 768px) {
  .swiper{
    width: 620px;
  }
}
@media screen and (max-width: 480px) {
  .swiper{
    width: 310px;
  }
}
</style>
