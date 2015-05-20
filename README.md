封装成一个  tab  函数，提供如下 api :
tab()    全部使用默认参数
tab(".newtab",".triggers",".contents")    输入父级DOM、触发DOM、内容DOM ，其他使用默认
tab({
    element: '.newtab',
    triggers: '.triggers',
    contents '.contents',
    activeIndex: 0,
    activeTriggerClass: 'ui-tab-active',
   triggerType: 'hover',
})

<div class="newtab">
    <span class="triggers">1</span> 
    <span class="triggers">2</span> 
    <span class="triggers">3</span> 

    <div class="contents">a</div>
    <div class="contents">b</div>
    <div class="contents">c</div>
</div>

参数<br/>
element：父级DOM，默认为.newtab<br/>
triggers：触发DOM，默认为.triggers<br/>
contents：内容DOM，默认为.contents<br/>
activeIndex：指定面板，默认为0<br/>
activeTriggerClass：triggers被选中时的class,默认  ui-tab-active <br/>
triggerType ：触发类型，默认为hover<br/>
