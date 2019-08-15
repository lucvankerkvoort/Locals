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
  },
  loginSearchLocal: function(data) {
    console.log(data);
    return axios.post("api/locals/login/", data);
  },
  loginSearchTraveler: function(data) {
    return axios.post("api/traveller/login/", data);
  },
  getLocalById: function(id) {
    return axios.get("api/locals/" + id);
  },
  getTravelerById: function(id) {
    return axios.get("api/traveller/" + id);
  }
};
