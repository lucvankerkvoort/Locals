import axios from "axios";

export default {
  getAllUsers: function () {
    return axios.get("/api/user");
  },
  pushUser: function (data) {
    console.log("Data", data);
    return axios.post("/api/user", data);
  },
  login: function (data) {
    console.log(data);
    return axios.post("/api/user/", data);
  },
  getUserById: function (id) {
    return axios.get("/api/user/" + id);
  },
  updateUser: function (id, data) {
    console.log(id, data);
    return axios.put("/api/user/" + id, data);
  },
  pushDates: function (id, data) {
    console.log("ID", id, "Data", data);
    return axios.post("/api/user/info/" + id, data);
  },
  bookingUser: function (id, data) {
    console.log(id, data);
    return axios.post("/api/user/info/" + id, data);
  },
  deleteUserInfo: function (id, data) {
    console.log(id, data);
    return axios.delete("/api/user/info/" + id, data);
  },
};
