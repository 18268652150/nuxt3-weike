<template>
  <div class="message">在线留言</div>
  <div class="box">
    4563
  </div>
</template>

<script setup>
</script>

<style scoped>
.box{
  width: 500px;
  height: 500px;
  background-color: red;
  -webkit-animation-name: puffIn;
          animation-name: puffIn;
}


@-webkit-keyframes puffIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    filter: blur(2px);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    filter: blur(0px);
  }
}
@keyframes puffIn {
  0% {
    opacity: 0;
    transform-origin: 50% 50%;
    transform: scale(2, 2);
    filter: blur(2px);
  }
  100% {
    opacity: 1;
    transform-origin: 50% 50%;
    transform: scale(1, 1);
    filter: blur(0px);
  }
}

</style>