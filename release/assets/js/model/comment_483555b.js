function CommentCurrentEnv(e){CommentListPageEnv.relate_id=GetURIParamIdValue(e,"relate_id"),CommentListPageEnv.page_size=GetURIParamInt(e,"page_size")||PageSizeDefault,CommentListPageEnv.page_num=GetURIParamInt(e,"page_num")||PageStartNumberDefault}function CommentGetListHandler(){APICommentGetList(CommentListPageEnv,AlertShowAjaxError,function(e){0===e.code?(CommentListPageEnv.is_end=e.end,CommentListPageEnv.page_num+=1,e.list&&0!==e.list.length&&$.each(e.list,function(){var e=$(CommentItemTemplate);e.find(".UserAvatarField").attr("src",this.avatar),e.find(".UserNameField").text(++CommentBuildingCode+"楼 "+this.nickname),e.find(".CommentCreatedAtField").text(CtsTimeFormat(this.created_at)),e.find(".CommentContentItemField").text(this.content),e.find(".UserHomePageLink").attr("href","/user.html?user_id="+this.creater_uid),$(".am-comments-list").append(e)})):AlertShowError(e.sub_error)})}function CommentGetMoreHandler(){CommentListPageEnv.is_end?AlertShowAutoClose("请知晓","亲,无更多数据"):CommentGetListHandler()}function CommentCreateHandler(){var e={relate_id:CommentListPageEnv.relate_id,content:$(".CommentContentField").val()};return e.content.length>CommentLengthDefault?void AlertShowAutoClose("评论超长","评论超长, 只允许"+CommentLengthDefault+"字符!"):void APICommentCreate(e,AlertShowAjaxError,function(e){0===e.code?location.reload():AlertShowError(e.sub_error)})}function CommentChangeHandler(){var e=$(".CommentContentField").val().length;$(".CommentCurrentCount").text(e),e>CommentLengthDefault&&AlertShowAutoClose("评论超长","评论超长, 只允许"+CommentLengthDefault+"字符!")}function CommentRender(e){$(".ContentContainer").append($(CommentTemplate)),CommentCurrentEnv(e),CommentGetListHandler(),$(".CommentMaxCount").text(CommentLengthDefault),$(".CommentGetMoreHandler").click(CommentGetMoreHandler),$(".CommentCreateHandler").click(CommentCreateHandler),$(".CommentContentField").bind("input propertychange","textarea",CommentChangeHandler)}var CommentTemplate='<hr><ul class="am-comments-list am-comments-list-flip">\n        </ul>\n        <button type="button" class="am-btn am-center am-btn-default CommentGetMoreHandler">更多评论</button><hr>\n    <div class="am-u-sm-centered am-u-sm-11 am-padding-bottom-lg">\n        <form method="post" class="am-form" id="first_setup">\n            <fieldset>\n                <div class="am-form-group">\n                    <textarea class="CommentContentField" rows="5" required placeholder="跟帖内容"></textarea>\n                </div>\n                <div class="am-form-group">\n                    <input type="button" value="发表跟帖" class="am-btn am-btn-primary am-btn-sm CommentCreateHandler">\n                    <span class="CommentCurrentCount">0</span>/<span class="CommentMaxCount"></span>\n                </div>\n            </fieldset>\n        </form>\n    </div>',CommentItemTemplate='<li class="am-comment">\n                <article class="am-comment">\n                    <a href="#" class="UserHomePageLink">\n                        <img src="" alt="" class="am-comment-avatar UserAvatarField" width="48" height="48"/>\n                    </a>\n                    <div class="am-comment-main">\n                        <header class="am-comment-hd">\n                            <div class="am-comment-meta">\n                                <a href="#" class="am-comment-author UserHomePageLink UserNameField">某人</a>\n                                评论于 <time class="CommentCreatedAtField">2014-7-12 15:30</time>\n                            </div>\n                        </header>\n                        <div class="am-comment-bd CommentContentItemField">\n                            评论内容\n                        </div>\n                    </div>\n                </article>\n            </li>',CommentListPageEnv={creater_uid:createrUidDefault,relate_id:relateIdDefault,page_size:PageSizeDefault,page_num:PageStartNumberDefault,is_end:!1},CommentBuildingCode=0;