import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js';
// import { store } from '../../store/store';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    // linkExactActiveClass: 'active',
    // linkActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return {
                selector: to.hash
            };
        }
    }// this is for hash scroll position in pages
});


// router.beforeEach((to, from, next) => {
    
//     if (store.getters.isUserAuthenticated) {
//         if (to.name == "register" || to.name == "login") {
//             router.push('index');
//         } else {
//             next();
//         }
//     } else {
//         if (to.name == "profile") {
//             router.push('index');
//         } else {
//             next();
//         }
//     }
// });

export default router;