import axios from "axios";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

var url = "http://localhost:18080/";

const service = axios.create({
  baseURL: url,
  timeout: 5000,
  withCredentials: true
});

service.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded' //设置跨域头部
    };
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.success) {
      return res;
    } else {
      // Message({
      //   message: res.msg || "error",
      //   type: "error",
      //   duration: 5 * 1000
      // });
    }
  },
  error => {
    console.log("err" + error); // for debug
    // Message({
    //   message: error.msg,
    //   type: "error",
    //   duration: 5 * 1000
    // });
    return Promise.reject(error);
  }
);

export default service;
