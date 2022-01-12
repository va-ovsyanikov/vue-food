

const state = () => ({
    filterItem: null,
    sortItem: { name: "популярности", type: "rating" },
})

const mutations = {
    FILTERS(state, data) {
        state.filterItem = data
    },
    SORTED(state, data) {
        state.sortItem = data
    }
}
const actions = {

}

const getters = {
    SORTITEM: state => state.sortItem,
    FILTERITEM: state => state.filterItem
}


export default {
    state, mutations, actions, getters
}