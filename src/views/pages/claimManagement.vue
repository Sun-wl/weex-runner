<template>
    <div class="flex-column">
        <bui-header title="保险理赔" :styleEx="headerStyle">
            <div slot="left" @click="back" style="width: 70px; height:100px; padding-left:20px; padding-top:35px;">
                <bui-image src="/image/back.png" @click="back" width="35px" height="30px"></bui-image>
            </div>
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
                <scroller style="width: 750px;flex: 1">
                    <div class="p-50">
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为保障任务堂注册用户个人利益，任务堂平台建议所有注册用户在接当天首单时购买人身意外险。</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;若当天未接单，则无需缴纳意外险购买费用。</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;费用由系统自动从配送员账户余额中扣除。</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;参保人员：任务堂注册实名认证用户（配送员）</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;参保条件：注册用户当天有接单记录（无论订单是否被取消），系统成功扣除2元费用.</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;参保金额：2元/人/天</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;承保时间：注册用户在且仅在任务堂平台接单、配送过程中；</text>
                        <text class="h4 head">一、保险项目及额度</text>
                        <scroller show-scrollbar="true" scroll-direction="horizontal"
                                  class="flex-row border" style="width: 1600px; height:1600px;">
                            <div class="border-bottom center" style="height:1600px; width: 200px;">
                                <text class="h4 p-20">保险责任</text>
                            </div>
                            <div class="border-left flex-column" style="height:1600px; width: 250px;">
                                <div class="span1 border-bottom center">
                                    <text class="h4 p-20">意外死亡</text>
                                </div>
                                <div class="span1 border-bottom center">
                                    <text class="h4 p-20">意外伤残</text>
                                </div>
                                <div class="span1 border-bottom center">
                                    <text class="h4 p-20">意外医疗费用</text>
                                </div>
                                <div class="span1 border-bottom center">
                                    <text class="h4 p-20">第三者责任1</text>
                                </div>
                                <div class="span1 border-bottom center">
                                    <text class="h4 p-20">第三者责任2</text>
                                </div>
                                <div class="span1 border-bottom center">
                                    <text class="h4 p-20">第三者责任3</text>
                                </div>
                            </div>
                            <div class="border-left flex-column" style="height:1600px; width: 150px;">
                                <div class="span1 border-bottom center">
                                    <text class="h4 p-20">保额</text>
                                </div>
                                <div class="span1 border-bottom center">
                                    <text class="h4 p-20">保额</text>
                                </div>
                                <div class="span1 border-bottom center">
                                    <text class="h4 p-20">保额</text>
                                </div>
                                <div class="span1 border-bottom center">
                                    <text class="h4 p-20">保额</text>
                                </div>
                                <div class="span1 border-bottom center">
                                    <text class="h4 p-20">保额</text>
                                </div>
                                <div class="span1 border-bottom center">
                                    <text class="h4 p-20">保额</text>
                                </div>
                            </div>
                            <div class="border-left flex-column" style="height:1600px; width: 300px;">
                                <div class="span1 border-bottom center">
                                    <text class="h4 p-20">人民币20万元</text>
                                </div>
                                <div class="span1 border-bottom center">
                                    <text class="h4 p-20">人民币20万元（按伤残赔付比例表）</text>
                                </div>
                                <div class="span1 border-bottom center">
                                    <text class="h4 p-20">意外医疗人民币2万元，免赔额每次100元</text>
                                </div>
                                <div class="span1 border-bottom center">
                                    <text class="h4 p-20">因意外导致第三者身故、伤残人民币10万元（伤残根据伤残赔付比例表赔付）</text>
                                </div>
                                <div class="span1 border-bottom center">
                                    <text class="h4 p-20">因意外导致第三者意外医疗人民币1万元</text>
                                </div>
                                <div class="span1 border-bottom center">
                                    <text class="h4 p-20">因意外导致第三者财产损失人民币5千元，其中单次赔偿限额人民币800元</text>
                                </div>
                            </div>
                            <div class="span4 border-left flex-column" style="height:1600px;">
                                <div class="span1 border-bottom">
                                    <text class="h4 p-20">被保险人在保险期间（服务过程中，包含在驾驶非机动车过程中），因遭受意外伤害事故导致身故，将按约定的每人死亡赔偿限额计算死亡赔偿金额；</text>
                                </div>
                                <div class="span1 border-bottom">
                                    <text class="h4 p-20">被保险人在保险期间（服务过程中，包含在驾驶非机动车过程中），因遭受意外伤害事故导致伤残，依据伤残鉴定机构出具的伤残程度鉴定书，按伤残赔付比例表计算伤残赔偿金；</text>
                                </div>
                                <div class="span1 border-bottom">
                                    <text class="h4 p-20">被保险人在保险期间（服务过程中，包含在驾驶非机动车过程中），因遭受意外伤害事故需门诊或住院治疗所发生的当地社保主管部门规定可报销的、必要的、合理的医保范围内的医疗费用；</text>
                                </div>
                                <div class="span1 border-bottom">
                                    <text class="h4 p-20">被保险人在保险期间（服务过程中，包含在驾驶非机动车过程中），因过失导致第三者身故或残疾，将按约定支付赔偿金；残疾需依据伤残鉴定机构出具的伤残程度鉴定书，按伤残赔付比例表计算伤残赔偿金额；</text>
                                </div>
                                <div class="span1 border-bottom">
                                    <text class="h4 p-20">被保险人在保险期间（服务过程中，包含在驾驶非机动车过程中），因过失导致第三者需门诊或住院治疗所发生的当地社保主管部门规定可报销的、必要的、合理的医保范围内的医疗费用；</text>
                                </div>
                                <div class="span1 border-bottom">
                                    <text class="h4 p-20">被保险人在保险期间（服务过程中，包含在驾驶非机动车过程中），因过失导致第三者的财产直接损失。</text>
                                </div>
                            </div>
                        </scroller>
                        <text class="h4 head">二、意外事故处理流程：</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、第一时间拨打110向交警报案，要求交警出具《交通事故认定书》。</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、如造成自身财产或第三方财产损失的，请务必用手机现场拍照，保留证据，以便将来保险公司定损之用。第三方财产拍照需拍摄4个部位，分别为车前，车后，整体和受损部位。注册用户车辆损失不在理赔范围之内。</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、如造成自身或对方人身意外的，第一时间拨打120，请求救护车，并且拍下受伤者受伤部位照片，受伤者和受伤部位整体照片。</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、骑手出险后，请到准道佣兵APP>>个人中心>>保险理赔界面，查看出险当天的保单号告知中国平安财产保险股份有限公司，并要取如下准备理赔材料 。</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;平安公司联系方式：（021）20660295 [陈鸿斌]  或  95511 ；</text>
                        <text class="h4 head">三、事故发生后所需材料：</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、财产损失：索赔申请书(请填写保单号)、物损照片、维修发票、保险公司定损单、维修清单、双方身份证复印件、双方车辆行驶证复印件、双方驾驶证复印件、赔付协议或收条、交通事故认定书、出险时相对应的订单信息截屏（事故时正在配送的订单）。</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、人身意外：索赔申请书(请填写保单号)、检查报告、医疗发票、就诊卡、病历本、出院小结、住院发票清单、医疗费清单、双方身份证复印件、双方车辆行驶证复印件、双方驾驶证复印件、赔付协议或收条、交通事故认定书以及医院提供的其他所有原件、出险时相对应的订单信息截屏（事故时正在配送的订单）。</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、所有理赔材料齐全后，请安排快递寄送至上海市静安区常熟路8号8楼中区理赔部，收件人：陈鸿斌联系电话：（021）20660295</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（为了保证材料交接过程中的安全性，请尽量使用顺丰或EMS，拒收到付件）</text>
                        <text class="h4 head">四、不予理赔情形：</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、违章驾驶发生事故；</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、驾驶证或行驶证被扣押、吊销期间发生事故；</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、使用未审核电动车发生事故；</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、故意挑衅或故意行为与他人发生打架斗殴发生事故；</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以上情形发生交通等损害事故后，均无法获得保险赔偿，若由此导致发生事故的，所产生的损失均由注册用户本人承担，与公司无关。请大家务必注意！</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5、事故发生地的社会医疗保险或其他公费医疗管理部门规定的自费项目和自费药品费用以及医保统筹基金、附加支付，均为保险责任除外。</text>
                        <text class="h4 head">五、注意事项：</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、发生交通事故，必须要有交警出具的《交通事故认定书》。</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、发生交通事故，如私下调解的，后续所产生的任何损害和责任均由注册用户本人自行承担。</text>
                        <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、保险仅承保年龄段在16-65周岁的注册用户。</text>
                        <text style='font-size:32px; font-weight: bold; padding-top: 20px; padding-bottom: 20px;'>任务堂平台仅提供保险购买通道，不涉及事故造成的相关责任及保险金额的赔偿。</text>
                    </div>
                </scroller>
            </bui-tabbar-item>

            <bui-tabbar-item tabId="tab2" :currentTab="currentTab">
                <scroller style="width: 750px;flex: 1">
                    <div class="p-50">
                        <text class="title">近7天的保单号</text>
                        <text class="tip">出险后，请把出险当天的保单号告知中国平安财产保险股份有限公司。</text>
                        <div class="" style="margin-top: 30px;">
                            <div class="flex-column" v-for="(item,index) in data">
                                <div class="span1 flex-column">
                                    <div class="span1 flex-row">
                                        <div class="span1 text-center">
                                            <div class="circle"></div>
                                        </div>
                                        <div class="span2 text-center">
                                            <text class="bui-list-subtitle">{{item.buyDate}}</text>
                                        </div>
                                        <div class="span3 text-center">
                                            <text class="bui-list-subtitle">{{item.policyNo}}</text>
                                        </div>
                                    </div>
                                    <div class="span2" v-if="index != data.length-1">
                                        <div class="line"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </scroller>
            </bui-tabbar-item>
        </slider>
    </div>
