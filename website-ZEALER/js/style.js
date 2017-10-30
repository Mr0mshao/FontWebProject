	var imgs = document.getElementById("imgs");
	var oImgs = imgs.getElementsByTagName("a");//取得a，返回时数组
	var imgsList = document.getElementById("imgsList");
	var oList = imgsList.getElementsByTagName("a");//取得imgs-list下的a标签，返回时数组
	var prev = document.getElementById("prev");//取得2个按钮
	var next = document.getElementById("next");
	var current=0, //当前显示的图片的序号
		setinterval,//用于清除计时器
		current_rel=0;//记录当前显示的图片的下标为0
	var arrImgs = [];//定义一个数组用于接收的图片
	window.onload= function(){//当页面加载完时运行以下函数
		for(var i = 0 ;i<oImgs.length;i++){//将图片数组传给arrImgs数组中
			arrImgs[i] = oImgs[i];
		}
		begin();//启动轮播
		// 上一张
		document.getElementById("prev").onclick = (function(){
				clearInterval(setinterval);//清除计时器
				//判断记录下来的当前的图片下标是否小于0，否，current_rel-1 
				current_rel = current_rel <=0 ? 0 : current_rel-1;//三目运算符
				//调用play函数，传的参数为上一张图片的下标
				play(current_rel);
				current = current_rel;//current为全局变量，将上一张图片的下标赋值给current，然后begin（）；
				begin();
			});
		// 下一张
		document.getElementById("next").onclick = (function(){
			current_rel = current_rel >=arrImgs.length-1 ? 0 : current_rel+1;
			play(current_rel);
			current = current_rel;
			clearInterval(setinterval);
			begin();
		});
};
	//点击“——”切换到指定图片
	function turnImg(e){
		for (var i = 0; i < arrImgs.length; i++) {
			if (e == i) {//当 i 等于当前参数时，将数组中第 i 张图片的 className 变换一下。
				arrImgs[i].className = "show";
				oList[i].className = "active-a";
			}else{
				arrImgs[i].className = "";
				oList[i].className = "";
			}
		}
	};

	for (var i = 0; i < oList.length; i++) {
						//匿名自调用函数
		oList[i].onclick = (function(i){//给数组中每一个“——”增加点击事件
			return function(){
				turnImg(i); 
				clearInterval(setinterval);
				current = i;
				begin();
			};
		})(i);
	};
	// 自动播放
		function play(current){
		for (var i = 0; i < arrImgs.length; i++) {
			if (i!=current) {
				arrImgs[i].className = "";
				oList[i].className = "";
			}else{
				arrImgs[current].className = "show";
				oList[current].className = "active-a";
				current_rel = i;//记录图片的下标
			}
		}
	};
	// 启动轮播函数
	function begin(){
		setinterval = setInterval(function(){
			//边界处理
			if (current >= arrImgs.length) {current = 0;}//当current 大于等于数组的长度，给它置0
			//执行paly函数，将current 的值传入
			play(current);
			current++;//记录当前图片的序号
		},2000);
	};


// 菜单部分
	var showMeau = document.getElementById("showMeau");
	var closeMeau = document.getElementById("closeMeau");
	var logoMeau = document.getElementById("logoMeau");
	var header = document.getElementById("header");
	var logo = document.getElementById("logo");
	var login = document.getElementById("login");
	function show(){
		showMeau.style.display = "none";
		closeMeau.style = "display:block;color:black;padding-left:5px;";
		logoMeau.style.display = "block";
		header.style.backgroundColor = "#fff";
		logo.style.color = "black";
		login.style.color = "black";
	};
	function close(){
		showMeau.style.display = "block";
		closeMeau.style.display = "none";
		logoMeau.style.display = "none";
		header.style.backgroundColor = "black";
		logo.style.color = "#fff";
		login.style.color = "#fff";
	};
document.getElementById("showMeau").onclick = function(){
	show();
};
document.getElementById("closeMeau").onclick = function(){
	close();
};