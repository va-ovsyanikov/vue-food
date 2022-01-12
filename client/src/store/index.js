import { createStore } from 'vuex'
import products from './modules/product'
import cart from './modules/cart'
import filters from './modules/filters'

export default createStore({
  modules: {
    products, cart, filters
  }
})
