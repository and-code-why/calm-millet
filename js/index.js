// 购物车的下拉效果
$(".shopping_car a").mouseenter(function() {
    $(".main_car").stop().slideDown("linear");
});
$(".shopping_car a").mouseleave(function() {
    $(".main_car").stop().slideUp("30");
});


//下载app下拉效果
$(".download").mouseenter(function() {
    $(".download_main").stop().slideDown("linear");
});
$(".download").mouseleave(function() {
    $(".download_main").stop().slideUp("30");
});


// 导航栏主体部分下拉效果
$(".nav_item").mouseenter(function(){
	var index=$(this).index()-1;
	$(".pop").eq(index).stop().slideDown("slow");
});
$(".nav_item").mouseleave(function(){
	var index=$(this).index()-1;
	$(".pop").eq(index).stop().slideUp(0);
});


//导航栏搜索JS效果
$(".search .q").focus(function(){
	$(".search .hot").css({"display":"block"});
	$(".tags").css({"display":"none"});
});
$(".search .q").blur(function(){
	$(".search .hot").css({"display":"none"});
	$(".tags").css({"display":"block"});
});


// banner侧边栏效果
$(".list").mouseenter(function(){
	$(this).children("div").show();
});
$(".list").mouseleave(function(){
	$(this).children("div").hide();
});


//轮播图第一种方法（不完善）
//设置图片大容器的动态宽度
$(".banner_list").css({"width":$(".banner_list img").length*1226})
/* var timer=setInterval(picLoop,4000);
var index=0;
function picLoop(){
	// console.log(index++);
	index++;
	// console.log($(".banner_list img").length);
	if(index>=$(".banner_list img").length){
		index=0;
		$(".banner_list").animate({"left":0},0)
	}
	$(".banner_list").stop().animate({"left":-1226*index},2000)
	$(".page a").eq(index).css({"background-color":"#eeeeee"}).siblings().css({"background-color":""});
}
//轮播图的导航栏按钮:
$(".page a").click(function(){
	$(this).css({"background-color":"#eeeeee"}).siblings().css({"background-color":""});
	index=$(this).index();
	$(".banner_list").stop().animate({"left":-1226*index},1000);
	clearInterval(timer);
	timer=setInterval(picLoop,4000);
});

// 左
$(".prev").click(function(){
	index--;
	if(index==-1){
		index=$(".banner_list img").length-1;
	}
	$(".banner_list").stop().animate({"left":-1226*index},1000);
	$(".page a").eq(index).css({"background-color":"#eeeeee"}).siblings().css({"background-color":""});
	clearInterval(timer);
	timer=setInterval(picLoop,4000);
});
// 右
$(".next").click(function(){
	index++;
	if(index==$(".banner_list img").length){
		index=0
	}
	$(".banner_list").stop().animate({"left":-1226*index},1000);
	$(".page a").eq(index).css({"background-color":"#eeeeee"}).siblings().css({"background-color":""});
	clearInterval(timer);
	timer=setInterval(picLoop,4000);
}); */


