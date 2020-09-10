<template>
  <div>
    <nav class="navbar navbar-default main-navbar navbar-custom navbar-white" id="mynavbar-1">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" @click="showSideNav" id="menu-button">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link :to="{name: 'index'}" class="navbar-brand">
            <span>
              <i class="fa fa-building"></i>mar
            </span>bin
          </router-link>
        </div>
        <!-- end navbar-header -->

        <div class="collapse navbar-collapse" id="myNavbar1">
          <ul class="nav navbar-nav navbar-right navbar-search-link">
            <router-link tag="li" active-class="active" :to="{name: 'index'}" exact>
              <a>home</a>
            </router-link>

            <!-- <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                Hotels
                <span>
                  <i class="fa fa-angle-down"></i>
                </span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link active-class="active" :to="{name: 'hotels'}">hotels</router-link>
                  <router-link active-class="active" :to="{name: 'hotel'}">hotle details</router-link>
                </li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                Tours
                <span>
                  <i class="fa fa-angle-down"></i>
                </span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="tour-homepage.html">Tour list</a>
                </li>
              </ul>
            </li> -->

            <router-link tag="li" exact-active-class="active" :to="{name: 'catalogs'}">
              <a>catalogs</a>
            </router-link>

            <router-link
              v-if="!isUserAuthenticated"
              tag="li"
              exact-active-class="active"
              :to="{name: 'login'}"
            >
              <a>
                login
                <i class="fa fa-lock" style="margin-left: 10px"></i>
              </a>
            </router-link>

            <router-link
              v-if="!isUserAuthenticated"
              tag="li"
              exact-active-class="active"
              :to="{name: 'register'}"
            >
              <a>
                register
                <i class="fa fa-plus" style="margin-left: 10px"></i>
              </a>
            </router-link>

            <router-link
              v-if="isUserAuthenticated"
              tag="li"
              exact-active-class="active"
              to="user-dashboard/profile"
              target="_blank"
            >
              <a href="user-dashboard/profile" target="_blank"
               >
                {{ userFullName }} profile
                <i class="fa fa-user" style="margin-left: 10px"></i>
              </a>
            </router-link>

            <li style="display: none">
              <a href="javascript:void(0)" class="search-button">
                <span>
                  <i class="fa fa-login"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <!-- end navbar collapse -->
      </div>
      <!-- end container -->
    </nav>

    <div class="sidenav-content">
      <div id="mySidenav" :class="[isShow ? 'hideSideNavbar' : 'showSideNavbar']" class="sidenav">
        <h2 id="web-name">
          <span>
            <i class="fa fa-building"></i>
          </span>marbin
        </h2>

        <div id="main-menu">
          <div @click="closeNavbar" class="closebtn">
            <button class="btn btn-default" id="closebtn">&times;</button>
          </div>
          <!-- end close-btn -->

          <div class="list-group panel">
<!--            <a-->
<!--              href="#home-links"-->
<!--              class="list-group-item"-->
<!--              data-toggle="collapse"-->
<!--              data-parent="#main-menu"-->
<!--            >-->
<!--              <span>-->
<!--                <i class="fa fa-home link-icon"></i>-->
<!--              </span>Home-->
<!--              <span>-->
<!--                <i class="fa fa-chevron-down arrow"></i>-->
<!--              </span>-->
<!--            </a>-->
<!--            <div class="collapse sub-menu" id="home-links">-->
<!--              <a href="index.html" class="list-group-item">Main Homepage</a>-->
<!--              <a href="flight-homepage.html" class="list-group-item">Flight Homepage</a>-->
<!--              <a href="hotel-homepage.html" class="list-group-item">Hotel Homepage</a>-->
<!--              <a href="tour-homepage.html" class="list-group-item">Tour Homepage</a>-->
<!--              <a href="cruise-homepage.html" class="list-group-item">Cruise Homepage</a>-->
<!--              <a href="car-homepage.html" class="list-group-item">Car Homepage</a>-->
<!--              <a href="landing-page.html" class="list-group-item">Landing Page</a>-->
<!--            </div>-->
            <!-- end sub-menu -->

            <a href="/" class="list-group-item">
              <span>
                <i class="fa fa-home link-icon"></i>
              </span>Home
            </a>



            <router-link  exact-active-class="active" :to="{name: 'catalogs'}" class="list-group-item">
              <span>
                <i class="fa fa-home link-icon"></i>
              </span>catalogs
            </router-link>


            <router-link 
            v-if="!isUserAuthenticated"
            exact-active-class="active"
              :to="{name: 'login'}"
            class="list-group-item">
              <span>
                <i class="fa fa-home link-icon"></i>
              </span>login
            </router-link>



            <router-link 
            v-if="!isUserAuthenticated"
            exact-active-class="active"
              :to="{name: 'register'}"
            class="list-group-item">
              <span>
                <i class="fa fa-home link-icon"></i>
              </span>register
            </router-link>


            <router-link
            v-if="isUserAuthenticated"
            exact-active-class="active"
              to="user-dashboard/profile"
              target="_blank"
             class="list-group-item">
              <span>
                <i class="fa fa-home link-icon"></i>
              </span>{{ userFullName }} profile
            </router-link>

          </div>
          <!-- end list-group -->
        </div>
        <!-- end main-menu -->
      </div>
      <!-- end mySidenav -->
    </div>
    <!-- end sidenav-content -->
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isShow: true,
    };
  },
  computed: {
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated;
    },
    userFullName() {
      return this.$store.getters.getUserFullName;
    },
  },
  methods: {
    checkForLogin() {
      this.$store.dispatch("checkForLogin");
    },
    showSideNav() {
      this.isShow = false;
    },

    closeNavbar() {
      this.isShow = true;
    },
  },
  created() {
    this.checkForLogin();
  },
};
</script>

<style scoped>
.showSideNavbar {
  transform: translateX(0%) !important;
}
.hideSideNavbar {
  transform: translateX(120%) !important;
}
</style>