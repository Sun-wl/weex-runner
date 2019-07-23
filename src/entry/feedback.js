//设置 -> 意见反馈
import feedback from '../views/pages/feedback.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);

feedback.el = '#root'

new Vue(feedback)