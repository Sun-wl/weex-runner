//设置 -> 关于gidoor
import about from '../views/pages/about.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);

about.el = '#root'

new Vue(about)