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
              class="list-group-item active"
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
              <a href="#" class="list-group-item active">Login</a>
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
            <h1 class="page-title">Login Page</h1>
            <ul class="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li class="active">Login Page</li>
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
      <div id="login" class="innerpage-section-padding">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="flex-content">
                <div class="custom-form custom-form-fields">
                  <h3>Login</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <form>
                    <div class="form-group">
                      <input
                        type="email"
                        @blur="$v.email.$touch()"
                        class="form-control"
                        placeholder="Email"
                        v-model="email"
                        :class="{invalid: $v.email.$error}"
                      />
                      <span>
                        <i class="fa fa-envelope"></i>
                      </span>

                      <!-- validation section  -->
                      <p
                        v-if="!$v.email.email && $v.email.$dirty"
                        class="text-danger"
                      >your email entered is invalid format</p>
                      <p
                        v-if="!$v.email.required && $v.email.$dirty"
                        class="text-danger"
                      >email field is required</p>
                      <p
                        v-if="!$v.email.maxLength"
                        class="text-danger"
                      >the email must be less than 100 character</p>
                      <!-- end validation section  -->
                    </div>

                    <div class="form-group">
                      <input
                        type="password"
                        v-model="password"
                        @blur="$v.password.$touch()"
                        :class="{invalid: $v.password.$error}"
                        class="form-control"
                        placeholder="Password"
                        required
                      />
                      <span>
                        <i class="fa fa-lock"></i>
                      </span>

                      <!-- validation section  -->
                      <p
                        v-if="!$v.password.required && $v.password.$dirty"
                        class="text-danger"
                      >password field is required</p>
                      <p
                        v-if="!$v.password.minLength"
                        class="text-danger"
                      >the password must be more than 6 character</p>
                      <!-- end validation section  -->
                    </div>

                    <!-- <div class="checkbox">
                      <label>
                        <input type="checkbox" /> Remember me
                      </label>
                    </div>-->

                    <button
                      :disabled="$v.$invalid"
                      @click.prevent="loginUser"
                      class="btn btn-orange btn-block"
                    >Login</button>
                  </form>

                  <div class="other-links">
                    <p class="link-line">
                      New Here ?
                      <router-link :to="{name: 'register'}">Sign up now</router-link>
                    </p>
                    <!-- TODO for forget password process -->
                    <!-- <a class="simple-link" href="#">Forgot Password ?</a> -->
                  </div>
                  <!-- end other-links -->
                </div>
                <!-- end custom-form -->

                <div class="flex-content-img custom-form-img">
                  <img
                    src="../assets/images/1.jpg"
                    class="img-responsive"
                    alt="registration-img"
                  />
                </div>
                <!-- end custom-form-img -->
              </div>
              <!-- end form-content -->
            </div>
            <!-- end columns -->
          </div>
          <!-- end row -->
        </div>
        <!-- end container -->
      </div>
      <!-- end login -->
    </section>
    <!-- end innerpage-wrapper -->
  </div>
</template>

<script>
import {
  required,
  maxLength,
  minLength,
  email,
} from "vuelidate/lib/validators";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    loginUser() {
      const login = {
        email: this.email,
        password_digest: this.password,
      };

      this.$store.dispatch("LoginUser", login);
    },
  },

  validations: {
    email: {
      required,
      maxLength: maxLength(100),
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
  },
};
</script>



<style scoped>
.invalid {
  border: 1px solid red !important;
  box-shadow: 0 0 5px red !important;
  background-color: lightpink !important;
  color: black !important;
}
</style>