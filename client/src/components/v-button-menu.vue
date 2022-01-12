<template>
  <i  class="material-icons button_menu" @click="handleShowMenu">menu</i>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  data(){
    return{
    
    }
  },
methods:{
  ...mapMutations(['IS_VISIBLE_MENU']),
  handleShowMenu(){
    this.IS_VISIBLE_MENU(true)
  }
}
};
</script>
<style lang="less" scoped>
.button_menu {
  position: relative;
  top: 6px;
  cursor: pointer;
  display: none;
}
@media screen and (max-width: 1150px) {
  .button_menu {
    display: block;
  }
}
</style>
