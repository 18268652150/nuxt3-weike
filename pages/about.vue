<template>
  <div class="product">
    <div class="product-bg">
      <div class="product-bg-font">
        <div>
        <div class="product-bg-font-title">产品中心</div>
        服务创造价值、存在造就未来
      </div>
      
      </div>
      
    </div>
    <div class="classify">
      <div class="classify-item">
        <div class="classify-title">类型：</div>
        
      <div class="classify-button" v-for="item in typeList" :key="item.id"><nuxt-link :to="item.path">{{item.name}}</nuxt-link></div>
      </div>
      <div class="classify-item">
        <div class="classify-title">颜色：</div>
        
      <div class="classify-button" v-for="item in colorList" :key="item.id"><nuxt-link :to="item.path">{{item.name}}</nuxt-link></div>
      </div>
    </div>
    <Show/>
  </div>
</template>

<script setup>
const typeList = [
  {
    id:1,
    name:'全部',
    path:'/'
  },
  
  {
    id:1,
    name:'基础版',
    path:'/'
  },
  {
    id:1,
    name:'专业版',
    path:'/'
  },
  {
    id:1,
    name:'旗舰版',
    path:'/'
  },
]
const colorList = [
  {
    id:1,
    name:'全部',
    path:'/'
  },
  
  {
    id:1,
    name:'红色',
    path:'/'
  },
  {
    id:1,
    name:'蓝色',
    path:'/'
  },
  {
    id:1,
    name:'绿色',
    path:'/'
  },
  {
    id:1,
    name:'黄色',
    path:'/'
  },
]
</script>

<style lang="scss" scoped>
.product{
 
  .product-bg{
    background-image:url("/imgs/product-bg.jpg");
    color:#fff;
    .product-bg-font{
      margin-left: 10%;
      height: 200px;
      display: flex;
      align-items: center;
      font-size: 20px;
      .product-bg-font-title{
        font-size: 30px;
        margin-bottom: 10px;
      }
   
    }
  }
  .classify-item{
    margin-left: 10%;
    display: flex;
    font-size: 20px;
    align-items: center;
    .classify-title{
      margin-right: 50px;
    }
    .classify-button{
      background-color: #fff;
      margin: 10px;
      padding: 6px 10px;
      background-color: rgb(238, 232, 232);
      border-radius: 5px;
 

    }
  }
}
</style>