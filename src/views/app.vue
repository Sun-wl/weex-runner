<template>
    <div>
        <scroller>
            <text class="h2" @click="back">runner</text>
            <div style="width:300px;">
                <bui-button class="btn" type="primary" radius="10px" value="teamApply1" @click="toTeamApply1"></bui-button>
                <bui-button class="btn" type="primary" radius="10px" value="teamApply2" @click="toTeamApply2"></bui-button>
                <bui-button class="btn" type="primary" radius="10px" value="teamApply3" @click="toTeamApply3"></bui-button>
                <bui-button class="btn" type="primary" radius="10px" value="teamInfo" @click="teamInfo"></bui-button>
                <bui-button class="btn" type="primary" radius="10px" value="wallet" @click="wallet"></bui-button>
                <bui-button class="btn" type="primary" radius="10px" value="claimManagement" @click="claimManagement"></bui-button>
                <bui-button class="btn" type="primary" radius="10px" value="orderDetails" @click="orderDetails"></bui-button>
                <bui-button class="btn" type="primary" radius="10px" value="feedback" @click="feedback"></bui-button>
                <bui-button class="btn" type="primary" radius="10px" value="about" @click="about"></bui-button>
                <bui-button class="btn" type="primary" radius="10px" value="serviceProtocol" @click="serviceProtocol"></bui-button>
                <bui-button class="btn" type="primary" radius="10px" value="platformProtocol" @click="platformProtocol"></bui-button>
            </div>

        </scroller>

    </div>
</template>

<!--引入bui-weex样式文件-->
<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>
<style src="../css/index.css"></style>
<script>
    //引入bui-weex模块
    //import buiweex from 'bui-weex'
    var buiweex = require("bui-weex");
    module.exports = {
        data: function () {
            return {}
        },
        methods: {
            back () {
                buiweex.toast('111')
                buiweex.pop();
            },
            "toTeamApply1":function () {
                buiweex.push(buiweex.getContextPath()+"/teamApply1.weex.js")
            },
            "toTeamApply2":function () {
                buiweex.push(buiweex.getContextPath()+"/teamApply2.weex.js")
            },
            "toTeamApply3":function () {
                buiweex.push(buiweex.getContextPath()+"/teamApply3.weex.js")
            },
            "teamInfo":function () {
                buiweex.push(buiweex.getContextPath()+"/teamInfo.weex.js")
            },
            "wallet":function () {
                buiweex.push(buiweex.getContextPath()+"/wallet.weex.js")
            },
            "claimManagement":function () {
                buiweex.push(buiweex.getContextPath()+"/claimManagement.weex.js")
            },
            "orderDetails":function () {
                buiweex.push(buiweex.getContextPath()+"/orderDetails.weex.js")
            },
            "feedback":function () {
                buiweex.push(buiweex.getContextPath()+"/feedback.weex.js")
            },
            "about":function () {
                buiweex.push(buiweex.getContextPath()+"/about.weex.js")
            },
            "serviceProtocol":function () {
                buiweex.push(buiweex.getContextPath()+"/serviceProtocol.weex.js")
            },
            "platformProtocol":function () {
                buiweex.push(buiweex.getContextPath()+"/platformProtocol.weex.js")
            }
        },
        components: {},
        mounted: function () {

        }
    }
</script>
<style scoped>
    .btn{
        margin-bottom:20px;
    }
</style>


