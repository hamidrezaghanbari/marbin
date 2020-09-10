<template>
  <div class="booking-form">
    <h3 v-show="isUserAuthenticated">Book Hotel</h3>
    <p v-show="isUserAuthenticated">Find your dream hotel today</p>

    <form v-show="isUserAuthenticated">
      <div class="form-group">
        <input
          onfocus="(this.type='date')"
          onblur="(this.type='text')"
          type="text"
          v-model="start_date"
          @blur="$v.start_date.$touch()"
          :class="{invalid: $v.start_date.$error}"
          class="form-control dpd1"
          placeholder="Arrival Date"
          required
        />
        <i class="fa fa-calendar"></i>

        <!-- validation section  -->
        <p
          v-if="!$v.start_date.required && $v.start_date.$dirty"
          class="text-danger"
        >start date field is required</p>
      </div>

      <div class="form-group">
        <input
          v-model="end_date"
          @blur="$v.end_date.$touch()"
          :class="{invalid: $v.end_date.$error}"
          onfocus="(this.type='date')"
          onblur="(this.type='text')"
          type="text"
          class="form-control dpd2"
          placeholder="Departure Date"
          required
        />
        <i class="fa fa-calendar"></i>
        <!-- validation section  -->
        <p
          v-if="!$v.end_date.required && $v.end_date.$dirty"
          class="text-danger"
        >end date field is required</p>
      </div>

      <div class="form-group right-icon">
        <select
          v-model="travellers_count"
          @blur="$v.travellers_count.$touch()"
          :class="{invalid: $v.travellers_count.$error}"
          class="form-control"
        >
          <option disabled selected>traveller count</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <i class="fa fa-angle-down"></i>
        <!-- validation section  -->
        <p
          v-if="!$v.travellers_count.required && $v.travellers_count.$dirty"
          class="text-danger"
        >traveller count field is required</p>
      </div>

      <div class="checkbox custom-check">
        <label for="check01">
          <span>
            <i class="fa fa-check"></i>
          </span>By continuing, you are agree to the
          <a href="#">Terms & Conditions.</a>
        </label>
      </div>

      <button
        :disabled="$v.$invalid"
        @click.prevent="newOrder"
        class="btn btn-block btn-orange"
      >Confirm Booking</button>
    </form>

    <p class="alert alert-info" v-show="!isUserAuthenticated">
      for booking this hotel you must be
      <router-link style="font-weight: bold;cursor: pointer" :to="{name: 'login'}" tag="span">login</router-link>/
      <router-link
        style="font-weight: bold;cursor: pointer"
        :to="{name: 'register'}"
        tag="span"
      >register</router-link>
    </p>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import Vue from "vue";
export default {
  name: "Booking",
  data() {
    return {
      start_date: "",
      end_date: "",
      travellers_count: "",
    };
  },
  computed: {
    singleProduct() {
      return this.$store.getters.getSingleProduct;
    },
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated;
    },
    isLoad() {
      return this.$store.getters.getIsLoad;
    },
  },
  methods: {
    newOrder() {
      this.$store.commit("setIsLoad", true);
      const newOrder = {
        start_date: this.start_date,
        end_date: this.end_date,
        travellers_count: parseInt(this.travellers_count),
        product_id: this.singleProduct.product_id,
        ticket_name: Vue.$cookies.get("ticket_name"),
      };

      this.$store.dispatch("newOrder", newOrder);
    },
  },
  validations: {
    start_date: {
      required,
    },
    end_date: {
      required,
    },
    travellers_count: {
      required,
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