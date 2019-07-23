//我的钱包
import Wallet from '../views/pages/wallet.vue'
import mixins from '../js/mixins.js'

Vue.mixin(mixins);

Wallet.el = '#root'

new Vue(Wallet)