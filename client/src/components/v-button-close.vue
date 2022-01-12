<template>
  <i class="material-icons close_menu" @click="handleHideMenu">clear</i>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  methods: {
    ...mapMutations(["IS_VISIBLE_MENU"]),
    handleHideMenu() {
      this.IS_VISIBLE_MENU(false);
    },
  },
};
</script>

<style lang="less" scoped>
.close_menu {
  display: none;
}
@media screen and (max-width: 1150px) {
  .close_menu {
    display: block;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }
}
</style>
