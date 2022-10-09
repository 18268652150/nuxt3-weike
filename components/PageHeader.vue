<template>
  <div class="header">
    <div class="header-box">
      <div class="logo"><img src="/imgs/logo.png" alt="" /></div>
      <div class="nav">
        <div class="nav-box" v-for="item in navList" :key="item.path">
          <nuxt-link :to="item.path"> {{ item.name }}</nuxt-link>
        </div>
      </div>
    </div>
    <div class="header-font">
      <div class="title">未科 设计</div>
      <div class="content">
        想做网站？试试<span>未科</span><br />
        360全方位售后服务，24小时为你服务。<br />
        多名专业技术人员为您提供全天的技术支持。
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
  background-image: url('/imgs/back.jpeg');
  width: 100%;
  height: 910px;
  color: #fff;
  padding: 0 150px;
}
.header-box {
  width: 100%;
  // width: calc(100% - 300px);
  display: flex;
  align-items: center;

  justify-content: space-between;

  .nav {
    font-size: 18px;
    display: flex;
    .nav-box {
      border-top: 4px solid rgba(0, 0, 0, 0);

      padding: 32px 22px;
      margin: 0 4px;
    }
    .nav-box:hover {
      color: #448aca;
      border-top: 4px solid #448aca;
    }
  }
}
.header-font {
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  margin-top: 160px;
  color: rgb(248, 234, 174);
  .title {
    font-size: 86px;
  }
  .content {
    font-size: 48px;
    span {
      color: red;
    }
  }
}
</style>
