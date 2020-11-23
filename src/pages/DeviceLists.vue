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
    <AddDevice></AddDevice>
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
        <tr>
          <th>1</th>
          <td>1</td>
          <td>Acer - Aspire U</td>
          <td>All in One</td>
          <td>1900</td>
          <th>
            <router-link to="/detail/1"
              ><i class="fa fa-file-o"></i
            ></router-link>
          </th>
        </tr>
        <tr>
          <th>1</th>
          <td>2</td>
          <td>Acer - Aspire M</td>
          <td>Ultrabook</td>
          <td>700</td>
          <th>
            <router-link to="/detail/1"
              ><i class="fa fa-file-o"></i
            ></router-link>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AddDevice from "@/components/AddDevice";
export default {
  name: "DeviceLists",
  components: {
    AddDevice,
  },
};
</script>