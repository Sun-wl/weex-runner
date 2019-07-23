//设置 -> 服务协议
import serviceProtocol from '../views/pages/serviceProtocol.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);

serviceProtocol.el = '#root'

new Vue(serviceProtocol)