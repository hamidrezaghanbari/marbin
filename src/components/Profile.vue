<template>
  <div class="col-xs-12 col-sm-10 col-md-10 dashboard-content user-profile">
    <h2 class="dash-content-title">My Profile</h2>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>Profile Details</h4>
      </div>
      <div class="panel-body">
        <div class="row">
          <div class="col-sm-5 col-md-4 user-img">
            <img src="../assets/images/user-profile.jpg" class="img-responsive" alt="user-img" />
          </div>
          <!-- end columns -->

          <div class="col-sm-7 col-md-8 user-detail">
            <ul class="list-unstyled">
              <li>
                <span>Name:</span> Lisa Jorge
              </li>
              <li>
                <span>Date of Birth:</span> 25 Jan 1987
              </li>
              <li>
                <span>Email:</span> youremail@gmail.com
              </li>
              <li>
                <span>Phone:</span> +31 123 456 7890
              </li>
              <li>
                <span>Address:</span> 23 Block, Lorem Ipsum, California.
              </li>
              <li>
                <span>Country:</span> United States of America
              </li>
            </ul>
            <button class="btn" data-toggle="modal" data-target="#edit-profile">Edit Profile</button>
          </div>
          <!-- end columns -->

          <div class="col-sm-12 user-desc">
            <h4>About You</h4>
            <p>Vestibulum tristique, justo eu sollicitudin sagittis, metus dolor eleifend urna, quis scelerisque purus quam nec ligula. Suspendisse iaculis odio odio, ac vehicula nisi faucibus eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere semper sem ac aliquet. Duis vel bibendum tellus, eu hendrerit sapien. Proin fringilla, enim vel lobortis viverra, augue orci fringilla diam, sed cursus elit mi vel lacus. Nulla facilisi. Fusce sagittis, magna non vehicula gravida, ante arcu pulvinar arcu, aliquet luctus arcu purus sit amet sem. Mauris blandit odio sed nisi porttitor egestas. Mauris in quam interdum purus vehicula rutrum quis in sem. Integer interdum lectus at nulla dictum luctus. Sed risus felis, posuere id condimentum non, egestas pulvinar enim. Praesent pretium risus eget nisi ullamcorper fermentum. Duis lacinia nisi ac rhoncus vestibulum.</p>
          </div>
          <!-- end columns -->
        </div>
        <!-- end row -->
      </div>
      <!-- end panel-body -->
    </div>
    <!-- end panel-detault -->
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>