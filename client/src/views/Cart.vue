<template>
  <div class="cart">
    <v-header></v-header>
    <div class="cart_content" v-if="CART_GET.length">
      <div class="cart_top">
        <h2><i class="material-icons">shopping_cart</i> Корзина</h2>
        <div class="cart_clear" @click="clearCart">
          <i class="material-icons">delete</i>
          <span>Очистить корзину</span>
        </div>
      </div>

      <v-product-cart
        v-for="item in CART_GET"
        :key="item.id"
        :imageUrl="item.imageUrl"
        :id="item.id"
        :name="item.name"
        :price="item.price"
        :type="item.type"
        :size="item.size"
        :quantity="item.quantity"
      >
      </v-product-cart>
      <div class="cart_bottom">
        <div class="cart_total">
          <div class="cart_total_quantity">
            Всего пицц: <b>{{ TOTAL_QUANTITY_GET }} шт.</b>
          </div>
          <div class="cart_total_price">
            Сумма заказа: <b>{{ TOTAL_PRICE_GET }} ₽</b>
          </div>
        </div>
        <div class="cart_dealings">
          <v-button
            :btnCartBack="true"
            appendIcon="chevron_left"
            @click="$router.go(-1)"
            >Вернуться назад</v-button
          >
          <v-button :btnCartPay="true">Оплатить сейчас</v-button>
        </div>
      </div>
    </div>
    <div class="cart-empty" v-else>
      <h2>Корзина пустая :(</h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу. <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src="../assets/img/empty-cart.png" alt="cart" />
      <v-button @click="$router.go(-1)" :btnCartBackEmpty="true">
        Вернуться назад
      </v-button>
    </div>
  </div>
</template>
<script>
import VButton from "../components/v-button.vue";
import vHeader from "../components/v-header.vue";
import VProductCart from "../components/v-product-cart.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: { vHeader, VButton, VProductCart },
  computed: {
    ...mapGetters([
      "CART_GET",
      "TOTAL_PRICE_GET",
      "TOTAL_QUANTITY_GET",
      "PRODUCTS_GET",
    ]),
  },
  methods: {
    ...mapMutations(["CLEAR_CART"]),
    clearCart() {
      this.CLEAR_CART();
    },
  },
};
</script>
<style lang="less" scoped>
.cart_content {
  margin: 90px auto 50px;
  max-width: 820px;
}
.cart_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 32px;
    i {
      font-size: 32px;
      position: relative;
      top: 4px;
    }
  }
}
.cart_clear {
  cursor: pointer;
  span {
    display: inline-block;
    margin-left: 7px;
    color: #b6b6b6;
    font-size: 18px;
  }
  i {
    color: #b6b6b6;
    position: relative;
    top: 5px;
  }
}
.cart-empty {
  text-align: center;
  margin: 80px 0 80px;
  h2 {
    font-size: 32px;
    margin-bottom: 10px;
    font-weight: 600;
  }
  p {
    font-size: 18px;
    line-height: 145.4%;
    letter-spacing: 0.01em;
    color: #777777;
  }
  img {
    display: block;
    width: 300px;
    margin: 45px auto 60px;
  }
}
.cart_bottom {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
}
.cart_total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
}
.cart_total_price {
  b {
    color: #fe5f1e;
  }
}
.cart_dealings {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
