export default [
  {
    path: '/product-detail/:id/',  // 产品详情
    component: require('./pages/product-detail.vue')
  },
  {
    path: '/profit/',  // 保险利益
    component: require('./pages/profit.vue')
  },
  {
    path: '/clause/',  // 条款全文
    component: require('./pages/clause.vue')
  },
  {
    path: '/rule/',  // 投保规则
    component: require('./pages/rule.vue')
  },
  {
    path: '/about/',
    component: require('./pages/about.vue')
  },
  {
    path: '/form/',
    component: require('./pages/form.vue')
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: require('./pages/dynamic-route.vue')
  }
]