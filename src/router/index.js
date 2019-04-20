import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [{
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true,
        redirct: '/home'
    },
    {
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    },
    {
        path: '',
        component: Layout,
        redirect: '/home',
        children: [{
            path: 'home',
            name: 'home',
            component: () =>
                import ('@/views/home/index'),
            meta: {
                title: '首页',
                icon: 'home'
            }
        }]
    },
    {
        path: '/pms',
        component: Layout,
        redirect: '/pms/product',
        name: 'pms',
        meta: {
            title: '商品',
            icon: 'product'
        },
        children: [{
                path: 'product',
                name: 'product',
                component: () =>
                    import ('@/views/pms/product/index'),
                meta: {
                    title: '商品列表',
                    icon: 'product-list'
                }
            },
            {
                path: 'addProduct',
                name: 'addProduct',
                component: () =>
                    import ('@/views/pms/product/add'),
                meta: {
                    title: '添加商品',
                    icon: 'product-add'
                }
            },
            {
                path: 'updateProduct',
                name: 'updateProduct',
                component: () =>
                    import ('@/views/pms/product/update'),
                meta: {
                    title: '修改商品',
                    icon: 'product-add'
                },
                hidden: true
            },
            {
                path: 'productRecycle',
                name: 'productRecycle',
                component: () =>
                    import ('@/views/pms/product/index'),
                meta: {
                    title: '商品回收站',
                    icon: 'product-recycle'
                },
                hidden: true
            },
            {
                path: 'productComment',
                name: 'productComment',
                component: () =>
                    import ('@/views/pms/product/index'),
                meta: {
                    title: '商品评价',
                    icon: 'product-comment'
                },
                hidden: true
            },
            {
                path: 'productCate',
                name: 'productCate',
                component: () =>
                    import ('@/views/pms/productCate/index'),
                meta: {
                    title: '商品分类',
                    icon: 'product-cate'
                }
            },
            {
                path: 'addProductCate',
                name: 'addProductCate',
                component: () =>
                    import ('@/views/pms/productCate/add'),
                meta: {
                    title: '添加商品分类'
                },
                hidden: true
            },
            {
                path: 'updateProductCate',
                name: 'updateProductCate',
                component: () =>
                    import ('@/views/pms/productCate/update'),
                meta: {
                    title: '修改商品分类'
                },
                hidden: true
            },
            {
                path: 'productAttr',
                name: 'productAttr',
                component: () =>
                    import ('@/views/pms/productAttr/index'),
                meta: {
                    title: '商品类型',
                    icon: 'product-attr'
                }
            },
            {
                path: 'productAttrList',
                name: 'productAttrList',
                component: () =>
                    import ('@/views/pms/productAttr/productAttrList'),
                meta: {
                    title: '商品属性列表'
                },
                hidden: true
            },
            {
                path: 'addProductAttr',
                name: 'addProductAttr',
                component: () =>
                    import ('@/views/pms/productAttr/addProductAttr'),
                meta: {
                    title: '添加商品属性'
                },
                hidden: true
            },
            {
                path: 'updateProductAttr',
                name: 'updateProductAttr',
                component: () =>
                    import ('@/views/pms/productAttr/updateProductAttr'),
                meta: {
                    title: '修改商品属性'
                },
                hidden: true
            },
            {
                path: 'brand',
                name: 'brand',
                component: () =>
                    import ('@/views/pms/brand/index'),
                meta: {
                    title: '品牌管理',
                    icon: 'product-brand'
                }
            },
            {
                path: 'addBrand',
                name: 'addBrand',
                component: () =>
                    import ('@/views/pms/brand/add'),
                meta: {
                    title: '添加品牌'
                },
                hidden: true
            },
            {
                path: 'updateBrand',
                name: 'updateBrand',
                component: () =>
                    import ('@/views/pms/brand/update'),
                meta: {
                    title: '编辑品牌'
                },
                hidden: true
            }
        ]
    },
    {
        path: '/oms',
        component: Layout,
        redirect: '/oms/order',
        name: 'oms',
        meta: {
            title: '订单',
            icon: 'order'
        },
        children: [{
                path: 'order',
                name: 'order',
                component: () =>
                    import ('@/views/oms/order/index'),
                meta: {
                    title: '订单列表',
                    icon: 'product-list'
                }
            },
            {
                path: 'orderDetail',
                name: 'orderDetail',
                component: () =>
                    import ('@/views/oms/order/orderDetail'),
                meta: {
                    title: '订单详情'
                },
                hidden: true
            },
            {
                path: 'deliverOrderList',
                name: 'deliverOrderList',
                component: () =>
                    import ('@/views/oms/order/deliverOrderList'),
                meta: {
                    title: '发货列表'
                },
                hidden: true
            },
            {
                path: 'orderSetting',
                name: 'orderSetting',
                component: () =>
                    import ('@/views/oms/order/setting'),
                meta: {
                    title: '订单设置',
                    icon: 'order-setting'
                }
            },
            {
                path: 'returnApply',
                name: 'returnApply',
                component: () =>
                    import ('@/views/oms/apply/index'),
                meta: {
                    title: '退货申请处理',
                    icon: 'order-return'
                }
            },
            {
                path: 'returnReason',
                name: 'returnReason',
                component: () =>
                    import ('@/views/oms/apply/reason'),
                meta: {
                    title: '退货原因设置',
                    icon: 'order-return-reason'
                }
            },
            {
                path: 'returnApplyDetail',
                name: 'returnApplyDetail',
                component: () =>
                    import ('@/views/oms/apply/applyDetail'),
                meta: {
                    title: '退货原因详情'
                },
                hidden: true
            }
        ]
    },
    {
        path: '/sms',
        component: Layout,
        redirect: '/sms/coupon',
        name: 'sms',
        meta: {
            title: '营销',
            icon: 'sms'
        },
        children: [{
                path: 'flash',
                name: 'flash',
                component: () =>
                    import ('@/views/sms/flash/index'),
                meta: {
                    title: '秒杀活动列表',
                    icon: 'sms-flash'
                }
            },
            {
                path: 'flashSession',
                name: 'flashSession',
                component: () =>
                    import ('@/views/sms/flash/sessionList'),
                meta: {
                    title: '秒杀时间段列表'
                },
                hidden: true
            },
            {
                path: 'selectSession',
                name: 'selectSession',
                component: () =>
                    import ('@/views/sms/flash/selectSessionList'),
                meta: {
                    title: '秒杀时间段选择'
                },
                hidden: true
            },
            {
                path: 'flashProductRelation',
                name: 'flashProductRelation',
                component: () =>
                    import ('@/views/sms/flash/productRelationList'),
                meta: {
                    title: '秒杀商品列表'
                },
                hidden: true
            },
            {
                path: 'coupon',
                name: 'coupon',
                component: () =>
                    import ('@/views/sms/coupon/index'),
                meta: {
                    title: '优惠券列表',
                    icon: 'sms-coupon'
                }
            },
            {
                path: 'addCoupon',
                name: 'addCoupon',
                component: () =>
                    import ('@/views/sms/coupon/add'),
                meta: {
                    title: '添加优惠券'
                },
                hidden: true
            },
            {
                path: 'updateCoupon',
                name: 'updateCoupon',
                component: () =>
                    import ('@/views/sms/coupon/update'),
                meta: {
                    title: '修改优惠券'
                },
                hidden: true
            },
            {
                path: 'couponHistory',
                name: 'couponHistory',
                component: () =>
                    import ('@/views/sms/coupon/history'),
                meta: {
                    title: '优惠券领取详情'
                },
                hidden: true
            },
            {
                path: 'brand',
                name: 'homeBrand',
                component: () =>
                    import ('@/views/sms/brand/index'),
                meta: {
                    title: '品牌推荐',
                    icon: 'product-brand'
                }
            },
            {
                path: 'new',
                name: 'homeNew',
                component: () =>
                    import ('@/views/sms/new/index'),
                meta: {
                    title: '新品推荐',
                    icon: 'sms-new'
                }
            },
            {
                path: 'hot',
                name: 'homeHot',
                component: () =>
                    import ('@/views/sms/hot/index'),
                meta: {
                    title: '人气推荐',
                    icon: 'sms-hot'
                }
            },
            {
                path: 'subject',
                name: 'homeSubject',
                component: () =>
                    import ('@/views/sms/subject/index'),
                meta: {
                    title: '专题推荐',
                    icon: 'sms-subject'
                }
            },
            {
                path: 'advertise',
                name: 'homeAdvertise',
                component: () =>
                    import ('@/views/sms/advertise/index'),
                meta: {
                    title: '广告列表',
                    icon: 'sms-ad'
                }
            },
            {
                path: 'addAdvertise',
                name: 'addHomeAdvertise',
                component: () =>
                    import ('@/views/sms/advertise/add'),
                meta: {
                    title: '添加广告'
                },
                hidden: true
            },
            {
                path: 'updateAdvertise',
                name: 'updateHomeAdvertise',
                component: () =>
                    import ('@/views/sms/advertise/update'),
                meta: {
                    title: '编辑广告'
                },
                hidden: true
            }
        ]
    },
    {
        path: '/heal',
        component: Layout,
        redirect: '/heal/story',
        name: 'heal',
        meta: {
            title: '健康',
            icon: 'sms-ad'
        },
        children: [{
                path: 'story',
                name: 'story',
                component: () =>
                    import ('@/views/heal/story/storyList'),
                meta: {
                    title: '蜕变故事',
                    icon: 'marker'
                }
            },
            {
                path: 'storyAdd',
                name: 'storyadd',
                component: () =>
                    import ('@/views/heal/story/components/storyadd'),
                meta: {
                    title: '故事编辑',
                    icon: 'sms-flash'
                },
                hidden: true
            },
            {
                path: 'storyupdata',
                name: 'storyupdata',
                component: () =>
                    import ('@/views/heal/story/storysupdate'),
                meta: {
                    title: '故事添加',
                    icon: 'sms-flash'
                },
                hidden: true
            },
            {
                path: 'news',
                name: 'news',
                component: () =>
                    import ('@/views/heal/news/newlist'),
                meta: {
                    title: '健康资讯',
                    icon: 'product-brand'
                }
            },
            {
                path: 'newsAdd',
                name: 'newsAdd',
                component: () =>
                    import ('@/views/heal/news/components/newadd'),
                meta: {
                    title: '资讯添加',
                    icon: 'product-brand'
                },
                hidden: true
            },
            {
                path: 'newsupdata',
                name: 'newsupdata',
                component: () =>
                    import ('@/views/heal/news/newsupdate'),
                meta: {
                    title: '编辑',
                    icon: 'product-brand'
                },
                hidden: true
            }, {
                path: 'sport',
                name: 'sport',
                component: () =>
                    import ('@/views/heal/sports/storyList'),
                meta: {
                    title: '运动',
                    icon: 'product-attr'
                }
            },
            {
                path: 'sportAdd',
                name: 'sportAdd',
                component: () =>
                    import ('@/views/heal/sports/components/storyadd'),
                meta: {
                    title: '运动项添加',
                    icon: 'product-brand'
                },
                hidden: true
            },
            {
                path: 'sportUpdat',
                name: 'sportAdd',
                component: () =>
                    import ('@/views/heal/sports/components/storyUpdata'),
                meta: {
                    title: '运动项修改',
                    icon: 'product-brand'
                },
                hidden: true
            },
            {
                path: 'sportCardList',
                name: 'sportCardList',
                component: () =>
                    import ('@/views/heal/sports/sportCardList'),
                meta: {
                    title: '运动打卡',
                    icon: 'sms-flash'
                },
            },
            {
                path: 'foodlist',
                name: 'foodlist',
                component: () =>
                    import ('@/views/heal/food/foodlist'),
                meta: {
                    title: '食物管理',
                    icon: 'product-list'
                },
            },
            {
                path: 'foodadd',
                name: 'foodadd',
                component: () =>
                    import ('@/views/heal/food/components/foodadd'),
                meta: {
                    title: '食物添加',
                    icon: 'product-brand'
                },
                hidden: true
            },
            {
                path: 'foodupdate',
                name: 'foodupdate',
                component: () =>
                    import ('@/views/heal/food/foodupdate'),
                meta: {
                    title: '食物编辑',
                    icon: 'product-brand'
                },
                hidden: true
            },
            {
                path: 'foodMenuList',
                name: 'foodMenuList',
                component: () =>
                    import ('@/views/heal/foodMenu/foodMenuList'),
                meta: {
                    title: '食物分类',
                    icon: 'product-cate'
                }
            },
            {
                path: 'foodMenuadd',
                name: 'foodMenuadd',
                component: () =>
                    import ('@/views/heal/foodMenu/components/foodMenuadd'),
                meta: {
                    title: '食物分类添加',
                    icon: 'product-brand'
                },
                hidden: true
            },
            {
                path: 'foodMennuUpdate',
                name: 'foodMennuUpdate',
                component: () =>
                    import ('@/views/heal/foodMenu/foodMennuUpdate'),
                meta: {
                    title: '食物分类编辑',
                    icon: 'sms-hot'
                },
                hidden: true
            },
            {
                path: 'healthGrogramList',
                name: 'healthGrogramList',
                component: () =>
                    import ('@/views/heal/healthGrogram/healthGrogramList'),
                meta: {
                    title: '健康方案推荐',
                    icon: 'form'
                }
            },
            {
                path: 'healthGrogramAdd',
                name: 'healthGrogramAdd',
                component: () =>
                    import ('@/views/heal/healthGrogram/components/healthGrogramAdd'),
                meta: {
                    title: '健康方案推荐添加',
                    icon: 'form'
                },
                hidden: true
            },
            {
                path: 'healthGrogramUpdate',
                name: 'healthGrogramUpdate',
                component: () =>
                    import ('@/views/heal/healthGrogram/healthGrogramUpdate'),
                meta: {
                    title: '健康方案推荐编辑',
                    icon: 'form'
                },
                hidden: true
            },
            {
                path: 'healthCategory',
                name: 'healthCategory',
                component: () =>
                    import ('@/views/heal/healthCategory/index'),
                meta: {
                    title: '健康方案分类',
                    icon: 'product'
                }
            },
            {
                path: 'healthCategoryupdate',
                name: 'healthCategoryupdate',
                component: () =>
                    import ('@/views/heal/healthCategory/update'),
                meta: {
                    title: '健康方案分类编辑',
                    icon: 'product'
                },
                hidden: true
            },
            {
                path: 'healthCategoryadd',
                name: 'healthCategoryadd',
                component: () =>
                    import ('@/views/heal/healthCategory/components/ProductCateDetail'),
                meta: {
                    title: '健康方案分类添加',
                    icon: 'product'
                },
                hidden: true
            },
            {
                path: 'healthChildList',
                name: 'healthChildList',
                component: () =>
                    import ('@/views/heal/healthCategory/indexChild'),
                meta: {
                    title: '健康方案子类',
                    icon: 'product'
                },
                hidden: true
            },
            {
                path: 'CategoryChildList',
                name: 'CategoryChildList',
                component: () =>
                    import ('@/views/heal/CategoryChild/CategoryChildList'),
                meta: {
                    title: '健康方案子类',
                    icon: 'product'
                },
                hidden: true
            },
            {
                path: 'CategoryChildList',
                name: 'CategoryChildList',
                component: () =>
                    import ('@/views/heal/CategoryChild/CategoryChildList'),
                meta: {
                    title: '健康方案子类',
                    icon: 'product'
                },
                hidden: true
            },
            {
                path: 'CategoryChildAdd',
                name: 'CategoryChildAdd',
                component: () =>
                    import ('@/views/heal/CategoryChild/components/CategoryChildAdd'),
                meta: {
                    title: '健康方案子类添加',
                    icon: 'product'
                },
                hidden: true
            },
            {
                path: 'CategoryChildUpdate',
                name: 'CategoryChildUpdate',
                component: () =>
                    import ('@/views/heal/CategoryChild/CategoryChildUpdate'),
                meta: {
                    title: '健康方案子类编辑',
                    icon: 'product'
                },
                hidden: true
            },
            {
                path: 'storeList',
                name: 'storeList',
                component: () =>
                    import ('@/views/heal/storeList/storeList'),
                meta: {
                    title: '门店',
                    icon: 'product'
                }
            },
            {
                path: 'storeListadd',
                name: 'storeListadd',
                component: () =>
                    import ('@/views/heal/storeList/components/storeListadd'),
                meta: {
                    title: '门店',
                    icon: 'product'
                },
                hidden: true
            },
            {
                path: 'storeListUpdate',
                name: 'storeListUpdate',
                component: () =>
                    import ('@/views/heal/storeList/storeListUpdate'),
                meta: {
                    title: '门店编辑',
                    icon: 'product'
                }
            },

        ]
    },
    //  字典管理结束**
    //方案列表管理**
    {
        path: '/pro',
        component: Layout,
        redirect: '/pro/diclist',
        name: 'pro',
        meta: {
            title: '方案管理',
            icon: 'sms'
        },
        children: [{
                path: 'diclist',
                name: 'diclist',
                component: () =>
                    import ('@/views/pro/diclist/diclist'),
                meta: {
                    title: '方案列表',
                    icon: 'sms-flash'
                }
            },
            {
                path: 'addPro',
                name: 'addProduct',
                component: () =>
                    import ('@/views/pro/dicList/add'),
                meta: {
                    title: '添加方案',
                    icon: 'sms-coupon'
                },
                hidden: false
            },
            {
                path: 'updatePro',
                name: 'upProduct',
                component: () =>
                    import ('@/views/pro/dicList/addUpdate'),
                meta: {
                    title: '编辑方案',
                    icon: 'product-brand'
                },
                hidden: false
            }
        ]
    },
    //  方案列表管理结束**
    //付费方案管理**
    //	{
    //		path: '/pay',
    //		component: Layout,
    //		redirect: '/pay/payList/paylist',
    //		name: 'pay',
    //		meta: {
    //			title: '付费方案管理',
    //			icon: 'sms'
    //		},
    //		//    	  hidden: false,
    //		children: [{
    //			path: 'paylist',
    //			name: 'paylist',
    //			component: () =>
    //				import('@/views/pay/payList/paylist'),
    //			meta: {
    //				title: '付费方案列表',
    //				icon: 'sms-flash'
    //			},
    //			//               hidden: false
    //		}]
    //
    //	},
    {
        path: '/pay',
        component: Layout,
        redirect: '/sms/pay',
        name: 'pay',
        meta: {
            title: '付费方案管理',
            icon: 'sms-ad'
        },
        children: [{
                path: 'paylist',
                name: 'paylist',
                component: () =>
                    import ('@/views/pay/payList/paylist'),
                meta: {
                    title: '付费方案列表',
                    icon: 'sms-flash'
                }
            },
            //          添加**
            {
                path: 'addpay',
                name: 'addpay',
                component: () =>
                    import ('@/views/pay/payList/add'),
                meta: {
                    title: '添加',
                    icon: 'sms-flash'
                },
                hidden: true
            },
            //			编辑**
            {
                path: 'addupdate',
                name: 'addupdate',
                component: () =>
                    import ('@/views/pay/payList/addUpdate'),
                meta: {
                    title: '编辑',
                    icon: 'sms-flash'
                },
                hidden: true
            },
            //添加下级列表结束**
            //          提醒项分类**
            {
                path: 'remind',
                name: 'remind',
                component: () =>
                    import ('@/views/dic/remind/remindlist'),
                meta: {
                    title: '提醒项分类',
                    icon: 'product-brand'
                }
            },
            //          提醒项分类结束**
            {
                path: 'remindZiji',
                name: 'remindZiji',
                component: () =>
                    import ('@/views/dic/remind/remindZiji'),
                meta: {
                    title: '添加提醒项下级列表',
                    icon: 'sms-flash'
                },
                hidden: true
            }
        ]
    },

    //	商城会员管理**
    {
        path: '/shop',
        component: Layout,
        redirect: '/sms/shop',
        name: 'shop',
        meta: {
            title: '会员管理',
            icon: 'sms-ad'
        },
        children: [{
                path: 'shoplist',
                name: 'shoplist',
                component: () =>
                    import ('@/views/shoppingMall/shopList/shoplist'),
                meta: {
                    title: '会员管理',
                    icon: 'sms-flash'
                }
            },
            {
                path: 'decailsShop',
                name: 'decailsShop',
                component: () =>
                    import ('@/views/shoppingMall/shopList/detais'),
                meta: {
                    title: '详情'
                },
                hidden: true
            },
            //          提醒项分类**
            {
                path: 'remind',
                name: 'remind',
                component: () =>
                    import ('@/views/dic/remind/remindlist'),
                meta: {
                    title: '提醒项分类',
                    icon: 'product-brand'
                }
            }

        ]
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap
})