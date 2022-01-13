<template>
  <div class="product_cart">
    <div class="product_cart_description">
      <img :src="imageUrl" alt="alt" />
      <div>
        <h3>{{ name }}</h3>
        <p>{{ type }} тесто, {{ size }} см</p>
      </div>
    </div>

    <div class="product_cart_quantity">
      <v-button
        :btnCartProduct="true"
        appendIcon="remove"
        @click="decrement"
      ></v-button>
      <b>{{ quantity }}</b>
      <v-button
        :btnCartProduct="true"
        appendIcon="add"
        @click="increment(id)"
      ></v-button>
    </div>
    <div class="product_cart_price">
      <b> {{ price * quantity }} ₽</b>
    </div>
    <div class="product_btn_cart_remove">
      <v-button
        :btnCartProduct="true"
        :btnCartProductRemove="true"
        appendIcon="clear"
        @click="removeProduct"
      ></v-button>
    </div>
  </div>
</template>

<script>
import vButton from "./v-button.vue";
import { mapMutations } from "vuex";
export default {
  components: { vButton },
  props: {
    id: Number,
    name: {
      type: String,
      default: "Pizza",
    },
    imageUrl: String,
    type: String,
    size: Number,
    price: Number,
    quantity: Number,
  },
  methods: {
    ...mapMutations(["INCREMENT", "DECREMENT", "REMOVE_PRODUCT"]),
    increment() {
      this.INCREMENT(this.id);
    },
    decrement() {
      this.DECREMENT(this.id);
    },
    removeProduct() {
      this.REMOVE_PRODUCT(this.id);
    },
  },
};
</script>

<style lang="less">
.product_cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f6f6f6;
  padding-top: 30px;
  margin-top: 30px;
}
.product_cart_description {
  display: flex;
  align-items: center;
  img {
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }
  h3 {
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.01em;
    width: 200px;
  }
  p {
    font-size: 18px;
    color: #8d8d8d;
  }
}
.product_cart_quantity {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  b {
    font-size: 22px;
  }
}
.product_cart_price {
  b {
    font-size: 22px;
  }
}

@media screen and (max-width: 768px) {
  .cart_top {
    flex-direction: column;
    align-items: flex-start;
  }
  .cart_clear {
    margin-top: 20px;
  }
  .product_cart {
    flex-direction: column;
  }
  .product_cart_quantity {
    margin-top: 20px;
  }

  .product_cart_price {
    margin-top: 20px;
  }

  .product_btn_cart_remove {
    margin-top: 20px;
  }
  .cart_total {
    flex-direction: column;
  }
  .cart_total_price {
    margin-top: 15px;
  }
  .cart_dealings {
    flex-direction: column;
    .btnCartPay {
      margin-top: 30px;
    }
  }
}
</style>
