/** layui-v2.3.0-rc1 MIT License By https://www.layui.com */
 ;KindEditor.plugin("insertfile",function(e){var l=this,a="insertfile",i=e.undef(l.allowFileUpload,!0),t=e.undef(l.allowFileManager,!1),n=e.undef(l.formatUploadUrl,!0),o=e.undef(l.uploadJson,l.basePath+"php/upload_json.php"),r=e.undef(l.extraFileUploadParams,{}),d=e.undef(l.filePostName,"imgFile"),u=l.lang(a+".");l.plugin.fileDialog=function(s){var f=e.undef(s.fileUrl,"http://"),c=e.undef(s.fileTitle,""),p=s.clickFn,g=['<div style="padding:20px;">','<div class="ke-dialog-row">','<label for="keUrl" style="width:60px;">'+u.url+"</label>",'<input type="text" id="keUrl" name="url" class="ke-input-text" style="width:160px;" /> &nbsp;','<input type="button" class="ke-upload-button" value="'+u.upload+'" /> &nbsp;','<span class="ke-button-common ke-button-outer">','<input type="button" class="ke-button-common ke-button" name="viewServer" value="'+u.viewServer+'" />',"</span>","</div>",'<div class="ke-dialog-row">','<label for="keTitle" style="width:60px;">'+u.title+"</label>",'<input type="text" id="keTitle" class="ke-input-text" name="title" value="" style="width:160px;" /></div>',"</div>","</form>","</div>"].join(""),v=l.createDialog({name:a,width:450,title:l.lang(a),body:g,yesBtn:{name:l.lang("yes"),click:function(a){var i=e.trim(k.val()),t=h.val();return"http://"==i||e.invalidUrl(i)?(alert(l.lang("invalidUrl")),void k[0].focus()):(""===e.trim(t)&&(t=i),void p.call(l,i,t))}}}),m=v.div,k=e('[name="url"]',m),b=e('[name="viewServer"]',m),h=e('[name="title"]',m);if(i){var w=e.uploadbutton({button:e(".ke-upload-button",m)[0],fieldName:d,url:e.addParam(o,"dir=file"),extraParams:r,afterUpload:function(i){if(v.hideLoading(),0===i.error){var t=i.url;n&&(t=e.formatUrl(t,"absolute")),k.val(t),l.afterUpload&&l.afterUpload.call(l,t,i,a),alert(l.lang("uploadSuccess"))}else alert(i.message)},afterError:function(e){v.hideLoading(),l.errorDialog(e)}});w.fileBox.change(function(e){v.showLoading(l.lang("uploadLoading")),w.submit()})}else e(".ke-upload-button",m).hide();t?b.click(function(a){l.loadPlugin("filemanager",function(){l.plugin.filemanagerDialog({viewType:"LIST",dirName:"file",clickFn:function(a,i){l.dialogs.length>1&&(e('[name="url"]',m).val(a),l.afterSelectFile&&l.afterSelectFile.call(l,a),l.hideDialog())}})})}):b.hide(),k.val(f),h.val(c),k[0].focus(),k[0].select()},l.clickToolbar(a,function(){l.plugin.fileDialog({clickFn:function(e,a){var i='<a class="ke-insertfile" href="'+e+'" data-ke-src="'+e+'" target="_blank">'+a+"</a>";l.insertHtml(i).hideDialog().focus()}})})});