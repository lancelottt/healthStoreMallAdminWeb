import request from '@/utils/request'
export function fetchBooksList(params) {
    return request({
        url: '/navDic/list/nacClassifyDic',
        method: 'get',
        params: params
    })
}

export function fetchStoryAdd(data) {
    return request({
        url: '/modules/hfmmetamorphosisstory/create',
        method: 'post',
        data: data
    })
}
export function fetchStoryDelete(id, params) {
    return request({
        url: '/modules/hfmmetamorphosisstory/delete?ids=' + id,
        method: 'post',
        params: params
    })
}
export function fetchStoryUpdate(id, params) {
    return request({
        url: '/modules/hfmmetamorphosisstory/update/' + id,
        method: 'post',
        data: params
    })
}
export function fetchStorydate(id, params) {
    return request({
        url: '/modules/hfmmetamorphosisstory/' + id,
        method: 'get',
        params: params
    })
}