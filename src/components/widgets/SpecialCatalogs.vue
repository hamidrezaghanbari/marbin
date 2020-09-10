<template>
    <div>
        <section id="vehicle-offers" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="page-heading">
              <h2>Special offers catalogs</h2>
              <hr class="heading-line" />
            </div>
            <!-- end page-heading -->

            <div class="row">
              <div v-for="specialCatalog in specialCatalogs" :key="specialCatalog.id" class="col-sm-6 col-md-4">
                <div class="main-block vehicle-block">
                  <div class="main-img vehicle-img">
                    <a href="#">
                      <img
                        :src="specialCatalog.header_image"
                        class="img-responsive"
                        alt="tour-img"
                      />
                    </a>
                    <div class="vehicle-time">
                      <p>
                        <span>
                          <i class="fa fa-clock-o"></i>
                        </span>22/h
                      </p>
                    </div>
                    <!-- end vehicle-time -->
                  </div>
                  <!-- end vehicle-img -->

                  <div class="offer-price-2">
                    <ul class="list-unstyled">
                      <li class="price">
                        ${{ specialCatalog.price }}
                        <a href="#">
                          <span class="arrow">
                            <i class="fa fa-angle-right"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <!-- end offer-price-2 -->

                  <div class="main-info vehicle-info">
                    <div class="main-title vehicle-title">
                      <a href="#">{{ specialCatalog.name }}</a>
                      <p>Per Day</p>
                      <div class="rating">
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
                      </div>
                    </div>
                    <!-- end vehicle-title -->
                  </div>
                  <!-- end vehicle-info -->
                </div>
                <!-- end vehicle-block -->
              </div>
              <!-- end columns -->
            </div>
            <!-- end row -->

            <div class="view-all text-center">
              <a href="#" class="btn btn-orange">View All</a>
            </div>
            <!-- end view-all -->
          </div>
          <!-- end columns -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
    </div>
</template>


<script>
export default {
    name: 'SpecialCatalogs',
    computed: {
        specialCatalogs() {
            return this.$store.getters.getSpecialCatalogs;
        }
    },
    created() {
        if (this.specialCatalogs.length == 0) {
            this.$store.dispatch("getSpecialCatalogs");
        }
    }
}
</script>

<style scoped>
    
</style>