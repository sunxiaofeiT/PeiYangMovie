/** layui-v2.3.0-rc1 MIT License By https://www.layui.com */
 ;KindEditor.plugin("flash",function(e){var a=this,t="flash",l=a.lang(t+"."),i=e.undef(a.allowFlashUpload,!0),n=e.undef(a.allowFileManager,!1),o=e.undef(a.formatUploadUrl,!0),d=e.undef(a.extraFileUploadParams,{}),r=e.undef(a.filePostName,"imgFile"),u=e.undef(a.uploadJson,a.basePath+"php/upload_json.php");a.plugin.flash={edit:function(){var s=['<div style="padding:20px;">','<div class="ke-dialog-row">','<label for="keUrl" style="width:60px;">'+l.url+"</label>",'<input class="ke-input-text" type="text" id="keUrl" name="url" value="" style="width:160px;" /> &nbsp;','<input type="button" class="ke-upload-button" value="'+l.upload+'" /> &nbsp;','<span class="ke-button-common ke-button-outer">','<input type="button" class="ke-button-common ke-button" name="viewServer" value="'+l.viewServer+'" />',"</span>","</div>",'<div class="ke-dialog-row">','<label for="keWidth" style="width:60px;">'+l.width+"</label>",'<input type="text" id="keWidth" class="ke-input-text ke-input-number" name="width" value="550" maxlength="4" /> ',"</div>",'<div class="ke-dialog-row">','<label for="keHeight" style="width:60px;">'+l.height+"</label>",'<input type="text" id="keHeight" class="ke-input-text ke-input-number" name="height" value="400" maxlength="4" /> ',"</div>","</div>"].join(""),h=a.createDialog({name:t,width:450,title:a.lang(t),body:s,yesBtn:{name:a.lang("yes"),click:function(t){var l=e.trim(g.val()),i=c.val(),n=v.val();if("http://"==l||e.invalidUrl(l))return alert(a.lang("invalidUrl")),void g[0].focus();if(!/^\d*$/.test(i))return alert(a.lang("invalidWidth")),void c[0].focus();if(!/^\d*$/.test(n))return alert(a.lang("invalidHeight")),void v[0].focus();var o=e.mediaImg(a.themesPath+"common/blank.gif",{src:l,type:e.mediaType(".swf"),width:i,height:n,quality:"high"});a.insertHtml(o).hideDialog().focus()}}}),p=h.div,g=e('[name="url"]',p),f=e('[name="viewServer"]',p),c=e('[name="width"]',p),v=e('[name="height"]',p);if(g.val("http://"),i){var m=e.uploadbutton({button:e(".ke-upload-button",p)[0],fieldName:r,extraParams:d,url:e.addParam(u,"dir=flash"),afterUpload:function(l){if(h.hideLoading(),0===l.error){var i=l.url;o&&(i=e.formatUrl(i,"absolute")),g.val(i),a.afterUpload&&a.afterUpload.call(a,i,l,t),alert(a.lang("uploadSuccess"))}else alert(l.message)},afterError:function(e){h.hideLoading(),a.errorDialog(e)}});m.fileBox.change(function(e){h.showLoading(a.lang("uploadLoading")),m.submit()})}else e(".ke-upload-button",p).hide();n?f.click(function(t){a.loadPlugin("filemanager",function(){a.plugin.filemanagerDialog({viewType:"LIST",dirName:"flash",clickFn:function(t,l){a.dialogs.length>1&&(e('[name="url"]',p).val(t),a.afterSelectFile&&a.afterSelectFile.call(a,t),a.hideDialog())}})})}):f.hide();var k=a.plugin.getSelectedFlash();if(k){var b=e.mediaAttrs(k.attr("data-ke-tag"));g.val(b.src),c.val(e.removeUnit(k.css("width"))||b.width||0),v.val(e.removeUnit(k.css("height"))||b.height||0)}g[0].focus(),g[0].select()},"delete":function(){a.plugin.getSelectedFlash().remove(),a.addBookmark()}},a.clickToolbar(t,a.plugin.flash.edit)});