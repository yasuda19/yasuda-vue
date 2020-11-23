import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    deviceLists: [],
    lastDevices: 0
  },
  actions: {
    async getDataOfDeviceLists({ commit }) {
      const { data } = await axios.get(
        `https://device-order.herokuapp.com/devices`
      );
      let lastIndex = data.length - 1;
      commit("setLastDevice", Number(data[lastIndex].DeviceID) + 1);
      commit("setDeviceLists", data);
    }
  },
  mutations: {
    setLastDevice(state, id) {
      state.lastDevices = id.toString();
    },
    setDeviceLists(state, devices) {
      state.deviceLists = devices;
    }
  },
  getters: {
    getLastDevice: (state) => state.lastDevices,
    getDevices: (state) =>
      state.deviceLists.sort((a, b) => b.DeviceID - a.DeviceID)
  }
});
