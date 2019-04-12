import request from '@/utils/request'
export function fetchFoodMenuList(params) {
    return request({
        url: '/sys/hfmfoodmenu/list',
        method: 'get',
        params: params
    })
}
export function fetchFoodMenuDelete(id, data) {
    return request({
        url: '/sys/hfmfoodmenu/delete?ids=' + id,
        method: 'post',
        data: data
    })
}

export function fetchFoodMenuCreate(data) {
    return request({
        url: '/sys/hfmfoodmenu/create',
        method: 'post',
        data: data
    })
}

export function fetchFoodMenuUpdate(id, data) {
    return request({
        url: '/sys/hfmfoodmenu/update/' + id,
        method: 'post',
        data: data
    })
}
export function fetchFoodMenuUpdateInfo(id, data) {
    return request({
        url: '/sys/hfmfoodmenu/updateInfo/' + id,
        method: 'get',
        data: data
    })
}