<template>
  <div class="wrapp">

    <router-view />

<notifications class="my_notification" width="400px" height="150px" />
  </div>
  
</template>

<style lang="less">
.wrapp {
  max-width: 1400px;
  margin: 50px auto;
  background-color: #fff;
  border-radius: 10px;
  padding: 0 70px 70px;
}
.my_notification .notification-content{
  padding: 18px;
  display: flex;
  align-items: center;
  span{
    margin-left: 10px;
    font-size: 18px;

  }
}
</style>
