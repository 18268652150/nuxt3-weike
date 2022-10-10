<template>
  <div class="header">
    <div class="header-box">
      <nuxt-link to="/profile" class="logo"><img src="/imgs/logo.png" alt="" /></nuxt-link>
      
      <div class="nav">
        <!-- <div class="nav-box" v-for="item in navList" :key="item.path"> -->
          <nuxt-link :to="item.path"
           class="nav-item" 
           v-for="item in navList" :key="item.path">
            {{ item.name }}
          </nuxt-link>
        <!-- </div> -->
      </div>
    </div>

  </div>
</template>

<script setup>
const navList = ref([
  {
    name: '首页',
    path: '/',
  },
  {
    name: '公司简介',
    path: '/profile',
  },
  {
    name: '业务范围',
    path: '/business',
  },
  {
    name: '新闻中心',
    path: '/news',
  },
  {
    name: '服务案例',
    path: '/case',
  },
  {
    name: '我们的优势',
    path: '/superiority',
  },
  {
    name: '在线留言',
    path: '/message',
  },
  {
    name: '联系我们',
    path: '/contact',
  },
])
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 0 150px;
  backdrop-filter: blur(80px);
  position: absolute;
  z-index: 99999;

}
.header-box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav {
    font-size: 18px;
    display: flex;
    .nav-item {
      border-top: 4px solid rgba(0, 0, 0, 0);
      color:#fff;
      padding: 32px 26px;
     
     
    }
    .nav-item:hover {
      color: #448aca;
      border-top: 4px solid #448aca;
    }
  }
}

</style>
