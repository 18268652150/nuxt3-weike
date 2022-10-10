<template>
  <div class="home-profile">
    <div class="profile-title">
      <nuxt-link to="/profile" >关于<span>未科</span> ></nuxt-link>
    </div>
    
   
    <div class="profile-content">
      宁波企星网络科技有限公司致力服务于各大中小型企业和打造宁波互联网高端品牌文化。<br/>
我们专业为客户提供<strong>品牌网站定制，营销型网站定制，高端个性化网站定制，HTML5响应式网站开发，<br/>
B2B/B2C平台开发，移动端网站开发，微官网微商城制作，微信小程序开发，百度谷歌优化排名，社交媒体营销，</strong><br/>
为每位客户量身打造品牌效应，协助客户更精准的利用互联网工具拓展业务渠道。企星团队聚集了从事网络行业多年的人才，<br/>
一直以“服务为荣，技术为胜”的信念，帮助企业更好的发展，做到互利共赢。<br/>
我们的理念：服务只有起点，满意没有终点。我们的宗旨:急客户所急,想客户所想,您的满意是我们的追求。<br/>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.home-profile{
width: 100%;

padding-left: 221px;

background-image: url('/imgs/home/profile-bg.png');
.profile-title{
  margin: 90px 0 50px 0;
  font-size: 45px;
  span{
    color: #448ACA;
  }
}
.profile-content{
  font-size: 25px;
  padding-bottom: 190px;
  line-height: 45px;
}
}
</style>