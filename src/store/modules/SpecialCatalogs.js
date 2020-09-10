import http from '../../services/HttpService/httpservice'
import { urls } from '../../services/environment/env';

const state = {
   specialCatalogs: []
};

const getters = {
    getSpecialCatalogs(state) {
        return state.specialCatalogs;
    }
};

const mutations = {
   setSpecialCatalogs(state, specialCatalogs) {
       state.specialCatalogs = specialCatalogs;
   }
};

const actions = {
    getSpecialCatalogs(context) {
        http.get(urls.specialCatalogs).then(response => {
            console.log(response);
            context.commit("setSpecialCatalogs", response.data);
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