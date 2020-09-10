import http from '../../services/HttpService/httpservice'
import { urls } from '../../services/environment/env';
import Swal from 'sweetalert2'
import Vue from 'vue'

const state = {
    order: {}
};

const getters = {
    getOrder(state) {
        return state.order;
    }
};

const mutations = {
    setOrder(state, order) {
        state.order = order;
    },
    setLoading(state, isLoad) {
        state.isLoad = isLoad;
    }
};

const actions = {
    newOrder(context, newOrder) {
        http.post(urls.newOrder, newOrder).then(response => {
            console.log('success for new order');
            console.log(response.data.total_price);
            // context.commit("setOrder", response.data);
            // context.commit("setLoading", false);
            Swal.fire({
                title: 'Success',
                text: 'your order is successfully created now time for purchase',
                icon: 'success',
            });

            // TODO for  go to id pay site
            // alert(response.data);

            http.post(urls.idPay, {
                "order_id": response.data.order_id,
                "amount": response.data.total_price,
                "callback": urls.bookOrder,
                "desc": Vue.$cookies.get('ticket_name'),
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-SANDBOX': true,
                    'X-API-KEY': '6a7f99eb-7c20-4412-a972-6dfb7cd253a4'
                }
            }).then(response => {
                console.log('success');
                console.log(response.data.link);
                window.location.replace(response.data.link);
                context.commit("setIsLoad", false);

            }).catch(errors => {
                console.log('errors');
                console.log(errors)
            });







        }).catch(errors => {
            console.log(errors);


            // http.post(urls.idPay, {
            //     "order_id": 100,
            //     "amount": 500000,
            //     "callback": urls.bookOrder,
            //     "desc": Vue.$cookies.get('ticket_name'),
            //     // "callback": 'http://localhost:8080/after-payment'
            // }, {
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'X-SANDBOX': true,
            //         'X-API-KEY': '6a7f99eb-7c20-4412-a972-6dfb7cd`253a4'
            //     }
            // }).then(response => {
            //     console.log('success');
            //     console.log(response.data.link);
            //     window.location.replace(response.data.link);
            //     context.commit("setIsLoad", false);

            // }).catch(errors => {
            //     console.log('errors');
            //     console.log(errors)
            // });


            // context.commit("setIsLoad", false);


            Swal.fire({
                title: 'Oppsss... !',
                text: 'in this time and this traveller count we cant service you',
                icon: 'error',
            });

            context.commit("setIsLoad", false);

        });
    }

};

export default {
    state,
    getters,
    mutations,
    actions
};