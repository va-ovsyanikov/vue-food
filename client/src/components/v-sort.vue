<template>
  <div class="sort" ref="sort">
    <b><i class="material-icons">arrow_drop_down</i>Сортировка по:</b>
    <span class="filtered" @click="visiblePopup = !visiblePopup">{{
      SORTITEM.name
    }}</span>
    <div class="sort_popup" v-if="visiblePopup">
      <ul>
        <li
          :class="{ active: index === isActive }"
          v-for="(item, index) in list"
          :key="index"
          @click="sortProductItem(index, item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
  name: "Sort",
  data() {
    return {
      list: [
        { name: "популярности", type: "rating" },
        { name: "цене", type: "price" },
        { name: "алфавиту", type: "alphabet" },
      ],
      visiblePopup: false,
      isActive: 0,
    };
  },
  computed:{
    ...mapGetters(['SORTITEM'])
  },
  methods: {
    ...mapMutations(['SORTED']),
    hendleOutsideClick(event) {
      const path = event.path;
      if (!path.includes(this.$refs.sort)) {
        this.visiblePopup = false;
      }
    },
    sortProductItem(index, item) {
      this.isActive = index;
      this.visiblePopup = false;
      this.SORTED(item)
      this.$emit('sortProductItem')
    },
  },
  mounted() {
    document.body.addEventListener("click", this.hendleOutsideClick);
  },
};
</script>
<style lang="less" scoped>
.sort {
  position: relative;
  ul {
    list-style-type: none;
  }
  i {
    font-size: 30px;
    position: relative;
    top: 10px;
  }
}
.filtered {
  color: #fe5f1e;
  border-bottom: 1px dashed #fe5f1e;
  cursor: pointer;
  margin-left: 10px;
}
.sort_popup {
  position: absolute;
  right: 0;
  margin-top: 15px;
  background: #fff;
  box-shadow: 0px 5px 15px rgb(0 0 0 / 9%);
  border-radius: 10px;
  overflow: hidden;
  padding: 10px 0;
  width: 160px;
  li {
    padding: 12px 20px;
    cursor: pointer;
    &.active {
      background: rgba(254, 95, 30, 0.05);
      font-weight: bold;
      color: #fe5f1e;
    }
    &:hover {
      background: rgba(254, 95, 30, 0.05);
    }
  }
}
</style>
