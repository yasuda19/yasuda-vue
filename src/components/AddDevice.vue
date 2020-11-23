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
          <form>
            <div class="row mx-auto">
              <div class="form-group mx-auto">
                <label for="deviceId">DeviceID</label>
                <input type="number" class="form-control" id="deviceId" />
              </div>
              <div class="form-group mx-auto">
                <label for="manufacturerId">ManufacturerID</label>
                <input type="number" class="form-control" id="manufacturerId" />
              </div>
            </div>
            <div class="row mx-auto">
              <div class="form-group mx-auto">
                <label for="manufacturerName">Manufacturer Name</label>
                <input type="text" class="form-control" id="manufacturerName" />
              </div>
              <div class="form-group mx-auto">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" />
              </div>
            </div>
            <div class="row mx-auto">
              <div class="form-group mx-auto">
                <label for="deviceName">Device Name</label>
                <input type="text" class="form-control" id="deviceName" />
              </div>
              <div class="form-group mx-auto">
                <label for="deviceType">Device Type</label>
                <input type="text" class="form-control" id="deviceType" />
              </div>
            </div>
            <div class="row mx-auto">
              <div class="form-group mx-auto">
                <label for="price">Price</label>
                <input type="text" class="form-control" id="price" />
              </div>
              <div class="form-group mx-auto">
                <label for="processor">Processor</label>
                <input type="text" class="form-control" id="processor" />
              </div>
            </div>
            <div class="row mx-auto">
              <div class="form-group mx-auto">
                <label for="memory">Memory</label>
                <input type="text" class="form-control" id="memory" />
              </div>
              <div class="form-group mx-auto">
                <label for="storage">Storage</label>
                <input type="text" class="form-control" id="storage" />
              </div>
            </div>
            <div class="row mx-auto">
              <div class="form-group mx-auto">
                <label for="screenSize">Screen Size</label>
                <input type="text" class="form-control" id="screenSize" />
              </div>
              <div class="form-group mx-auto">
                <label for="photo">Photo</label>
                <input type="text" class="form-control" id="photo" />
              </div>
            </div>
            <div class="row mx-auto">
              <div class="form-group col-6">
                <label for="thumbnail">Thumbnail</label>
                <input type="text" class="form-control" id="thumbnail" />
              </div>
            </div>
            <button
              type="button"
              @click="AddNewDevice"
              class="btn btn-primary btn-lg my-3"
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
export default {
  name: "AddDevice",
  components: {},
  methods: {
    AddNewDevice() {
      document.getElementById("closeModal").click();
    },
  },
};
</script>