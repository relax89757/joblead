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

export function editUserInfo(data) {
  return request({
    url: "/account/editUserInfo",
    method: "post",
    data
  });
}



export function createResume(data) {
  return request({
    url: "/resume/createResume",
    method: "post",
    data
  });
}

export function getResumeByUserID(data) {
  return request({
    url: "/resume/getResumeInfoByUserID",
    method: "post",
    data
  });
}


export function createCompany(data) {
  return request({
    url: "/company/createCompany",
    method: "post",
    data
  });
}

export function editCompany(data) {
  return request({
    url: "/company/editCompanyInfo",
    method: "post",
    data
  });
}

export function getCompanyByUserID(data) {
  return request({
    url: "/company/getCompanyInfoByUserID",
    method: "post",
    data
  });
}

export function postJob(data) {
  return request({
    url: "/job/postJob",
    method: "post",
    data
  });
}

export function searchJobList(data) {
  return request({
    url: "/job/searchJobList",
    method: "post",
    data
  });
}

export function getJobInfoByJobID(id) {
  return request({
    url: "/job/getJobInfoByJobID",
    method: "post",
    params: {
      job_id: id
    }
  });
}

export function applyJob(data) {
  return request({
    url: "/job/applyJob",
    method: "post",
    data,
  });
}

export function editCompanyStatus(data) {
  return request({
    url: "/company/editCompanyStatus",
    method: "post",
    data
  });
}


export function getConfig(data) {
  return request({
    url: "/config/getAllItem",
    method: "post",
    data
  });
}

