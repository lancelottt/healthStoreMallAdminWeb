import request from '@/utils/request'
export function fetchNewsList(params) {
    return request({
        url: '/modules/hfmhealthinformation/list',
        method: 'get',
        params: params
    })
}
export function fetchNewsAdd(data) {
    return request({
        url: '/modules/hfmhealthinformation/create',
        method: 'post',
        data: data
    })
}
export function fetchNewsDelete(id, params) {
    return request({
        url: '/modules/hfmhealthinformation/delete?ids=' + id,
        method: 'post',
        params: params
    })
}
export function fetchNewsUpdate(id, params) {
    return request({
        url: '/modules/hfmhealthinformation/update/' + id,
        method: 'post',
        data: params
    })
}
export function fetchNewsdate(id, params) {
    return request({
        url: '/modules/hfmhealthinformation/' + id,
        method: 'get',
        params: params
    })
}