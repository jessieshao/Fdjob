import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import Slide from '../components/Slide'
//import Slide from '../components/Slide'
import PostList from '../components/PostList'
import UserInfo from '../components/UserInfo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components:{
        main:Slide
      }
    },
    {
      name: 'post',
      path: '/message',
      components:{
        main:PostList
      }
    },
    {
    name: 'post_content',
    path: '/topic/:id',
    components:{
      main:Article
    }
    },
    {
      name: 'user_info',
      path: '/userinfo/:name',
      components:{
        main:UserInfo
      }
    }      
  ]
})
