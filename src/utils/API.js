import axios from "axios";

export default {
  convertFile: function (videoinfo) {
    return axios.post("https://domain.com:port/convert", (videoinfo), {
      responseType: "blob",
      headers: {
        "Content-Type": "multipart/form-data",
      }
    });
  },

};
