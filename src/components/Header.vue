<template>
    <div class="header">
        <img src="" alt="">
        <ul class="">
            <li><router-link :to="{name:'root'}">首页</router-link></li>
            <li><a href="#">注册</a></li>
            <li><a href="#">招聘信息</a></li>
            <li><router-link :to="{name:'post'}">讨论区</router-link></li>
            <li><a href="#">搜索</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
.header{
    background-color: #3D444C;
    height: 50px;
}
ul{
    list-style: none;
    float: right;
    margin: 4px;
}
li{
    display: inline-block;
    padding: 10px 15px;
}
a{
    text-decoration: none;
    color:#D9D9DA;
    font-size: 14px;
    text-shadow: none;
}
</style>
