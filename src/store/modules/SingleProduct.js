import http from '../../services/HttpService/httpservice'
import { urls } from '../../services/environment/env';

const state = {
    singleProduct: {}
};

const getters = {
    getSingleProduct(state) {
        return state.singleProduct;
    }
};

const mutations = {
    setSingleProduct(state, singleProduct) {
        state.singleProduct = singleProduct;
    }
};

const actions = {
    getSingleProduct(context, product) {
        http.get(urls.singleProduct + product.product_id).then(response => {
            console.log('success');
            console.log(response.data);
            context.commit("setSingleProduct", response.data);
        }).catch(errors => {
            console.log(errors);
        });
    }

};

export default {
    state,
    getters,
    mutations,
    actions
};