<template>
  <div class="home">
    <!-- 首页的轮播图 -->
    <div class="home-carousel">
      <img class="carousel-imgs" src="/imgs/home/carousel-01.png" alt="">
        <div class="carousel-font">
          想做网站？试试未科 360全方位售后服务，24小时为您服务。 多名专业技术人员为您提供全天的技术支持。
        </div>
    </div>
    <!-- 首页的业务范围 -->
    <HomeBusiness/>
    <!-- 首页的选择未科的几大理由 -->
    <HomeSuperiority/>
<!-- 首页的服务案例 -->
    <HomeCase/>
    <!-- 首页的公司简绍 -->
   <HomeProfile/>
  </div>
</template>

<script setup>
// 优势列表
// const superiorityList = ref([
//   {
//     icon:'imgs/code.png',
//     font:'创意设计策划优势'
//   },
//   {
//     icon:'imgs/code.png',
//     font:'网站构架优势'
//   },
//   {
//     icon:'imgs/code.png',
//     font:'程序技术优势'
//   },
//   {
//     icon:'imgs/code.png',
//     font:'SEO优势'
//   },
//   {
//     icon:'imgs/code.png',
//     font:'服务优势'
//   },
//   {
//     icon:'imgs/code.png',
//     font:'服务优势'
//   }
// ])
</script>

<style lang="scss" scoped>
.home-carousel{
  width: 100%;
  height: 100%;
  position: relative;
  .carousel-imgs{
    width: 100%;
    height: 100%;
  }
  .carousel-font{
position: absolute;
top: 300px;
left: 100px;
z-index: 999;
color: #fff;
  }
 
}

</style>
