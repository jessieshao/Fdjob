
<template>
    <div class="slide">
        <div class="search-area">
            <input type="text" placeholder="搜索信息"><span class="button"> 搜索</span>
        </div>
        <div class="images" id="slides" style="left:-1100px">
            <img src="../assets/job_4.jpg" alt="图片" width="1100" height="346">
            <img src="../assets/job_1.jpg" alt="图片" width="1100" height="346">
            <img src="../assets/job_1.jpg" alt="图片" width="1100" height="346">
            <img src="../assets/job_3.jpg" alt="图片" width="1100" height="346">
            <img src="../assets/job_4.jpg" alt="图片" width="1100" height="346">
            <img src="../assets/job_1.jpg" alt="图片" width="1100" height="346">
        </div>
        <div class="buttons">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="controls clearfix">
            <a href="javascript:;" class="arrow arrow_left">&lt;</a>
            <a href="javascript:;" class="arrow arrow_right">&gt;</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Slide",
}

</script>

<style scoped>
* {
    margin:0;
    padding:0;
}
a{
    text-decoration: none;
}
.search-area{
    margin-bottom: 40px;
    color: #333;
    border-bottom: 1px solid #ccc;
    position: relative;
    }
.search-area input {
    font-size: 1.1em;
    width: calc(100% - 50px);
    padding: 8px;
    background-color: #eee;
    border: none;
    border-radius: 2px;
    box-shadow: none;
    outline: none;
    }
 .search-area .button{
    position: absolute;
    right: 0;
    padding: 8px 10px;
    background: #30AC3C;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
    }
.slide{
    position: relative;
    margin: 0 auto 0 auto;
    overflow: hidden;
    height: 446px;
    width: 1100px;
    padding-top: 80px; 
}
.images{
    position: absolute;
    width: 6600px;
    height: 346px;
    z-index: 1;
}
.slide .buttons{
    position: absolute;
    height: 20px;
    width: 300px;
    bottom: 30px;
    margin-left: 400px ;
    z-index: 2;
}
.slide .buttons span{
    display: inline-block;
    width: 60px;
    height: 15px;
    cursor: pointer;
    background-color: black ;
    opacity: 0.7;
}
.slide .buttons span.on{
    opacity: 0.5;
}
.slide .arrow{
    position: absolute;
    top: 55%;
    color: beige;
    opacity: 0.3;
    font-size: 70px;
    border-radius: 50%;
    padding: 0px 14px;
    z-index: 2;
    display: none;
}
.slide .controls .arrow_left{
    left: 20px;
}
.slide .controls .arrow_right{
    right: 20px;
}
.slide:hover .arrow{
    display: block;
}
.slide .arrow:hover{
    opacity: 0.7;
}
</style>
