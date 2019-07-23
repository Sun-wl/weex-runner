//订单详情
import orderDetails from '../views/pages/orderDetails.vue'
import mixins from '../js/mixins.js'
Vue.mixin(mixins);


orderDetails.el = '#root'

new Vue(orderDetails)