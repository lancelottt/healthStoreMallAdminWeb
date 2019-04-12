import request from '@/utils/request'
export function fetchSportsList(params) {
    return request({
        url: '/userAthleticItem/list',
        method: 'get',
        params: params
    })
}
export function fetchSportsAdd(data) {
    return request({
        url: '/userAthleticItem/create',
        method: 'post',
        data: data
    })
}
export function fetchSportsDelete(id, params) {
    return request({
        url: '/userAthleticItem/delete?userAthleticItemCodes=' + id,
        method: 'DELETE',
        params: params
    })
}
export function fetchSportsInfo(id, params) {
    return request({
        url: '/userAthleticItem/info/' + id,
        method: 'get',
        params: params
    })
}
export function fetchSportsUpdata(data) {
    return request({
        url: '/userAthleticItem/update',
        method: 'put',
        data: data
    })
}
export function fetchSportsCard(params) {
    return request({
        url: 'userAthleticRecords/list',
        method: 'get',
        params: params
    })
}