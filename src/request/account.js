import request from "@/request/request";

export function userLogin(data) {
  return request({
    url: "/account/signin",
    method: "post",
    data
  });
}