//轮播图第二种方法
$(function(){
	var i=0;
	var timer=null;
	// 动态获取圆点的个数
	for(var j=0;j<$(".banner_list li").length;j++){
		$(".page").append("<li></li>")
	}
	// 为第一个圆点设置样式
	$(".page li").first().addClass("active");
	//复制第一张图片
	var firstimg=$(".banner_list li").first().clone();
	//将复制的第一张图片添加到末尾，并动态的获取banner_list的总宽度
	$(".banner_list").append(firstimg).width($(".banner_list li").length*($(".banner_list img").width()));
	//定时器轮播效果
	timer=setInterval(function(){
		i++;
		if(i==$(".banner_list li").length){
			i=1;
			$(".banner_list").css({
				left:0
			});
		};
		$(".banner_list").stop().animate({
			left:-i*($(".banner_list img").width())
		},1000);
		if(i==$(".banner_list li").length-1){
			$('.page li').eq(0).addClass('active').siblings().removeClass('active');
		}else{
			$('.page li').eq(i).addClass('active').siblings().removeClass('active');
		}
	},4000);
	
	
	// next
	$(".next").click(function(){
		i++;
		if(i==$(".banner_list li").length){
			i=1;
			$(".banner_list").css({
				left:0
			});
		};
		$(".banner_list").stop().animate({
			left:-i*($(".banner_list img").width())
		},300);
		if(i==$('.banner_list li').length-1){
			$(".page li").eq(0).addClass('active').siblings().removeClass('active');
		}else{
			$(".page li").eq(i).addClass('active').siblings().removeClass('active');
		}
	});
	
	//prev
	$(".prev").click(function(){
		i--;
		if(i==-1){
			i = $('.banner_list li').length - 2;
			$(".banner_list").css({
				left:-($('.banner_list li').length - 1) *($(".banner_list img").width())
			});
		};
		$(".banner_list").stop().animate({
			left:-i*($(".banner_list img").width())
		},300);
		$(".page li").eq(i).addClass('active').siblings().removeClass('active');
	});
	
	// 鼠标点击圆点
	$(".page li").click(function(){
		var index=$(this).index();
		// console.log(index);
		$(".banner_list").stop().animate({
			left:-index*($(".banner_list img").width())
		},300);
		  $('.page li').eq(index).addClass('active').siblings().removeClass('active');
	});
	
	
	//鼠标移入，暂停自动播放，移出，开始自动播放
	$(".banner_pic").hover(function(){
		 clearInterval(timer);
	},function(){
		timer=setInterval(function(){
			i++;
			if(i==$(".banner_list li").length){
				i=1;
				$(".banner_list").css({
					left:0
				});
			};
			$(".banner_list").stop().animate({
				left:-i*($(".banner_list img").width())
			},1000);
			if(i==$(".banner_list li").length-1){
				$('.page li').eq(0).addClass('active').siblings().removeClass('active');
			}else{
				$('.page li').eq(i).addClass('active').siblings().removeClass('active');
			}
		},4000);
	});
});

// 小米秒杀时间
/* $(function(){
	var time=new Date();
	var h=time.getHours();
	$(".h").html(h);
	var m=time.getMinutes();
	$(".m").html(m);
	var s=time.getSeconds();
	$(".s").html(s);
}); */
/* function countDown(time){
	var nowTime=+new Date();
	var inputTime=+new Date(time);
	var times=(inputTime-nowTime)/1000;
	var d=parseInt(times/60/60/24);
	d=d<10?'0'+d:d;
	var h=parseInt(times/60/60%24);
	h=h<10?'0'+h:h;
	var m=parseInt(times/60%60);
	m=m<10?'0'+m:m;
	var d=parseInt(times%60);
	s=s<10?'0'+s:s;
	return d+'天'+h+'时'+m+'分'+'秒';
	console.log(countDown("22:00:00"));
} */
$(function(){ 
			    show_time();
			}); 
function show_time(){ 
			    var time_start = new Date().getTime(); //设定当前时间
			    var time_end =  new Date("2021/3/31 22:00:00").getTime(); //设定目标时间
			    // 计算时间差 
			    var time_distance = time_end - time_start; 
			    // 天（以毫秒为单位）
			    var int_day = Math.floor(time_distance/86400000) 
			    time_distance -= int_day * 86400000; 
			    // 时
			    var int_hour = Math.floor(time_distance/3600000) 
			    time_distance -= int_hour * 3600000; 
			    // 分
			    var int_minute = Math.floor(time_distance/60000) 
			    time_distance -= int_minute * 60000; 
			    // 秒 
			    var int_second = Math.floor(time_distance/1000) 
			    // 时分秒为单数时、前面加零 
			    if(int_day < 10){ 
			        int_day = "0" + int_day; 
			    } 
			    if(int_hour < 10){ 
			        int_hour = "0" + int_hour; 
			    } 
			    if(int_minute < 10){ 
			        int_minute = "0" + int_minute; 
			    } 
			    if(int_second < 10){
			        int_second = "0" + int_second; 
			    } 
			    // 显示时间 
			    // $("#time_d").html(int_day); 
			    $("#time_h").html(int_hour); 
			    $("#time_m").html(int_minute); 
			    $("#time_s").html(int_second); 
			    // 设置定时器
			    setTimeout("show_time()",1000); 
}

