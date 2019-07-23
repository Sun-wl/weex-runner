<template>
    <div>
        <bui-header title="服务协议" :styleEx="headerStyle">
            <div slot="left" @click="back" style="width: 70px; height:100px; padding-left:20px; padding-top:35px;">
                <bui-image src="/image/back.png" @click="back" width="35px" height="30px"></bui-image>
            </div>
        </bui-header>
        <scroller>
            <div class="shuiyin">
                <bui-image src="/image/shuiyin.png" class="shuiyinImg" width="750px" height="750px"></bui-image>
                <bui-image src="/image/shuiyin.png" class="shuiyinImg" width="750px" height="750px"></bui-image>
                <bui-image src="/image/shuiyin.png" class="shuiyinImg" width="750px" height="750px"></bui-image>
            </div>
            <div style="padding:30px;">
                <text class="h4 text-center">准道佣兵责任自担条款</text>

                <text class="h4 m-t-30">尊敬的用户：</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;您好！请您在使用准道佣兵前仔细阅读以下法律声明。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;准道佣兵服务软件（以下简称“准道佣兵”）由准道网络科技（上海）有限公司（下称：准道公司）开发创建并维护。用户进入并使用准道佣兵，接受准道佣兵提供的服务，视同用户已知晓并接受下列法律声明中包含的全部条款，这些条款同时构成准道与用户之间的协议，自用户使用准道佣兵之日起生效。倘不同意下列条款，请勿使用准道佣兵。准道公司有权随时修改本法律声明的内容。修改后的法律声明一经在准道佣兵公布，即对用户具有约束力。用户继续使用准道佣兵，视为接受修改后的法律声明。</text>
                <text class="h4 m-t-30">【免责声明】</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一、准道佣兵是在国家相关法律法规规定的范围内，发布配送服务信息的第三方网络服务平台，准道佣兵及准道公司非交易一方，也非交易任何一方之代理人或代表；同时，准道佣兵及准道公司也未授权任何人代表或代理准道佣兵及准道公司从事任何网络交易行为或做出任何承诺、保证或其他类似行为，除非有明确的书面授权。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;二、鉴于互联网及网络交易的特殊性，准道佣兵无法鉴别和判断相关交易各主体之民事权利和行为能力、资质、信用等状况，也无法鉴别和判断虚拟交易或正在交易或已交易之虚拟物品来源、权属、真伪、性能、规格、质量、数量等权利属性、自然属性及其他各种状况。因此，交易各方在交易前应加以仔细辨明，并慎重考虑和评估交易可能产生的各项风险。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;三、用户同意，并充分理解准道仅是提供网络配送服务发布和交易的中介平台，以通过共享信息资源、报告交易机会、辅助交易用户提供相关交易信息资料（例如配送用户需配送物品的取件地点、送达地点、货物重量、服务费用）等形式，努力促成交易用户之间的合同成立，并收取一定的手续服务费。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;四、用户同意，并充分理解准道公司不是配送服务的交易的一方，不对用户间的交易负责，由此产生的纠纷由用户自行处理，与准道公司无关。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;五、用户同意，并充分理解准道不对交易完成之后的信息资料更新等事项负责，如发生此方面的问题，由用户自行处理，与准道无关。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;六、准道公司不希望用户之间及用户与配送任务发布方之间产生任何纠纷，但并不保证不发生该类纠纷。如产生前述纠纷，准道会努力协助用户解决。如无法协商处理的，交易各方可依据现行有效的法律提交有权机关或机构进行处理，准道佣兵及准道公司不参与其中；对前述纠纷之任何责任和后果，由交易各方承担，与准道公司无关。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;七、准道公司保证对交易过程中涉及到的交易信息资料进行保密，且不对任何非交易方的第三方透露。但是，如因用户或第三方的原因（包括但不限于黑客攻击、计算机病毒入侵、因政府管制造成的暂时性关闭、互联网接入提供商原因、电信管理部门的原因等）导致泄密，准道公司不承担任何责任。同时，当政府部门或司法部门依照法定程序要求披露相关个人资料及交易信息，准道公司依法予以披露也不担责。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;八、如因系统维护或升级而需暂停服务时，准道公司及准道佣兵将事先公告。如因线路及准道控制范围外的硬件故障或其他不可抗力原因而导致暂停服务，准道对由此产生的不便或损失不承担任何责任。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;九、准道佣兵不希望出现任何人利用准道佣兵或因使用准道佣兵而侵犯他人合法权益的行为，但并不保证不会发生此类行为或类似行为。准道佣兵将依据中国法律采取必要的措施防止发生前述各类行为或降低发生这类行为的可能性或者降低由此造成的损失及其后果。对于因前述各类情形而产生的任何纠纷，将由权利受到侵害之人和侵权方依据中华人民共和国现行的有关法律通过适当的方式直接加以解决，准道佣兵及准道公司不参与其中；对于因此类行为产生的各类纠纷之任何责任和后果，由相关责任方承担，准道佣兵及准道公司不承担任何责任及后果。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;十、任何非准道佣兵责任而产生的任何其他纠纷，概由纠纷各方依据中国相关法律以适当的方式直接加以解决，准道佣兵不参与其中；对于因该类行为产生的各类纠纷之任何责任和后果，由相关各方承担，准道佣兵及准道公司不承担任何责任及后果。</text>
                <text class="h4 m-t-30">【第三方链接】</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;准道佣兵可能包含由第三方设立与维护的网站/网页链接。准道佣兵对第三方网站/网页的链接行为，不代表准道认可第三方网站/网页的内容，亦不代表准道承担因用户进入第三方网站/网页引发的法律责任。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;准道建议用户谨慎进入其他网站/网页以免遭受病毒或其他破坏性程序的侵害。用户选择访问准道佣兵链接的第三方网站/网页的，视为用户知晓并愿意自行承担相应风险。</text>
                <text class="h4 m-t-30">【禁止行为】</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户不得在准道佣兵发表违反国家法律的言论，不得发表包含种族、肤色、性别、性取向、宗教、民族、地域、残疾、社会经济状况歧视内容的言论，不得发表侮辱、诽谤他人的言论，不得发表损害他人商业信誉的言论，不得发表宣扬邪教、色情、淫秽、暴力、迷信、教唆犯罪的言论。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户不得在准道佣兵从事任何可能侵害他人知识产权的行为，包括但不限于侵犯他人专利、著作权、商标专用权、技术秘密、商业秘密。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户利用准道佣兵从事上述活动的，准道公司有权立即删除用户发布的信息，并有权立即终止对其的服务且无需承担任何责任。</text>
                <text class="h4 m-t-30">【特别提示】</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;侵入计算机信息系统、通过非法手段获取他人计算机信息系统中的数据或对系统实施非法控制等行为，可能涉及刑事犯罪。通过网络平台发布虚假信息，骗取他人财物的行为，可能涉及刑事犯罪。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;准道公司将对出现在准道佣兵上的违法犯罪行为进行干预与制止，并依法协助国家有关部门进行必要的调查与处置。用户利用准道佣兵实施任何违法犯罪活动的，准道公司有权立即终止对其的服务且无需承担任何责任。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;准道公司依法干预与制止网络违法犯罪的举动，用户理解并愿意提供必要的协助；在干预与制止违法犯罪的过程中对用户造成的影响，用户自愿放弃索赔权利。</text>
                <text class="h4 m-t-30">【法律适用与管辖】</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;准道佣兵及本法律声明适用中华人民共和国法律。任何因使用准道佣兵发生的争议，或因本法律声明引发的争议，均由准道公司之住所地人民法院管辖。</text>
            </div>
        </scroller>

    </div>
</template>

<!--引入bui-weex样式文件-->
<style lang="sass" src="bui-weex/src/css/buiweex.scss"></style>
<style src="../../css/index.css"></style>
<script>
    //引入bui-weex模块
    //import buiweex from 'bui-weex'
    var buiweex = require("bui-weex");
    module.exports = {
        data: function () {
            return {}
        },
        methods: {

        },
        components: {},
        mounted: function () {

        }
    }
</script>
<style scoped>
    .shuiyin {
        position: absolute;
        left: 0;
        top: 0;
    }

    .shuiyinImg {
        margin-top: 500px;
        margin-bottom: 500px;
    }
</style>


