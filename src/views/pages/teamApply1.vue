<template>
    <div>
        <bui-header title="入团申请" :styleEx="headerStyle">
            <div slot="left" @click="back" style="width: 70px; height:100px; padding-left:20px; padding-top:35px;">
                <bui-image src="/image/back.png" @click="back" width="35px" height="30px"></bui-image>
            </div>
        </bui-header>
        <div class="span1 flex-row center">
            <text class="span3 h4 text-center">公司名称</text>
            <div class="span9">
                <text class="box h4" @click="openPicker">{{company}}</text>
            </div>
            <div class="span1"></div>
        </div>

        <div class="bigBtnBox">
            <text class="btn" @click="next">下一步</text>
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
    module.exports = {
        data: function () {
            return {
                oldCompanyName:'',
                value: '---请选择---',       //选中的选项（第几个）
                companysList: [ //获取到的公司列表
                    /*{
                        name: '准道',
                        id: 1
                    }, {
                        name: 'gidoor',
                        id: 2
                    }*/
                ]
            }
        },
        computed: {
            company () {
                //选中的公司名称
                return this.value === '---请选择---' ? this.value : this.companysList[+this.value].name;
            },
            companyId () {
                //选中的公司id
                return this.value === '---请选择---' ? false : this.companysList[+this.value].id
            },
            companys(){
                //展示的公司列表
                var arr = [];
                this.companysList.forEach(function (item, index) {
                    arr.push(item.name);
                })
                return arr;
            }
        },
        methods: {
            openPicker(){
                var _this = this;
                picker.pick({
                    items: _this.companys
                }, function (event) {
                    if (event.result === 'success') {
                        _this.value = event.data;
                    }
                })
            },
            next(){
                if(!this.companyId){
                    buiweex.toast('请选择公司')
                    return
                }
                var params = {'companyName': this.company, 'companyId': this.companyId, 'oldCompanyName':this.oldCompanyName}
                buiweex.push(buiweex.getContextPath() + "/teamApply2.weex.js", params)
            }
        },
        components: {},
        mounted () {

        },
        created(){
            var pageParams = buiweex.getPageParams();
            this.oldCompanyName = pageParams.companyName;
            var _this = this;
            this.fetch({url: 'memberTeamApply/companyList'}, function (res) {
                if (res.code == 200) {
                    _this.companysList = res.data;
                } else if(res.code == 401){
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


</style>