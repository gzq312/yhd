//ie6兼容问题
function getClass(classname,obj){
	var obj=obj||document;//给obj赋值
	if(obj.getElementsByClassName){
		//console.log("支持")
		return obj.getElementsByClassName(classname);
	}else{
		var arr=[];
		var alls=obj.getElementsByTagName("*")
		for(var i=0;i<alls.length;i++){
			if(checkbox(alls[i].className,classname)){
				arr.push(alls[i]);
			}
        }
		return arr;
	}
}
function checkbox(newarr,oldarr){
	var chlist=newarr.split(" ");
	var flag=false;
	for(i=0;i<chlist.length;i++){
		if(chlist[i]==oldarr){
			flag=true;
		}
	}
	return flag;
}


function getStyle(obj,attr){
if(!obj.currentStyle){
	return getComputedStyle(obj,null)[attr];//guge huohu ie9-11
}else{
	return obj.currentStyle.attr;//ie6-11
}
}



function $(selector,obj){
	var obj=obj||document;
	if(typeof selector=='string'){
		if(selector.charAt(0)==('.')){
			return getClass(selector.substring(1),obj)
		}else if(selector.charAt(0)=='#'){
			return obj.getElementById(selector.substring(1))
		}else if(/^[a-z][a-z1-6]{0,9}$/g.test(selector)){
			return obj.getElementsByTagName(selector)
		}else if(/^<[a-z][a-z1-6]{0,9}>$/.test(selector)){
			return document.createElement(selector.slice(1,-1))
        }
	}else if(typeof selector=='function'){
			window.onload=function(){
				selector()
			}
		}
}


//处理兼容性问题
function getText(obj,val){
	if(val==undefined){
	     // "" ||undefined
		if(typeof obj.textContent=="string"){
	    	console.log("IE9-11、FireFox、Chrome");
	    	return obj.textContent;
	    }
	    else{
	    	console.log("IE6-11、Chrome");
	    	return obj.innerText;
	    }
	}else{
		if(typeof obj.textContent=="string"){
	    	//console.log("IE9-11、FireFox、Chrome");
	    	obj.textContent=val;
	    }
	    else{
	    	//console.log("IE6-11、Chrome");
	    	obj.innerText=val;
	    }
	}
	
}

//获取所有子节点
function getChild(parent,t){
	var t=t||false;	
	var childs=parent.childNodes;
	var arr=[];
	
	if(t==true){
			for(var i=0;i<childs.length;i++){
    if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s+|\s+$/g,"")!='')){
    	arr.push(childs[i])
    }
} 
	} else if(t==false){
			for(var i=0;i<childs.length;i++){
    if(childs[i].nodeType==1){
    	arr.push(childs[i])
    }
}
	}
return arr
}


//获取子节点第一个
function getFirst(obj){
	return getChild(obj)[0];
     }
    
//获取子节点最后一个
 function getList(obj){
     	var allChild=getChild(obj)
	 return allChild[allChild.length-1]
	}
//获取任何一个节点
function getNum(obj,num){
    return getChild(obj)[num];
}

//获取下一个兄弟节点
function getNext(obj){
    var next=obj.nextSibling;
    if(next==null){
    	return false;
    }
    while(next.nodeType==8||(next.nodeType==3&&next.nodeValue.replace(/^\s+|\s+$/g,'')=='')){
    	next=next.nextSibling;
    	    }
    	    if (next==null) {
    	    	return false;
    	    }
    return next;
}
//获取上一个兄弟节点
function getPre(obj){
    var up=obj.previousSibling;
    if(up==null){
    	return false;
    }
    while(up.nodeType==8||(up.nodeType==3&&up.nodeValue.replace(/^\s+|\s+$/g,'')=='')){
    	up=up.previousSibling;
    	    }
    	    if (up==null) {
    	    	return false;
    	    }
    return up;
}
//插入到之前
function insertBefore(obj1,obj2){
	var parentNode=obj2.parentNode;
	parentNode.insertBefore(obj1,obj2);
}
//插入到之后
function insertAfter(obj1,obj2){
	var next=getNext(obj2);
	insertBefore(obj1,next);
}