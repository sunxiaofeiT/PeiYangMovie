/** layui-v2.3.0-rc1 MIT License By https://www.layui.com */
 ;KindEditor.plugin("clearhtml",function(t){var l=this,i="clearhtml";l.clickToolbar(i,function(){l.focus();var i=l.html();i=i.replace(/(<script[^>]*>)([\s\S]*?)(<\/script>)/gi,""),i=i.replace(/(<style[^>]*>)([\s\S]*?)(<\/style>)/gi,""),i=t.formatHtml(i,{a:["href","target"],embed:["src","width","height","type","loop","autostart","quality",".width",".height","align","allowscriptaccess"],img:["src","width","height","border","alt","title",".width",".height"],table:["border"],"td,th":["rowspan","colspan"],"div,hr,br,tbody,tr,p,ol,ul,li,blockquote,h1,h2,h3,h4,h5,h6":[]}),l.html(i),l.cmd.selection(!0),l.addBookmark()})});