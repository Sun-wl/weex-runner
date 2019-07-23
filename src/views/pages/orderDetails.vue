<template>
    <div>
        <bui-header title="订单详情" :styleEx="headerStyle">
            <div slot="left" @click="back" style="width: 70px; height:100px; padding-left:20px; padding-top:35px;">
                <bui-image src="/image/back.png" @click="back" width="35px" height="30px"></bui-image>
            </div>
            <text slot="right" class="filter" v-if="orderDeal" @click="openFilter()">订单处理</text>
        </bui-header>

        <bui-tabbar
                height="90px"
                titleSize="32px"
                selectedColor="#f2aa24"
                background="#fff"
                selectedBackground="#fff"
                :tabItems="tabItems"
                :currentTab="currentTab"
                showSelectedLine="true"
                @load="onTabLoad"
                @itemClick="onTabItemClick">
        </bui-tabbar>
        <div class="gap"></div>
        <slider class="slider" :index="index" auto-play="false" @change="change($event)">
            <!--选项卡内容-->
            <bui-tabbar-item tabId="tab1" :currentTab="currentTab">
                <scroller>
                    <div class="border-bottom">
                        <bui-image src="/image/range.png" class="range" width="16px" height="75px"></bui-image>
                        <div class="flex-row msgCtn">
                            <text class="distance text-center">{{order.runnerDistanceText}}</text>
                            <text class="msgText msgTextFrom">取:</text>
                            <text class="span1 msgText">{{order.fromAddress}}</text>
                            <div class="imgBox">
                                <bui-image src="/image/phone.png" @click="call(order.fromMobile)" width="80px"
                                           height="80px"></bui-image>
                            </div>
                        </div>
                        <div class="flex-row msgCtn">
                            <text class="distance text-center">{{order.distanceText}}</text>
                            <text class="msgText msgTextTo">收:</text>
                            <text class="span1 msgText">{{order.toAddress}}</text>
                            <div class="imgBox">
                                <bui-image src="/image/phone.png" @click="call(order.toMobile)" width="80px"
                                           height="80px"></bui-image>
                            </div>
                        </div>
                    </div>
                    <div class="mapBox">
                        <weex-amap class="map" style="flex: 1; background-color: #fff;" id="map2017" :sdk-key="sdkKey"
                                   geolocation="true" :center="center" :zoom="zoom">
                            <weex-amap-marker v-for="(marker,index) in markers" :key="'marker'+index"
                                              :position="marker.position" :icon="marker.icon"></weex-amap-marker>
                        </weex-amap>
                        <bui-image src="/image/location.png" class="location" @click="location" width="90px"
                                   height="90px"></bui-image>
                    </div>
                    <div>
                        <div class="flex-row info" v-if="clothes">
                            <div class="infoName">
                                <text class="infoText infoCtn">预约送衣:</text>
                            </div>
                            <div class="span1">
                                <text class="infoText infoCtn">{{order.fromApptsDateText}}&nbsp;~&nbsp;{{order.fromAppteDateText}}</text>
                            </div>
                        </div>
                        <div class="flex-row info" v-if="rateTime">
                            <div class="infoName">
                                <text class="infoText infoCtn">配送时效:</text>
                            </div>
                            <div class="span1">
                                <text class="infoText infoTip">{{order.rateTimeText}}</text>
                            </div>
                        </div>
                        <div class="flex-row info infoHead">
                            <div class="infoName">
                                <text class="infoText infoTitle">订单详情</text>
                            </div>
                        </div>
                        <div class="flex-row info">
                            <div class="infoName">
                                <text class="infoText infoCtn">订单号:</text>
                            </div>
                            <div class="span1">
                                <text class="infoText infoCtn">{{order.orderNo}}</text>
                            </div>
                        </div>
                        <div class="flex-row info" v-if="orderSn">
                            <div class="infoName">
                                <text class="infoText infoCtn">流水号:</text>
                            </div>
                            <div class="span1">
                                <text class="infoText infoCtn">{{order.orderSn}}</text>
                            </div>
                        </div>
                        <div class="flex-row info" v-if="goodsTypeText">
                            <div class="infoName">
                                <text class="infoText infoCtn">服务类型:</text>
                            </div>
                            <div class="span1">
                                <text class="infoText infoCtn">{{order.goodsTypeText}}</text>
                            </div>
                        </div>
                        <div class="flex-row info infoHead">
                            <div class="infoName">
                                <text class="infoText infoTitle">物品信息</text>
                            </div>
                        </div>
                        <div class="flex-row info" v-if="goodsTypeText">
                            <div class="infoName">
                                <text class="infoText infoCtn">物品类型:</text>
                            </div>
                            <div class="span1">
                                <text class="infoText infoCtn">{{order.goodsTypeText}}</text>
                            </div>
                        </div>
                        <div class="flex-row info" v-if="goods">
                            <div class="infoName">
                                <text class="infoText infoCtn">物品名称:</text>
                            </div>
                            <div class="span1">
                                <text class="infoText infoCtn" v-for="items in order.itemsList" v-if="items.num">{{items.name}}&nbsp;×&nbsp;{{items.num}}</text>
                            </div>
                        </div>
                        <div class="flex-row info">
                            <div class="infoName">
                                <text class="infoText infoTip">代收款:</text>
                            </div>
                            <div class="span1">
                                <text class="infoText infoTip">{{order.collectionMoney}}</text>
                            </div>
                        </div>
                        <div class="flex-row info" v-if="payStatusText">
                            <div class="infoName">
                                <text class="infoText infoCtn">支付状态:</text>
                            </div>
                            <div class="span1">
                                <text class="infoText infoCtn">{{order.payStatusText}}</text>
                            </div>
                        </div>
                        <div class="gap"></div>
                        <div class="btns">
                            <text class="submit" v-if="btn" @click="submit">{{btnText}}</text>
                            <text class="submit" v-else>{{btnText}}</text>
                        </div>
                    </div>
                </scroller>
            </bui-tabbar-item>

            <bui-tabbar-item tabId="tab2" :currentTab="currentTab">
                <scroller style="width: 750px;flex: 1">
                    <div class="p-t-l-b-50 flex-column">
                        <div class="span1 flex-column">
                            <div class="flex-row" v-for="(items,index) in orderStatus">
                                <div class="flex-column text-center" style="width: 70px;">
                                    <div class="span1">
                                        <div class="circle lightCircle" v-if="index == 0"></div>
                                        <div class="circle" v-else></div>
                                    </div>
                                    <div class="span2 p-t-15" v-if="index != last">
                                        <div class="line lightLine" v-if="index == 0"></div>
                                        <div class="line" v-else></div>
                                    </div>
                                </div>
                                <div class="span3 text-center">
                                    <text class="bui-list-title">{{items.statusText}}</text>
                                    <text class="bui-list-subtitle">{{items.content}}</text>
                                </div>
                                <div class="text-center" style="width: 250px;">
                                    <text class="h4 bui-list-subtitle">{{items.createTime}}</text>
                                </div>
                            </div>
                        </div>
                    </div>
                </scroller>
            </bui-tabbar-item>
        </slider>

        <div class="filterCtn" v-if='filterOpen'>
            <list class="bui-list">
                <cell class="bui-cell filterBody" @click="remarkOrder">
                    <div class="bui-list-main">
                        <text class="bui-list-title" style="color: #fff;">标记异常</text>
                    </div>
                </cell>
                <cell class="bui-cell filterBody" v-if="cancelShow" @click="cancelOrder">
                    <div class="bui-list-main">
                        <text class="bui-list-title" style="color: #fff;">取消订单</text>
                    </div>
                </cell>
            </list>
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
    var courier = weex.requireModule("courierModule");
    var orderDetailModule = weex.requireModule("orderDetailModule");
    var amap = weex.requireModule("amap");
    module.exports = {
        data: function () {
            return {
                index:0,
                tabItems: [{tabId: "tab1", title: "订单详情"}, {tabId: "tab2", title: "订单状态"}],
                currentTab: "tab1",
                runnerToWhere: 1,
                orderNo: '',
                order: {},
                clothes: false,
                rateTime: false,
                orderSn: false,
                goodsTypeText: false,
                goods: false,
                payStatusText: false,
                btn: true,
                btnText: '',
                status: 1,
                orderStatus: [],
                last: 3,
                orderDeal: false,
                filterOpen: false,
                cancelShow: false,
                //地图配置
                sdkKey: {
                    ios: 'b410c9512352df1c4021960c1e9f59e4',
                    android: 'd27312a35ed1e3827ac26fde578c9cff',
                    h5: 'b410c9512352df1c4021960c1e9f59e4'
                },
                center: [121.444872, 31.199646],
                zoom: 15,
                markers: [
                    {
                        position: [121.444872, 31.199646],
                        icon: buiweex.getContextPath() + '/image/from.png'
                    },
                    {
                        position: [121.454872, 31.199646],
                        icon: buiweex.getContextPath() + '/image/to.png'
                    },
                    {
                        position: [121.464872, 31.199646],
                        icon: buiweex.getContextPath() + '/image/qishou.png'
                    }
                ]
            }
        },
        methods: {
            //选项卡加载完成事件,必须实现
            onTabLoad(tabId, index) {
                this.currentTab = tabId;
                this.index = index;
            },
            //选项卡点击事件,必须实现
            onTabItemClick (e, tabId, index) {
                this.currentTab = tabId;
                this.index = index;
            },
            //slider 在改变的时候
            change (e) {
                this.index = e.index;
                this.currentTab = this.tabItems[this.index].tabId;
            },
            call(mobile){
                courier.call(mobile);
            },
            location () {
                if (this.runnerToWhere == 1) {
                    courier.navOutSide(this.markers[0].position[0], this.markers[0].position[1], this.order.fromAddress);
                } else if (this.runnerToWhere == 2) {
                    courier.navOutSide(this.markers[1].position[0], this.markers[1].position[1], this.order.toAddress);
                }
            },
            getData(){
                var _this = this;
                this.detailsOpt = {
                    url: 'gidoororder/details/' + this.orderNo
                }
                this.statusOpt = {
                    url: 'order/runnerTimeLine/list?orderNo=' + this.orderNo,
                    method: 'POST'
                }
                this.fetch(this.detailsOpt, this.initOrderdetails).then(function () {
                    return _this.fetch(_this.statusOpt, _this.initOrderStatus);
                })
            },
            submit () {
                var _this = this;
                if (!this.order.arrivalTime) {
                    this.order.arrivalTime = '';
                }
                if (this.status % 10 == 1) {
                    orderDetailModule.receiveOrder(this.orderNo, this.order.rateTime, function () {
                        _this.getData();
                    })
                } else if (this.status % 10 == 2) {
                    orderDetailModule.deliveryOrder(this.order.goodsType, this.order.rateTime, this.order.fromApptsDate,
                        this.order.arrivalTime, this.order.status, this.order.fromMobile, this.orderNo, function () {
                            _this.getData();
                        }
                    )
                } else if (this.status % 10 == 3) {
                    orderDetailModule.signOrder(this.order.status, this.orderNo, this.order.rateTime, this.order.arrivalTime, this.order.collectionMoney,
                        this.order.orderType, this.order.goodsType, this.order.signCode, this.order.payStatus, this.order.id, function () {
                            _this.getData();
                        }
                    )
                }
            },
            formatDateTime(inputTime) {
                var date = new Date(inputTime);
                var y = date.getFullYear();
                var m = date.getMonth() + 1;
                m = m < 10 ? ('0' + m) : m;
                var d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                var h = date.getHours();
                h = h < 10 ? ('0' + h) : h;
                var minute = date.getMinutes();
                var second = date.getSeconds();
                minute = minute < 10 ? ('0' + minute) : minute;
                second = second < 10 ? ('0' + second) : second;
                return y + '-' + m + '-' + d + ' ' + h + ':' + minute;
            },
            initOrderdetails(res){
                //数据
                if (res.code != 200) {
                    buiweex.toast(res.msg);
                    if (res.code == 401) {
                        courier.onSessionTimeOut();
                    }
                    return
                } else {
                    this.order = res.data;
                    if (this.order.orderSn) {
                        this.orderSn = true
                    }
                    if (this.order.goodsTypeText) {
                        this.goodsTypeText = true
                    }
                    if (this.order.payStatusText) {
                        this.payStatusText = true
                    }
                    //物品名称、物品数量
                    if (this.order.itemsList.length) {
                        this.goods = true;
                    }
                    //取货地
                    if (this.order.runnerDistance) {
                        //地图的缩放
                        if (this.order.runnerDistance < 1) {
                            this.zoom = 16;
                        } else if (this.order.runnerDistance > 1 && this.order.runnerDistance < 2) {
                            this.zoom = 15;
                        } else if (this.order.runnerDistance > 2 && this.order.runnerDistance < 4) {
                            this.zoom = 14;
                        } else if (this.order.runnerDistance > 4 && this.order.runnerDistance < 6) {
                            this.zoom = 13;
                        } else if (this.order.runnerDistance > 6 && this.order.runnerDistance < 10) {
                            this.zoom = 12;
                        } else {
                            this.zoom = 15;
                        }
                        //距离取货地距离显示文本
                        if (this.order.runnerDistance < 1) {
                            this.order.runnerDistanceText = this.order.runnerDistance * 1000 + "米";
                        } else {
                            this.order.runnerDistanceText = Math.round(this.order.runnerDistance * 10) / 10 + "千米";
                        }
                    } else {
                        this.order.runnerDistanceText = '0米';
                    }

                    //收货地
                    if (this.order.distance) {
                        if (this.order.distance < 1) {
                            this.order.distanceText = this.order.distance * 1000 + "米"
                        } else {
                            this.order.distanceText = Math.round(this.order.distance * 10) / 10 + "千米"
                        }
                    } else {
                        this.order.distanceText = '0米';
                    }

                    if (this.order.fromPoint && this.order.fromPoint.indexOf(',') > 0) {
                        //地图坐标
                        var x = +this.order.fromPoint.split(',')[0];
                        var y = +this.order.fromPoint.split(',')[1];
                        this.markers[0].position = [x, y];
                    }

                    if (this.order.toPoint && this.order.toPoint.indexOf(',') > 0) {
                        //地图坐标
                        var x1 = +this.order.toPoint.split(',')[0];
                        var y1 = +this.order.toPoint.split(',')[1];
                        this.markers[1].position = [x1, y1];
                    }

                    //预约送衣
                    this.order.fromApptsDateText = this.formatDateTime(this.order.fromApptsDate).substr(0, 17);
                    this.order.fromAppteDateText = this.formatDateTime(this.order.fromAppteDate).substr(10, 17);

                    //配送时效
                    if (this.order.rateTime > 0) {
                        this.order.rateTimeText = this.order.rateTime + '分钟'
                    } else if (this.order.rateTime == 0) {
                        this.order.rateTimeText = '不限'
                    } else {
                        this.rateTime = false;
                    }

                    //服务类型
                    if (this.order.goodsType == 8) {
                        this.clothes = true;
                    } else {
                        this.clothes = false;
                    }

                    //代收款
                    if (this.order.collectionMoney == null) {
                        this.order.collectionMoney = "无";
                    }

                    //底部按钮文字
                    this.status = parseInt(this.order.status);
                    if (this.status % 10 == 1) {
                        this.btn = true;
                        this.btnText = "接单"
                    } else if (this.status % 10 == 2) {
                        this.btn = true;
                        this.btnText = "提货";
                        this.runnerToWhere = 1;
                        if (this.status == 12) {
                            this.btnText = "到店提货"
                        }
                    } else if (this.status % 10 == 3) {
                        this.btn = true;
                        this.btnText = "签收";
                        this.runnerToWhere = 2;
                        if (this.order.goodsType == 8) {
                            this.btnText = "我已到店"
                        }
                    } else if (this.status == 4) {
                        this.btn = false;
                        this.btnText = "该订单正在被修改"
                    } else if (this.status == 5 || this.status == 6) {
                        this.btn = false;
                        this.btnText = "该订单已经取消"
                    } else if (this.status == 7) {
                        this.btn = false;
                        this.btnText = "该订单已经完成"
                    } else if (this.status == 8) {
                        this.btn = false;
                        this.btnText = "该订单为异常单"
                    }

                    if ((this.status >= 2 && this.status < 5) || (this.status >= 11 && this.status <= 13)) {
                        this.orderDeal = true;
                        if (this.status == 2 && this.order.payStatus == 2) {
                            this.cancelShow = true;
                        }
                    } else {
                        this.orderDeal = false;
                    }

                }
            },
            initOrderStatus(res){
                if (res.code != 200) {
                    buiweex.toast(res.msg);
                    if (res.code == 401) {
                        courier.onSessionTimeOut();
                    }
                    return
                }
                if (res.code == 200 && res.data.length) {
                    //时间转换
                    this.orderStatus = res.data;
                    this.last = res.data.length - 1;
                }
            },
            openFilter(){
                this.filterOpen = !this.filterOpen;
            },
            cancelOrder(){
                this.filterOpen = false;
                orderDetailModule.cancelOrder(this.orderNo);
            },
            remarkOrder(){
                this.filterOpen = false;
                orderDetailModule.postOrderException(this.orderNo, this.order.status);
            }
        },
        mounted(){
            var _this = this;
            amap.getUserLocation(function () {
            }, function (res) {
                _this.markers[2].position = res.data.position;
            })
        },
        created(){
            var _this = this;
            orderDetailModule.getOrderNo(function (orderNo) {
                _this.orderNo = orderNo;
            });
            this.getData();
        }
    }
