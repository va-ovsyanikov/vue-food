import axios from 'axios'

const state = () => ({
    products: '',
    isLoaded: false,
    isVisibleMenu: false
})

const mutations = {
    PRODUCTS_FETCH(state, data) {
        state.products = data
    },
    ISLOADED(state, isLoaded){
        state.isLoaded = isLoaded
    },
    IS_VISIBLE_MENU(state, data){
        state.isVisibleMenu  = data
    }
}

const actions = {


    async PRODUCTS_FETCH({ commit }, payload) {

        commit('ISLOADED', false)
        const response = await axios.get(`http://81.163.26.243:3000/pizzas?${payload.indexFilter !== null ? `category=${payload.indexFilter}` : ''}&_sort=${payload.itemSort}&_order=dsc`)
        commit('PRODUCTS_FETCH', response.data)
        commit('ISLOADED', true)
    }


}

const getters = {
    PRODUCTS_GET: state => state.products,
    ISLOADED:state => state.isLoaded,
    ISVISIBLEMENU: state => state.isVisibleMenu
}
export default {
    state, mutations, actions, getters
}