
var UserLoginTemplate = '<div class="am-container am-margin-top">\n' +
    '    <form method="post" class="am-form">\n' +
    '        <fieldset>\n' +
    '            <legend>用户登录</legend>\n' +
    '            <div class="am-form-group">\n' +
    '                <div class="am-input-group">\n' +
    '                    <span class="am-input-group-label"><i class="am-icon-phone am-icon-fw"></i></span>\n' +
    '                    <input type="number" id="phone" minlength="11" maxlength="11" required placeholder="手机号码" data-validation-message="输入大陆手机号码, 必须为11位">\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="am-form-group">\n' +
    '                <div class="am-input-group">\n' +
    '                    <span class="am-input-group-label"><i class="am-icon-lock am-icon-fw"></i></span>\n' +
    '                    <input type="password" id="password" required minlength="8" maxlength="16" placeholder="密码" data-validation-message="输入密码, 必须为8~16位">\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="am-form-group">\n' +
    '                <div class="am-input-group">\n' +
    '                    <input type="number" id="captcha_value" required minlength="3" maxlength="3" placeholder="验证码" data-validation-message="输入图形验证码, 必须为3位">\n' +
    '                    <span class="am-input-group-label"><a href="#"><img src="#" id="CaptchaGetImageHandler"\n' +
    '                                                                        class="am-img-loaded"></a></span>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="am-form-group">\n' +
    '                <input type="button" id="UserLoginHandler" value="登 录" class="am-btn am-btn-primary am-btn-sm">\n' +
    '                <input type="button" id="reset_password" value="忘记密码" class="am-btn am-btn-default am-btn-sm am-icon-question">\n' +
    '            </div>\n' +
    '        </fieldset>\n' +
    '    </form>\n' +
    '</div>';

// 用户登录处理函数
function UserLoginHandler() {
    var req = {
        phone: "86 " + $('#phone').val(),
        password: $('#password').val(),
        captcha_value: $('#captcha_value').val(),
        captcha_id: Cookies.get('captcha_id'),
        source: 'web'
    };
    APIUserLogin(req, AlertShowAjaxError, function (data) {
        if (data['code'] === 0) {
            Cookies.set('Authorization', data['user_token']);
            Cookies.set('UserId', data['user_id']);
            Cookies.set('UserRole', data['user_role']);
            AlertShowAutoClose("登录成功", "马上返回到之前页面!");
            GoToFromPage();
        } else {
            AlertShowError(data['sub_error']);
        }
    });
}

function UserLoginRender() {
    $(".ContentContainer").append(UserLoginTemplate);

    CaptchaGetImageHandler();
    $('#CaptchaGetImageHandler').click(CaptchaGetImageHandler);
    $('#UserLoginHandler').click(UserLoginHandler);
    $(".am-form").validator(formValidator);
}