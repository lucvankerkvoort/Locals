import axios from "axios";

export default {
  getLocals: function() {
    return axios.get("api/locals");
  },
  getTravelers: function() {
    return axios.get("api/traveller");
  },
  pushLocals: function(dataLocal) {
    console.log(dataLocal);
    return axios.post("api/locals", dataLocal);
  },
  pushTravelers: function(dataTraveler) {
    console.log(dataTraveler);
    return axios.post("api/traveller", dataTraveler);
  }
};
