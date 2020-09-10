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
              <a href="#" class="list-group-item active">Detail Right Sidebar</a>
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

    <!--============= PAGE-COVER =============-->
    <section style="padding: 40px 0px !important;" class="page-cover" id="cover-login">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h1 class="page-title">{{ singleProduct.name }}</h1>
            <ul class="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li class="active">sginle product page</li>
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
      <div id="hotel-details" class="innerpage-section-padding">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 content-side">
              <div class="detail-slider">
                <!-- carousel section one -->
                <carousel :navigationEnabled="true" :perPage="1" class="feature-slider">
                  <slide :key="picture.id" v-for="picture in singleProduct.pictures">
                    <img
                      :src="picture"
                      class="img-responsive"
                      style="width: 100%"
                      alt="feature-img"
                    />
                  </slide>
                </carousel>
                <!-- end feature-slider -->
              </div>
              <!-- end detail-slider -->

              <!-- end carousel section two -->

              <div class="detail-tabs">
                <ul class="nav nav-tabs nav-justified">
                  <li class="active">
                    <a href="#hotel-overview" data-toggle="tab">long description</a>
                  </li>
                  <li>
                    <a href="#restaurant" data-toggle="tab">services</a>
                  </li>
                  <li>
                    <a href="#pick-up" data-toggle="tab">Pick Up Services</a>
                  </li>
                  <li>
                    <a href="#luxury-gym" data-toggle="tab">Luxury Gym</a>
                  </li>
                  <li>
                    <a href="#sports-club" data-toggle="tab">Sports Club</a>
                  </li>
                </ul>

                <div class="tab-content">
                  <div id="hotel-overview" class="tab-pane in active">
                    <div class="row">
                      <div class="col-sm-4 col-md-4 tab-img">
                        <img
                          :src="singleProduct.header_image"
                          class="img-responsive"
                          alt="flight-detail-img"
                        />
                      </div>
                      <!-- end columns -->

                      <div class="col-sm-8 col-md-8 tab-text">
                        <h3>Hotel Overview</h3>
                        <p>{{ singleProduct.long_description }}</p>
                      </div>
                      <!-- end columns -->
                    </div>
                    <!-- end row -->
                  </div>
                  <!-- end hotel-overview -->

                  <div id="restaurant" class="tab-pane">
                    <div class="row">
                      <div class="col-sm-4 col-md-4 tab-img">
                        <img
                          src="../assets/images/hotel-detail-tab-2.jpg"
                          class="img-responsive"
                          alt="flight-detail-img"
                        />
                      </div>
                      <!-- end columns -->

                      <div class="col-sm-8 col-md-8 tab-text">
                        <h3>services</h3>
                        <p v-html="singleProduct.services"></p>
                      </div>
                      <!-- end columns -->
                    </div>
                    <!-- end row -->
                  </div>
                  <!-- end restaurant -->

                  <div id="pick-up" class="tab-pane">
                    <div class="row">
                      <div class="col-sm-4 col-md-4 tab-img">
                        <img
                          src="../assets/images/hotel-detail-tab-3.jpg"
                          class="img-responsive"
                          alt="flight-detail-img"
                        />
                      </div>
                      <!-- end columns -->

                      <div class="col-sm-8 col-md-8 tab-text">
                        <h3>Pick Up Services</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniam, quis nostrud exercitation.
                          <br />Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                          aute irure dolor in reprehenderit in voluptate velit esse cillum
                          dolore eu fugiat nulla pariatur.
                        </p>
                      </div>
                      <!-- end columns -->
                    </div>
                    <!-- end row -->
                  </div>
                  <!-- end pick-up -->

                  <div id="luxury-gym" class="tab-pane">
                    <div class="row">
                      <div class="col-sm-4 col-md-4 tab-img">
                        <img
                          src="../assets/images/hotel-detail-tab-4.jpg"
                          class="img-responsive"
                          alt="flight-detail-img"
                        />
                      </div>
                      <!-- end columns -->

                      <div class="col-sm-8 col-md-8 tab-text">
                        <h3>Luxury Gym</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur.
                        </p>
                      </div>
                      <!-- end columns -->
                    </div>
                    <!-- end row -->
                  </div>
                  <!-- end luxury-gym -->

                  <div id="sports-club" class="tab-pane">
                    <div class="row">
                      <div class="col-sm-4 col-md-4 tab-img">
                        <img
                          src="../assets/images/hotel-detail-tab-5.jpg"
                          class="img-responsive"
                          alt="flight-detail-img"
                        />
                      </div>
                      <!-- end columns -->

                      <div class="col-sm-8 col-md-8 tab-text">
                        <h3>Sports Club</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                          dolor in reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                      </div>
                      <!-- end columns -->
                    </div>
                    <!-- end row -->
                  </div>
                  <!-- end sports-club -->
                </div>
                <!-- end tab-content -->
              </div>
              <!-- end detail-tabs -->

              <div class="available-blocks" id="available-rooms">
                <h2>Available Rooms</h2>
                <div class="list-block main-block room-block">
                  <div class="list-content">
                    <div class="main-img list-img room-img">
                      <a href="#">
                        <img
                          src="../assets/images/available-room-1.jpg"
                          class="img-responsive"
                          alt="room-img"
                        />
                      </a>
                      <div class="main-mask">
                        <ul class="list-unstyled list-inline offer-price-1">
                          <li class="price">
                            $150.00
                            <span class="divider">|</span>
                            <span class="pkg">7 Nights</span>
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
                    <!-- end room-img -->

                    <div class="list-info room-info">
                      <h3 class="block-title">
                        <a href="#">Single Room</a>
                      </h3>
                      <p class="block-minor">Max Guests:02</p>
                      <p>
                        Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius
                        prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at,
                        pro an eros perpetua ullamcorper.
                      </p>
                      <a href="#" class="btn btn-orange btn-lg">View More</a>
                    </div>
                    <!-- end room-info -->
                  </div>
                  <!-- end list-content -->
                </div>
                <!-- end room-block -->

                <div class="list-block main-block room-block">
                  <div class="list-content">
                    <div class="main-img list-img room-img">
                      <a href="#">
                        <img
                          src="../assets/images/available-room-2.jpg"
                          class="img-responsive"
                          alt="room-img"
                        />
                      </a>
                      <div class="main-mask">
                        <ul class="list-unstyled list-inline offer-price-1">
                          <li class="price">
                            $250.00
                            <span class="divider">|</span>
                            <span class="pkg">7 Nights</span>
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
                    <!-- end room-img -->

                    <div class="list-info room-info">
                      <h3 class="block-title">
                        <a href="#">Double Room</a>
                      </h3>
                      <p class="block-minor">Max Guest:03</p>
                      <p>
                        Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius
                        prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at,
                        pro an eros perpetua ullamcorper.
                      </p>
                      <a href="#" class="btn btn-orange btn-lg">View More</a>
                    </div>
                    <!-- end room-info -->
                  </div>
                  <!-- end list-content -->
                </div>
                <!-- end room-block -->

                <div class="list-block main-block room-block">
                  <div class="list-content">
                    <div class="main-img list-img room-img">
                      <a href="#">
                        <img
                          src="../assets/images/available-room-3.jpg"
                          class="img-responsive"
                          alt="room-img"
                        />
                      </a>
                      <div class="main-mask">
                        <ul class="list-unstyled list-inline offer-price-1">
                          <li class="price">
                            $350.00
                            <span class="divider">|</span>
                            <span class="pkg">7 Nights</span>
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
                    <!-- end room-img -->

                    <div class="list-info room-info">
                      <h3 class="block-title">
                        <a href="#">Twin Room</a>
                      </h3>
                      <p class="block-minor">Max Guest:04</p>
                      <p>
                        Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius
                        prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at,
                        pro an eros perpetua ullamcorper.
                      </p>
                      <a href="#" class="btn btn-orange btn-lg">View More</a>
                    </div>
                    <!-- end room-info -->
                  </div>
                  <!-- end list-content -->
                </div>
                <!-- end room-block -->

                <div class="list-block main-block room-block">
                  <div class="list-content">
                    <div class="main-img list-img room-img">
                      <a href="#">
                        <img
                          src="../assets/images/available-room-4.jpg"
                          class="img-responsive"
                          alt="room-img"
                        />
                      </a>
                      <div class="main-mask">
                        <ul class="list-unstyled list-inline offer-price-1">
                          <li class="price">
                            $558.00
                            <span class="divider">|</span>
                            <span class="pkg">7 Nights</span>
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
                    <!-- end room-img -->

                    <div class="list-info room-info">
                      <h3 class="block-title">
                        <a href="#">Deluxe Room</a>
                      </h3>
                      <p class="block-minor">Max Guest:05</p>
                      <p>
                        Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius
                        prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at,
                        pro an eros perpetua ullamcorper.
                      </p>
                      <a href="#" class="btn btn-orange btn-lg">View More</a>
                    </div>
                    <!-- end room-info -->
                  </div>
                  <!-- end list-content -->
                </div>
                <!-- end room-block -->
              </div>
              <!-- end available-rooms -->

              <div class="pages">
                <ol class="pagination">
                  <li>
                    <a href="#" aria-label="Previous">
                      <span aria-hidden="true">
                        <i class="fa fa-angle-left"></i>
                      </span>
                    </a>
                  </li>
                  <li class="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#" aria-label="Next">
                      <span aria-hidden="true">
                        <i class="fa fa-angle-right"></i>
                      </span>
                    </a>
                  </li>
                </ol>
              </div>
              <!-- end pages -->
            </div>
            <!-- end columns -->

            <div class="col-xs-12 col-sm-12 col-md-3 side-bar right-side-bar">
              <div class="side-bar-block booking-form-block">
                <h2 class="selected-price">
                  ${{ singleProduct.price }}
                  <span>De Forte</span>
                </h2>
                <!-- booking section  -->
                <booking></booking>
                <!-- end booking-form -->
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
      <!-- end hotel-details -->
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
              <p>
                Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam
                delectus ei vis.
              </p>
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
              <p>
                Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam
                delectus ei vis.
              </p>
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
              <p>
                Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam
                delectus ei vis.
              </p>
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
              <p>
                Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam
                delectus ei vis.
              </p>
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
import Booking from "./widgets/Booking";

export default {
  name: "Single",
  components: {
    booking: Booking,
  },
  computed: {
    singleProduct() {
      return this.$store.getters.getSingleProduct;
    },
  },
  created() {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    this.$store.dispatch("getSingleProduct", {
      product_id: this.$route.params.id,
    });
  },
};
</script>