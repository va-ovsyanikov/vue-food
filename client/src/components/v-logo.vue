<template>
  <div class="logo">
    <a href="/">
      <img src="../assets/img/pizza-logo.svg" alt="alt" />
      <div>
        <h1>Vue pizza</h1>
        <p>самая вкусная пицца во вселенной</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
    name:"Logo"
};
</script>

<style lang="less" scoped>
.logo {
  img {
    width: 38px;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
    display: flex;
    h1 {
      color: #181818;
      font-size: 24px;
      text-transform: uppercase;
      font-weight: 800;
    }
    p {
      color: @color;
    }
  }
}
</style>
