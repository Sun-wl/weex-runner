//设置 -> 保险理赔
import claimManagement from '../views/pages/claimManagement.vue'
import mixins from '../js/mixins.js'
Vue.mixin(mixins);


claimManagement.el = '#root'

new Vue(claimManagement)