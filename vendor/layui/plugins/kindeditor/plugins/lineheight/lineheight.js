/** layui-v2.3.0-rc1 MIT License By https://www.layui.com */
 ;KindEditor.plugin("lineheight",function(e){var i=this,n="lineheight",t=i.lang(n+".");i.clickToolbar(n,function(){var h="",c=i.cmd.commonNode({"*":".line-height"});c&&(h=c.css("line-height"));var a=i.createMenu({name:n,width:150});e.each(t.lineHeight,function(n,t){e.each(t,function(e,n){a.addItem({title:n,checked:h===e,click:function(){i.cmd.toggle('<span style="line-height:'+e+';"></span>',{span:".line-height="+e}),i.updateState(),i.addBookmark(),i.hideMenu()}})})})})});