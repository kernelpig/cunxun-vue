function CarpoolingDeleteHandler(e){$(".CarpoolingItemDeleteDialog").modal({relatedTarget:e.target,onConfirm:function(){var e=$(this.relatedTarget).attr("alt");APICarpoolingDeleteById(e,AlertShowAjaxError,function(e){0===e.code?location.reload():AlertShowError(e.sub_error)})},onCancel:function(){}})}function CarpoolingListPageRender(){NavbarRender(),FootbarRender(),CarpoolingListRender(location.href)}$(document).ready(function(){CarpoolingListPageRender()});