//top部分的hover事件			
function hover1(node1, node2){
	node1.css("border-left", "1px solid #D0CFCF")
		.css("border-right", "1px solid #D0CFCF")
		.css("background", "#FFFFFF");
	node2.css("display", "block");
	node1.find("b").css("transform", "rotate(180deg)");					
}
function hover2(node1, node2){
	node1.css("border-left", "1px solid #F2F2F2")
		.css("border-right", "1px solid #F2F2F2")
		.css("background", "none");
	node2.css("display", "none");
	node1.find("b").css("transform", "");
}
function hover3(node1, node2){
	node1.css("display", "block");
	node2.css("border-left", "1px solid #D0CFCF")
		.css("border-right", "1px solid #D0CFCF")
		.css("background", "#FFFFFF");
	node2.find("b").css("transform", "rotate(180deg)");
}
function hover4(node1, node2){
	node1.css("display", "none");
	node2.css("border-left", "1px solid #F2F2F2")
		.css("border-right", "1px solid #F2F2F2")
		.css("background", "none");
	node2.find("b").css("transform", "");
}

//head部分的购物车框的hover事件
function hover_a(node1, node2){
	node1.css("background-color","#666666").css("background-image","url(images/sc_white.png)")
		.css("color","white").find("b").css("background-image","url(images/arrow_white.png)")
		.css("transform", "rotate(180deg)");
	node2.css("display", "block");					
}
function hover_b(node1, node2){
	node1.css("background-color","#FFFFFF").css("background-image","url(images/sc.png)")
		.css("color","black").find("b").css("background-image","url(images/arrow_down.png)")
		.css("transform", "");
	node2.css("display", "none");
}
function hover_c(node1, node2){
	node1.css("display", "block");	
	node2.css("background-color","#666666").css("background-image","url(images/sc_white.png)")
		.css("color","white").find("b").css("background-image","url(images/arrow_white.png)")
		.css("transform", "rotate(180deg)");					
}
function hover_d(node1, node2){
	node1.css("display", "none");
	node2.css("background-color","#FFFFFF").css("background-image","url(images/sc.png)")
		.css("color","black").find("b").css("background-image","url(images/arrow_down.png)")
		.css("transform", "");					
}

//left_side的定时器
function tt(){
	var oBody = document.getElementById("body_id");
	var project = getByClass(oBody, "project")[0];
	var grab = getByClass(oBody, "grab")[0];
	var style = getByClass(oBody, "style")[0];
	var brand = getByClass(oBody, "brand")[0];
	var today = getByClass(oBody, "today")[0];
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	if(scrollTop>430){
		left_side.style.display = "block";
	}else{
		left_side.style.display = "none";
	}
	if((left_side.offsetTop+scrollTop)>=project.offsetTop && (left_side.offsetTop+scrollTop)<grab.offsetTop){
		change(0);
	}else if((left_side.offsetTop+scrollTop)>=grab.offsetTop && (left_side.offsetTop+scrollTop)<style.offsetTop){
		change(1);
	}else if((left_side.offsetTop+scrollTop)>=style.offsetTop && (left_side.offsetTop+scrollTop)<brand.offsetTop){
		change(2);
	}else if((left_side.offsetTop+scrollTop)>=brand.offsetTop && (left_side.offsetTop+scrollTop)<today.offsetTop){
		change(3);
	}else if((left_side.offsetTop+scrollTop)>=today.offsetTop){
		change(4);
	}
}

function change(num){
	var aA = left_side.getElementsByTagName("a");
	for(var i=0; i<aA.length; i++){
		aA[i].style.backgroundColor = "";
		aA[i].style.color = "black";
		aA[i].style.backgroundImage = "url(images/left_side.png)";
	}
	aA[num].style.backgroundColor = "black";
	aA[num].style.color = "white";
	aA[num].style.backgroundImage = "url(images/left_side2.png)";	
}

//class名获取节点（兼容IE）
function getByClass(oParent, sClass){
	var aEle = oParent.getElementsByTagName("*");
	var aResult = [];
	for(var i = 0; i < aEle.length; i++){
		if(aEle[i].className == sClass){
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}