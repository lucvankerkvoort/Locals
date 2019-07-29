import axios from "axios";

export default {
  getLocals: function() {
    return axios.get("api/locals");
  }
};
