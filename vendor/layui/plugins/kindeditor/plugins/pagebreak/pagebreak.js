/** layui-v2.3.0-rc1 MIT License By https://www.layui.com */
 ;KindEditor.plugin("pagebreak",function(e){var a=this,t="pagebreak",r=e.undef(a.pagebreakHtml,'<hr style="page-break-after: always;" class="ke-pagebreak" />');a.clickToolbar(t,function(){var t=a.cmd,i=t.range;a.focus();var n="br"==a.newlineTag||e.WEBKIT?"":'<span id="__kindeditor_tail_tag__"></span>';if(a.insertHtml(r+n),""!==n){var d=e("#__kindeditor_tail_tag__",a.edit.doc);i.selectNodeContents(d[0]),d.removeAttr("id"),t.select()}})});