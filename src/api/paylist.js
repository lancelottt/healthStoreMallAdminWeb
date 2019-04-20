import request from '@/utils/request'
export function PayList(params) {
    return request({
        url: '/ChargeScheme/list/chargeScheme',
        method: 'get',
        params: params
    })
}
//点击付费方案的添加确定按钮**
export function quedingAjax(params){
	return request({
		url:'/ChargeScheme/create/chargeScheme',
		method:'post',
		params:params
	})
}

//添加的接口**
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
    url: '/ChargeScheme/edit/chargeScheme',
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
//付费方案编辑接口**
export function detailsAjax(id,chargeSchemeCode,params) {
return request({
	url:'/ChargeScheme/details/chargeScheme?id='+id+'&chargeSchemeCode='+chargeSchemeCode,
    method:'get',
    params:params
})
}
//点击付费方案里编辑接口里的确定按钮**
export function quedingEditStatus(params) {
return request({
    url: '/ChargeScheme/edit/chargeScheme',
    method:'get',
    params: params
})
}