// 小米秒杀左右移动(存在缺陷)
var btn=0;
var btn1=0;
$(".btn_right").click(function(){
	btn1=0;
	btn+=1;
	$(".btn_right").disabled=true;
	if(btn==1){
		$(".seckil_con_right").stop().animate({
			left:-758
			// left:-1750
		});
	}else if(btn==2){
		$(".seckil_con_right").stop().animate({
			left:-1750
			// left:-1750
		});
	}
});
$(".btn_left").click(function(){
	btn=0;
	btn1 +=1;
	// console.log(btn1);
	if(btn1==1){
		$(".seckil_con_right").stop().animate({
		left:-758
	});
	}else if(btn1==2){
		$(".seckil_con_right").stop().animate({
			left:234
		});
	}
	
});

// 家电模板切换
$("#jd_switch li").mouseenter(function(){
	$(this).addClass('current').siblings().removeClass("current")
	var index=$(this).index();
	$(".jd_switch_con").eq(index).show().siblings().hide();
});
//智能模块切换
$("#zn_switch li").mouseenter(function(){
	$(this).addClass('current').siblings().removeClass("current")
	var index=$(this).index();
	$(".zn_switch_con").eq(index).show().siblings().hide();
});
// 搭配模块切换
$("#dp_switch li").mouseenter(function(){
	$(this).addClass('current').siblings().removeClass("current")
	var index=$(this).index();
	$(".dp_switch_con").eq(index).show().siblings().hide();
});
// 配件模块切换
$("#pj_switch li").mouseenter(function(){
	$(this).addClass('current').siblings().removeClass("current")
	var index=$(this).index();
	$(".pj_switch_con").eq(index).show().siblings().hide();
});
// 周边模块切换
$("#zb_switch li").mouseenter(function(){
	$(this).addClass('current').siblings().removeClass("current")
	var index=$(this).index();
	$(".zb_switch_con").eq(index).show().siblings().hide();
});

// 微信显示
$(".wx").hover(function(){
	$(".wxpic").show();
},function(){
	$(".wxpic").hide();
});

// 动态图片
setInterval(dtpic,2000);
function dtpic(){
	$(".dtpic2").toggle().css({"opacity":"1"});
}

// 手机用户显示
$(".showbtn").hover(function(){
	$(".sidebar_show").show();
},function(){
	$(".sidebar_show").hide();
});

//返回顶部
$(".goTop").click(function(){
	$("body,html").animate({
		scrollTop:0,
	},300);
});
$(window).scroll(function(){
	var topTop=$(document).scrollTop();
	if(topTop>=1000){
		$(".goTop").css({"display": "block"});
	}else{
		$(".goTop").css({"display": "none"});
	}
});

// 视频弹窗关闭按钮
$(".close").click(function(){
	$(".video_box").hide();
	$(".video_box_vid video").trigger("pause");
	$(".video_bottom").hide();
});
//视频弹窗
$(".li1").click(function(){
	var index=$(this).index();
	$(".box1").show();
	$(".video_bottom").show();
});

$(".li2").click(function(){
	var index=$(this).index();
	$(".box2").show();
	$(".video_bottom").show();
});

$(".li3").click(function(){
	var index=$(this).index();
	$(".box3").show();
	$(".video_bottom").show();
});

$(".li4").click(function(){
	var index=$(this).index();
	$(".box4").show();
	$(".video_bottom").show();
});