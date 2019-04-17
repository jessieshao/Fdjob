<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name = 'main'></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Slide from './components/Slide.vue';
import PostList from './components/PostList.vue';


export default {
  name: 'App',
  components:{
    Header,
    Slide,
    PostList
  }
}
</script>

<style>
.main{
  background-image: url(./assets/back.jpg);
  min-height: 700px;
}

</style>
