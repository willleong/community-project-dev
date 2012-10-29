/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */
(function(){tinymce.create("tinymce.plugins.Nonbreaking",{init:function(e,t){var n=this;n.editor=e,e.addCommand("mceNonBreaking",function(){e.execCommand("mceInsertContent",!1,e.plugins.visualchars&&e.plugins.visualchars.state?'<span data-mce-bogus="1" class="mceItemHidden mceItemNbsp">&nbsp;</span>':"&nbsp;")}),e.addButton("nonbreaking",{title:"nonbreaking.nonbreaking_desc",cmd:"mceNonBreaking"}),e.getParam("nonbreaking_force_tab")&&e.onKeyDown.add(function(e,t){t.keyCode==9&&(t.preventDefault(),e.execCommand("mceNonBreaking"),e.execCommand("mceNonBreaking"),e.execCommand("mceNonBreaking"))})},getInfo:function(){return{longname:"Nonbreaking space",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/nonbreaking",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}),tinymce.PluginManager.add("nonbreaking",tinymce.plugins.Nonbreaking)})();