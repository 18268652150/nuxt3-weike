<template>
  <div class="home-superiority"> 
    <img class="superiority-title" src="/imgs/home/home-superiority.png" alt="">
      <div class="superiority-content">
        <div class="superiority-list">
            <nuxt-link class="superiority-item"
               :to="item.path" 
            v-for="item in superiorityList" :key="item.id">
    
          <img class="item-imgs" :src="item.imgs" alt="">
            <div class="item-name" >{{item.name}}</div>
    
                </nuxt-link>
        </div>
        <div class="superiority-show">
            未科，始终执着的追求完美品质，不向平庸低头，只为您满意的笑容。                 
        </div>
 

</div>
    </div>
</template>

<script setup>
const superiorityList = ref([
    {
        id:1,
        path:'/superiority/01',
         imgs:'/imgs/home/superiority-icon-01.png',
        name:'经验优势',
    },
    {
        id:2,
        path:'/superiority/02',
         imgs:'/imgs/home/superiority-icon-02.png',
        name:'创意设计策划优势',
    },
    {
        id:3,
        path:'/superiority/03',
         imgs:'/imgs/home/superiority-icon-03.png',
        name:'网站构架优势',
    },
    {
        id:4,
        path:'/superiority/04',
         imgs:'/imgs/home/superiority-icon-04.png',
        name:'程序技术优势',
    },
    {
        id:5,
        path:'/superiority/05',
         imgs:'/imgs/home/superiority-icon-05.png',
        name:'SEO优势',
    },
    {
        id:6,
        path:'/superiority/06',
         imgs:'/imgs/home/superiority-icon-06.png',
        name:'服务优势',
    },
])
</script>

<style lang="scss" scoped>
.home-superiority{
    width: 100%;
    .superiority-title{
        margin: 85px auto;
    }
    .superiority-content{
        height: 765px;
        padding: 160px 240px 0 240px  ;
        background-image: url('/imgs/home/superiority-bg.png');
    .superiority-list{
        display: flex;
        justify-content: space-between;
      
        .superiority-item{
            color: #fff;
            font-size: 24px;
            width: 200px;
            height: 285px;
            border-radius: 20px;
            
            backdrop-filter: blur(80px);
            display: flex;
          
            flex-direction: column;
            align-items: center;
          
            .item-imgs{
                margin: 50px 0;
                width: 76px;
                height: 76px;
            }
            .item-name{
                width: 100px;
                text-align: center;
            }
        }
        .superiority-item:hover{
            background-color: #4FA2E1;
        }
       
    }
    .superiority-show{
        color: #fff;
        font-size: 38px;
        margin-top: 72px;
    }
    }
}
</style>