</script>
<style scoped>
    .slider {
        flex: 1;
    }

    .msgCtn {
        /*min-height: 120px;*/
        padding-top: 10px;
        padding-bottom: 10px;
        overflow: visible;
    }

    .distance {
        font-size: 25px;
        width: 150px;
        line-height: 60px;
    }

    .msgText {
        font-size: 32px;
        line-height: 60px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .msgTextFrom {
        color: #199343;
    }

    .msgTextTo {
        color: #de640f;
    }

    .imgBox {
        width: 100px;
        height: 100px;
        padding-top: 10px;
        padding-right: 20px;
        padding-bottom:40px;
    }

    .range {
        position: absolute;
        left: 67px;
        top: 70%;
    }

    .mapBox {
        height: 400px;
        border-top-width: 1px;
        border-top-style: solid;
        border-top-color: #eee;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #eee;
    }

    .location {
        position: absolute;
        right: 10px;
        top: 110px;
    }

    .info {
        padding: 20px;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #eee;
    }

    .infoHead {
        background-color: #eee;
    }

    .infoName {
        width: 200px;
        text-align: left;
    }

    .infoText {
        font-size: 35px;
    }

    .infoTitle {
        color: #444;
    }

    .infoCtn {
        color: #777;
    }

    .infoTip {
        color: #f2aa24;
    }

    .btns {
        background-color: #f2aa24;
    }

    .submit {
        color: #fff;
        font-size: 38px;
        padding: 20px;
        text-align: center;
    }

    .circle {
        width: 20px;
        height: 20px;
        margin-top: 15px;
        margin-left: 5px;
        background-color: #CBCBCB;
        border-radius: 50%;
    }

    .lightCircle {
        background-color: #f2aa24;
        width: 30px;
        height: 30px;
        margin-left: 0;
    }

    .line {
        width: 200px;
        height: 100%;
        margin-left: 15px;
        border-left-width: 1px;
        border-left-style: solid;
        border-left-color: #CBCBCB;
    }

    .lightLine {
        border-left-color: #f2aa24;
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

</style>