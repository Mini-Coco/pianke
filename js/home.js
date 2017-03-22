$(function(){
	//检验是否有登录信息
	function checkLogin(){
		var user=localStorage.num;
		if(user && user.length>0){
			$(".my>li").css("display","flex");
			$(".my>div").hide();
		}
	}
	
	//我的页面-退出按钮
	$(".exit").click(function(){
//		localStorage.removeItem("num");
//		localStorage.removeItem("pwd");
		$(".my>li").hide();
		$(".my>div").show();
	});
	
	window.onload=function(){
		checkLogin();
		//时间+日期
		setInterval(function(){
			//获取当前时间
			var time=new Date();
			var hours=time.getHours();
			var minutes=time.getMinutes();
			$("time").html(hours+":"+minutes);
			//控制时间左侧的图标为太阳/月亮
			if(hours>5 && hours<19){
				$("header>a>i").html("&#xe603;").css("color","#f7bb51");
			}else{
				$("header>a>i").html("&#xe602;").css("color","#7099cb");
			}
			//获取当前日期
			var month=time.getMonth()+1;
			switch(month){
				case 1:month="Jan."; break;
				case 2:month="Feb."; break;
				case 3:month="Mar."; break;
				case 4:month="Apr."; break;
				case 5:month="May."; break;
				case 6:month="June."; break;
				case 7:month="July."; break;
				case 8:month="Aug."; break;
				case 9:month="Sept."; break;
				case 10:month="Oct."; break;
				case 11:month="Nov."; break;
				case 12:month="Dec."; break;
			}
			var day=time.getDate();
			var week=time.getDay();
			switch(week){
				case 0:week="Sunday"; break;
				case 1:week="Monday"; break;
				case 2:week="Tuesday"; break;
				case 3:week="Wednesday"; break;
				case 4:week="Thursday"; break;
				case 5:week="Friday"; break;
				case 6:week="Saturday"; break;
			}
			$("date").html(day+" / "+month+"<br>"+"<span style='font-size:12px;'>"+week+"</span>");
		},1000);
		
		//文字滑动
		var step=1;
		setInterval(function(){
			var crtLeft=$("nav>div>p>span").position().left;
			var newLeft=crtLeft-step;
			$("nav>div>p>span").css("left",newLeft);
			if(-newLeft>=300){
				$("nav>div>p>span").css("left","70vw");
			}
		},50);
	};
	
	//首页轮播
	var i=0;
	setInterval(function(){
		if((i+1)<$(".home>li:nth-child(1)>img").length){
			$(".home>li:nth-child(1)>img").eq(i).fadeOut(0).next("img").fadeIn(600);
    		i++;
    		$(".line").eq(i).addClass("current");
    		$(".line").eq(i-1).removeClass("current");
		}else{
            $(".home>li:nth-child(1)>img").eq(i).fadeOut(0).siblings("img").eq(0).fadeIn(500);
            i=0;
    		$(".line").eq(i).addClass("current");
    		$(".line").eq(i-1).removeClass("current");
		}
	},5000);
	
	//点击菜单切换
	$("footer ul li").click(function(){
		var showIndex=$(this).index();
		//头部中间文字变化
		$("header ul li").hide();
		$("header ul li:eq("+showIndex+")").show();
		//我的页面头部右侧图标变化
		if(showIndex==0||1){$("header>i").html("&#xe60c;");}
		if(showIndex==2){$("header>i").html("&#xe600;");}
		//主题内容变化
		$("section>ul").hide();
		$("section>ul:eq("+showIndex+")").show();
		//脚部导航变化
		$("footer ul li i").addClass("iconfontStroke");
		$(this).find("i.iconfontStroke").removeClass("iconfontStroke");
	});

	//点击我的页面去登录
	function goLogin(){
		window.location.href="login-register.html";
	}
	
	//点击个人中心按钮
	$(".goPersonal").click(function(){
		$("header").animate({"width":"50vw"},1000);
		$(".container").animate({"left":"-100%"},600);
		$(".personal").show();
	});
	
	//点击返回我的
	$(".goMy").click(function(){
		$("header").css("width","100vw");
		setTimeout(function(){$("header").css("width","100%");},600);
		$(".container").animate({"left":"0"},600);
		setTimeout(function(){$(".personal").hide();},600);
	});
	
	//社区页面底部追加头像+喜欢
	var $div=$(`<div></div>`);
	var $img=$(`<img src="../img/pianke.png"/>`);
	var $i=$(`<i class="like iconfont" title="赞">&#xe649;</i>`);
	$div.append($img).append($i);
	$(".ul00 li").append($div);
	
	//点击喜欢，心变色
	$(".like").toggle(function(){
		$(this).css("color","#f00").attr("title","取消赞");
	},function(){
		$(this).css("color","#333").attr("title","赞");
	});
	
});
