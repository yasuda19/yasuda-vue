<template>
  <div class="container">
    <div class="row my-4">
      <div class="col label text-left">
        <h3>Devices List</h3>
      </div>
      <div class="col text-right">
        <button
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#staticBackdrop"
        >
          Add New Device
        </button>
      </div>
    </div>
    <AddDevice :defaultId="lastDevices"></AddDevice>
    <table class="table table-sm">
      <thead>
        <tr>
          <th>Device ID</th>
          <th>Manufacturer ID</th>
          <th>Device Name</th>
          <th>Device Type</th>
          <th>Price</th>
          <th>Detail</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="device in devices" :key="device.id">
          <th>{{ device.DeviceID }}</th>
          <td>{{ device.ManufacturerID }}</td>
          <td>{{ device.DeviceName }}</td>
          <td>{{ device.DeviceType }}</td>
          <td>{{ device.Price }}</td>
          <th>
            <router-link :to="`/detail/${device.id}`"
              ><i class="fa fa-file-o"></i
            ></router-link>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import AddDevice from "@/components/AddDevice";
export default {
  name: "DeviceLists",
  components: {
    AddDevice,
  },
  computed: {
    ...mapGetters({
      lastDevices: "getLastDevice",
      devices: "getDevices",
    }),
  },
  created() {
    this.getDataOfDevices();
  },
  methods: {
    ...mapActions({
      getDataOfDevices: "getDataOfDeviceLists",
    }),
  },
};
</script>