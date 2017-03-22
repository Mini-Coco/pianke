//注册验证手机号
function checkNum1(num){
	num=$(num);
	var reg=/^1\d{10}$/;
	if(reg.test(num.val())==false){
		$("#num1").next().show();
		$("#num1").next().next().hide();
		return false;
	}
	$("#num1").next().hide();
	return true;
}

//注册验证手机号，获取验证码并跳转至注册页面
function getCode(){
	var phoneNum=$("#num1").val();
	if(phoneNum==""){
		$("#num1").next().next().show();
		$("#num1").next().hide();
		return false;
	}else if(checkNum1($("#num1"))==false){
		$("#num1").next().next().hide();
		return false;
	}
	createCode();
	$("ul").hide();
	$(".reg").show();
	return true;
}

//随机生成6位数的验证码并写至codeNum框
function createCode(){
	$(".reg li:nth-child(3) a").html("验证码已发送：<strong>60</strong>秒");
	countdown=setInterval(countDown,1000);
	$("#codeNum").show();
	codeElem="";
	for(var i=0;i<6;i++){
		codeElem+=Math.floor(Math.random()*10);
	}
	$("#codeNum").html(codeElem);
}

//页面加载完毕时将验证码显示在注册页面
//window.onload=function(){
//	createCode();
//};

//倒计时
var i=59;
function countDown(){
	$("strong").html(60);
	$("strong").html(i--);
	if(i==-2){
		$("#codeNum").html("");
		$("#codeNum").hide();
		$(".reg li:nth-child(3) a").html("重新获取验证码");
		clearInterval(countdown);
		//重置i
		i=59;
	}
}

//注册，验证验证码
function checkCode(code){
	if($("#code").val()==""){
		$("#code").next().next().show();
		$("#code").next().hide();
		return false;
	}
	if($("#codeNum").html()=="" || $("#code").val()!=codeElem){
		$("#code").next().next().hide();
		$("#code").next().show();
		return false;
	}
	$("#code").next().next().hide();
	$("#code").next().hide();
	return true;
}

//注册验证密码
function checkPwd1(pwd){
	pwd=$(pwd);
	var reg=/^[a-zA-Z0-9]{6,12}$/;
	if(pwd.val()==""){
		$("#pwd1").next().next().show();
		$("#pwd1").next().hide();
		return false;
	}
	if(!reg.test(pwd.val())){
		$("#pwd1").next().next().hide();
		$("#pwd1").next().show();
		return false;
	}
	$("#pwd1").next().next().hide();
	$("#pwd1").next().hide();
	return true;
}

//注册验证重复密码
function checkPwd2(pwd){
	pwd=$(pwd);
	if(pwd.val()==""){
		$("#pwd2").next().next().show();
		$("#pwd2").next().hide();
		return false;
	}
	if($("#pwd1").val()!=pwd.val()){
		$("#pwd2").next().next().hide();
		$("#pwd2").next().show();
		return false;
	}
	$("#pwd2").next().next().hide();
	$("#pwd2").next().hide();
	return true;
}

//注册成功，跳转登录
function register(){
	if(!checkCode($("#num1"))){
		return false;
	}
	if(!checkPwd1($("#pwd1"))){
		return false;
	}
	if(!checkPwd2($("#pwd2"))){
		return false;
	}
	//将手机号和密码存入localStorage
	localStorage.setItem("num",$("#num1").val());
	localStorage.pwd=$("#pwd1").val();
	$("ul").hide();
	$(".login").css("display","flex");
	return true;
}

//去注册
function goReg(){
	$("ul").hide();
	$(".code").css("display","flex");
}
//去登录
function goLogin(){
	$("ul").hide();
	$(".login").css("display","flex");
}

//登录验证手机号
function checkNum(num){
	num=$(num);
	if(num.val()==""){
		$("#num").next().next().show();
		$("#num").next().hide();
		return false;
	}
	if(num.val()!=localStorage.num){
		$("#num").next().next().hide();
		$("#num").next().show();
		return false;
	}
	$("#num").next().next().hide();
	$("#num").next().hide();
	return true;
}

//登录验证密码
function checkPwd(pwd){
	pwd=$(pwd);
	if(pwd.val()==""){
		$("#pwd").next().next().show();
		$("#pwd").next().hide();
		return false;
	}
	if(pwd.val()!=localStorage.pwd){
		$("#pwd").next().next().hide();
		$("#pwd").next().show();
		return false;
	}
	$("#pwd").next().next().hide();
	$("#pwd").next().hide();
	return true;
}

//登录成功
function login(){
	if(!checkNum($("#num"))){
		return false;
	}
	if(!checkPwd($("#pwd"))){
		return false;
	}
	window.location.href="home.html";
}

