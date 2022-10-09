<template>
  <div class="show">
    <div class='show-name'>产品介绍</div>
    <div class="show-list">
        <div class="show-box" v-for="item in showList" :key="item.id">
<nuxt-link :to="item.path">
    <div class="show-item">
        <img class="show-img" :src="item.img" alt="">
        <div class="show-font">
            <div class="show-title">{{item.title}}</div>
<div class="show-content">{{item.content}}</div>
        </div>

    </div>
</nuxt-link>
    </div>
    </div>
 
  </div>
</template>

<script setup>
const showList = ref([
    {
        id:1,
        path:'/about',
        img:'/imgs/show-1.jpg',
        title:'网站空间',
        content:'PbootCMS是全新内核且永久开源免费的PHP企业网站开发建设管理系统，是一套高效、简洁、 强悍···'
    },
    {
        id:1,
        path:'/about',
        img:'/imgs/show-1.jpg',
        title:'网站空间',
        content:'PbootCMS是全新内核且永久开源免费的PHP企业网站开发建设管理系统，是一套高效、简洁、 强悍···'
    },
    {
        id:1,
        path:'/about',
        img:'/imgs/show-1.jpg',
        title:'网站空间',
        content:'PbootCMS是全新内核且永久开源免费的PHP企业网站开发建设管理系统，是一套高效、简洁、 强悍···'
    },
    {
        id:1,
        path:'/about',
        img:'/imgs/show-1.jpg',
        title:'网站空间',
        content:'PbootCMS是全新内核且永久开源免费的PHP企业网站开发建设管理系统，是一套高效、简洁、 强悍···'
    },
    {
        id:1,
        path:'/about',
        img:'/imgs/show-1.jpg',
        title:'网站空间',
        content:'PbootCMS是全新内核且永久开源免费的PHP企业网站开发建设管理系统，是一套高效、简洁、 强悍···'
    },
    {
        id:1,
        path:'/about',
        img:'/imgs/show-1.jpg',
        title:'网站空间',
        content:'PbootCMS是全新内核且永久开源免费的PHP企业网站开发建设管理系统，是一套高效、简洁、 强悍···'
    },
    {
        id:1,
        path:'/about',
        img:'/imgs/show-1.jpg',
        title:'网站空间',
        content:'PbootCMS是全新内核且永久开源免费的PHP企业网站开发建设管理系统，是一套高效、简洁、 强悍···'
    },
    {
        id:1,
        path:'/about',
        img:'/imgs/show-1.jpg',
        title:'网站空间',
        content:'PbootCMS是全新内核且永久开源免费的PHP企业网站开发建设管理系统，是一套高效、简洁、 强悍···'
    },
])
</script>

<style lang="scss" scoped>
.show{
    background-color: rgb(252, 243, 217);
    padding: 50px 10%;
    
.show-name{
    font-size: 30px;
    text-align: center;
}
    .show-list{
    display: flex;
    flex-wrap: wrap;
    
    .show-box{
        width: 25%;
        // height: 300px;
      
        .show-item{
            border: 1px solid #c1c1c1;
            margin:  10%;
            
        
            .show-img{
                width: 100%
            }
            .show-font{
                background-color: #fff;
                padding: 20px;
                .show-title{
                    text-align: center;
                    font-size: 18px;
                    height: 30px;
                    line-height: 30px;
                }
            }
        }
    }
    @media  screen and (max-width: 1200px) {
  .show-box{
    width: 33.333333333%;
  }
}
@media  screen and (max-width: 1000px) {
  .show-box{
    width: 50%;
  }
}
@media  screen and (max-width: 650px) {
    .show{
        padding: 0;
    }
  .show-box{
    width: 100%;
    .show-item{
        margin: 20px 0;
    }
  }
}
}
}

</style>