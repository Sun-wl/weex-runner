//我的团队 -> 团队信息
import teamInfo from '../views/pages/teamInfo.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);

teamInfo.el = '#root'

new Vue(teamInfo)