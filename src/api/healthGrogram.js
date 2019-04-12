import request from '@/utils/request'
export function fetchHealthList(params) {
    return request({
        url: '/hfm/program/list',
        method: 'get',
        params: params
    })
}
export function fetchHealthDelete(id, data) {
    return request({
        url: 'hfm/program/delete?ids=' + id,
        method: 'post',
        data: data
    })
}

export function fetchHealthCreate(data) {
    return request({
        url: '/hfm/program/create',
        method: 'post',
        data: data
    })
}

export function fetchHealthUpdate(id, data) {
    return request({
        url: '/hfm/program/update/' + id,
        method: 'post',
        data: data
    })
}
export function fetchHealthUpdateInfo(id, data) {
    return request({
        url: '/hfm/program/updateInfo/' + id,
        method: 'get',
        data: data
    })
}