import request from '@/utils/request'
export function fetchBooksList(params) {
    return request({
        url: '/sysScheme/list/sysScheme',
        method: 'get',
        params: params
    })
}
//标题添加的接口**
export function proAddList(params) {
    return request({
        url: '/sysScheme/nacClassifyDic/list',
        method: 'get',
        params: params
    })
}
//提醒项分类**
export function proTixingList(params) {
    return request({
        url: '/sysScheme/remind/list',
        method: 'get',
        params: params
    })
} 
//点击确定按钮**
export function determineAjax(params){
	return request({
		url:'/sysScheme/add/sysScheme',
		methods:'get',
		params:params
	})
}
//显示与隐藏**
export function updateShowStatus(params) {
  return request({
    url:'/sysScheme/update/sysScheme',
    method:'get',
    params: params
  })
}
//添加**
export function addDicFlash(params) {
  return request({
  	url:'/navDic/add/nacClassifyDic',
    method:'get',
    params:params
  })
}
//修改**
export function upXiugaidateFlash(params) {
  return request({
  	url:'/navDic/edit/nacClassifyDic',
    method:'get',
    params:params
  })
}
//编辑的接口**
export function detailsAjax(id,systemRemindSchemeCode,params) {
  return request({
  	url:'/sysScheme/details/sysScheme?id='+id+'&systemRemindSchemeCode='+systemRemindSchemeCode,
    method:'get',
    params:params
  })
}
//编辑时按添加按钮**
export function editAjax(params) {
  return request({
    url:'/sysScheme/update/sysScheme',
    method:'get',
    params: params
  })
}
