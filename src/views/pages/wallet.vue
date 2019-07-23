<template>
    <div class="body">
        <bui-header title="我的钱包" :styleEx="headerStyle">
            <div slot="left" @click="back" style="width: 70px; height:100px; padding-left:20px; padding-top:35px;">
                <bui-image src="/image/back.png" @click="back" width="35px" height="30px"></bui-image>
            </div>
            <text slot="right" class="filter" @click="openFilter()">筛选</text>
        </bui-header>
        <div class="walletTotal flex-row">
            <div class="span1">
                <text class="totalTitle text-center">钱包</text>
                <text class="totalNum text-center">￥{{total.balance}}</text>
            </div>
            <div class="span1">
                <text class="totalTitle text-center">可提现</text>
                <text class="totalNum text-center">￥{{total.cashWithdrawals}}</text>
            </div>
        </div>
        <div class="monthTotal flex-row">
            <div class="span1 flex-row monthBox" @click="openPicker">
                <text class="span1 monthText2 text-right">{{month}}</text>
                <text class="span1 monthText text-left">月</text>
            </div>
            <div class="span1">
                <text class="monthText text-center">月收入￥{{data.monthTotle}}</text>
            </div>
        </div>
        <div class="gap"></div>

        <list class="bui-list detailsList" loadmoreoffset="2">
            <!--刷新组件-->
            <refresh class="bui-refresh" @refresh="onRefresh" @pullingdown="onPullingdown($event)"
                     :display="refreshing ? 'show' : 'hide'">
                <bui-icon :name="refreshIcon" size="40px" style="margin-right: 5px;"></bui-icon>
                <text class="bui-refresh-indicator">{{refreshText}}</text>
            </refresh>
            <cell v-if="!data.contextList.length">
                <text class="text-center bui-list-subtitle" style="line-height: 100px; font-size:32px;">{{dataHave}}</text>
            </cell>
            <cell v-for='item in data.contextList' v-if="data.contextList.length">
                <div class="bui-cell detailsTotal">
                    <div class="bui-list-main">
                        <text class="bui-list-title">{{item.time}}</text>
                    </div>
                    <div class="bui-list-right">
                        <text class="bui-list-title">收入：+{{item.dayTotle}}</text>
                    </div>
                </div>
                <div v-for="dayData in item.dayData">
                    <div class="bui-cell" v-if="dayData.tradeType == 1">
                        <div class="bui-list-left">
                            <bui-image width="50px" height="50px" src="/image/income.png"></bui-image>
                            <text class="bui-list-subtitle detailsTime">{{dayData.time}}</text>
                        </div>
                        <div class="bui-list-main">
                            <text class="bui-list-subtitle detailsMsg">{{dayData.tradeRemark}}</text>
                        </div>
                        <div class="bui-list-right">
                            <text class="bui-list-subtitle">+{{dayData.amount}}</text>
                        </div>
                    </div>
                    <div class="bui-cell" v-else>
                        <div class="bui-list-left">
                            <bui-image width="50px" height="50px" src="/image/ti.png"></bui-image>
                            <text class="bui-list-subtitle detailsTime">{{dayData.time}}</text>
                        </div>
                        <div class="bui-list-main">
                            <text class="bui-list-subtitle detailsMsg">{{dayData.tradeRemark}}</text>
                        </div>
                        <div class="bui-list-right">
                            <text class="bui-list-subtitle">-{{dayData.amount}}</text>
                        </div>
                    </div>
                </div>
            </cell>
            <!--加载更多-->
            <loading class="bui-loading" @loading="onLoading" :display="showLoading ? 'show' : 'hide'">
                <text class="bui-loading-indicator" v-if="showLoading">{{loadingText}}</text>
                <loading-indicator class="bui-indicator"></loading-indicator>
            </loading>
        </list>

        <div class="gap"></div>

        <div class="btnBox">
            <text class="btn" @click="cash">申请提现</text>
        </div>


        <div class="filterCtn" v-if='filterOpen'>
            <list class="bui-list">
                <cell class="bui-cell filterBody" @click="incomes">
                    <div class="bui-list-main">
                        <text class="bui-list-title" style="color: #fff;">收入明细</text>
                    </div>
                </cell>
                <cell class="bui-cell filterBody" @click="widthdraw">
                    <div class="bui-list-main">
                        <text class="bui-list-title" style="color: #fff;">提现明细</text>
                    </div>
                </cell>
            </list>
        </div>

        <div class="date" v-if="showDate">
            <div class="flex-row btns">
                <text class="span1 h4 text-left" @click="cancel">取消</text>
                <text class="span1 h4 text-right" @click="sure">完成</text>
            </div>
            <div class="flex-row yearAndMonth">
                <div class="selected"></div>
                <div class="span1">
                    <list class="bui-list" @panend="yearScrollEnd" @scroll="yearScroll">
                        <cell class="list-cell"></cell>
                        <cell class="list-cell" v-for="(year,index) in years" :ref="'year'+index">
                            <div class="bui-list-main">
                                <text class="text-center" style="font-size: 37px;">{{year}}</text>
                            </div>
                        </cell>
                        <cell class="list-cell"></cell>
                    </list>
                </div>
                <div class="span1">
                    <list class="bui-list" @panend="monthScrollEnd" @scroll="monthScroll">
                        <cell class="list-cell"></cell>
                        <cell class="list-cell" v-for="(month,index) in months" :ref="'month'+index">
                            <div class="bui-list-main">
                                <text class="text-center" style="font-size: 37px;">{{month}}</text>
                            </div>
                        </cell>
                        <cell class="list-cell"></cell>
                    </list>
                </div>
            </div>
        </div>

    </div>
