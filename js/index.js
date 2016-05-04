$(function(){
	var as=getClass("lunbo")[0].getElementsByTagName('a');
	//console.log(as);
	var btns=getClass('btn')[0].getElementsByTagName('li');
	//console.log(btns)
	var index=0;
	var weelt=setInterval(lunbo,2000)
	function lunbo(){
		index++;
		if(index>as.length-1){
			index=0;
		}
		for(var i=0;i<as.length;i++){
			//as[i].style.zIndex="0";
			//透明度动画
			animate(as[i],{opacity:0});
			btns[i].style.background=""
		}
		//as[index].style.zIndex="99"
		animate(as[index],{opacity:1});
		btns[index].style.background="#FF3C3C"
	}
	for(var i=0;i<btns.length;i++){
		btns[i].ss=i;
		//console.log(i)
		btns[i].onclick=function(){
			for(var j=0;j<btns.length;j++){
				//as[j].style.zIndex="0";
				animate(as[j],{opacity:0});
				btns[j].style.background=""
			}
			//as[this.ss].style.zIndex="99"
			animate(as[this.ss],{opacity:1});
			this.style.background="#FF3C3C"
		}
	}
	var wbox=getClass('bannercenter')[0];
	wbox.onmouseover=function(){
		clearInterval(weelt);
	}
	wbox.onmouseout=function(){
		weelt=setInterval(lunbo,2000)
	}
	var leftbtn=getClass("btn2left")[0];
	var rightbtn=getClass("btn2right")[0];
	leftbtn.onclick=function(){
		index--;
		if(index==-1){
			index=as.length-1;
		}
		for(var i=0;i<as.length;i++){
			//as[i].style.zIndex="0";
			animate(as[i],{opacity:0});
			btns[i].style.background=""
		}
		//as[index].style.zIndex="99";
		animate(as[index],{opacity:1});
		btns[index].style.background="#FF3C3C"
	}
	rightbtn.onclick=function(){
		lunbo();
	}




	var jkhgb=$(".jkhgb")[0];
	var jk=$(".jkhg-a")[0];
	console.log(jk)
	var jas=getChild(jk);
	//console.log(jas)
	var jaw=parseInt(getStyle(jas[0],"width"));
	var ul=$(".btn3")[0];
	var lis=$("li",ul);
	console.log(lis)
	jk.style.width=jaw*jas.length+"px";
	var ind=0;
	var flag=true;
	var t=setInterval(bb,2000)
	function bb(){
		animate(jk,{marginLeft:-jaw},800,function(){
			jk.appendChild(getFirst(jk));
			jk.style.marginLeft=0+"px";
			ind++;
			if(ind==lis.length){
				ind=0;
			}
			for(var i=0;i<lis.length;i++){
				lis[i].className=""
			}
			lis[ind].className="hot";
			flag=true;
		})
	}
	var jkhgb=$(".jkhgb")[0];
	jkhgb.onmouseover=function (){
		clearInterval(t)
	}
	jkhgb.onmouseout=function (){
		t=setInterval(bb,1000)
	}
})







