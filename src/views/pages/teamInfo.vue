<template>
    <div style="background-color: #eee;">
        <bui-header title="团队信息" :styleEx="headerStyle">
            <div slot="left" @click="back" style="width: 70px; height:100px; padding-left:20px; padding-top:35px;">
                <bui-image src="/image/back.png" @click="back" width="35px" height="30px"></bui-image>
            </div>
        </bui-header>
        <div class="gap"></div>
        <list class="bui-list">
            <cell class="bui-cell-large" style="background-color: #fff;">
                <div class="bui-list-main">
                    <text class="bui-list-title">公司名称：{{teamInfo.companyName}}</text>
                </div>
            </cell>
            <cell class="bui-cell-large" style="background-color: #fff;">
                <div class="bui-list-main">
                    <text class="bui-list-title">团队名称：{{teamInfo.teamName}}</text>
                </div>
            </cell>
            <cell class="bui-cell-large" style="background-color: #fff;">
                <div class="bui-list-main">
                    <text class="bui-list-title">团队人数：{{teamInfo.teamSize}}</text>
                </div>
            </cell>
            <cell class="bui-cell-large" style="background-color: #fff;">
                <div class="bui-list-main">
                    <text class="bui-list-title">团队联系人：{{teamInfo.contact}}</text>
                </div>
            </cell>
        </list>
    </div>
</template>

<!--引入bui-weex样式文件-->
<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>
<style src="../../css/index.css"></style>
<script>
    //引入bui-weex模块
    var buiweex = require("bui-weex");
    var courier = weex.requireModule("courierModule");
    module.exports = {
        data: function () {
            return {
                teamInfo:{}
            
            }
        },
        methods: {

        },
        components: {},
        created(){
            var _this = this;
            this.fetch({url:'memberTeamApply/details'},function (res) {
                if (res.code == 200) {
                    _this.teamInfo = res.data;
                }else if(res.code == 100){
                    //审核中
                    buiweex.pop();
                    buiweex.push(buiweex.getContextPath()+"/teamApply3.weex.js",{'companyName':res.data.name})
                }else if(res.code == 300){
                    //未提交过申请
                    buiweex.pop();
                    buiweex.push(buiweex.getContextPath()+"/teamApply1.weex.js",{'companyName':''});//1 未提交过审核    2 审核中
                }else if(res.code == 401){
                    buiweex.toast(res.msg)
                    courier.onSessionTimeOut();
                }else {
                    buiweex.toast(res.msg);
                }

            })
        }
    }
</script>
<style>
</style>