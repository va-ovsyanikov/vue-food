<template>
  <div class="button" :class="className">
    <i class="material-icons appendIcon" if="appendIcon">{{ appendIcon }}</i>
    <slot></slot>
    <i class="material-icons" if="prependIcon">{{ prependIcon }}</i>
  </div>
</template>
<script>
export default {
  name: "Button",
  props: {
    btnProduct: {
      type: Boolean,
      default: false,
    },
    btnCategory: {
      type: Boolean,
      default: false,
    },
    btnCart: {
      type: Boolean,
      default: false,
    },
    btnCartBackEmpty: {
      type: Boolean,
      default: false,
    },
    btnCartProduct: {
      type: Boolean,
      default: false,
    },
    btnCartProductRemove: {
      type: Boolean,
      default: false,
    },
    btnCartPay: {
      type: Boolean,
      default: false,
    },
    btnCartBack: {
      type: Boolean,
      default: false,
    },
    appendIcon: {
      type: String,
    },
    prependIcon: {
      type: String,
    },
  },
  computed: {
    className() {
      return {
        btnProduct: this.btnProduct,
        btnCategory: this.btnCategory,
        btnCart: this.btnCart,
        btnCartBackEmpty: this.btnCartBackEmpty,
        btnCartProduct: this.btnCartProduct,
        btnCartProductRemove: this.btnCartProductRemove,
        btnCartPay: this.btnCartPay,
        btnCartBack: this.btnCartBack,
      };
    },
  },
};
</script>
<style lang="less">
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  border: 1px solid transparent;
  font-weight: 600;

  &.btnProduct {
    background-color: #ffffff;
    border-color: #fe5f1e;
    color: #fe5f1e;
    span {
      margin-left: 5px;
      border-radius: 30px;
      background-color: #fe5f1e;
      color: #ffffff;
      font-weight: 600;
      width: 22px;
      height: 22px;
      font-size: 13px;
      line-height: 22px;
      text-align: center;
    }
    &:hover {
      background-color: #fe5f1e;
      color: #ffffff;
      span {
        background-color: #fff;
        color: #fe5f1e;
      }
    }
  }
  &.btnCategory {
    background-color: @color_category;
    margin-right: 10px;
    transition: background-color 0.35s;
    &:hover {
      background-color: #f4f4f4;
    }
  }
  &.btnCart {
    background-color: #fe5f1e;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.35s;
    &:hover {
      background-color: #f24701;
    }
    span {
      font-size: 18px;
      margin: 0;
    }
    i {
      font-size: 16px;
    }
  }
  &.btnCartBackEmpty {
    width: 230px;
    margin: 0 auto;
    font-weight: 600;
    font-size: 18px;
    background-color: #232323;
    color: #ffffff;
    padding: 13px 0;
    transition: background-color 0.35s;
    &:hover {
      background-color: #3d3d3d;
    }
  }
  &.btnCartProduct {
    border: 2px solid #fe5f1e;
    background-color: #ffffff;
    color: #fe5f1e;
    padding: 7px 7px;

    &:hover {
      background-color: #fe5f1e;
      color: #ffffff;
    }
  }
  &.btnCartProductRemove {
    color: #c3c3c3;
    border-color: #c3c3c3;
    &:hover {
      background-color: #000;
      color: #ffffff;
      border-color: #000;
    }
  }
  &.btnCartPay {
    font-size: 16px;
    width: 210px;
    padding: 16px;
    background-color: #fe5f1e;
    border-color: #fe5f1e;
    color: #fff;
    &:hover {
      background-color: #f24701;
    }
  }
  &.btnCartBack {
    font-size: 16px;
    width: 210px;
    padding: 16px;
    color: #c3c3c3;
    border-color: #c3c3c3;
    i {
      font-size: 22px;
      font-weight: normal;
      position: relative;
      top: 2px;
      left: -2px;
    }
    &:hover {
      background-color: #000;
      color: #ffffff;
      border-color: #000;
    }
  }
  .appendIcon {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
