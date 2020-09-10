<template>
  <div class="col-xs-12 col-sm-10 col-md-10 dashboard-content booking-trips">
    <h2 class="dash-content-title">Trips You have Booked!</h2>

    <div v-if="this.$route.params.pre" :class="['alert', this.$route.params.status]">
      {{ this.$route.params.message }} 
    </div>

    <div class="dashboard-listing booking-listing">
      <div class="dash-listing-heading">
        <div class="custom-radio">
          <input type="radio" id="radio01" name="radio" checked />
          <label for="radio01">
            <span></span>All Types
          </label>
        </div>
        <!-- end custom-radio -->

        <div class="custom-radio">
          <input type="radio" id="radio02" name="radio" />
          <label for="radio02">
            <span></span>Hotels
          </label>
        </div>
        <!-- end custom-radio -->

        <div class="custom-radio">
          <input type="radio" id="radio03" name="radio" />
          <label for="radio03">
            <span></span>Flights
          </label>
        </div>
        <!-- end custom-radio -->

        <div class="custom-radio">
          <input type="radio" id="radio04" name="radio" />
          <label for="radio04">
            <span></span>Cars
          </label>
        </div>
        <!-- end custom-radio -->
      </div>

      <div class="table-responsive">
        <table class="table table-hover">
          <tbody>
            <tr >
              <td class="dash-list-icon booking-list-date">
                <div class="b-date">
                  <h3>18</h3>
                  <p>October</p>
                </div>
              </td>
              <td class="dash-list-text booking-list-detail">
                <h3>Tom's Restaurant</h3>
                <ul class="list-unstyled booking-info">
                  <li>
                    <span>Booking Date:</span> 26.12.2017 at 03:20 pm
                  </li>
                  <li>
                    <span>Booking Details:</span> 3 to 6 People
                  </li>
                  <li>
                    <span>Client:</span> Lisa Smith
                    <span class="line">|</span>lisasmith@youremail.com
                    <span class="line">|</span>125 254 2578
                  </li>
                </ul>
                <button class="btn btn-orange">Message</button>
              </td>
              <td class="dash-list-btn">
                <button class="btn btn-orange">Cancel</button>
                <button class="btn">Approve</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- end table-responsive -->
    </div>
    <!-- end booking-listings -->
  </div>
</template>

<script>
export default {
  name: "BookingList",
  methods: {
    
  },
  // computed: {
  //   orders() {
  //     return this.$store.getters.getOrders;
  //   },
  // },
  // created() {
  //   if (this.orders.length == 0) {
  //     this.$store.dispatch("getOrders");
  //   }

  //   console.log('order list is');
  //   console.log(this.orders);
  // },
};
</script>

<style scoped>
  .success {
    background-color: lightgreen;
    border: 2px solid green;
  }
</style>