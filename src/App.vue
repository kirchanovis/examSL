<template>
  <div id="app" @scroll="handleScroll">
    <div class="header" v-bind:class="{ header_fixed: isSticky }">
      <ul class="menu">
        <li class="menu__elem">
          <router-link class="menu__link menu__link_light-text" :to="'/'">Home</router-link>
        </li>
        <li class="menu__elem">
          <router-link class="menu__link menu__link_light-text" :to="'/about'">About</router-link>
        </li>
        <li class="menu__elem">
          <router-link class="menu__link menu__link_light-text" :to="'/contact'">Contact</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isSticky : false
    }
  },
  mounted: function () {

  },
  methods: {
      handleScroll (event) {
        if(window.scrollY>50){
          this.isSticky = true
        }
        else{
          this.isSticky = false
        }
    }
  },
  beforeMount: function () {
    window.scrollTo(0, 0)
  },
  created: function () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
.header{
  padding: 10px 16px;
  background: #555;
  color: #f1f1f1;
}
.header_fixed{
  position: fixed;
  top: 0;
  width: 100%;
}
.menu{
  text-align: left;
}
.menu__elem{
  display: inline;
}
.menu__link{
  text-decoration: none;
}
.menu__link_light-text:hover{
  color: #e3e3e3;
}
.menu__link_light-text{
  color: #fff;
}
</style>
