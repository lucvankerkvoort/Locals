import axios from "axios";

export default {
  getLocals: function() {
    return axios.get("api/locals");
  },
  getTravelers: function() {
    return axios.get("api/travellers");
  }
};
