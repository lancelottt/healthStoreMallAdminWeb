import request from '@/utils/request'
export function fetchCategoryChildrenList() {
    return request({
        url: '/programCategory/list/withChildren',
        method: 'get'
    })
}
export function fetchCategoryList(id, params) {
    return request({
        url: '/programCategory/list/' + id,
        method: 'get',
        params: params
    })
}
export function fetchCategoryDelete(id, data) {
    return request({
        url: '/programCategory/delete/' + id,
        method: 'post',
        data: data
    })
}

export function fetchCategorycreate(data) {
    return request({
        url: '/programCategory/create',
        method: 'post',
        data: data
    })
}
export function fetchNavSatus(id, status, data) {
    return request({
        url: '/programCategory/update/navStatus?ids=' + id + '&navStatus=' + status,
        method: 'post',
        data: data
    })
}

export function fetchShowStatus(id, status, data) {
    return request({
        url: '/programCategory/update/showStatus?ids=' + id + '&showStatus=' + status,
        method: 'post',
        data: data
    })
}

export function fetchCategoryUpdate(id, data) {
    return request({
        url: '/programCategory/update/' + id,
        method: 'post',
        data: data
    })
}

export function fetchCategory(id, data) {
    return request({
        url: '/programCategory/' + id,
        method: 'get',
        data: data
    })
}