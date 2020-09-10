<template>
  <div>
    <div class="sidenav-content">
      <div id="mySidenav" class="sidenav">
        <h2 id="web-name">
          <span>
            <i class="fa fa-plane"></i>
          </span>Star Travel
        </h2>

        <div id="main-menu">
          <div class="closebtn">
            <button class="btn btn-default" id="closebtn">&times;</button>
          </div>
          <!-- end close-btn -->

          <div class="list-group panel">
            <a
              href="#home-links"
              class="list-group-item"
              data-toggle="collapse"
              data-parent="#main-menu"
            >
              <span>
                <i class="fa fa-home link-icon"></i>
              </span>Home
              <span>
                <i class="fa fa-chevron-down arrow"></i>
              </span>
            </a>
            <div class="collapse sub-menu" id="home-links">
              <a href="index.html" class="list-group-item">Main Homepage</a>
              <a href="flight-homepage.html" class="list-group-item">Flight Homepage</a>
              <a href="hotel-homepage.html" class="list-group-item">Hotel Homepage</a>
              <a href="tour-homepage.html" class="list-group-item">Tour Homepage</a>
              <a href="cruise-homepage.html" class="list-group-item">Cruise Homepage</a>
              <a href="car-homepage.html" class="list-group-item">Car Homepage</a>
              <a href="landing-page.html" class="list-group-item">Landing Page</a>
            </div>
            <!-- end sub-menu -->

            <a
              href="#flights-links"
              class="list-group-item"
              data-toggle="collapse"
              data-parent="#main-menu"
            >
              <span>
                <i class="fa fa-plane link-icon"></i>
              </span>Flights
              <span>
                <i class="fa fa-chevron-down arrow"></i>
              </span>
            </a>
            <div class="collapse sub-menu" id="flights-links">
              <a href="flight-homepage.html" class="list-group-item">Flight Homepage</a>
              <a
                href="flight-listing-left-sidebar.html"
                class="list-group-item"
              >List View Left Sidebar</a>
              <a
                href="flight-listing-right-sidebar.html"
                class="list-group-item"
              >List View Right Sidebar</a>
              <a href="flight-grid-left-sidebar.html" class="list-group-item">Grid View Left Sidebar</a>
              <a
                href="flight-grid-right-sidebar.html"
                class="list-group-item"
              >Grid View Right Sidebar</a>
              <a href="flight-detail-left-sidebar.html" class="list-group-item">Detail Left Sidebar</a>
              <a
                href="flight-detail-right-sidebar.html"
                class="list-group-item"
              >Detail Right Sidebar</a>
            </div>
            <!-- end sub-menu -->

            <a
              href="#hotels-links"
              class="list-group-item active"
              data-toggle="collapse"
              data-parent="#main-menu"
            >
              <span>
                <i class="fa fa-building link-icon"></i>
              </span>Hotels
              <span>
                <i class="fa fa-chevron-down arrow"></i>
              </span>
            </a>
            <div class="collapse sub-menu" id="hotels-links">
              <a href="hotel-homepage.html" class="list-group-item">Hotel Homepage</a>
              <a
                href="hotel-listing-left-sidebar.html"
                class="list-group-item"
              >List View Left Sidebar</a>
              <a href="#" class="list-group-item active">List View Right Sidebar</a>
              <a href="hotel-grid-left-sidebar.html" class="list-group-item">Grid View Left Sidebar</a>
              <a
                href="hotel-grid-right-sidebar.html"
                class="list-group-item"
              >Grid View Right Sidebar</a>
              <a href="hotel-detail-left-sidebar.html" class="list-group-item">Detail Left Sidebar</a>
              <a href="hotel-detail-right-sidebar.html" class="list-group-item">Detail Right Sidebar</a>
            </div>
            <!-- end sub-menu -->

            <a
              href="#tours-links"
              class="list-group-item"
              data-toggle="collapse"
              data-parent="#main-menu"
            >
              <span>
                <i class="fa fa-globe link-icon"></i>
              </span>Tours
              <span>
                <i class="fa fa-chevron-down arrow"></i>
              </span>
            </a>

            <div class="collapse sub-menu" id="tours-links">
              <a href="tour-homepage.html" class="list-group-item">Tour Homepage</a>
              <a
                href="tour-listing-left-sidebar.html"
                class="list-group-item"
              >List View Left Sidebar</a>
              <a
                href="tour-listing-right-sidebar.html"
                class="list-group-item"
              >List View Right Sidebar</a>
              <a href="tour-grid-left-sidebar.html" class="list-group-item">Grid View Left Sidebar</a>
              <a href="tour-grid-right-sidebar.html" class="list-group-item">Grid View Right Sidebar</a>
              <a href="tour-detail-left-sidebar.html" class="list-group-item">Detail Left Sidebar</a>
              <a href="tour-detail-right-sidebar.html" class="list-group-item">Detail Right Sidebar</a>
            </div>
            <!-- end sub-menu -->

            <a
              href="#cruise-links"
              class="list-group-item"
              data-toggle="collapse"
              data-parent="#main-menu"
            >
              <span>
                <i class="fa fa-ship link-icon"></i>
              </span>Cruise
              <span>
                <i class="fa fa-chevron-down arrow"></i>
              </span>
            </a>
            <div class="collapse sub-menu" id="cruise-links">
              <a href="cruise-homepage.html" class="list-group-item">Cruise Homepage</a>
              <a
                href="cruise-listing-left-sidebar.html"
                class="list-group-item"
              >List View Left Sidebar</a>
              <a
                href="cruise-listing-right-sidebar.html"
                class="list-group-item"
              >List View Right Sidebar</a>
              <a href="cruise-grid-left-sidebar.html" class="list-group-item">Grid View Left Sidebar</a>
              <a
                href="cruise-grid-right-sidebar.html"
                class="list-group-item"
              >Grid View Right Sidebar</a>
              <a href="cruise-detail-left-sidebar.html" class="list-group-item">Detail Left Sidebar</a>
              <a
                href="cruise-detail-right-sidebar.html"
                class="list-group-item"
              >Detail Right Sidebar</a>
            </div>
            <!-- end sub-menu -->

            <a
              href="#cars-links"
              class="list-group-item"
              data-toggle="collapse"
              data-parent="#main-menu"
            >
              <span>
                <i class="fa fa-car link-icon"></i>
              </span>Cars
              <span>
                <i class="fa fa-chevron-down arrow"></i>
              </span>
            </a>
            <div class="collapse sub-menu" id="cars-links">
              <a href="car-homepage.html" class="list-group-item">Car Homepage</a>
              <a href="car-listing-left-sidebar.html" class="list-group-item">List View Left Sidebar</a>
              <a
                href="car-listing-right-sidebar.html"
                class="list-group-item"
              >List View Right Sidebar</a>
              <a href="car-grid-left-sidebar.html" class="list-group-item">Grid View Left Sidebar</a>
              <a href="car-grid-right-sidebar.html" class="list-group-item">Grid View Right Sidebar</a>
              <a href="car-detail-left-sidebar.html" class="list-group-item">Detail Left Sidebar</a>
              <a href="car-detail-right-sidebar.html" class="list-group-item">Detail Right Sidebar</a>
            </div>
            <!-- end sub-menu -->

            <a
              href="#pages-links"
              class="list-group-item"
              data-toggle="collapse"
              data-parent="#main-menu"
            >
              <span>
                <i class="fa fa-clone link-icon"></i>
              </span>Pages
              <span>
                <i class="fa fa-chevron-down arrow"></i>
              </span>
            </a>
            <div class="collapse sub-menu" id="pages-links">
              <div class="list-group-heading list-group-item">
                Standard
                <span>Pages</span>
              </div>
              <a href="about-us.html" class="list-group-item">About Us</a>
              <a href="contact-us.html" class="list-group-item">Contact Us</a>
              <a
                href="blog-listing-left-sidebar.html"
                class="list-group-item"
              >Blog Listing Left Sidebar</a>
              <a
                href="blog-listing-right-sidebar.html"
                class="list-group-item"
              >Blog Listing Right Sidebar</a>
              <a
                href="blog-detail-left-sidebar.html"
                class="list-group-item"
              >Blog Detail Left Sidebar</a>
              <a
                href="blog-detail-right-sidebar.html"
                class="list-group-item"
              >Blog Detail Right Sidebar</a>
              <div class="list-group-heading list-group-item">
                User
                <span>Dashboard</span>
              </div>
              <a href="dashboard.html" class="list-group-item">Dashboard</a>
              <a href="user-profile.html" class="list-group-item">User Profile</a>
              <a href="booking.html" class="list-group-item">Booking</a>
              <a href="wishlist.html" class="list-group-item">Wishlist</a>
              <a href="cards.html" class="list-group-item">Cards</a>
              <div class="list-group-heading list-group-item">
                Special
                <span>Pages</span>
              </div>
              <a href="login.html" class="list-group-item">Login</a>
              <a href="registration.html" class="list-group-item">Registration</a>
              <a href="forgot-password.html" class="list-group-item">Forgot Password</a>
              <a href="error-page.html" class="list-group-item">404 Page</a>
              <a href="coming-soon.html" class="list-group-item">Coming Soon</a>
              <div class="list-group-heading list-group-item">
                Extra
                <span>Pages</span>
              </div>
              <a href="before-you-fly.html" class="list-group-item">Before Fly</a>
              <a href="travel-insurance.html" class="list-group-item">Travel Insurance</a>
              <a href="holidays.html" class="list-group-item">Holidays</a>
              <a href="thank-you.html" class="list-group-item">Thank You</a>
            </div>
            <!-- end sub-menu -->
          </div>
          <!-- end list-group -->
        </div>
        <!-- end main-menu -->
      </div>
      <!-- end mySidenav -->
    </div>
    <!-- end sidenav-content -->

    <!--=================== PAGE-COVER =================-->
    <section class="page-cover" id="cover-hotel-grid-list">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h1 class="page-title">catalogs</h1>
            <ul class="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li class="active">catalogs</li>
            </ul>
          </div>
          <!-- end columns -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    <!-- end page-cover -->

    <!--===== INNERPAGE-WRAPPER ====-->
    <section class="innerpage-wrapper">
      <div id="hotel-listing" class="innerpage-section-padding">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 content-side">
              <!-- catalog item -->
              <div
                v-for="catalog in pageOfItems"
                :key="catalog.id"
                class="list-block main-block h-list-block">
                <div class="list-content">
                  <div class="main-img list-img h-list-img">
                    <a href="hotel-detail-right-sidebar.html">
                      <img :src="catalog.header_image" class="img-responsive" 
                      :alt="catalog.name" />
                    </a>
                    <div class="main-mask">
                      <ul class="list-unstyled list-inline offer-price-1">
                        <li class="price">
                          ${{ catalog.price }}
                          <span class="divider">|</span>
                          <span class="pkg">{{ catalog.location_type }}</span>
                        </li>
                        <li class="rating">
                          <span>
                            <i class="fa fa-star orange"></i>
                          </span>
                          <span>
                            <i class="fa fa-star orange"></i>
                          </span>
                          <span>
                            <i class="fa fa-star orange"></i>
                          </span>
                          <span>
                            <i class="fa fa-star orange"></i>
                          </span>
                          <span>
                            <i class="fa fa-star lightgrey"></i>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <!-- end main-mask -->
                  </div>
                  <!-- end h-list-img -->

                  <div class="list-info h-list-info">
                    <h3 class="block-title">
                      <a href="hotel-detail-right-sidebar.html">{{ catalog.name }}</a>
                    </h3>
                    <p class="block-minor">{{ catalog.id }}</p>
                    <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</p>
                    <router-link
                      :to="{name: 'single_prdocut', params: {id: catalog.id}}"
                      class="btn btn-orange btn-lg"
                    >View More</router-link>
                  </div>
                  <!-- end h-list-info -->
                </div>
                <!-- end list-content -->
              </div>
              <!-- end h-list-block -->


              <div class="pages">
                <jw-pagination :pageSize="6" :items="catalogs" @changePage="onChangePage"></jw-pagination>
              </div>
            </div>
            <!-- end columns -->

            <div class="col-xs-12 col-sm-12 col-md-3 side-bar right-side-bar">
              <div class="side-bar-block filter-block">
                <h3>Sort By Filter</h3>
                <p>Find your dream flights today</p>

                <div class="panels-group">
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <a href="#panel-1" data-toggle="collapse">
                        Select Category
                        <span>
                          <i class="fa fa-angle-down"></i>
                        </span>
                      </a>
                    </div>
                    <!-- end panel-heading -->

                    <div id="panel-1" class="panel-collapse collapse">
                      <div class="panel-body text-left">
                        <ul class="list-unstyled">
                          <li class="custom-check">
                            <input type="checkbox" id="check01" name="checkbox" />
                            <label for="check01">
                              <span>
                                <i class="fa fa-check"></i>
                              </span>All
                            </label>
                          </li>
                          <li class="custom-check">
                            <input type="checkbox" id="check02" name="checkbox" />
                            <label for="check02">
                              <span>
                                <i class="fa fa-check"></i>
                              </span>Apartment
                            </label>
                          </li>
                          <li class="custom-check">
                            <input type="checkbox" id="check03" name="checkbox" />
                            <label for="check03">
                              <span>
                                <i class="fa fa-check"></i>
                              </span>Bed & Breakfast
                            </label>
                          </li>
                          <li class="custom-check">
                            <input type="checkbox" id="check04" name="checkbox" />
                            <label for="check04">
                              <span>
                                <i class="fa fa-check"></i>
                              </span>Guest House
                            </label>
                          </li>
                          <li class="custom-check">
                            <input type="checkbox" id="check05" name="checkbox" />
                            <label for="check05">
                              <span>
                                <i class="fa fa-check"></i>
                              </span>Hotels
                            </label>
                          </li>
                          <li class="custom-check">
                            <input type="checkbox" id="check06" name="checkbox" />
                            <label for="check06">
                              <span>
                                <i class="fa fa-check"></i>
                              </span>Residence
                            </label>
                          </li>
                          <li class="custom-check">
                            <input type="checkbox" id="check07" name="checkbox" />
                            <label for="check07">
                              <span>
                                <i class="fa fa-check"></i>
                              </span>Resorts
                            </label>
                          </li>
                        </ul>
                      </div>
                      <!-- end panel-body -->
                    </div>
                    <!-- end panel-collapse -->
                  </div>
                  <!-- end panel-default -->

                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <a href="#panel-2" data-toggle="collapse">
                        Facility
                        <span>
                          <i class="fa fa-angle-down"></i>
                        </span>
                      </a>
                    </div>
                    <!-- end panel-heading -->

                    <div id="panel-2" class="panel-collapse collapse">
                      <div class="panel-body text-left">
                        <ul class="list-unstyled">
                          <li class="custom-check">
                            <input type="checkbox" id="check08" name="checkbox" />
                            <label for="check08">
                              <span>
                                <i class="fa fa-check"></i>
                              </span>Air Conditioning
                            </label>
                          </li>
                          <li class="custom-check">
                            <input type="checkbox" id="check09" name="checkbox" />
                            <label for="check09">
                              <span>
                                <i class="fa fa-check"></i>
                              </span>Bathroom
                            </label>
                          </li>
                          <li class="custom-check">
                            <input type="checkbox" id="check10" name="checkbox" />
                            <label for="check10">
                              <span>
                                <i class="fa fa-check"></i>
                              </span>Cable Tv
                            </label>
                          </li>
                          <li class="custom-check">
                            <input type="checkbox" id="check11" name="checkbox" />
                            <label for="check11">
                              <span>
                                <i class="fa fa-check"></i>
                              </span>Parking
                            </label>
                          </li>
                          <li class="custom-check">
                            <input type="checkbox" id="check12" name="checkbox" />
                            <label for="check12">
                              <span>
                                <i class="fa fa-check"></i>
                              </span>Pool
                            </label>
                          </li>
                          <li class="custom-check">
                            <input type="checkbox" id="check13" name="checkbox" />
                            <label for="check13">
                              <span>
                                <i class="fa fa-check"></i>
                              </span>Wi-fi
                            </label>
                          </li>
                        </ul>
                      </div>
                      <!-- end panel-body -->
                    </div>
                    <!-- end panel-collapse -->
                  </div>
                  <!-- end panel-default -->

                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <a href="#panel-3" data-toggle="collapse">
                        Rating
                        <span>
                          <i class="fa fa-angle-down"></i>
                        </span>
                      </a>
                    </div>
                    <!-- end panel-heading -->

                    <div id="panel-3" class="panel-collapse collapse">
                      <div class="panel-body text-left">
                        <ul class="list-unstyled">
                          <li class="custom-check">
                            <input type="checkbox" id="check14" name="checkbox" />
                            <label for="check14">
                              <span>
                                <i class="fa fa-check"></i>
                              </span>1 Star
                            </label>
                          </li>
                          <li class="custom-check">
                            <input type="checkbox" id="check15" name="checkbox" />
                            <label for="check15">
                              <span>
                                <i class="fa fa-check"></i>
                              </span>2 Star
                            </label>
                          </li>
                          <li class="custom-check">
                            <input type="checkbox" id="check16" name="checkbox" />
                            <label for="check16">
                              <span>
                                <i class="fa fa-check"></i>
                              </span>3 Star
                            </label>
                          </li>
                          <li class="custom-check">
                            <input type="checkbox" id="check17" name="checkbox" />
                            <label for="check17">
                              <span>
                                <i class="fa fa-check"></i>
                              </span>4 Star
                            </label>
                          </li>
                          <li class="custom-check">
                            <input type="checkbox" id="check18" name="checkbox" />
                            <label for="check18">
                              <span>
                                <i class="fa fa-check"></i>
                              </span>5 Star
                            </label>
                          </li>
                        </ul>
                      </div>
                      <!-- end panel-body -->
                    </div>
                    <!-- end panel-collapse -->
                  </div>
                  <!-- end panel-default -->
                </div>
                <!-- end panel-group -->

                <div class="price-slider">
                  <p>
                    <input type="text" id="amount" readonly />
                  </p>
                  <div id="slider-range"></div>
                </div>
                <!-- end price-slider -->
              </div>
              <!-- end side-bar-block -->

             
              <!-- end row -->
            </div>
            <!-- end columns -->
          </div>
          <!-- end row -->
        </div>
        <!-- end container -->
      </div>
      <!-- end hotel-listing -->
    </section>
    <!-- end innerpage-wrapper -->

    <!--======================= BEST FEATURES =====================-->
    <section id="best-features" class="banner-padding black-features">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-3">
            <div class="b-feature-block">
              <span>
                <i class="fa fa-dollar"></i>
              </span>
              <h3>Best Price Guarantee</h3>
              <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis.</p>
            </div>
            <!-- end b-feature-block -->
          </div>
          <!-- end columns -->

          <div class="col-sm-6 col-md-3">
            <div class="b-feature-block">
              <span>
                <i class="fa fa-lock"></i>
              </span>
              <h3>Safe and Secure</h3>
              <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis.</p>
            </div>
            <!-- end b-feature-block -->
          </div>
          <!-- end columns -->

          <div class="col-sm-6 col-md-3">
            <div class="b-feature-block">
              <span>
                <i class="fa fa-thumbs-up"></i>
              </span>
              <h3>Best Travel Agents</h3>
              <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis.</p>
            </div>
            <!-- end b-feature-block -->
          </div>
          <!-- end columns -->

          <div class="col-sm-6 col-md-3">
            <div class="b-feature-block">
              <span>
                <i class="fa fa-bars"></i>
              </span>
              <h3>Travel Guidelines</h3>
              <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis.</p>
            </div>
            <!-- end b-feature-block -->
          </div>
          <!-- end columns -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    <!-- end best-features -->
  </div>
</template>

<script>
export default {
  name: "Catalog",
  data() {
    return {
      pageOfItems: [],
    };
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },

  computed: {
    catalogs() {
      return this.$store.getters.getCatalogs;
    },
  },
  created() {
    if (this.catalogs.length == 0) {
      this.$store.dispatch("getCatalogs");
    }
  },
};
</script>