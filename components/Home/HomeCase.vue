<template>
  <div class="home-case">
    <img class="case-title" src="/imgs/home/home-case.png" alt="">
    <div class="case-list">
        <nuxt-link class="case-item" v-for="item in caseList" :key="item.id" :to="item.path">
        <img class="item-imgs" :src="item.imgs" alt="">
        </nuxt-link>
    </div>
  </div>
</template>

<script setup>
const caseList = ref([
    {
        id:1,
        path:'/case/01',
        imgs:'/imgs/home/case-img-01.png'
    },
    {
        id:2,
        path:'/case/02',
        imgs:'/imgs/home/case-img-02.png'
    },
    {
        id:3,
        path:'/case/03',
        imgs:'/imgs/home/case-img-03.png'
    },
    {
        id:4,
        path:'/case/04',
        imgs:'/imgs/home/case-img-04.png'
    },
    {
        id:5,
        path:'/case/05',
        imgs:'/imgs/home/case-img-05.png'
    },
    {
        id:6,
        path:'/case/06',
        imgs:'/imgs/home/case-img-06.png'
    },
])
</script>

<style lang="scss" scoped>
.home-case{
    width: 100%;
    .case-title{
        margin: 140px auto;
    }
    .case-list{
        padding: 0 160px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .item-imgs{
            // width: 500px;
            // height: 318px;
            margin-bottom: 70px;
        }
    }
}
</style>