function NavbarSetSignStatus(){Cookies.get("Authorization")?($("#UserSignupContainer").hide(),$("#UserCenterContainer").show(),$("#UserLogoutHandler").click(UserLogoutHandler)):($("#UserSignupContainer").show(),$("#UserCenterContainer").hide())}function UserLogoutHandler(){return Cookies.remove("Authorization"),AlertShowAutoCloseAndGoPage("登出成功","登出成功, 3秒后返回主页","/index.html"),!1}function NavbarInit(){$("body").prepend($(NavbarTemplate));var a={creater_uid:createrUidDefault};APIColumnGetList(a,AlertShowAjaxError,function(a){if(0===a.code){var n=GetURIParamIdValue(location.href,"column_id");if((""===n||n===columnIdDefault)&&(-1!==location.href.indexOf("index.html")||-1===location.href.indexOf(".html"))&&($("#NavbarIndexItemContainer").addClass("am-active"),$(document).attr("title",WebSiteTitle)),!a.list||0===a.list.length)return;$.each(a.list,function(a,t){var e="list.html?column_id="+t.id+"&page_size=10&page_num=1";"拼车"===t.name&&(e="carpooling_list.html?column_id="+t.id+"&page_size=10&page_num=1");var r=$("<a></a>").attr("href",e).text(t.name),i=$("<li></li>");t.id===n&&($(document).attr("title",t.name),i.addClass("am-active")),$(".am-nav").append(i.append(r))})}else AlertShowError(a.sub_error)})}function NavbarRender(){NavbarInit(),NavbarSetSignStatus()}var NavbarTemplate='<header class="am-topbar am-topbar-inverse">\n    <h1 class="am-topbar-brand">\n        <a href="index.html"><img src="assets/i/logo.png">'+WebSiteTitle+'</a>\n    </h1>\n\n    <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" data-am-collapse="{target: \'#doc-topbar-collapse\'}"><span class="am-sr-only">导航切换</span> <span class="am-icon-bars"></span></button>\n\n    <div class="am-collapse am-topbar-collapse" id="doc-topbar-collapse">\n        <ul class="am-nav am-nav-pills am-topbar-nav">\n           <li id="NavbarIndexItemContainer"><a href="index.html">首页</li>\n        </ul>\n\n        <form class="am-topbar-form am-topbar-left am-form-inline am-hide" role="search">\n            <div class="am-form-group">\n                <input type="text" class="am-form-field am-input-sm" placeholder="搜索" id="search">\n            </div>\n        </form>\n\n        <div class="am-topbar-right" id="UserSignupContainer">\n            <a class="am-btn am-btn-primary am-topbar-btn am-btn-sm" href="login.html">登录</a>\n            <a class="am-btn am-btn-primary am-topbar-btn am-btn-sm" href="signup.html">注册</a>\n        </div>\n\n        <div class="am-topbar-right" id="UserCenterContainer">\n            <a class="am-btn am-btn-primary am-topbar-btn am-btn-sm" href="new.html">发帖</a>\n            <a class="am-btn am-btn-primary am-topbar-btn am-btn-sm" href="admin/index.html">个人中心</a>\n            <a class="am-btn am-btn-primary am-topbar-btn am-btn-sm" id="UserLogoutHandler">登出</a>\n        </div>\n    </div>\n</header>';