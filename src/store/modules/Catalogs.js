import http from '../../services/HttpService/httpservice'
import { urls } from '../../services/environment/env';

const state = {
   catalogs: []
};

const getters = {
    getCatalogs(state) {
        return state.catalogs;
    }
};

const mutations = {
   setCatalogs(state, catalogs) {
       state.catalogs = catalogs;
   }
};

const actions = {
    getCatalogs(context) {
        http.get(urls.catalogs).then(response => {
            console.log(response);
            context.commit("setCatalogs", response.data);
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