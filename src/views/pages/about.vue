<template>
    <div style="background-color: #eee;">
        <bui-header title="关于" :styleEx="headerStyle">
            <div slot="left" @click="back" style="width: 70px; height:100px; padding-left:20px; padding-top:35px;">
                <bui-image src="/image/back.png" @click="back" width="35px" height="30px"></bui-image>
            </div>
        </bui-header>
        <div class="gap"></div>
        <list class="bui-list">
            <cell class="bui-cell-large" style="background-color: #fff;">
                <div class="bui-list-main">
                    <text class="bui-list-title">官方网址：{{info.url}}</text>
                </div>
            </cell>
            <cell class="bui-cell-large" style="background-color: #fff;">
                <div class="bui-list-main">
                    <text class="bui-list-title">微信公众号：{{info.publicSignal}}</text>
                </div>
            </cell>
            <cell class="bui-cell-large" style="background-color: #fff;">
                <div class="bui-list-main">
                    <text class="bui-list-title">客服电话：{{info.tel}}</text>
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
                info:{
                    url:'',
                    publicSignal:'',
                    tel:''
                }
            
            }
        },
        methods: {

        },
        components: {},
        created(){
            var _this = this;
            courier.getPackageName(function (res) {
                if(res == 'com.keqin.runner.android'){
                    //克矜网络
                    _this.info.url = 'www.shkjteam.com';
                    _this.info.publicSignal = 'mdrs';
                    _this.info.tel = '021-54846276';
                }else{
                    //准道'com.gidoor.runner'
                    _this.info.url = 'www.gidoor.com';
                    _this.info.publicSignal = 'Gidoor1';
                    _this.info.tel = '021-64454365';
                }
            })
        }
    }
</script>
<style>
</style>