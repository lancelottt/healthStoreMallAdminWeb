import request from '@/utils/request'
export function subListTwo(params) {
    return request({
        url: '/navDic/list/nacDic',
        method: 'get',
        params: params
    })
}
//上架**
export function updateShowStatus(params) {
  return request({
    url:'/navDic/edit/navDic',
    method:'get',
    params: params
  })
}
//删除**
//export function fetchDicDelete(ids, data) {
//  return request({
//  	url:'/navDic/delete/nacClassifyDic?navClassifyDicId='+ids,
//      method: 'get',
//      data: data
//  })
//}
//添加**
export function addDicFlash(params) {
  return request({
  	url:'/navDic/add/navDic',
    method:'get',
    params:params
  })
}
//修改**
export function upXiugaidateFlash(params) {
  return request({
  	url:'/navDic/edit/navDic',
    method:'get',
    params:params
  })
}
//子列表数据**
export function fetchDicZileidate(id, params) {
    return request({
        url: '/modules/hfmmetamorphosisstory/' + id,
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