</template>

<!--引入bui-weex样式文件-->
<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>
<style src="../../css/index.css"></style>
<script>
    //引入bui-weex模块
    var buiweex = require("bui-weex");
    var picker = weex.requireModule('picker');
    var dom = weex.requireModule('dom');
    var courier = weex.requireModule("courierModule");
    module.exports = {
        data: function () {
            return {
                filterOpen: false,
                refreshing: false,
                refreshIcon: "icon-down",
                refreshText: "下拉刷新...",
                showLoading: false,
                loadingText: "加载更多数据...",
                dataHave:'',
                years: [],   //展示的年份
                total: {},
                data: {
                    contextList: []
                },
                showDate: false,
                y: '',          //当前年份 2017
                m: '',          //当前月份 2 11
                year: '',       //当前请求的年份 2017
                month: '',      //当前请求的月份 2 11
                yearIndex: 0,   //当前选中的年份index 0 1
                monthIndex: 0,  //当前选中的月份index 0 1
                page: 1,        //查询的页码
                flag: 0         //提现明细or收入明细
            }
        },
        computed: {
            months () {
                //展示的月份
                var m = new Date().getMonth() + 1;
                var arr = [];
                for (var i = 1; i <= m; i++) {
                    arr.push(i + '月');
                }
                return this.yearIndex != this.years.length-1 ? ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'] : arr;
            }
        },
        methods: {
            queryBalance(res){
                if (res.code == 200) {
                    this.total = res.data;
                } else if(res.code == 401){
                    buiweex.toast(res.msg)
                    courier.onSessionTimeOut();
                } else {
                    buiweex.toast(res.msg)
                }
            },
            accountRecord(type,callback){
                var _this = this;
                //第一次请求
                if (type == 1) {
                    this.data.contextList = [];
                    this.page = 1;
                } else {
                    this.page++
                }
                var month;
                if(this.month<10){
                    month = '0' + this.month
                }else{
                    month = this.month;
                }
                var date = this.year + '-' + month;
                var url = 'account/findPaymentsAndBalance?month=' + date + '&page=' + this.page;
                if (this.flag) {
                    url += '&flag=' + this.flag;
                }
                this.fetch({url: url}, function (res) {
                    callback(res)
                    if (res.code == 200) {
                        _this.data.monthTotle = res.data.monthTotle ? res.data.monthTotle : 0;
                        if (res.data.contextList.length) {
                            _this.data.contextList = _this.data.contextList.concat(res.data.contextList);
                        }
                        if (!_this.data.contextList.length) {
                            _this.dataHave = '没有数据';
                        }
                    } else if(res.code == 401){
                        buiweex.toast(res.msg)
                        courier.onSessionTimeOut();
                    } else {
                        buiweex.toast(res.msg)
                    }
                })
            },
            openFilter(){
                this.filterOpen = !this.filterOpen;
            },
            openPicker(count){
                this.showDate = true;
                this.yearIndex = this.years.indexOf(this.year);
                this.monthIndex = this.month-1;
                var _this = this;
                this.$nextTick(function () {
                    _this.yearScrollEnd();
                    _this.monthScrollEnd();
                })
            },
            cancel(){
                this.showDate = false;
            },
            sure(){
                this.showDate = false;
                this.year = this.years[this.yearIndex];
                this.month = this.monthIndex + 1;
                this.flag = 0;
                this.accountRecord(1,function () {});
            },
            yearScroll(event){
                this.yearIndex = Math.round(event.contentOffset.y * (-1) / 100);
            },
            yearScrollEnd(){
                const el3 = this.$refs['year' + this.yearIndex][0]
                dom.scrollToElement(el3, { offset: -100 , animated:false })
            },
            monthScroll(event){
                this.monthIndex = Math.round(event.contentOffset.y * (-1) / 100);
            },
            monthScrollEnd(){
                const el4 = this.$refs['month' + this.monthIndex][0]
                dom.scrollToElement(el4, { offset: -100 , animated:false })
            },
            incomes(){
                this.filterOpen = false;
                this.flag = 1;
                this.accountRecord(1,function () {});
            },
            widthdraw(){
                this.filterOpen = false;
                this.flag = 2;
                this.accountRecord(1,function () {});
            },
            //refresh下拉放手后的文字与图标
            onRefresh (e) {
                this.refreshing = true;
                //下面代码是模拟异步请求效果
                this.refreshIcon = "icon-refresh";
                this.refreshText = "正在刷新";
                var _this = this;
                this.accountRecord(1,function (res) {
                    if (res.code == 200) {
                        _this.refreshIcon = "icon-checkbox-on";
                        _this.refreshText = "刷新成功";
                    } else {
                        _this.refreshIcon = "icon-roundclosefill";
                        _this.refreshText = "刷新失败";
                    }
                    setTimeout(function () {
                        _this.refreshing = false;
                    },500)
                });
            },
            //refresh下拉放手前的文字与图标
            onPullingdown (e) {
                //默认refresh文字与图标
                this.refreshIcon = "icon-down";
                this.refreshText = "下拉可以刷新...";
                //下拉一定距离时文字与图标
                if (Math.abs(e.pullingDistance) > 60) {
                    this.refreshIcon = "icon-top";
                    this.refreshText = "松开即可刷新...";
                }
            },
            onLoading (e) {
                this.showLoading = true;
                var _this = this;
                this.accountRecord(2,function (res) {
                    if (res.code == 200) {
                        if (!res.data.contextList.length) {
                            _this.loadingText = '没有更多数据了';
                        }
                    } else {
                        _this.loadingText = '加载失败';
                    }
                    setTimeout(function () {
                        _this.showLoading = false;
                    },500)
                });

            },
            cash(){
                courier.startNativePage('com.gidoor.runner.ui.user.AccountActivity');
            }
        },
        created(){
            var t = new Date();
            this.y = t.getFullYear();
            this.years = [this.y - 5, this.y - 4, this.y - 3, this.y - 2, this.y - 1, this.y]
            this.m = t.getMonth() + 1;
            this.year = this.y;
            this.month = this.m;
            var _this = this;
            this.fetch({url: 'account/queryBalance'},this.queryBalance).then(function () {
                _this.accountRecord(1,function () {});
            })

        }
    }
