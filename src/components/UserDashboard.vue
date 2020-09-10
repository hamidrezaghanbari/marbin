<template>
  <div>
    <!--========= PAGE-COVER ==========-->
    <section class="page-cover dashboard">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h1 class="page-title">My Account</h1>
            <ul class="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li class="active">My Account</li>
            </ul>
          </div>
          <!-- end columns -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    
     <section class="innerpage-wrapper">
      <div id="dashboard" class="innerpage-section-padding">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="dashboard-heading">
                <h2>
                  Travel
                  <span>Profile</span>
                </h2>
                <p>Hi Lisa, Welcome to Star Travels!</p>
                <p>All your trips booked with us will appear here and you'll be able to manage everything!</p>
              </div>
              <!-- end dashboard-heading -->

              <div class="dashboard-wrapper">
                <div class="row">
                  <div class="col-xs-12 col-sm-2 col-md-2 dashboard-nav">
                    <ul class="nav nav-tabs nav-stacked text-center">
                      <li>
                        <a href="dashboard.html">
                          <span>
                            <i class="fa fa-cogs"></i>
                          </span>Dashboard
                        </a>
                      </li>
                      <router-link tag="li" :to="{name: 'profile'}" exact-active-class="active">
                        <a>
                          <span>
                            <i class="fa fa-user"></i>
                          </span>Profile
                        </a>
                      </router-link>
                      <router-link :to="{name: 'booking_list'}" tag="li" exact-active-class="active">
                        <a>
                          <span>
                            <i class="fa fa-briefcase"></i>
                          </span>Booking list
                        </a>
                      </router-link>
                      <!-- <li>
                        <a href="wishlist.html">
                          <span>
                            <i class="fa fa-heart"></i>
                          </span>Wishlist
                        </a>
                      </li> -->
                      <li>
                        <a href="cards.html">
                          <span>
                            <i class="fa fa-credit-card"></i>
                          </span>My Cards
                        </a>
                      </li>
                    </ul>
                  </div>
                  <!-- end columns -->

                    <router-view></router-view>
                  <!-- end columns -->
                </div>
                <!-- end row -->
              </div>
              <!-- end dashboard-wrapper -->
            </div>
            <!-- end columns -->
          </div>
          <!-- end row -->
        </div>
        <!-- end container -->
      </div>
      <!-- end dashboard -->
    </section>
  </div>
</template>


<script>
export default {
  name: "UserDashboard",
};
</script>