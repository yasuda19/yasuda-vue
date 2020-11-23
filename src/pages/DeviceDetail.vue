<template>
  <div class="container-fluid">
    <nav class="navbar navbar-light bg-light">
      <router-link class="navbar-brand" to="/"
        ><i class="fa fa-arrow-left"></i> Back to Device Lists</router-link
      >
    </nav>

    <div class="container my-5">
      <h3>{{ device.DeviceName }}</h3>
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col">
              <img class="photo" :src="device.Photo" />
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
              <p>{{ device.DeviceID }}</p>
              <p>{{ device.ManufacturerID }}</p>
              <p>{{ device.DeviceName }}</p>
              <p>{{ device.DeviceType }}</p>
              <p>{{ device.Price }}</p>
              <p>{{ device.Processor }}</p>
              <p>{{ device.Memory }}</p>
              <p>{{ device.Storage }}</p>
              <p>{{ device.ScreenSize }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DeviceDetail",
  data: () => ({
    device: {
      DeviceID: 0,
      ManufacturerID: 0,
      DeviceName: "",
      DeviceType: "",
      Price: 0,
      Processor: "",
      Memory: "",
      Storage: "",
      ScreenSize: "",
      Photo: "",
    },
  }),
  async created() {
    let id = this.$route.params.id;
    const { data } = await axios.get(
      `https://device-order.herokuapp.com/devices/${id}`
    );
    this.device = data;
  },
};
</script>

<style scoped>
.container-fluid {
  padding: 0;
}
</style>