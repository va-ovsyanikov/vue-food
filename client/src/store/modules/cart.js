

const state = () => ({
    cart: [],
    notification: '',
})

const mutations = {
    ADD_TO_CART(state, product) {
        if (state.cart.length) {
            let isProductExists = false;
            state.cart.forEach(item => {
                if (item.id === product.id) {
                    isProductExists = true
                    confirm('Такая пицца уже есть в корзине!')
                }
            })
            if (!isProductExists) {
                state.notification = {
                    type: 'success',
                    text: "Пицца добавлена в корзину!"
                }
                state.cart.push(product)

            }
        } else {
            state.cart.push(product)
            state.notification = {
                type: 'success',
                text: "Пицца добавлена в корзину!"
            }
        }

    },
    INCREMENT(state, id) {
        const cartIndex = state.cart.findIndex(item => item.id == id)
        if (cartIndex !== -1) {
            state.cart[cartIndex].quantity++;
        }
    },
    DECREMENT(state, id) {
        const cartIndex = state.cart.findIndex(item => item.id == id)
        if (cartIndex !== -1) {
            state.cart.forEach(element => {
                if (element.quantity > 1) {
                    state.cart[cartIndex].quantity--
                }
            });
        }
    },
    REMOVE_PRODUCT(state, id) {
        if (confirm('Хотите удалить пиццу?')) {
            const cartIndex = state.cart.findIndex(item => item.id == id)
            if (cartIndex !== -1) {
                state.cart.splice(cartIndex, 1)
            }
        }
    },
    CLEAR_CART(state) {
        if (confirm('Хотите очистить корзину?')) {
            state.cart = []
        }

    },
}
const actions = {

}

const getters = {
    CART_GET: state => state.cart,
    TOTAL_QUANTITY_GET: state => state.cart.reduce((acc, elem) => acc + elem.quantity, 0),
    TOTAL_PRICE_GET: state => state.cart.reduce((acc, elem) => acc + elem.quantity * elem.price, 0),
    NOTIFICATION: state => state.notification,
}
export default {
    state, mutations, actions, getters
}