import request from '@/utils/request'
export function fetchFoodList(params) {
    return request({
        url: '/sys/hfmfood/list',
        method: 'get',
        params: params
    })
}
export function fetchFoodDelete(id, data) {
    return request({
        url: '/sys/hfmfood/delete?ids=' + id,
        method: 'post',
        data: data
    })
}

export function fetchFoodCreate(data) {
    return request({
        url: '/sys/hfmfood/create',
        method: 'post',
        data: data
    })
}

export function fetchFoodUpdate(data) {
    return request({
        url: '/sys/hfmfood/update',
        method: 'post',
        data: data
    })
}
export function fetchFoodUpdateInfo(id, data) {
    return request({
        url: '/sys/hfmfood/updateInfo/' + id,
        method: 'get',
        data: data
    })
}