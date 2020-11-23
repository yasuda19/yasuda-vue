<template>
  <div
    class="modal fade"
    id="staticBackdrop"
    data-backdrop="static"
    data-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
    ref="vuemodal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Add New Devices</h5>
          <button
            type="button"
            id="closeModal"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="AddNewDevice">
            <div class="row mx-auto">
              <div class="form-group mx-auto">
                <label for="deviceId">DeviceID</label>
                <input
                  type="number"
                  class="form-control"
                  id="deviceId"
                  v-model="deviceForm.DeviceID"
                />
              </div>
              <div class="form-group mx-auto">
                <label for="manufacturerId">ManufacturerID</label>
                <input
                  type="number"
                  class="form-control"
                  id="manufacturerId"
                  v-model="deviceForm.ManufacturerID"
                />
              </div>
            </div>
            <div class="row mx-auto">
              <div class="form-group mx-auto">
                <label for="manufacturerName">Manufacturer Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="manufacturerName"
                  v-model="deviceForm.ManufacturerName"
                />
              </div>
              <div class="form-group mx-auto">
                <label for="title">Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="deviceForm.Title"
                />
              </div>
            </div>
            <div class="row mx-auto">
              <div class="form-group mx-auto">
                <label for="deviceName">Device Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="deviceName"
                  v-model="deviceForm.DeviceName"
                />
              </div>
              <div class="form-group mx-auto">
                <label for="deviceType">Device Type</label>
                <input
                  type="text"
                  class="form-control"
                  id="deviceType"
                  v-model="deviceForm.DeviceType"
                />
              </div>
            </div>
            <div class="row mx-auto">
              <div class="form-group mx-auto">
                <label for="price">Price</label>
                <input
                  type="text"
                  class="form-control"
                  id="price"
                  v-model="deviceForm.Price"
                />
              </div>
              <div class="form-group mx-auto">
                <label for="processor">Processor</label>
                <input
                  type="text"
                  class="form-control"
                  id="processor"
                  v-model="deviceForm.Processor"
                />
              </div>
            </div>
            <div class="row mx-auto">
              <div class="form-group mx-auto">
                <label for="memory">Memory</label>
                <input
                  type="text"
                  class="form-control"
                  id="memory"
                  v-model="deviceForm.Memory"
                />
              </div>
              <div class="form-group mx-auto">
                <label for="storage">Storage</label>
                <input
                  type="text"
                  class="form-control"
                  id="storage"
                  v-model="deviceForm.Storage"
                />
              </div>
            </div>
            <div class="row mx-auto">
              <div class="form-group mx-auto">
                <label for="screenSize">Screen Size</label>
                <input
                  type="text"
                  class="form-control"
                  id="screenSize"
                  v-model="deviceForm.ScreenSize"
                />
              </div>
              <div class="form-group mx-auto">
                <label for="photo">Photo</label>
                <input
                  type="text"
                  class="form-control"
                  id="photo"
                  v-model="deviceForm.Photo"
                />
              </div>
            </div>
            <div class="row mx-auto">
              <div class="form-group col-6">
                <label for="thumbnail">Thumbnail</label>
                <input
                  type="text"
                  class="form-control"
                  id="thumbnail"
                  v-model="deviceForm.Thumbnail"
                />
              </div>
            </div>
            <button
              type="submit"
              class="btn btn-primary btn-lg my-3"
              :disabled="isDisabled"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "AddDevice",
  props: ["defaultId"],
  data: () => ({
    deviceForm: {
      DeviceID: 0,
      ManufacturerID: 0,
      ManufacturerName: "",
      Title: "",
      DeviceName: "",
      DeviceType: "",
      Price: 0,
      Processor: "",
      Memory: "",
      Storage: "",
      ScreenSize: "",
      Photo: "",
      Thumbnail: "",
      created_by: "3",
      updated_by: "3",
    },
    clearDeviceForm: {
      DeviceID: 0,
      ManufacturerID: 0,
      ManufacturerName: "",
      Title: "",
      DeviceName: "",
      DeviceType: "",
      Price: 0,
      Processor: "",
      Memory: "",
      Storage: "",
      ScreenSize: "",
      Photo: "",
      Thumbnail: "",
      created_by: "3",
      updated_by: "3",
    },
    isDisabled: false,
  }),
  watch: {
    defaultId: function (value) {
      return (this.deviceForm.DeviceID = value);
    },
  },
  methods: {
    ...mapActions({
      getDataOfDevices: "getDataOfDeviceLists",
    }),
    AddNewDevice() {
      this.isDisabled = true;
      axios
        .post(`https://device-order.herokuapp.com/devices`, this.deviceForm)
        .then((res) => {
          if (res.status === 200) {
            this.getDataOfDevices();
            this.deviceForm = this.clearDeviceForm;
            document.getElementById("closeModal").click();
          }
        })
        .finally(() => (this.isDisabled = false));
    },
  },
};
</script>