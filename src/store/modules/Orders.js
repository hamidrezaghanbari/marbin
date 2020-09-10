// import http from '../../services/HttpService/httpservice'
// import { urls } from '../../services/environment/env';

// const state = {
//    orders: []
// };

// const getters = {
//     getOrders(state) {
//         return state.orders;
//     }
// };

// const mutations = {
//    setOrders(state, orders) {
//        state.orders = orders;
//    }
// };

// const actions = {
//     getOrders(context) {
//         http.post(urls.orders).then(response => {
//             console.log(response);
//             context.commit("setOrders", response.data);
//         }).catch(errors => {
//             console.log(errors);
//         });
//     }

// };

// export default {
//     state,
//     getters,
//     mutations,
//     actions
// };