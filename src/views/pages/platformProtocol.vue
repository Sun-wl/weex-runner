<template>
    <div>
        <bui-header title="准道佣兵平台协议" :styleEx="headerStyle">
            <div slot="left" @click="back" style="width: 70px; height:100px; padding-left:20px; padding-top:35px;">
                <bui-image src="/image/back.png" @click="back" width="35px" height="30px"></bui-image>
            </div>
        </bui-header>
        <scroller>
            <div class="shuiyin">
                <bui-image src="/image/shuiyin.png" class="shuiyinImg" width="750px" height="750px"></bui-image>
                <bui-image src="/image/shuiyin.png" class="shuiyinImg" width="750px" height="750px"></bui-image>
                <bui-image src="/image/shuiyin.png" class="shuiyinImg" width="750px" height="750px"></bui-image>
                <bui-image src="/image/shuiyin.png" class="shuiyinImg" width="750px" height="750px"></bui-image>
                <bui-image src="/image/shuiyin.png" class="shuiyinImg" width="750px" height="750px"></bui-image>
            </div>
            <div style="padding:30px;">
                <text class="h4 text-center">准道佣兵平台协议</text>

                <text class="h4 m-t-30">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当您在准道网络科技（上海）有限公司（以下简称“准道公司”）开发的准道佣兵应用软件（以下简称“佣兵APP”）上进行准道佣兵注册之前，您应当仔细阅读本服务条款。本服务条款将成为您和准道公司之间具有法律效力的文件。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、准道佣兵应为年满18周岁且具备完全民事行为能力的自然人。佣兵队长／佣兵团指与佣兵建立劳动关系的管配送管理方，也受本服务条款项下规定的约束。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、准道佣兵完成注册并经佣兵APP所属官方合作伙伴和/或准道公司审核通过后，可以通过佣兵APP自主接单或佣兵APP主动派单并完成用户下达的服务任务事项，并在该任务事项完成后获得任务事项发布方（用户）给付的相应服务费和一定奖励（如有）。准道佣兵抢单或接受指派订单后，应按照本协议要求为下单用户提供订单要求指定的服务。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、本软件作为信息发布、服务平台，仅为平台上的用户提供信息服务，供用户自主选择发布、接受任务事项信息。不对任务事项信息的真实性或准确性及所涉物品的质量、安全或合法性等提供担保。您应自行谨慎判断确定相关信息的真实性、合法性和有效性，并自行承担因此产生的责任与损失。用户对本平台上任何信息资料的选择、接受，取决于用户自己并由其自行承担所有风险和责任。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、请您仔细阅读本条款，您成功申请成为准道佣兵后，本条款即构成了对双方具有法律约束力的文件。</text>
                <text class="h4 title">服务模式：</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、准道佣兵申请注册、按照注册要求提供相关证明文件并经所属官方合作伙伴和准道公司审核通过后，即可通过手机等终端自主选择接受、完成用户通过佣兵APP发布的任务事项，并在事项完成后获得信息发布方给付的相应服务费及一定奖励（如有）。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、准道佣兵应按照本条款要求，自行接单或接受指派订单，并完成佣兵APP上发布的订单任务事项。准道佣兵承诺：在接受及完成任务事项的过程中，准道佣兵的人身及财产安全由准道佣兵自行负责并承担全部责任；因准道佣兵原因造成任何第三方人身、财产损失或侵害第三方合法权益的，准道佣兵应妥善处理纠纷并承担全部赔偿责任。</text>
                <text class="h4 title">注册有效期限：</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、本注册协议从准道佣兵资格审核通过之日起至准道佣兵资格被主动放弃、终止、丧失或准道佣兵注册协议解除或终止之日止。</text>
                <text class="h4 title">准道佣兵收益：</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、准道佣兵通过佣兵APP获取订单任务事项信息并接受、完成任务事项后，可获得用户发布的该任务事项对应的服务费，并可按照当时有效的订单规则获得相应奖励（如有）。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5、服务费的结算将采取两种模式：</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.1、每单结算，通过“准道西客”软件获取的订单，完成每单派送任务，服务费将直接付至佣兵APP内的钱包；</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.2、按月结算，通过准道开放平台获取的订单，完成配送业务后，服务费将通过其“佣兵队长”每月结算。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.3、准道佣兵月结的场景中，佣兵需同意以下约定，方可加入佣兵团及接单；</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a、准道佣兵自愿加入此佣兵团（准道的配送合作协议方），接受配送团队的佣金结算规则，在准道平台上完成的订单佣金的计算标准由所属“佣兵团”制订及结算，佣兵APP钱包中不显示此订单的服务费用；</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b、准道佣兵与准道公司不建立劳务／劳动关系，所发生的任何劳务／劳动纠纷均有所属佣兵团自行处理及承担；</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c、准道佣兵）同意准道平台按自然月将此订单服务费用统一结算给到所属佣兵团，由“佣兵队长”自行分配结算。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6、准道佣兵获得的任务报酬产生的税费，由准道佣兵依法自行承担。</text>
                <text class="h4 title">准道佣兵注册申请条件：</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7、年满十八周岁且身体健康，具有完全民事行为能力和相应劳动能力。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8、应遵守国家有关法律法规、部门规章等和佣兵APP的全部管理规定，为佣兵APP的用户提供服务。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9、准道佣兵应根据佣兵APP及准道公司具体要求完成相关学习内容，并提供相关个人信息及接受、完成任务事项所需的交通工具和其他设施设备；并对所提供的信息的真实性、有效性及使用的交通工具、设施设备的合法性、安全性、适用性承担全部责任。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10、准道佣兵应严格遵守国家法律法规和本条款及佣兵APP的要求，对在接受、完成任务事项中出现的违法、犯罪行为，包括但不限于侵占、盗窃、抢夺、抢劫等，依法自行承担全部刑事、民事责任。准道公司有权将该违法行为报告给相关司法机关及管理部门，同时有权视情节轻重暂停直至注销相关人员的准道佣兵资格。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11、准道佣兵同意佣兵APP及准道公司对其提供的信息资料进行统一管理，并用于业务统计等用途；有权对准道佣兵的服务进行监督，并决定是否暂停、注销准道佣兵账户，取消准道佣兵资格。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12、对在合作过程中知悉的准道公司的商业信息及佣兵APP用户的个人信息进行保密，准道佣兵不得阅览、复印、摘抄，不得以任何方式传播、披露、泄露，不得自行或允许他人为准道任务堂任务事项之外的用途使用，由此造成的任何不利后果，准道公司和用户都将追究其法律责任。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13、准道佣兵获得的任何补贴、扶持政策和商业利益，均以准道公司的相关公告和活动规定为准。禁止准道佣兵个人或伙同他人以欺诈的方式获取佣兵APP和准道公司给予的各种补贴、扶持政策、商业利益等。否则，准道公司有权要求退还并没收该部分违法或违规所得，注销准道佣兵资格，并追究行为人的法律责任。</text>
                <text class="h4 title">其他内容：</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;14、本条款内容包括协议正文、附件及所有准道公司通过佣兵APP已经发布的或将来可能发布的各类规则。所有规则为本协议不可分割的组成部分，与协议正文具有同等法律效力。除另行明确声明外，任何准道公司及其关联公司基于服务平台提供的服务均受本协议约束。您承诺接受并遵守本协议的约定。如果您不同意本协议的约定，您应立即停止注册程序或停止使用信息平台的服务。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15、准道公司有权根据国家法律法规的更新、产品和服务规则的调整需要不时地制订、修改本条款或各类规则，并以准道公司、佣兵APP或网站公示的方式进行公示。如您继续使用信息平台的服务的，即表示您接受经修订的协议和规则。准道佣兵应严格遵守准道公司的管理要求，为保证服务质量，准道公司有权对您进行相应管理，并要求违反管理要求的人员立即改正。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16、准道公司提供的服务为：搭建、提供及维护信息发布；为平台注册用户（信息发布方和准道佣兵）提供信息中介和管理服务，并设计、开发信息服务产品。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;17、准道佣兵应向佣兵APP提供相应的注册资料，准道佣兵保证其注册时提供的资料真实、准确、完整、合法有效。准道佣兵信息资料如有变动的，应及时更新。如果准道佣兵提供的资料信息不合法、不真实、不准确、不详尽的，需承担因此引起的相应责任及后果，并且准道公司保留终止其使用服务平台各项服务的权利。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18、准道佣兵明确同意自行承担使用网络服务的风险。准道公司对此无法作任何类型的担保。包括：不担保服务一定能满足用户的要求，也不担保服务不会中断，对服务的及时性，安全性，错误的发生都不作担保；对在服务平台上以及相关产品得到的任何服务或交易，不作担保；对平台服务所涉及的技术及信息的有效性、准确性、正确性、可靠性、稳定性、完整性和及时性无法作出任何承诺和保证；不担保平台服务的适用性、没有错误或疏漏、持续性、准确性、可靠性或适用于某一特定用途。用户理解并接受：佣兵APP作为信息发布、服务平台，无法控制每一任务事项所涉及的物品的质量、安全或合法性，任务事项内容的真实性或准确性，以及任务事项所涉各方履行任务事项的能力。您应自行谨慎判断确定相关信息的真实性、合法性和有效性，并自行承担因此产生的责任与损失。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;19、准道佣兵使用佣兵APP 进行接单的，自愿购买每日商业保险（详见三方合作协议中的保险方案），准道公司进行代买，费用由准道公司从准道佣兵钱包中代扣代缴；出现保险理赔的由准道佣兵自行处理。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20.1在任务堂平台上建立的每一任务订单都会对服务的标准做说明，您接受任务订单就表明您认可此订单的服务费并有能力完成订单的内容。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20.2消费者通过佣兵APP内的线上支付功能支付订单服务费。您应现场核对消费者是否已经支付完成相关费用，由此造成的任何争议由您自行承担，准道公司不承担责任。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20.3您完成服务并经消费者及准道公司确认后，您可以按照佣兵APP规定的提取规则对账户提现。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;21.准道佣兵了解并同意，准道公司不对因下述情况而导致的任何损害赔偿承担责任，包括但不限于利润、商誉、使用、数据等方面的损失或其它无形损失的损害赔偿：</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）使用或未能使用服务平台的服务；</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）第三方未经批准地使用用户的账户或更改用户的数据；</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（3）通过服务平台的服务购买或获取任何商品、样品、数据、信息等行为或替代行为产生的费用及损失；</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（4）用户对服务平台的服务的误解；</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（5）任何非因准道公司的原因而引起的与服务平台的服务有关的其它损失。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;22、如因不可抗力或其他准道公司无法控制的原因使佣兵APP或无法正常使用导致网上交易无法完成或丢失有关的信息、记录等，准道公司不承担责任。但是准道公司会尽可能合理地协助处理善后事宜，并努力使软件使用者免受经济损失。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23、准道佣兵同意在发现佣兵APP任何内容不符合法律规定，或不符合本用户协议条款规定的，有义务及时通知准道公司。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;24、您了解并同意：</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）违反上述承诺时，准道公司有权依据本协议的约定，做出相应处理或终止向您提供服务，且无须征得您的同意或提前通知予您；</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）根据相关法律法规或者服务平台规则，判断您的行为涉嫌违反法律法规的规定或违反本协议和/或规则的条款的，准道公司有权采取相应措施，包括但不限于直接屏蔽、删除侵权违法信息或直接停止提供服务。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25、本服务条款的订立、执行和解释及争议的解决均适用中国法律。如双方就本条款内容或其执行发生任何争议，双方应尽力友好协商解决；协商不成时，任何一方均可向准道公司所在地人民法院提起诉讼。</text>
                <text class="h4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;26、本服务条款由准道公司享有最终解释的权利。</text>

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
            return {

            }
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

    .title{
        font-weight: bold;
        margin-top:30px;
        margin-bottom:10px;
    }
</style>


