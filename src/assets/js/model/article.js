
var ArticleDetailTemplate = '<article class="am-article">\n' +
    '    <div class="am-article-hd am-text-center">\n' +
    '        <h1 class="am-article-title am-text-primary"></h1>\n' +
    '        <hr><p class="am-article-meta"></p>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="ArticleContentContainer">\n' +
    '    </div>\n' +
    '</article>';

var ArticleDetailEnv = {
    "article_id": 0
};

function ArticleGetHandler() {
    var req = {
        "article_id": ArticleDetailEnv.article_id
    };
    APIArticleGetItem(req, AlertShowAjaxError, function (data) {
        if (data["code"] === 0) {
            $(document).attr("title", data["item"].title);
            $(".am-article-title").text(data["item"].title);
            $(".ArticleContentContainer").html(data["item"].content);
            $("#ttt").html(data["item"].content);
            var userLink = "/user.html?user_id="+data["item"].updater_uid;
            $(".am-article-meta").append("发布作者: &nbsp;");
            $(".am-article-meta").append($("<a></a>").text(data["item"].nickname).attr("href", userLink));
            $(".am-article-meta").append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;发布时间: &nbsp;");
            $(".am-article-meta").append(GMT2Beijing(data["item"].updated_at));
            $(".am-article-meta").append("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浏览次数: &nbsp;15");
        } else {
            AlertShowError(data["sub_error"]);
        }
    });
}

function ArticleCurrentEnv(currentUrl) {
    ArticleDetailEnv.article_id = GetURIParamInt(currentUrl, "article_id") || 1
}

function AriticleDetailRender(currentUrl) {
    $(".ContentContainer").append(ArticleDetailTemplate);
    ArticleCurrentEnv(currentUrl);
    ArticleGetHandler();
}