!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,i){return void 0===i&&(i="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(i)}:e(window.jQuery)}(function(e){if(e.extend(e.FE.DEFAULTS,{aviaryKey:"542e1ff5d5144b9b81cef846574ba6cf",aviaryScriptURL:"https://dme0ih8comzn4.cloudfront.net/imaging/v3/editor.js",aviaryOptions:{displayImageSize:!0,theme:"minimum"}}),e.FE.PLUGINS.imageAviary=function(t){function i(e,t){var i=document.createElement("script");i.type="text/javascript",i.defer="defer",i.src=e,i.innerText="",i.onload=t,document.getElementsByTagName("head")[0].appendChild(i)}function r(){t.shared.feather_editor||(t.shared.feather_editor=!0,"undefined"==typeof Aviary?i(t.opts.aviaryScriptURL,a):a())}function a(){t.shared.feather_editor=new Aviary.Feather(e.extend({apiKey:t.opts.aviaryKey,onSave:function(i,r){var a=new Image;a.crossOrigin="Anonymous",a.onload=function(){var i=document.createElement("CANVAS"),r=i.getContext("2d");i.height=this.height,i.width=this.width,r.drawImage(this,0,0);for(var a=i.toDataURL("image/png"),n=atob(a.split(",")[1]),o=[],d=0;d<n.length;d++)o.push(n.charCodeAt(d));var s=new Blob([new Uint8Array(o)],{type:"image/png"});t.shared.feather_editor.instance.image.edit(e(t.shared.feather_editor.current_image)),t.shared.feather_editor.instance.image.upload([s]),t.shared.feather_editor.close()},a.src=r,t.shared.feather_editor.showWaitIndicator()},onError:function(e){throw new Error(e.message)},onClose:function(){t.shared.feather_editor.instance.image.get()||t.shared.feather_editor.instance.image.edit(e(t.shared.feather_editor.current_image))}},t.opts.aviaryOptions))}function n(e){"object"==typeof e.shared.feather_editor&&(e.shared.feather_editor.current_image=e.image.get()[0],e.shared.feather_editor.instance=e,e.shared.feather_editor.launch({image:e.image.get()[0],url:e.image.get()[0].src}))}return{_init:r,launch:n}},e.FE.DefineIcon("aviary",{NAME:"sliders"}),e.FE.RegisterCommand("aviary",{title:"Advanced Edit",undo:!1,focus:!1,callback:function(){this.imageAviary.launch(this)},plugin:"imageAviary"}),!e.FE.PLUGINS.image)throw new Error("Image Aviary plugin requires image plugin.");e.FE.DEFAULTS.imageEditButtons.push("aviary")});