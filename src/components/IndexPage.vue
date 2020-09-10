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
              class="list-group-item active"
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
              <a href="#" class="list-group-item active">Main Homepage</a>
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
              class="list-group-item"
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
              <a
                href="hotel-listing-right-sidebar.html"
                class="list-group-item"
              >List View Right Sidebar</a>
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

    <!--========================= FLEX SLIDER =====================-->
    <section class="flexslider-container" id="flexslider-container-1">
      <div class="flexslider slider" id="slider-1">
        <ul class="slides">
          <li
            class="item-1"
            style="display:inline-block;background:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('../assets/images/1.jpg') 50% 0%;
	background-size:cover;
	height:100%;"
          >
            <div class="meta-1">
              <div class="container">
                <h1>Marbin</h1>
                <h1>Site</h1>
              </div>
              <!-- end container -->
            </div>
            <!-- end meta -->
          </li>
          <!-- end item-1 -->
        </ul>
      </div>
      <!-- end slider -->

      <div class="search-tabs" id="search-tabs-1">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <ul class="nav nav-tabs center-tabs">
                <li class="active">
                  <a href="#hotels" data-toggle="tab">
                    <span>
                      <i class="fa fa-building"></i>
                    </span>
                    <span class="st-text">Hotels</span>
                  </a>
                </li>
                <li>
                  <a href="#tours" data-toggle="tab">
                    <span>
                      <i class="fa fa-suitcase"></i>
                    </span>
                    <span class="st-text">Tours</span>
                  </a>
                </li>
              </ul>

              <div class="tab-content">
                <div id="hotels" class="tab-pane in active">
                  <form>
                    <div class="row">
                      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-5">
                        <div class="row">
                          <div class="col-xs-12 col-sm-6">
                            <div class="form-group left-icon">
                              <input type="date" class="form-control dpd1" placeholder="Check In" />
                              <i class="fa fa-calendar"></i>
                            </div>
                          </div>
                          <!-- end columns -->

                          <div class="col-xs-12 col-sm-6">
                            <div class="form-group left-icon">
                              <input type="date" class="form-control dpd2" placeholder="Check Out" />
                              <i class="fa fa-calendar"></i>
                            </div>
                          </div>
                          <!-- end columns -->
                        </div>
                        <!-- end row -->
                      </div>
                      <!-- end columns -->

                      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-5">
                        <div class="row">
                          <div class="col-xs-12 col-sm-12 col-md-4">
                            <div class="form-group right-icon">
                              <select class="form-control">
                                <option selected>Rooms</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                              <i class="fa fa-angle-down"></i>
                            </div>
                          </div>
                          <!-- end columns -->

                          <div class="col-xs-6 col-sm-6 col-md-4">
                            <div class="form-group right-icon">
                              <select class="form-control">
                                <option selected>Adults</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                              <i class="fa fa-angle-down"></i>
                            </div>
                          </div>
                          <!-- end columns -->

                          <div class="col-xs-6 col-sm-6 col-md-4">
                            <div class="form-group right-icon">
                              <select class="form-control">
                                <option selected>Kids</option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                              </select>
                              <i class="fa fa-angle-down"></i>
                            </div>
                          </div>
                          <!-- end columns -->
                        </div>
                        <!-- end row -->
                      </div>
                      <!-- end columns -->

                      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
                        <button class="btn btn-orange">Search</button>
                      </div>
                      <!-- end columns -->
                    </div>
                    <!-- end row -->
                  </form>
                </div>
                <!-- end hotels -->

                <div id="tours" class="tab-pane">
                  <form>
                    <div class="row">
                      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                        <div class="form-group left-icon">
                          <input type="text" class="form-control" placeholder="City,Country" />
                          <i class="fa fa-map-marker"></i>
                        </div>
                      </div>
                      <!-- end columns -->

                      <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                        <div class="form-group right-icon">
                          <select class="form-control">
                            <option selected>Month</option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                          </select>
                          <i class="fa fa-angle-down"></i>
                        </div>
                      </div>
                      <!-- end columns -->

                      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                        <div class="row">
                          <div class="col-xs-12 col-sm-6">
                            <div class="form-group right-icon">
                              <select class="form-control">
                                <option selected>Adults</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                              <i class="fa fa-angle-down"></i>
                            </div>
                          </div>
                          <!-- end columns -->

                          <div class="col-xs-12 col-sm-6">
                            <div class="form-group right-icon">
                              <select class="form-control">
                                <option selected>Kids</option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                              </select>
                              <i class="fa fa-angle-down"></i>
                            </div>
                          </div>
                          <!-- end columns -->
                        </div>
                        <!-- end row -->
                      </div>
                      <!-- end columns -->

                      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
                        <button class="btn btn-orange">Search</button>
                      </div>
                      <!-- end columns -->
                    </div>
                    <!-- end row -->
                  </form>
                </div>
                <!-- end tours -->
              </div>
              <!-- end tab-content -->
            </div>
            <!-- end columns -->
          </div>
          <!-- end row -->
        </div>
        <!-- end container -->
      </div>
      <!-- end search-tabs -->
    </section>
    <!-- end flexslider-container -->

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

    <special-catalog></special-catalog>

    <special-catalogs></special-catalogs>
    <!-- end vehicle-offers -->
    <!--==================== HIGHLIGHTS ====================-->
    <section id="highlights" class="section-padding back-size">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div class="row">
              <div id="boxes">
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <div class="highlight-box">
                    <div class="h-icon">
                      <span>
                        <i class="fa fa-plane"></i>
                      </span>
                    </div>
                    <!-- end h-icon -->

                    <div class="h-text">
                      <span class="numbers">2496</span>
                      <p>Outstanding Tours</p>
                    </div>
                    <!-- end h-text -->
                  </div>
                  <!-- end highlight-box -->
                </div>
                <!-- end columns -->

                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <div class="highlight-box">
                    <div class="h-icon">
                      <span>
                        <i class="fa fa-ship"></i>
                      </span>
                    </div>
                    <!-- end h-icon -->

                    <div class="h-text cruise">
                      <span class="numbers">1906</span>
                      <p>Worldwide Cruise</p>
                    </div>
                    <!-- end h-text -->
                  </div>
                  <!-- end highlight-box -->
                </div>
                <!-- end columns -->

                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <div class="highlight-box">
                    <div class="h-icon">
                      <span>
                        <i class="fa fa-taxi"></i>
                      </span>
                    </div>
                    <!-- end h-icon -->

                    <div class="h-text taxi">
                      <span class="numbers">2033</span>
                      <p>Luxury Car Booking</p>
                    </div>
                    <!-- end h-text -->
                  </div>
                  <!-- end highlight-box -->
                </div>
                <!-- end columns -->
              </div>
              <!-- end boxes -->
            </div>
            <!-- end row -->
          </div>
          <!-- end columns -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    <!-- end highlights -->
  </div>
</template>

<script>
import SpecialCatalogs from './widgets/SpecialCatalogs'

export default {
  name: "IndexPage",
  components: {
    'special-catalog': SpecialCatalogs
  }
  
};
</script>