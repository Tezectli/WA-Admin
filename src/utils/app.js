import cookie from "js-cookie";
const admintoKen = "admin_toKen"
const usernameKey = "username";
export function getToken() {
    return cookie.get(admintoKen);
}
export function setToken(toKen) {
    return cookie.set(admintoKen, toKen)
}
export function removeToken(toKen) {
    return cookie.remove(admintoKen)
}
export function setUserName(value) {
    return cookie.set(usernameKey, value)
}
export function getUserName() {
    return cookie.get(usernameKey)
}