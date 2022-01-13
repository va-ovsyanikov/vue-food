<template>
  <div class="product">

      <img :src="imageUrl" alt="" />
      <h3>{{ name }}</h3>
      <div class="product_select">
        <div class="product_types">
          <ul>
            <li
              :class="[
                { active: index === isActiveType },
                { disabled: !types.includes(index) },
              ]"
              v-for="(type, index) in typesName"
              :key="index"
              @click="onClickTypes(index)"
            >
              {{ type }}
            </li>
          </ul>
        </div>
        <div class="product_sizes">
          <ul>
            <li
              :class="[
                { active: index === isActiveSize },
                { disabled: !sizes.includes(size) },
              ]"
              v-for="(size, index) in sizesName"
              :key="index"
              @click="onClickSizes(index)"
            >
              {{ size }} см.
            </li>
          </ul>
        </div>
      </div>
      <div class="product_bottom">
        <div class="product_price">от {{ price }} &#8381;</div>
        <v-button appendIcon="add" :btnProduct="true" @click="addToCart">
          Добавить
        </v-button>
      </div>
  </div>
</template>

<script>
import vButton from "./v-button.vue";
export default {
  components: { vButton },
  props: {
    name: {
      type: String,
      default: "Pizza",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    types: {
      type: Array,
    },
    sizes: {
      type: Array,
    },
    price: {
      type: Number,
      default: 0,
    },
    id: {
      type: Number,
    },
    quantity: Number,
  },
  data() {
    return {
      product: {
        id: this.id,
        name: this.name,
        imageUrl: this.imageUrl,
        price: this.price,
        quantity: this.quantity,
      },

      isActiveType: this.types[0],
      isActiveSize: 0,
      typesName: ["тонкое", "традиционное"],
      sizesName: [26, 30, 40],
    };
  },

  methods: {
    onClickTypes(index) {
      this.isActiveType = index;
    },
    onClickSizes(index) {
      this.isActiveSize = index;
    },
    addToCart() {
      const obj = {
        ...this.product,
        type: this.typesName[this.isActiveType],
        size: this.sizesName[this.isActiveSize],
      };
      this.$emit("addToCart", obj);
    },
  },
};
</script>
<style lang="less">
.product {
  display: flex;
  flex-direction: column;
  width: 280px;
  margin: 50px 17px 20px 17px;
  img {
    width: 260px;
  }
  h3 {
    text-align: center;
    font-size: 20px;
    letter-spacing: 1%;
    margin-bottom: 20px;
  }
}
.product_select {
  text-align: center;
  max-width: 280px;
  display: flex;
  background-color: #f3f3f3;
  border-radius: 10px;
  flex-direction: column;
  padding: 6px;
  ul {
    list-style-type: none;
    display: flex;
    margin-bottom: 6px;
  }
  li {
    padding: 8px;
    flex: 1;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    &.active {
      background: #fff;
      box-shadow: 0px 2px 4px rgb(0 0 0 / 4%);
      border-radius: 5px;
      cursor: auto;
    }
    &.disabled {
      opacity: 0.4;
      pointer-events: none;
    }
  }
}
.product_bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}
.product_price {
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.015em;
}
</style>
