import request from '@/utils/request'
export function fetchNewsList(params) {
    return request({
        url: '/sysRemind/list/remindClassify',
        method: 'get',
        params: params
    })
}
//显示与隐藏**
export function updateShowStatus(params) {
  return request({
    url:'/sysRemind/edit/remindClassify',
    method:'get',
    params: params
  })
}
//删除**
export function fetchNewsDelete(params) {
    return request({
    	url:'/sysRemind/delete/remindClassify',
        method: 'get',
        params: params
    })
}
//添加**
export function createFlash(params) {
return request({
	url:'/sysRemind/add/remindClassify',
    method:'get',
    params:params
})
}
//编辑**
export function updateFlash(params) {
  return request({
  	url:'/sysRemind/edit/remindClassify',
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
