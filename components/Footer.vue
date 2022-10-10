<template>
  <div class="footer">

    <div class="footer-head">
        <div class="name">未科</div>
         <div class="info">
           
         <div class="left">
            联系我们<br/>
    电话:1333333333<br/>
    地址:宁波市海曙区苍水大厦304
       </div>
       <img class="code" src="/imgs/code.png" alt="">
</div>

    </div>
    <div class="footer-foot">
        浙ICP备XXXXXXXX号-X
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.footer{
    width: 100%;
    
    .footer-head{
        color: #fff;
        background-image: url('/imgs/footer-bg.png');
        
        padding: 40px 320px ;
        .name{
            margin-top: 40px;
            font-size: 50px;
        }
        .info{
margin-top: 25px;
            font-size: 22px;
            line-height: 40px;
            display: flex;
            justify-content: space-between;
           
            .code{
                width: 127px;
                height: 127px;
            }
        }
       
      
    }
    .footer-foot{
        font-size: 20px;
        line-height: 60px;
        text-align: center;
        color: #BCBCBC;
    }
}
</style>