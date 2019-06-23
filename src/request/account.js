import request from "@/request/request";

export function userLogin(data) {
  return request({
    url: "/account/signin",
    method: "post",
    data
  });
}

export function cookiesLogin(data) {
  return request({
    url: "/account/siginCookies",
    method: "post",
    data
  });
}


export function userSignup(data) {
  return request({
    url: "/account/signup",
    method: "post",
    data
  });
}


export function signupCode(data) {
  return request({
    url: "/account/signupcode",
    method: "post",
    data
  });
}
