import Cookies from 'js-cookie'

const UserInfoKey = 'userinfo'

export function getUserInfo() {
    console.log(Cookies.get(UserInfoKey));
    return Cookies.get(UserInfoKey)
}
export function setUserInfo(userinfo) {
    return Cookies.set(UserInfoKey, userinfo)
}
export function removeUserInfo() {
    return Cookies.remove(UserInfoKey)
}
