/** layui-v2.3.0-rc1 MIT License By https://www.layui.com */
 ;function loadProperties(a){$.i18n.properties({name:"strings",path:"../dist/plugins/i18n/",mode:"map",language:a,encoding:"UTF-8",callback:function(){$("[data-locale]").each(function(){$(this).html($.i18n.prop($(this).data("locale")))})}})}var lang=navigator.language||navigator.userLanguage;lang=lang.substr(0,2),$("#translate_button").click(function(){console.log(lang),lang="zh"==lang?"en":"zh",console.log(lang),loadProperties(lang)});