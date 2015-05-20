Tab
======
封装成一个  tab  函数，提供如下 api :<br/>
tab()    全部使用默认参数<br/>
tab(".newtab",".triggers",".contents")    输入父级DOM、触发DOM、内容DOM ，其他使用默认<br/>
tab({     <br/>
    element: '.newtab',<br/>
    triggers: '.triggers',<br/>
    contents '.contents',<br/>
    activeIndex: 0,<br/>
    activeTriggerClass: 'ui-tab-active',<br/>
   triggerType: 'hover'     <br/>
   })<br/>


\<div class="newtab"><br/>
 \<span class="triggers">1\</span><br/>
\<span class="triggers">2\</span><br/>
\<span class="triggers">3\</span><br/>

 \<div class="contents">a\</div><br/>
 \<div class="contents">b\</div><br/>
 \<div class="contents">c\</div><br/>
\</div>


参数<br/>
element：父级DOM，默认为.newtab<br/>
triggers：触发DOM，默认为.triggers<br/>
contents：内容DOM，默认为.contents<br/>
activeIndex：指定面板，默认为0<br/>
activeTriggerClass：triggers被选中时的class,默认  ui-tab-active <br/>
triggerType ：触发类型，默认为hover<br/>
