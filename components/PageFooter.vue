<template>
  <div class="footer">
    <div class="footer-one">
<div class="footer-left">
<div>宁波企星网络科技有限公司</div>
<div>营业执照：91430102567888888G</div>
<div>备案号码：湘ICP备88888888号</div>
</div>
<div class="footer-middle">
<div>联系我们</div>
<div>邮箱：qiuzi1217@qq.com</div>
<div>地址：浙江省宁波市海曙区苍水大厦304</div>
</div>
<div class="footer-right">

  <img class="code" src="/imgs/code.png" alt="">
  <div>扫一扫 手机访问</div>

</div>
    </div>
    <div class="footer-two">
      Copyright © 2018-2020 PbootCMS All Rights Reserved.
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.footer{
padding: 0 10%;
background-color: rgb(224, 245, 252);
.footer-one{
  display: flex;
  align-items: center;
  padding: 10px 0;
  .footer-left,
  .footer-middle{
    width: 40%;
    div{
      height: 40px;
      line-height: 40px;
      font-size: 17px;
    }
  }
  .footer-right{
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-self:center;
    align-items: center;
    .code{
      width: 100px;

    }
    div{
      font-size: 15px;
    }

  }
}
@media  screen and (max-width: 1200px) {
  .footer-one{
    flex-direction: column;
    .footer-left,
  .footer-middle{
    
   width: 100%;
  }
  .footer-right{
    display: none;
  }}
}
.footer-two{
  font-size: 15px;

}
}
</style>