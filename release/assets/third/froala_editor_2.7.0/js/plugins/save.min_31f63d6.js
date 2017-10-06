!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,n){return void 0===n&&(n="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(n)}:e(window.jQuery)}(function(e){e.extend(e.FE.DEFAULTS,{saveInterval:1e4,saveURL:null,saveParams:{},saveParam:"body",saveMethod:"POST"}),e.FE.PLUGINS.save=function(t){function n(e,n){t.events.trigger("save.error",[{code:e,message:c[e]},n])}function s(s){if("undefined"==typeof s&&(s=t.html.get()),t.events.trigger("save.before")===!1)return!1;if(t.opts.saveURL){var o={};for(var a in t.opts.saveParams)if(t.opts.saveParams.hasOwnProperty(a)){var r=t.opts.saveParams[a];o[a]="function"==typeof r?r.call(this):r}var i={};i[t.opts.saveParam]=s,e.ajax({type:t.opts.saveMethod,url:t.opts.saveURL,data:e.extend(i,o),crossDomain:t.opts.requestWithCORS,xhrFields:{withCredentials:t.opts.requestWithCredentials},headers:t.opts.requestHeaders}).done(function(e){v=s,t.events.trigger("save.after",[e])}).fail(function(e){n(l,e.response||e.responseText)})}else n(d)}function o(){clearTimeout(u),u=setTimeout(function(){var e=t.html.get();(v!=e||f)&&(v=e,f=!1,s(e))},t.opts.saveInterval)}function a(){o(),f=!1}function r(){f=!0}function i(){t.opts.saveInterval&&(v=t.html.get(),t.events.on("contentChanged",o),t.events.on("keydown destroy",function(){clearTimeout(u)}))}var u=null,v=null,f=!1,d=1,l=2,c={};return c[d]="Missing saveURL option.",c[l]="Something went wrong during save.",{_init:i,save:s,reset:a,force:r}},e.FE.DefineIcon("save",{NAME:"floppy-o"}),e.FE.RegisterCommand("save",{title:"Save",undo:!1,focus:!1,refreshAfterCallback:!1,callback:function(){this.save.save()},plugin:"save"})});