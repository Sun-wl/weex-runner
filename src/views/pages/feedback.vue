<template>
    <div style="background-color: #eee;">
        <bui-header title="反馈" :styleEx="headerStyle">
            <div slot="left" @click="back" style="width: 70px; height:100px; padding-left:20px; padding-top:35px;">
                <bui-image src="/image/back.png" @click="back" width="35px" height="30px"></bui-image>
            </div>
        </bui-header>
        <div class="span1">
            <div style="padding: 50px;">
                <textarea class="textarea border" v-model="feedback" @input="oninput" placeholder="请输入您的宝贵意见" rows="10"
                          autofocus="true"></textarea>
                <text class="bui-list-subtitle tip">140字</text>
            </div>

            <div class="submitBox">
                <text class="btn" @click="save">提交</text>
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
    var courier = weex.requireModule("courierModule");
    module.exports = {
        data: function () {
            return {
                feedback: ''

            }
        },
        methods: {
            save(){
                if (this.feedback.length == 0) {
                    buiweex.toast('您输入意见内容为空');
                    return
                }
                if (this.feedback.length > 140) {
                    buiweex.toast('您输入意见内容太多');
                    return
                }
                var opt = {
                    old: true,
                    url: 'feedback/reply',
                    method: 'POST',
                    params: this.toParams({
                        'replyContent': this.feedback
                    })
                }
                this.fetch(opt, function (res) {
                    if (res.code == 200) {
                        buiweex.toast('感谢您的宝贵意见');
                        buiweex.pop();
                    } else if (res.code == 401) {
                        buiweex.toast(res.msg)
                        courier.onSessionTimeOut();
                    } else {
                        buiweex.toast(res.msg);
                    }

                })
            }
        },
        components: {},
        created(){

        }
    }
</script>
<style scoped>
    .textarea {
        background-color: #fff;
        padding: 40px;
        border-radius: 5px;
    }

    .tip {
        position: absolute;
        bottom: 80px;
        right: 90px;
    }

    .submitBox {
        background-color: #eee;
        padding-top: 50px;
        padding-left: 100px;
        padding-right: 100px;
    }

</style>