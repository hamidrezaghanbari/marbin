// import IndexPage from '../../components/IndexPage'
// import Catalog from '../../components/Catalog'
// import Hotels from '../../components/Hotels'
// import Login from '../../components/Login'
// import Register from '../../components/Register'
// import Single from '../../components/Single'

var IndexPage = resolve => {
    require.ensure(['../../components/IndexPage'], () => {
        resolve(require('../../components/IndexPage'));
    });
};

var Catalog = resolve => {
    require.ensure(['../../components/Catalog'], () => {
        resolve(require('../../components/Catalog'));
    });
};

var Hotels = resolve => {
    require.ensure(['../../components/Hotels'], () => {
        resolve(require('../../components/Hotels'));
    });
};

var Login = resolve => {
    require.ensure(['../../components/Login'], () => {
        resolve(require('../../components/Login'));
    });
};

var Register = resolve => {
    require.ensure(['../../components/Register'], () => {
        resolve(require('../../components/Register'));
    });
};

var Single = resolve => {
    require.ensure(['../../components/Single'], () => {
        resolve(require('../../components/Single'));
    });
};

var Profile = resolve => {
    require.ensure(['../../components/Profile'], () => {
        resolve(require('../../components/Profile'));
    });
};

var UserDashboard = resolve => {
    require.ensure(['../../components/UserDashboard'], () => {
        resolve(require('../../components/UserDashboard'));
    });
};

var BookingList = resolve => {
    require.ensure(['../../components/BookingList'], () => {
        resolve(require('../../components/BookingList'));
    });
};

// var AfterPayment = resolve => {
//     require.ensure(['../../components/AfterPayment'], () => {
//         resolve(require('../../components/AfterPayment'));
//     });
// };

const urles = [
    { path: '/', name: 'index', component: IndexPage },
    { path: '/catalogs', name: 'catalogs', component: Catalog },
    { path: '/catalogs/product/:id', name: 'single_prdocut', component: Single },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/hotels', name: 'hotels', component: Hotels },
    { path: '*', redirect: '/' }, // 404 page not found
    {
        path: '/user-dashboard', name: 'user_dashboard', component: UserDashboard, children: [
            { path: 'profile', name: 'profile', component: Profile },
            { path: 'booking-list', name: 'booking_list', component: BookingList },
            { path: 'booking-list/:pre/:status/:message', name: 'after_payment', component: BookingList },
        ]
    },
    // { path: '/after-payment', name: 'after_payment', component: AfterPayment }
    
];

export default urles;