</script>
<style sscoped>
    .body {
        position: relative;
        background-color: #eee;
    }

    .filter {
        color: #fff;
        padding: 0 10px;
        font-size: 30px;
    }

    .filterCtn {
        width: 180px;
        background-color: rgba(0, 0, 0, 0.85);
        border-radius: 10px;
        position: absolute;
        top: 80px;
        right: 15px;
    }

    .filterBody:active {
        background-color: rgba(0, 0, 0, 0.85);
    }

    .walletTotal {
        background-color: #f2aa24;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .totalTitle, .totalNum {
        color: #fff;
        font-size: 32px;
        line-height: 60px;
    }

    .monthTotal {
        padding-top: 20px;
        padding-bottom: 20px;
        background-color: #fff;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #ccc;
    }

    .monthBox {
        border-right-width: 1px;
        border-right-style: solid;
        border-right-color: #ccc;
    }

    .monthText {
        line-height: 50px;
        color: #777;
        font-size: 32px;
    }

    .monthText2 {
        line-height: 50px;
        color: #777;
        font-size: 45px;
    }

    .detailsList {
        background-color: #fff;
        padding: 0 20px;
    }

    .detailsTotal {
        padding-top: 40px;
    }

    .detailsTime {
        padding-left: 20px;
        padding-right: 20px;
    }

    .detailsMsg {
        padding-right: 20px;
    }

    .date {
        width: 750px;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
    }

    .selected {
        width: 750px;
        height: 100px;
        border-top-width: 1px;
        border-top-style: solid;
        border-top-color: #eee;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #eee;
        position: absolute;
        top: 100px;
        left: 0;
    }

    .btns {
        background-color: #eee;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 30px;
        padding-right: 30px;
    }

    .yearAndMonth {
        height: 300px;
    }

    .list-cell {
        height: 100px;
    }
</style>
