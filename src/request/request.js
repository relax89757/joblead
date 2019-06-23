import axios from "axios";
import qs from "qs";

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

var url = "https://www.pusaz.com:8443";
// var url = "http://localhost:18080";

const service = axios.create({
  baseURL: url,
  timeout: 5000,
  withCredentials: true
});

service.interceptors.request.use(
  config => {
    if (config.method == "post") {
      config.data = qs.stringify(config.data);
    }
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
    return res;
  },
  error => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
