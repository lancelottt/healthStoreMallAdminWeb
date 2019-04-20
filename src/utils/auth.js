import Cookies from 'js-cookie'

const TokenKey = 'loginToken'

export function getToken() {
    // return Cookies.get(TokenKey)
    return localStorage.getItem("loginToken")
}

export function setToken(token) {
    // return Cookies.set(TokenKey, token)
    return localStorage.setItem("loginToken", token)
}

export function removeToken() {
    // return Cookies.remove(TokenKey)
    return localStorage.removeItem("loginToken")
}