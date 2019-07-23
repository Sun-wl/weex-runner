<template>
    <div>
        <bui-header title="入团申请" :styleEx="headerStyle">
            <div slot="left" @click="back" style="width: 70px; height:100px; padding-left:20px; padding-top:35px;">
                <bui-image src="/image/back.png" @click="back" width="35px" height="30px"></bui-image>
            </div>
        </bui-header>
        <div class="span1 center">
            <text class="h4">已向【{{companyName}}】发起申请</text>
            <text class="h4" style="color: green;">正在审核中</text>
        </div>

        <div class="bigBtnBox">
            <text class="btn" @click="update">修改公司</text>
        </div>
    </div>
</template>

<!--引入bui-weex样式文件-->
<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>
<style src="../../css/index.css"></style>
<script>
    //引入bui-weex模块
    var buiweex = require("bui-weex");
    module.exports = {
        data: function () {
            return {
                companyName:''
            }
        },
        methods: {
            update(){
                buiweex.push(buiweex.getContextPath()+"/teamApply1.weex.js",{'companyName':this.companyName})
            }
        },
        components: {},
        created(){
            var pageParams = buiweex.getPageParams();
            this.companyName = pageParams.companyName;
        }
    }
</script>
<style scoped>

</style>