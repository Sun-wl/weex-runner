var buiweex = require("bui-weex");
var navigator = weex.requireModule('navigator');
var stream = weex.requireModule('stream');

/*var common = {
    "fontIcon": require("../font/font-icon.vue"),
}*/

var mixins = {
    data: function () {
        return {
            headerStyle: {
                'background-color': '#f2aa24'
            },
            baseUrl: ''
        }
    },
    components: {
        'bui-header': buiweex.buiHeader,
        'bui-icon': buiweex.buiIcon,
        'bui-button': buiweex.buiButton,
        'bui-image': buiweex.buiImage,
        'bui-content': buiweex.buiContent,
        'bui-content-scroll': buiweex.buiContentScroll,
        "bui-tabbar": buiweex.buiTabbar,
        "bui-tabbar-item": buiweex.buiTabbarItem,
        // "font-icon": common.fontIcon
    },
    methods: {
        back () {
            buiweex.pop();
        },
        fetch (opt, callback) {
            //老版本
            if(buiweex.getContextPath().indexOf('192.168.31.128:8686/dist') >= 0 && opt.old){
                this.baseUrl = 'http://qa.gidoor.com:7000/member/';
            }else if(buiweex.getContextPath().indexOf('native.gidoor.com') >= 0 && opt.old){
                this.baseUrl = 'http://member.gidoor.com/';
            }
            var _this = this;
            return new Promise(function (resolve, reject) {
                stream.fetch({
                    url: _this.baseUrl + opt.url,
                    method: opt.method ? opt.method : 'GET',
                    body: opt.params,
                    type: 'json'
                }, function (res) {
                    if (res.status == 200) {
                        resolve(res.data);
                        callback(res.data)
                    } else {
                        reject(res)
                        buiweex.toast('服务器出现异常，请稍后重试')
                    }
                })
            })

        },
        toParams(obj) {
            var param = ""
            for (const name in obj) {
                if (typeof obj[name] != 'function') {
                    param += "&" + name + "=" + encodeURI(obj[name])
                }
            }
            return param.substring(1)
        }
    },
    created(){
        if(buiweex.getContextPath().indexOf('192.168.31.128:8686/dist') >= 0){
            // this.baseUrl = 'http://192.168.31.201:8080/api/';
            this.baseUrl = 'http://test.gidoor.com/api/';
        }else if(buiweex.getContextPath().indexOf('native.gidoor.com') >= 0){
            this.baseUrl = 'http://renwu.gidoor.com/api/';
        }
    }
}

export default mixins;

