
<template>
    <div class="PostList">
        <div class="loading" v-if="isLoading">
            <img src="../assets/loading.gif" alt="">
        </div>
        <div class="posts">
            <ul>
                <li>
                    <div class="toobar">
                        <span>全部</span>
                        <span>精华</span>
                        <span>分享</span>
                        <span>问答</span>
                    </div>
                </li>
                <li v-for="post in posts">
                    <!--头像-->
                    <img :src="post.author.avatar_url" alt="">
                    <!--回复/浏览-->
                    <span class="allcount">
                        <span class="reply_count">{{post.reply_count}}</span>/{{post.visit_count}}
                    </span>
                    <span :class="[{put_good:(post.good == true),put_top:(post.top ==true),
                    'topiclist-tab':(post.good != true && post.top !=true)}]">
                        <span>
                            {{post | tabFormatter}}
                        </span>
                    </span>
                    <router-link :to="{
                    name:'post_content',
                    params:{
                        id:post.id,
                    }
                    }">
                        <!--题目-->
                        <span>
                            {{post.title}}
                        </span>
                    </router-link>
                    <!--更新时间-->
                    <span class="last_reply">
                        {{post.last_reply_at | formatDate}}
                    </span>                    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "PostList",
    data(){
        return{
            isLoading:false,
            posts:[],//代表页面的数组列表
        }
    },
    methods:{
        getData(){
            this.$http.get('https://cnodejs.org/api/v1/topics',{
                page: 1,
                limit: 20,
            })
            .then(res=>{
                this.loading = false;//加载成功去除动画
                this.posts = res.data.data;
                console.log(this.posts)
            })
            .catch(err=>{
                console.log(err)
            })
        }   
    },
    beforeMount(){
        this.loading = true;//加载成功之前加载动画
        this.getData();//页面加载前获取数据
    }
}
</script>

<style scoped>
  .PostList{
    width: 80%;
    margin: 0 auto;
    background-color: #e1e1e1;
  }
  .posts {
    margin-top: 0px;
  }

  .PostList img {
    height: 30px;
    width: 30px;
    vertical-align: middle;
  }

  ul {
    list-style: none;
    width: 100%;
    max-width: 1344px;
    margin: 0 auto;
  }

  ul li:not(:first-child) {
    padding: 9px;
    font-size: 15px;
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
    font-weight: 400;
    background-color: white;
    color: #333;
    border-top: 1px solid #f0f0f0;
  }

  li:not(:first-child):hover {
    background: #f5f5f5;;
  }

  li:last-child:hover {
    background: white;
  }

  li span {
    line-height: 30px;
  }

  .allcount {
    width: 70px;
    display: inline-block;
    text-align: center;
    font-size: 12px;
  }

  .reply_count {
    color: #9e78c0;
    font-size: 14px;
  }

  .put_good, .put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
    margin-right: 10px;
  }

  .topiclist-tab {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    font-size: 12px;
    margin-right: 10px;
  }

  .last_reply {
    text-align: right;
    min-width: 50px;
    display: inline-block;
    white-space: nowrap;
    float: right;
    color: #778087;
    font-size: 12px;
  }

  .toobar {
    height: 40px;
    background-color: #f5f5f5;
  }

  .toobar span {
    font-size: 14px;
    color: #80bd01;
    line-height: 40px;
    margin: 0 10px;
    cursor: pointer;
  }

  .toobar span:hover {
    color: #9e78c0;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }

  .loading {
    text-align: center;
    padding-top: 300px;
  }

</style>
