/*
* @Author: we
* @Date:   2019-12-08 13:05:20
* @Last Modified by:   we
* @Last Modified time: 2019-12-09 17:00:24
*/
var box=document.getElementById("box");
var slider=document.getElementById("slider");
var navList=document.getElementById("nav").children;
var right=document.getElementById("right");
var left=document.getElementById("left");
var p1=document.getElementById("p1");
var i=1;
navList[0].style.backgroundColor="red";
navList[0].style.color="#ccc";
function next(){
	i++;
	navChange();
	animate(slider,{left:-1200*i},function(){
		if(i>=6){
			slider.style.left="-1200px";
			i=1;
		}
	});
}
function pre(){
	i--;
	navChange();
	animate(slider,{left:-1200*i},function(){
		if(i<=0){
			slider.style.left="-6000px";
			i=5;
		}
	});
}
var time1=setInterval(next,3000);
box.onmouseover=function(){
	animate(left,{opacity:50});
	animate(right,{opacity:50});
	clearInterval(time1);
}
box.onmouseout=function(){
	animate(left,{opacity:0});
	animate(right,{opacity:0});
	time1=setInterval(next,3000);
}
right.onclick=next;
left.onclick=pre;
for(var j=0;j<navList.length;j++){
	navList[j].i=j;
	navList[j].onclick=function(){
		i=this.i+1;
		navChange();
		animate(slider,{left:-1200*i});
	}
}
function navChange(){
	for(var k=0;k<navList.length;k++){
		navList[k].style.backgroundColor="#ccc";
		navList[k].style.color="black";
	}
	if(i===6){
		navList[0].style.backgroundColor="red";
		navList[0].style.color="#ccc";
	}
	else if(i===0){
		navList[4].style.backgroundColor="red";
		navList[4].style.color="#ccc";
	}
	else{		
		navList[i-1].style.backgroundColor="red";
		navList[i-1].style.color="#ccc";
	}
}

setInterval(function(){

			var sty=getComputedStyle(p1,null);
			num=parseInt(sty.marginLeft);
			if(num>-400){
				num=num-1;
				num=num+"px";
				p1.style.marginLeft=num;
			}		
			else{
				p1.style.marginLeft="1000px";
			}	
		}, 20)
