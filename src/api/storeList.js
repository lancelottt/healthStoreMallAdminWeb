import request from '@/utils/request'
export function fetStoreList(params) {
    return request({
        url: '/modules/pmsstore/list',
        method: 'get',
        params: params
    })
}
export function fetStoreAdd(data) {
    return request({
        url: '/modules/pmsstore/create',
        method: 'post',
        data: data
    })
}
export function fetStoreDelete(id, params) {
    return request({
        url: '/modules/pmsstore/delete?ids=' + id,
        method: 'post',
        params: params
    })
}
export function fetStoreUpdate(params) {
    return request({
        url: '/modules/pmsstore/update',
        method: 'post',
        data: params
    })
}

export function fetStoredate(id, params) {
    return request({
        url: '/modules/pmsstore/updateInfo/' + id,
        method: 'get',
        params: params
    })
}