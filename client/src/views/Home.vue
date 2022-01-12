<template>
  <div class="home">
    <v-header></v-header>
    <main>
      <div class="content">
        <div class="content_top">
          <v-category
       :class="{activeClass: ISVISIBLEMENU}"
            @filterCategoryItem="mainSortFilter"
          ></v-category>
          <v-sort @sortProductItem="mainSortFilter"></v-sort>
          <v-button-menu></v-button-menu>
        </div>
        <h2>Все пиццы</h2>
        <div class="content_list">
          <v-loader v-if="!ISLOADED"></v-loader>
          <v-product
            v-else
            v-for="product in PRODUCTS_GET"
            :key="product"
            :imageUrl="product.imageUrl"
            :types="product.types"
            :sizes="product.sizes"
            :name="product.name"
            :price="product.price"
            :id="product.id"
            :quantity="product.quantity"
            @addToCart="addToCart"
          ></v-product>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import VHeader from "../components/v-header.vue";
import VCategory from "../components/v-category.vue";
import VProduct from "../components/v-product.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
import VSort from "../components/v-sort.vue";
import VLoader from "../components/v-loader.vue";
import VButtonMenu from "../components/v-button-menu.vue";

// const sortByName = function (d1, d2) {
//   return d1.name.toLowerCase() > d2.name.toLowerCase() ? 1 : -1;
// };
// const sortByRating = function (d1, d2) {
//   return d1.rating > d2.rating ? 1 : -1;
// };
// const sortByPrice = function (d1, d2) {
//   return d1.price > d2.price ? 1 : -1;
// };
export default {
  components: {
    VHeader,
    VCategory,
    VProduct,
    VSort,
    VLoader,
    VButtonMenu,
  },
  name: "Home",
  data() {
    return {
      isVisible: true,
    };
  },
  computed: {
    ...mapGetters([
      "PRODUCTS_GET",
      "FILTERITEM",
      "SORTITEM",
      "NOTIFICATION_GET",
      "ISLOADED",
      "ISVISIBLEMENU",
    ]),
    // sortProduct() {
    //   switch (this.sortParam) {
    //     case "name":
    //       return [...this.PRODUCTS_GET].sort(sortByName);
    //     case "rating":
    //       return [...this.PRODUCTS_GET].sort(sortByRating);
    //     case "price":
    //       return [...this.PRODUCTS_GET].sort(sortByPrice);
    //     default:
    //       return this.PRODUCTS_GET;
    //   }
    // },

    // filterCategory() {
    //   const prod = this.filterParam;
    //   console.log(prod)
    //   return [...this.PRODUCTS_GET].filter((item) => {
    //     if (prod) {
    //       return item.category === prod;
    //     }
    //     return [...this.PRODUCTS_GET];
    //   });
    // },
  },
  methods: {
    ...mapMutations(["ADD_TO_CART", "ITEM_QUANTITY", "IS_VISIBLE_MENU"]),
    ...mapActions(["PRODUCTS_FETCH"]),
    addToCart(product) {
      this.ADD_TO_CART(product);
    },
    mainSortFilter() {
      const payload = {
        indexFilter: this.FILTERITEM,
        itemSort: this.SORTITEM.type,
      };
      this.PRODUCTS_FETCH(payload);
      this.IS_VISIBLE_MENU(false)
    },
    // sortProductItem(item) {
    //    this.PRODUCTS_FETCH(item);
    // },
    // filterCategoryItem(index) {
    //    this.PRODUCTS_FETCH(index);
    // },
  },
  mounted() {
    const payload = {
      indexFilter: this.FILTERITEM,
      itemSort: this.SORTITEM.type,
      // isLoaded:true
    };
    this.PRODUCTS_FETCH(payload);
  },
  watch: {
    NOTIFICATION_GET: function () {
      this.$notify({
        type: `${this.NOTIFICATION_GET.type}`,
        text: `<i class="material-icons">check_circle</i><span>${this.NOTIFICATION_GET.text}</span>`,
      });
    },
  },
};
</script>

<style lang="less" scoped>
.content_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 30px;
}
.content_list {
  display: flex;
  flex-wrap: wrap;
}
@media screen and (max-width: 1300px) {
  .content_list {
    justify-content: space-between;
  }
}
@media screen and (max-width: 768px) {
   .content_list {
    justify-content: center;
  }
}
</style>
