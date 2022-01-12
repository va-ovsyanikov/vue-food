<template>
  <header>
    <div class="header">
      <v-logo></v-logo>
      <router-link class="header_link_cart" to="/cart">
        <v-button :btnCart="true">
          <span>{{ TOTAL_PRICE_GET }} ₽</span>&nbsp; | &nbsp;
          <i class="material-icons">shopping_cart</i
          ><span> {{ TOTAL_QUANTITY_GET }} </span>
        </v-button>
      </router-link>
    </div>
  </header>
</template>
<script>
import vLogo from "./v-logo.vue";
import vButton from "../components/v-button.vue";
import { mapGetters } from "vuex";

export default {
  components: { vLogo, vButton },
  name: "Header",
  computed: {
    ...mapGetters(["CART_GET", "TOTAL_PRICE_GET", "TOTAL_QUANTITY_GET"]),
  },
};
</script>
<style lang="less" scoped>
.header {
  border-bottom: 1px solid #f6f6f6;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
}
.header_link_cart {
  text-decoration: none;
}
@media screen and (max-width: 768px) {
  .header{
    flex-direction: column;
    align-items: center;
  }
  .header_link_cart {
  margin-top: 50px;
}
}
</style>
