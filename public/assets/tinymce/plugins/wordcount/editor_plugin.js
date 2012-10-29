(function(){tinymce.create("tinymce.plugins.WordCount",{block:0,id:null,countre:null,cleanre:null,init:function(e,t){var n=this,r=0;n.countre=e.getParam("wordcount_countregex",/[\w\u2019\'-]+/g),n.cleanre=e.getParam("wordcount_cleanregex",/[0-9.(),;:!?%#$?\'\"_+=\\\/-]*/g),n.id=e.id+"-word-count",e.onPostRender.add(function(e,t){var r,i;i=e.getParam("wordcount_target_id"),i?tinymce.DOM.add(i,"span",{},'<span id="'+n.id+'">0</span>'):(r=tinymce.DOM.get(e.id+"_path_row"),r&&tinymce.DOM.add(r.parentNode,"div",{style:"float: right"},e.getLang("wordcount.words","Words: ")+'<span id="'+n.id+'">0</span>'))}),e.onInit.add(function(e){e.selection.onSetContent.add(function(){n._count(e)}),n._count(e)}),e.onSetContent.add(function(e){n._count(e)}),e.onKeyUp.add(function(e,t){if(t.keyCode==r)return;(13==t.keyCode||8==r||46==r)&&n._count(e),r=t.keyCode})},_getCount:function(e){var t=0,n=e.getContent({format:"raw"});if(n){n=n.replace(/\.\.\./g," "),n=n.replace(/<.[^<>]*?>/g," ").replace(/&nbsp;|&#160;/gi," "),n=n.replace(/(\w+)(&.+?;)+(\w+)/,"$1$3").replace(/&.+?;/g," "),n=n.replace(this.cleanre,"");var r=n.match(this.countre);r&&(t=r.length)}return t},_count:function(e){var t=this;if(t.block)return;t.block=1,setTimeout(function(){if(!e.destroyed){var n=t._getCount(e);tinymce.DOM.setHTML(t.id,n.toString()),setTimeout(function(){t.block=0},2e3)}},1)},getInfo:function(){return{longname:"Word Count plugin",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/wordcount",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}),tinymce.PluginManager.add("wordcount",tinymce.plugins.WordCount)})();