import Vue from 'vue'
import http from '../../services/HttpService/httpservice'
import { urls } from '../../services/environment/env';
import Swal from 'sweetalert2'
import router from '../../services/routing/Router';

const state = {
    userFullName: '',
    isUserAuthenticated: false
};

const getters = {
    getUserFullName(state) {
        return state.userFullName;
    },
    isUserAuthenticated(state) {
        return state.isUserAuthenticated;
    }
};

const mutations = {
    setAuthCookie(state, loginResult) {
        Vue.$cookies.set(
            'ticket_name',
            loginResult.data.ticket_name,
            '2h'
        );
    },
    setUserFullName(state, userFullName) {
        state.userFullName = userFullName;
    },
    setUserAuthenticated(state, isAuth) {
        state.isUserAuthenticated = isAuth;
    }
};

const actions = {
    // register request
    RegisterUser(context, registerData) {
        http.post(urls.register, registerData).then(response => {
            // sweet alert success message 
            console.log(response.status);
            Swal.fire({
                title: 'Success !',
                text: 'your registeration is successfully done',
                icon: 'success',
            });
            // redirect to home page 
            router.push({ name: 'index' });
        }).catch(errors => {
            // TODO for server validation
            console.log('errors');
            console.log(errors);
        });
    },
    // login request
    LoginUser(context, loginData) {
        http.post(urls.login, loginData).then(response => {
            console.log('success');
            console.log(response);
            context.commit('setAuthCookie', response);

            // sweet alert success message 
            Swal.fire({
                title: 'Success !',
                text: 'your login is successfully done',
                icon: 'success',
            });
            // TODO send status request for get name and email

            // redirect to home page 
            router.push({ name: 'index' });

        }).catch(errors => {
            console.log('errors');
            console.log(errors);
            // sweet alert success message 
            Swal.fire({
                title: 'Oppsss... !',
                text: 'your login conditions is not match with any user',
                icon: 'error',
            });
        });
    },
    // status method for check user authenticated or not
    checkForLogin(context) {
        http.post(urls.status,
            { 'ticket_name': Vue.$cookies.get('ticket_name') }).then(response => {

                console.log(response);
                context.commit('setUserFullName', response.data.first_name + ' ' + response.data.last_name);
                context.commit('setUserAuthenticated', true);

            });
    },

};

export default {
    state,
    getters,
    mutations,
    actions
};