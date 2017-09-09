/**
 * Created by blueair on 17-9-7.
 */

// 刷新图形验证码
function RefreshCaptchaImage() {
    var posting = $.post(captchaBaseURI + "/");
    posting.done(function (data) {
        var captchaImageURI = captchaBaseURI + "/" + data['captcha_id'] + "?width=90&height=30";
        $('#captcha_image').attr('src', captchaImageURI);
        Cookies.set('captcha_id', data['captcha_id']);
    });
}

// 登录处理函数
function LoginHandler() {
    var req = {
        phone: "86 " + $('#phone').val(),
        password: $('#password').val(),
        captcha_value: $('#captcha_value').val(),
        captcha_id: Cookies.get('captcha_id'),
        source: 'web'
    };
    var posting = $.ajax({
        url: userBaseURI + "/login",
        type: "post",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(req),
        error: ShowAlertAjax,
        success: function (data) {
            if (data['code'] === 0) {
                Cookies.set('Authorization', data['user_token']);
                ShowAlertAutoClose("登录成功", "马上返回到之前页面!");
                GoToFromPage();
            } else {
                ShowAlertError(data['sub_error']);
            }
        }
    });
}

// 初始化处理
$(document).ready(function () {
    RefreshCaptchaImage();
    $('#captcha_image').click(RefreshCaptchaImage);
    $('#login_commit').click(LoginHandler);
});