	function tab (args) {

		if(!(this instanceof arguments.callee)) return new arguments.callee(args);

		this.element = '.newtab';//默认父级DOM
		this.triggers = '.triggers';//默认触发DOM
		this.contents = '.contents';//默认内容DOM
		this.activeTriggerClass="ui-tab-active"//默认triggers被选中时的class
		this.activeIndex=0;//初始化时，自动切换到指定面板，默认为0
		this.triggerType="hover"; //触发类型
		this.onSwitch=function (index, count) {}; //触发函数
		this._init(args);//构造函数
		var that=this;
		var odiv=document.querySelector(".newtab");
		var otabheader=odiv.querySelectorAll(".triggers");
		var otabbody=odiv.querySelectorAll(".contents");
		var len_tri=otabheader.length;
		if(!len_tri) return;
		for (var i = 0; i < len_tri; i++) {
			otabheader[i].index=i;
			if(this.triggerType==="hover")
			{
				otabheader[i].onmouseover=function(){
					show(this.index);
					
					if(typeof that.onSwitch=="function") that.onSwitch(this.index,len_tri)
				}
			}
			if(this.triggerType==="click")
			{
				if(otabheader[i].addEventListener){
					otabheader[i].addEventListener("click",function(){
						show(this.index);
						if(typeof that.onSwitch=="function") that.onSwitch(this.index,len_tri)
					})
				}
				if(otabheader[i].attachEvent){
					otabheader[i].attachEvent("click",function(){
						show(this.index);
						if(typeof that.onSwitch=="function") that.onSwitch(this.index,len_tri)
					})
				}
				
			}

		};
		var show=function(idx){
				for (var j = 0; j < otabheader.length; j++) {
					that.removeclass(otabheader[j],that.activeTriggerClass);
					otabbody[j].style.display="none";
				};
				that.addclass(otabheader[idx],that.activeTriggerClass);
				otabbody[idx].style.display="block";
		}
		show(this.activeIndex);
	}

	tab.prototype._init=function(args){
		if(arguments.length<1) return;
		if(typeof arguments[0]=="object")
		{
			var obj=arguments[0];
			this.element=obj.element||this.element;
			this.triggers=obj.triggers||this.triggers;
			this.contents=obj.contents||this.contents;
			this.activeTriggerClass=obj.activeTriggerClass||this.activeTriggerClass;
			this.activeIndex=obj.activeIndex||this.activeIndex;
			this.triggerType=obj.triggerType||this.triggerType;
			this.onSwitch=obj.onSwitch||null;
			return;	
		}
		this.element=arguments[0]||this.element;
		this.triggers=arguments[1]||this.element;
		this.contents=arguments[2]||this.element;
	}
	tab.prototype.haveclass=function(obj,cls){
			return obj.className.indexOf(cls)>-1;

		}
	tab.prototype.addclass=function(obj,cls){
			if(!this.haveclass(obj,cls))
				{
					obj.className+=" "+cls;
				}
		}
	tab.prototype.removeclass=function(obj,cls){
			if (this.haveclass(obj,cls)) {
				var newclass=" "+obj.className+" ";
				newclass=newclass.replace(" "+cls+" "," ")
				obj.className=newclass;
			};

		}
