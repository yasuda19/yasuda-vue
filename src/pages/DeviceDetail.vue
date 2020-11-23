<template>
  <div class="container-fluid">
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <i class="fa fa-arrow-left"></i> Back to Device Lists
      </a>
    </nav>

    <div class="container my-5">
      <h3>Acer - Aspire U</h3>
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col">
              <img
                class="photo"
                src="https://diviceimage.azureedge.net/devices/Acer/Aspire_U.png"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-4 text-right">
              <p>Device ID :</p>
              <p>Manufacturer ID :</p>
              <p>Device Name :</p>
              <p>Device Type :</p>
              <p>Price :</p>
              <p>Processor :</p>
              <p>Memory :</p>
              <p>Storage :</p>
              <p>Screen Size :</p>
            </div>
            <div class="col text-left">
              <p>1</p>
              <p>1</p>
              <p>Acer - Aspire U</p>
              <p>All in one</p>
              <p>1900</p>
              <p>Intel Core i5-3210M (2.5 GHz)</p>
              <p>8GB DDR3</p>
              <p>1TB</p>
              <p>15.6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeviceDetail",
};
</script>

<style scoped>
.container-fluid {
  padding: 0;
}
</style>