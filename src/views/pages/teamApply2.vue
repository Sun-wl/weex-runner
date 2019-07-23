<template>
    <div>
        <bui-header title="入团申请" :styleEx="headerStyle">
            <div slot="left" @click="back" style="width: 70px; height:100px; padding-left:20px; padding-top:35px;">
                <bui-image src="/image/back.png" @click="back" width="35px" height="30px"></bui-image>
            </div>
        </bui-header>
        <scroller class="scroller">
            <text class="h4 explain">
                [{{memberName}}]自愿加入“[{{companyName}}]”配送团队，接受“[{{companyName}}]”作为“[{{memberName}}]”配送团队的管理者，服从团队管理规则。“准道佣兵APP”每个自然月结算一次佣金，[{{memberName}}]通过本平台上完成的配送订单佣金计入该配送团队管理者的收益中，由管理者根据双方的线下约定进行分成，[{{memberName}}]作为用户在“准道佣兵APP”上钱包功能中不显示此订单的佣金金额。若[{{memberName}}]申请退出“[{{companyName}}]”配送团队，应提前30日告知“准道佣兵APP”，经本平台和配送团队管理者核实后，该退出于[{{companyName}}]申请日之后的第30日生效；若[{{memberName}}]被动退出“[{{companyName}}]”配送团队的，该退出自配送团队管理者发生指令当日生效。退出生效日之前的佣金仍按照之前结算规则操作。
            </text>
        </scroller>
        <div class="next flex-row">
            <div class="agreeOrNot span1">
                <text class="unAgree btns h4" @click="back">不同意</text>
            </div>
            <div class="agreeOrNot span1">
                <text class="agree btns" @click="next">同意加入</text>
            </div>
        </div>
    </div>
</template>

<!--引入bui-weex样式文件-->
<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>
<style src="../../css/index.css"></style>
<script scoped>
    //引入bui-weex模块
    var buiweex = require("bui-weex");
    var courier = weex.requireModule("courierModule");
    module.exports = {
        data: function () {
            return {
                oldCompanyName:'',
                memberName: '',
                companyName: '',
                companyId: ''
            }
        },
        methods: {
            apply(){
                var opt = {
                    url: 'memberTeamApply/addOrUpdate',
                    method:'POST',
                    params: this.toParams({
                        'entity.companyId':this.companyId
                    })
                }
                var _this = this;
                this.fetch(opt, function (res) {
                    if (res.code == 200) {
                        buiweex.toast('申请成功，您的申请正在审核');
                        courier.startNativeClearTop("com.gidoor.runner.ui.main.GidoorMainActivity");
                    } else if (res.code == 401) {
                        buiweex.toast(res.msg)
                        courier.onSessionTimeOut();
                    } else {
                        buiweex.toast(res.msg)
                    }
                })
            },
            next(){
                var _this = this;
                if (this.oldCompanyName) {//审核中
                    var str = '已经申请加入[' + this.oldCompanyName + ']，是否改为[' + this.companyName + ']？';
                    buiweex.confirm(str, function (value) {
                        if (value == '确定') {
                            _this.apply();
                        }
                    }, {'okTitle': '确定', 'cancelTitle': '取消'});
                } else {
                    //未提交过申请
                    this.apply();
                }
            }
        },
        created(){
            var pageParams = buiweex.getPageParams();
            this.companyName = pageParams.companyName;
            this.companyId = pageParams.companyId;
            this.oldCompanyName = pageParams.oldCompanyName;
            var _this = this;
            courier.getMemberName(function (res) {
                _this.memberName = res.memberName;
            })
        }
    }
</script>
<style scoped>
    .explain {
        line-height: 70px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .agreeOrNot {
        padding: 30px;
        border-top-width: 1px;
        border-top-style: solid;
        border-top-color: #ccc;
    }

    .btns {
        font-size:32px;
        color: #fff;
        border-radius: 50px;
        text-align: center;
        border-style: solid;
        border-width: 1px;
        padding: 20px;
        box-shadow: 0 0 5px 2px rgba(5, 5, 5, 0.2);
    }

    .unAgree {
        background-color: #fff;
        border-color: #ccc;
    }

    .agree{
        color: #fff;
        border-color: #f2aa24;
        background-color: #f2aa24;
    }
</style>