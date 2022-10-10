<template>
  <div class="home-business">
<img class="business-title"
 src="/imgs/home/home-business.png" 
 alt="">
 <div class="business-content">
<div class="business-list" >
<nuxt-link class="business-item" :to="item.path" 
v-for="item in businessList" :key="item.id">
 <img class="item-imgs" :src="item.imgs" alt="">
 <div class="item-name">{{item.name}}</div>
</nuxt-link>
</div>
<div class="show-box">
  <img class="business-show"  src="/imgs/home/business-show/网站建设.png" alt="">

</div>

 </div>
  
  </div>
</template>

<script setup>
const businessList = ref([
    {
        id:1,
        imgs:'/imgs/home/business-icon-01.png',
        name:'网站建设',
        path:'/business/01',
    },
    {
        id:2,
        imgs:'/imgs/home/business-icon-02.png',
        name:'网站SEO优化',
        path:'/business/02',
    },
    {
        id:3,
        imgs:'/imgs/home/business-icon-03.png',
        name:'B2C、B2B开发',
        path:'/business/03',
    },
    {
        id:4,
        imgs:'/imgs/home/business-icon-04.png',
        name:'移动客户端开发',
        path:'/business/04',
    },
    {
        id:5,
        imgs:'/imgs/home/business-icon-05.png',
        name:'微信小程序开发',
        path:'/business/05',
    },
    {
        id:6,
        imgs:'/imgs/home/business-icon-06.png',
        name:'H5响应式开发',
        path:'/business/06',
    },
    {
        id:7,
        imgs:'/imgs/home/business-icon-07.png',
        name:'app开发',
        path:'/business/07',
    },
    {
        id:8,
        imgs:'/imgs/home/business-icon-08.png',
        name:'百度谷歌推广',
        path:'/business/08',
    },
    {
        id:9,
        imgs:'/imgs/home/business-icon-09.png',
        name:'企业邮箱',
        path:'/business/09',
    }
])

</script>

<style lang="scss" scoped>
.home-business{
  width: 100%;
  .business-title{
   width: 526.84px;
   height: 61px;
    margin: 0 auto;
    margin-top: 85px;
    margin-bottom: 100px;

  }
  .business-content{
    display: flex;
    
    justify-content: space-between;
    .business-list{
      margin-left: 110px;
      width: 1000px;
      display: flex;
      flex-wrap: wrap;
      .business-item{
        font-size: 21px;
        color: #6E6E6E;
        margin:25px 70px;
       
        display: flex;
        flex-direction: column;
        align-items: center;
        .item-imgs{
          width: 170px;
          height: 148px;
        }
        .item-name{
          margin-top: 25px;
        }
      }
    }
    .show-box{
      
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      .business-show{
        width: 600px;
      
      
  }
    }
    

  }
}
</style>