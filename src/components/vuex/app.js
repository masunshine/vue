export default {
    state: {
        num: '1',
        scrollTop: 0
    },
    getters: {

    },
    modules: {

    },
    actions: {
        getNum ({ state }, data) {
            state.num = data.num
        },
        setScroll ({ state }, data) {
            state.scrollTop = data.scrollTop
        }
    },
    mutations: {
        // GET_NUM (state, payload) {
        //     console.log(payload)
        //     state.num = payload
        // }
    }
}