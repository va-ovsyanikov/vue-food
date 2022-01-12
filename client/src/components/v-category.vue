<template>
  <nav>
    <div class="nav">
      <v-button-close></v-button-close>
      <ul>
        <li>
          <v-button
            :btnCategory="true"
            :class="{ activeCategory: FILTERITEM === null }"
            @click="filterCategoryItem(null)"
          >
            Все
          </v-button>
        </li>
        <li v-for="(item, index) in category" :key="index">
          <v-button
            :btnCategory="true"
            :class="{ activeCategory: index === FILTERITEM }"
            @click="filterCategoryItem(index)"
          >
            {{ item }}
          </v-button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import vButton from "./v-button.vue";
import { mapMutations, mapGetters } from "vuex";
import VButtonClose from "./v-button-close.vue";
export default {
  components: { vButton, VButtonClose },
  name: "Nav",
  data: () => ({
    category: ["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"],
  }),
  computed: {
    ...mapGetters(["FILTERITEM"]),
  },
  methods: {
    ...mapMutations(["FILTERS"]),
    filterCategoryItem(index) {
      this.FILTERS(index);
      this.$emit("filterCategoryItem");
    },
  },
};
</script>

<style lang="less" scoped>
.nav ul {
  list-style-type: none;
  display: flex;
  li {
    cursor: pointer;
    .button {
      font-weight: 700;
    }
    .activeCategory {
      background-color: #000;
      color: #fff;
    }
  }
}
@media screen and (max-width: 1150px) {
  nav {
    position: fixed;
    left: 0;
    top: -100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 3;
    &.activeClass{
      top:0
    }
  }
  .nav {
    ul {
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: 100vh;
      li {
        .btnCategory {
          background-color: transparent;
        }
        .activeCategory {
          background-color: transparent;
          color: #000;
        }
      }
    }
  }
}
</style>