</template>

<!--引入bui-weex样式文件-->
<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>
<style src="../../css/index.css"></style>
<script>
    //引入bui-weex模块
    //import buiweex from 'bui-weex'
    var buiweex = require("bui-weex");
    var picker = weex.requireModule('picker');
    module.exports = {
        data: function () {
            return {
                tabItems: [{tabId: "tab1", title: "理赔说明"}, {tabId: "tab2", title: "保单号"}],
                currentTab: "tab1",
                data: []
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
                var index = e.index;
                this.currentTab = this.tabItems[index].tabId;
            }
        },
        components: {},
        created(){
            var _this = this;
            this.fetch({url: 'member/insurance/sevenDayAgo'}, function (res) {
                if (res.code == 200) {
                    _this.data = res.data;
                } else if (res.code == 401) {
                    buiweex.toast(res.msg)
                    courier.onSessionTimeOut();
                } else {
                    buiweex.toast(res.msg)
                }
            })
        }
    }
</script>
<style scoped>

    .head {
        padding: 30px;
    }

    .slider {
        flex: 1;
    }

    .title {
        font-size: 40px;
        line-height: 60px;
        color: #494849;
    }

    .tip {
        color: #f2aa24;
        font-size: 30px;
    }

    .circle {
        width: 20px;
        height: 20px;
        margin-top: 15px;
        background-color: #CBCBCB;
        border-radius: 50%;
    }

    .line {
        width: 200px;
        height: 100%;
        margin-left: 10px;
        border-left-width: 1px;
        border-left-style: solid;
        border-left-color: #CBCBCB;
    }

</style>