<template>
    <div class="userInfomation" >
    <div class="usenamef">
    <div class="usermes">
      <img :src="userinfo.avatar_url" >
      <span class="usename">{{userinfo.loginname}}</span>
      <button class="button-two"><span>私信他</span></button>
    </div></div>
    <div class="topics">
      <p>创建的主题</p>
      <ul>
        <li v-for="item in userinfo.recent_topics">
          <router-link :to="{
          name:'post_content',
          params:{
            id:item.id
          }
          }">
            {{item.title}}
          </router-link>
        </li>
      </ul>
    </div>
    </div>
</template>

<script>
export default {
    name: "UserInfo",
    data(){
          return {
            userinfo:{}
          }
      },
      methods:{
          getData(){
              this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
                .then(res=>{
                  this.userinfo = res.data.data;
                })
                .catch(function (err) {
                  console.log(err)
                })
          }
      },
      beforeMount(){
        this.getData();//在页面加载之前获取数据
      }

}
</script>
<style scoped>
html{
    height: 100%;
}
.userInfomation {
    background: white;
    width: 75%;
    margin: 0px auto;
  }
.userInfomation .usenamef{
    text-align: center;
}
  .userInfomation .usermes {
    display: inline-block;
    padding: 12px;
    text-align: center;
  }
  .userInfomation img {
    display: block;
    margin-bottom: 10px;
  }
  .usename{
    background-color: antiquewhite;
  }
  button{
      margin: 10px 0;
      font-size: 1.0em;
      color: #ffffff;
  }
  .button-two {
  width: 120px;

  display: block;
  outline: none;
  background-color: #27ae60;
  border: none;
  border-radius:1px;
  box-shadow: 0 5px #95a5a6;
}

.button-two:hover{
  background-color: #2ecc71;
}

.button-two:active {
  background-color: #2ecc71;
  box-shadow: 0 5px #95a5a6;
  transform: translateY(4px);
}


  .userInfomation li {
    list-style:none;
  }
  .userInfomation .replies,
  .userInfomation .topics {
    font-size: 1.20rem;
    border-top: 10px #DDDDDD solid;
  }
  .userInfomation > div > p {
    padding: 12px 0 12px 12px;
    background-color: rgba(212, 205, 205, 0.17);
    font-size: 1.25rem;
    margin: 0;
  }
  .userInfomation > div >ul > li {
    padding: 4px 0 4px 12px;
    white-space: nowrap;
    font-size: 1.00rem;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
    vertical-align: middle;
  }
  .userInfomation > div >ul > li > a {
    color: #094E99;
    text-decoration: none;
  }
</style>
