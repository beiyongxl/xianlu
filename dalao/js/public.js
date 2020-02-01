//获取:包网名site,登录状态isLogin,版本号v
var site;//包网名
var isLogin;//状态
var v;//版本号
var webUrl = document.location.href;//获取访问网站的链接
var webName = "";//服务器上的项目名
var lockBind = false;
for (var i = -1, arr = []; (i = webUrl.indexOf("/", i + 1)) > -1; arr.push(i));	//遍历获取的‘/’的下标
webName = webUrl.substring(arr[2]+1,arr[3]);	//取链接第三第四个‘/’间的值（项目名）http://xxx.com/项目名/app/xxx。。
$(function(){
	$.ajax({
		type : "post",
		url : $("#path").val() + "/app/getSiteAndLogin?" + Math.random()*10000,//这个ajax方法只作为取值用
		contentType : 'application/json',
		dataType : "json",
		async : false,
		success : function(data) {
			if (data) {
				if(data.success == false){
					
				}else{
					site = data.site;
					isLogin = data.isLogin;
					v = data.v;
					bindOnclickPublic(isLogin);
				}
			} else {
			}
		},
		error : function(xmlhttprequest, error) {
		},
		complete : function() {
		}
	});
});
//手机版登陆后点击事件绑定
function bindOnclickPublic(isLogin) {
	if (isLogin) {
		$('#liveLmgGameBind').bind("click", function() { playGameWait('LIVE_LMG');});
		$('#liveDsGameBind').bind("click", function() { playGameWait('LIVE_DS');});
		$('#lottoFfcGameBind').bind("click", function() { playGameMobile('LOTTERY_DS');});
		$('#liveCGGameBind').bind("click", function() { playGameWait('LIVE_CG88');});
		$('#liveIgGameBind').bind("click", function() { playGameWait('LIVE_IG');});
		$('#liveAgGameBind').bind("click", function() { playGameWait('LIVE_AG');});
		$('#liveBbinGameBind').bind("click", function() { playGameWait('LIVE_BBIN');});
		$('#liveOgGameBind').bind("click", function() { playGameWait('LIVE_OG');});
		$('#liveAllbetGameBind').bind("click", function() { playGameWait('LIVE_ALLBET');});
		$('#liveSunbetGameBind').bind("click", function() { playGameWait('LIVE_SUNBET');});
		$('#slotsBbinGameBind').bind("click", function() { playGameWait('SLOTS_BBIN','');});
		$('#slotsYyGameBind').bind("click", function() { javascript:window.location.href='../app/electronicGameYY'});
		$('#slotsXbGameBind').bind("click", function() { javascript:window.location.href='../app/electronicGameXB'});
		$('#slotsPtGameBind').bind("click", function() { javascript:window.location.href='../app/electronicGamePT'});
		$('#slotsIgGameBind').bind("click", function() { javascript:window.location.href='../app/electronicGameIG'});
		$('#slotsMgGameBind').bind("click", function() { javascript:window.location.href='../app/electronicGameMG'});
		$('#slotsHbGameBind').bind("click", function() { javascript:window.location.href='../app/electronicGameHB'});
		
		$("div[data-GameType=SLOTS_SPADE]").bind("click", function() { javascript:window.location.href='../app/slotsGame?sgt=SLOTS_SPADE'});
		$("div[data-GameType=SLOTS_PT]").bind("click", function() { javascript:window.location.href='../app/slotsGame?sgt=SLOTS_PT'});
		$("div[data-GameType=SLOTS]").bind("click", function() { javascript:window.location.href='../app/slotsGame?sgt=SLOTS'});
		$("div[data-GameType=SLOTS_HB]").bind("click", function() { javascript:window.location.href='../app/slotsGame?sgt=SLOTS_HB'});
		$("div[data-GameType=SLOTS_AG]").bind("click", function() { playGameWait('SLOTS_AG','');});
		$("div[data-GameType=SLOTS_BBIN]").bind("click", function() { playGameWait('SLOTS_BBIN','');});
		$("div[data-GameType=SLOTS_MG]").bind("click", function() { javascript:window.location.href='../app/slotsGame?sgt=SLOTS_MG'});
//		$('#SLOTS_SPADE_MB').bind("click", function() { javascript:window.location.href='../app/slotsGame?sgt=SLOTS_SPADE'});
//		$('#SLOTS_PT_MB').bind("click", function() { javascript:window.location.href='../app/slotsGame?sgt=SLOTS_PT'});
//		$('#SLOTS_MG_MB').bind("click", function() { javascript:window.location.href='../app/slotsGame?sgt=SLOTS_MG'});
//		$('#SLOTS_MB').bind("click", function() { javascript:window.location.href='../app/slotsGame?sgt=SLOTS'});
//		$('#SLOTS_HB_MB').bind("click", function() { javascript:window.location.href='../app/slotsGame?sgt=SLOTS_HB'});
		
		$('#SportM8GameBind').bind("click", function() { playGameMobile('SPORT');});
		$('#SportIwcGameBind').bind("click", function() { playGameMobile('SPORT_IWC');});
		$('#SportCmdGameBind').bind("click", function() { playGameMobile('SPORT_CMD');});
		$('#fishGgGameBind').bind("click", function() { playGameWait('FISH_GG','101');});
		$('#fishAgGameBind').bind("click", function() { playGameWait('FISH_AG');});
		$('#fishYyGameBind').bind("click", function() { playGameWait('SLOTS_YY','FishingRoyal');});
		$('#electroicKYGameBind').bind("click", function() { playGameWait('KY_CHESS_GAME');});//开元棋牌
		$('#electroicAllbetGameBind').bind("click", function() { playGameWait('SLOTS_ALLBET','af');});//AB空战
		$('#chessIGGameBind').bind("click", function() { playGameWait('IG_CHESS_GAME');});  //IG棋牌
		$('#chessIGameBind').bind("click", function() { playGameWait('IG_CHESS_GAME');});  //IG棋牌
		$('#electroicIGGameBind').bind("click", function() { playGameWait('IG_CHESS_GAME');});  //IG棋牌
		$('#LottotSevenGameBind').bind("click", function() { JqueryShowMessageJustClose('手机版游戏即将上线!');});
		$('#slotsAgGameBind').bind("click", function() {  JqueryShowMessageJustClose('手机版游戏即将上线!');});
		$('#slotsAgBywGameBind').bind("click", function() {  JqueryShowMessageJustClose('手机版游戏即将上线!');});
		if(site=="xinCaiCP"){
			$('#YP814GameBind').bind("click", function() { playGame('SLOTS_AG','YP814');});
		}
	} else {
		$('.list-item').bind("click", function() { javascript:window.location.href='../app/loginPage'});
	}
}
function bindOnclick(isLogin){}//空方法，针对极少数包网手机版未去掉此方法在页面上的引用导致的报错
function playGameWait(type,gameType){//对手机版进游戏连续点击进行2秒限定的中间层方法
	console.log(lockBind);
	if(lockBind === false){
		lockBind = true;
		playGame(type,gameType);
		setTimeout(function(){
			lockBind = false;
		},2000);
	}
}
/*线路选择方法*/
var cacheImgLinkNew = function(type) {
	var siteImgLine;
	siteImgLine = site;
	if("aoMenXinPJB" === site){
		window.setTimeout("", 1000);
		for ( var i = 1; i < 6; i++) {
			var idName="line"+i;
			var img = document.createElement('img');
			img.onerror = getErrorLine;
			img.onload =  getLoadLine;
			img.number = i;
			img.time = new Date().getTime();
			if (i == 1) {
				img.src = ("http://a526688.com/aoMenXinPJBLoginWeb/images/CN/aoMenXinPJB/pc/speed.gif?") + new Date().getTime(); 
			} else if (i == 2) {
				img.src = ("http://b526688.com/aoMenXinPJBLoginWeb/images/CN/aoMenXinPJB/pc/speed.gif?") + new Date().getTime(); 
			} else if (i == 3) {
				img.src = ("http://c526688.com/aoMenXinPJBLoginWeb/images/CN/aoMenXinPJB/pc/speed.gif?") + new Date().getTime(); 
			} else if (i == 4) {
				img.src = ("http://d526688.com/aoMenXinPJBLoginWeb/images/CN/aoMenXinPJB/pc/speed.gif?") + new Date().getTime(); 
			} else if (i == 5) {
				img.src = ("http://e526688.com/aoMenXinPJBLoginWeb/images/CN/aoMenXinPJB/pc/speed.gif?") + new Date().getTime(); 
			}
			//	$("#lotteryLine").show();
			document.getElementById(idName).innerHTML ="测速中...";
		}
	}
};
function getErrorLine(){
	document.getElementById("line"+this.number).innerHTML ="无法连接";
}
function getLoadLine(){
	var speed = (new Date().getTime() -  this.time) / 5;
	document.getElementById("line"+this.number).innerHTML =speed+"毫秒";
}
$(function(){
	if(site == "xinLangCaiPiao"){//新浪国际特有方法
		var time = null;
		var list = $("#menulist");
		var box = $("#menubox");
		var listerji = list.find(".erji");
		for(var i = 0, j = listerji.length; i < j; i++) {
			if(listerji[i].className == "now") {
				var olda = i;
			}
		}
		var box_show = function(hei) {
			box.stop().animate({
				height: hei,
				opacity: 1
			}, 400);
		}
		var box_hide = function() {
			box.stop().animate({
				height: 0,
				opacity: 0
			}, 400);
		}
		listerji.hover(function() {
			listerji.removeClass("now");
			$(this).addClass("now");
			clearTimeout(time);
			var index = list.find(".erji").index($(this));
			box.find(".cont").hide().eq(index).show();
			var _height = box.find(".cont").eq(index).height();
			box_show(_height)
		}, function() {
			time = setTimeout(function() {
				box.find(".cont").hide();
				box_hide();
			}, 50);
			listerji.removeClass("now");
			listerji.eq(olda).addClass("now");
		});
		box.find(".cont").hover(function() {
			var _index = box.find(".cont").index($(this));
			listerji.removeClass("now");
			listerji.eq(_index).addClass("now");
			clearTimeout(time);
			$(this).show();
			var _height = $(this).height();
			box_show(_height);
		}, function() {
			time = setTimeout(function() {
				$(this).hide();
				box_hide();
			}, 50);
			listerji.removeClass("now");
			listerji.eq(olda).addClass("now");
		});
		$(".lang a").hover(function() {
			$(".lang a").removeClass("on");
			$(this).addClass("on");
		})
		$(".hd>ul>li").hover(function() {
			$(".hd>ul>li").attr("class", "");
			$(".bd>ul").css("display", "none");
			$(this).attr("class", "on");
			$(".bd>ul").eq($(this).index()).css("display", "block");

		})
		var wfLw = $('.wf_main li').width();
		var liLen = $('.wf_main li').length;
		$('.wf_main ul').width(wfLw * liLen)
		$('#wf_next').click(function() {
			$('.wf_main ul').animate({
				marginLeft: -wfLw
			}, function() {
				$(this).css('margin-left', '0').find('li:first').appendTo('.wf_main ul')
			})
		})
		$('#wf_prev').click(function() {
			$('.wf_main ul').css('margin-left', -wfLw).find('li:last').prependTo('.wf_main ul')
			$('.wf_main ul').animate({
				marginLeft: 0
			})
		})
		$('.fm_m2 .fm_2l .fm_tab:gt(0)').hide();
		$('.fm_m2 .fm_2l li').each(function(index) {
			$(this).hover(function() {
				$('.fm_m2 .fm_2l .fm_tab').eq(index).show().siblings('.fm_tab').hide();
				$(this).addClass('fm2_on').siblings('li').removeClass('fm2_on');

			})
		});
		function addb(str) {
			str += '';
			x = str.split('.')
			x1 = x[0]
			x2 = x.length > 1 ? '.' + x[1] : '';
			var rgx = /(\d+)(\d{3})/
			while(rgx.test(x1)) {
				x1 = x1.replace(rgx, '$1' + ',' + '$2')
			}
			return x1 + x2
		}
	}else if(site == "yingShengGJ"){
		if (isLogin) {//盈盛国际手机版单独进游戏方法
			$('#lottery3dGameBind').bind("click", function() { playGameMobile('LOTTERY_IG','35','default');});
			$('#lotterySscGameBind').bind("click", function() { playGameMobile('LOTTERY_IG','1','default');});
			$('#lotteryPk10GameBind').bind("click", function() { playGameMobile('LOTTERY_IG','2','default');});
			$('#lottery115GameBind').bind("click", function() { playGameMobile('LOTTERY_IG','17','default');});
			$('#lotteryPcddGameBind').bind("click", function() { playGameMobile('LOTTERY_IG','38','default');});
			$('#lotteryK3GameBind').bind("click", function() { playGameMobile('LOTTERY_IG','3','default');});
		}
	}else if(site == "fuGuiCP"){
		if (isLogin) {//盈盛国际手机版单独进游戏方法
			$('#huodongdating').bind("click", function() { window.open('http://fghd88.com/');});
		}
	}else if(site == "juCai"){
		
	}else if(site == "qianYiCP"){//千亿彩票三手机版单独进游戏方法
		if (isLogin) {
			$('#hongbao').bind("click", function() { window.open('http://hb.qycphd.com/');});
			$('#gongmengjh').bind("click", function() { window.open('http://klcpjh.com/qydh.php');});
		}
	}else if(site == "aoMenTYC"){  //澳门太阳城
		window.onload = function() {
		    $.ajax({
		    	type: "GET", //提交方式 
		        url: "https://worldcup.xgjpz.com/api/worldcup", //路径 
		        success: function(result) { //返回数据根据结果进行相应的处理
		            var result1 = ($.parseJSON(result));
		            var data = result1['data'];
		            var htmlText = "";
		            var temp = '';
		            for (var i = 0; i < data.length; i++) {
		                if (temp != formatDateTime(data[i].start_time)) {
		                    htmlText +=
		                        '<div class="bit-date">' +
		                        formatDateTime(data[i].start_time) +
		                        '</div>'
		                }
		                htmlText +=
		                    '<div class="bit-left">' +
		                    '<div class="left-img">' +
		                    ' <img src="' + data[i].home_flag + '" />' +
		                    '</div>' +
		                    '<div class="left-text">' +
		                    data[i].home_name +
		                    ' </div>' +
		                    ' </div>' +
		                    ' <div class="bit-center">' +
		                    '<img src="images/vs.png">' +
		                    ' </div>' +
		                    '<div class="bit-right">' +
		                    '<div class="right-img">' +
		                    ' <img src="' + data[i].guest_flag + '" />' +
		                    '</div>' +
		                    '<div class="right-text">' +
		                    data[i].guest_name +
		                    ' </div>' +
		                    ' </div>'
		                temp = formatDateTime(data[i].start_time);
		            }
		            var div = $(htmlText);
		            $("#bit").append(div)
		        }
		    });
		}

		function formatDateTime(timeStamp) {
		    var date = new Date();
		    date.setTime(timeStamp * 1000);
		    var y = date.getFullYear();
		    var m = date.getMonth() + 1;
		    m = m < 10 ? ('0' + m) : m;
		    var d = date.getDate();
		    d = d < 10 ? ('0' + d) : d;
		    var h = date.getHours();
		    h = h < 10 ? ('0' + h) : h;
	 	    var minute = date.getMinutes();
		    var second = date.getSeconds();
		    minute = minute < 10 ? ('0' + minute) : minute;
		    second = second < 10 ? ('0' + second) : second;
		    return y + '-' + m + '-' + d
		};
	}else if(site == "tianXiGJ"){//天玺国际
		if(webUrl.indexOf("tianxi33.com")){
			$("body").append('<script src="https://s13.cnzz.com/z_stat.php?id=1273972627&web_id=1273972627" language="JavaScript"></script>');
		}
	}else if(site == "hjcp"||site == "hjcpdl"){//皇家彩票
		$('#hongbao').unbind("click");
		$('#hongbao').bind("click", function() { javascript:window.open('http://hjcp2018.com/'),'blank'});
		
		if (isLogin) {
			$('#vip').bind("click", function() { javascript:window.open('https://www.hjcpvip.com/','blank')});
			$('#huodongDT').bind("click", function() { javascript:window.open('https://www.hjcp188.com','blank')});
			$('#zhuanpan').bind("click", function() { javascript:window.open('http://www.hjcphd.com/','blank')});
			
		} else {
		}
	}else if(site == "tianXiGJ"){//彩友会
		if(webUrl.indexOf("http://6661558.com")){
			$("body").append('<script type="text/javascript" src="https://js.users.51.la/19538649.js"></script>');
		}	
	}else if(null){//方便查看并添加新功能，以此做结尾
	}
})
//字体闪烁效果
function shake(element,className,times){
    var i = 0,
        t = false ,
        o = element.attr("class"),
        c = "",
        times = times||2;
    if(t) return;
    t = setInterval(function(){
	i++;
	c = i%2 ? o + ' ' + className : o;
	element.attr("class",c);

	if(i==2*times){
		clearInterval(t);
		element.removeClass(className);
		}
	},500);
};
$(function(){
	//domready 就闪动
	shake($(".flash"),"blink",-1);
	shake($(".flash1"),"blink1",-1);
	shake($(".flash2"),"blink2",-1);
	shake($(".flash3"),"blink3",-1);
	shake($(".flash4"),"blink4",-1);
});
//当地时间时钟效果
function localTime(){//以后的当地时间显示请调用此方法，下面的方法仅对旧网做兼容
	t_div = document.getElementById('time');
	var now=new Date()
	//替换div内容 
	t_div.innerHTML = now.getFullYear()
	+"年"+(now.getMonth()+1)+"月"+now.getDate()
	+"日"+now.getHours()+"时"+now.getMinutes()
	+"分"+now.getSeconds()+"秒";
	//等待一秒钟后调用time方法，由于settimeout在time方法内，所以可以无限调用
	setTimeout(time,1000);
}
function time(){
	if ($('#time').length > 0) {
		t_div = document.getElementById('time');
		var now=new Date()
		//替换div内容 
		t_div.innerHTML = now.getFullYear()
		+"年"+(now.getMonth()+1)+"月"+now.getDate()
		+"日"+now.getHours()+"时"+now.getMinutes()
		+"分"+now.getSeconds()+"秒";
		//等待一秒钟后调用time方法，由于settimeout在time方法内，所以可以无限调用
		setTimeout(time,1000);
	}
}
//客服链接
function onlineService(link) {
	//alert(link);
	var openUrl = link;//弹出窗口的url
	var iWidth=800; //弹出窗口的宽度;
	var iHeight=600; //弹出窗口的高度;
	var iTop = (window.screen.availHeight-30-iHeight)/2; //获得窗口的垂直位置;
	var iLeft = (window.screen.availWidth-10-iWidth)/2; //获得窗口的水平位置;
	window.open(openUrl,"","height="+iHeight+", width="+iWidth+", top="+iTop+", left="+iLeft);return false;
} 
//qq链接
function openQQ(qqNum) {
	window.location.href="tencent://message/?uin=" + qqNum + "&Site=qq&Menu=yes";
}
//线路选择
function chooseLineLotto(){
	layer.open({
		title: [
		        '请选择线路：'
		      ]
		,content: ''
		,btn: ['线路1','线路2','线路3']
		,anim: 'up'
		,shadeClose: true
		,yes: function(index, layero){
			playGameMobile('LOTTO_IG','','1');//按钮【按钮一】的回调
		},btn2: function(index, layero){
			playGameMobile('LOTTO_IG','','2');//按钮【按钮二】的回调
		},btn3: function(index, layero){
			playGameMobile('LOTTO_IG','','3');//按钮【按钮三】的回调
		}
		,cancel: function(){ 
	    //右上角关闭回调
		}
	});
}
function chooseLineLottery(){
	layer.open({
		title: [
		        '请选择线路：'
		      ]
		,content: ''
		,btn: ['线路1','线路2','线路3']
		,anim: 'up'
		,shadeClose: true
		,yes: function(index, layero){
			playGameMobile('LOTTERY_IG','2','1');//按钮【按钮一】的回调
		},btn2: function(index, layero){
			playGameMobile('LOTTERY_IG','2','2');//按钮【按钮二】的回调
		},btn3: function(index, layero){
			playGameMobile('LOTTERY_IG','2','3');//按钮【按钮三】的回调
		}
		,cancel: function(){ 
	    //右上角关闭回调
		}
	});
}
//隐藏div，一般用于最新消息弹窗
function hideDiv(div_id) {
	$("#mask").remove();
	//fadeOut() 方法使用淡出效果来隐藏被选元素
	$("#" + div_id).fadeOut();
}
//添加收藏
function AddFavorite(sURL, sTitle) {
	sURL = encodeURI(sURL);
	try {
		window.external.addFavorite(sURL, sTitle);
	} catch (e) {
		try {
			window.sidebar.addPanel(sTitle, sURL, "");
		} catch (e) {
			alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加！");
		}
	}
}
//设为首页
function SetHome(url) {
	if (document.all) {
		document.body.style.behavior = 'url(#default#homepage)';
		document.body.setHomePage(url);
	} else {
		alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");
	}
}
function munMover(leftPx) {
	function followTopNav(){
        $(".mainnav-back")
            .stop()
            .animate({
                left: leftPx
            }, "normal");
    }
    followTopNav();
    $("ul.mainnav-ul>li").hover(
        function(){
            $(".mainnav-back").stop().animate({
                left: $(this).position().left
            }, "normal");
        },
        function(){
            followTopNav();
        }
    );
}
//banner
/**
 *  浮動 (預設右上 top:150)
 *  @example   $("#id").Float();
 *  @param {topSide:150,floatRight:0|1,side:5,close:ID}
 */
$.fn.Float = function(obj){
    var that = this;
    var lock = {
        topSide : 150,
        floatRight :1, 
        side : 5, //margin
        init : function(){
            var el = that, ua = navigator.userAgent;
            el.css({
                'position':'absolute',
                'z-index':'1000',
                'top': this.topSide
            });
            if (ua.toLowerCase().indexOf('360se') > -1) {
                this.isBlock = true;
            } else if (ua.toLowerCase().indexOf("theworld") > 0) {
                this.isBlock = true;
	        } else if (ua.toLowerCase().indexOf("msie 7") > 0) {
	            this.side = -1;
            }
            this.floatRight == 1 ? el.css('right',this.side) : el.css('left',this.side);
                    var locker = this;
            setInterval(function () {
                locker.lock.call(locker);
            }, 20);
            
            if(this.close != undefined){
                this.closeFloat();
            }
            if (this.floatRight == 1) {
                $(window).resize(function () {
                    $(this).scrollLeft(0);
                    el.css('right', 5);
                });
            }
        },
        lockTop : function (el, position, page, scroll, icon){
            var top = el.css('top');
            var y = scroll.top + icon.topSide,
                offsetTop = (y - parseInt(top)) / 20;
            if (this.isBlock) {
                offsetTop = (y - parseInt(top));
            }
            var topSide = parseInt(top) + offsetTop;
            if ((topSide + position.height) < page.height) {
                el.css('top',topSide );
            }
        },
        lockLeft : function (el, scroll, icon) {
            var left = el.css('left');
            var x = scroll.left + icon.side,
                offsetLeft = (x - parseInt(left)) / 20;
            el.css('left',parseInt(left) + offsetLeft);
        },
        lockRight : function (el, scroll, icon) {
            var right = el.css('right');
            var d = document;
            if (scroll.left == 0) {
                var x = icon.side,
                    offsetRight = (Math.abs(x) - Math.abs(parseInt(right))) / 20;
                el.css('right',Math.abs(parseInt(right)) + offsetRight);
            } else {
                    var x = scroll.left - icon.side,
                        offsetRight = (Math.abs(x) - Math.abs(parseInt(right))) / 20;
                    right = -(Math.abs(parseInt(right)) + offsetRight) + "px";
                    el.css('right',right);
                }
        },
        lock : function(){
             var el = that,
                position = this.currentPosition(el),
                win = this.windowDimension(),
                scroll = this.scrollPosition(),
                page = this.pageDimension(),
                icon = this;
            this.lockTop(el, position, page, scroll, icon);
            if (this.floatRight == 1) {
                this.lockRight(el, scroll, icon);
            } else {
                this.lockLeft(el, scroll, icon);
            }
            if (this.isBlock) {
                if (this.lastTop != el.css('top')) {
                    el.css('visibility',"hidden");
                    this.lastTop = el.css('top');
                } else {
                    el.css('visibility',"visible");
                }
            }
        },
        currentPosition: function (el) {
            var offset = el.offset();
            return {
               /* top: offset.top,
                left: offset.left,*/
                width: el.outerWidth(),
                height: el.outerHeight()
            };
        },
        windowDimension: function () {
            if ((typeof innerWidth != "undefined" && innerWidth != 0) && (typeof innerHeight != "undefined" && innerHeight != 0)) {
                return {
                    width: innerWidth,
                    height: innerHeight
                };
            }
            var d = document;
            return {
                width: Math.min(d.body.clientWidth, d.documentElement.clientWidth),
                height: Math.min(d.body.clientHeight, d.documentElement.clientHeight)
            };
        },
        scrollPosition: function () {
            var d = document;
            return {
                top: Math.max(d.body.scrollTop, d.documentElement.scrollTop),
                left: Math.max(d.body.scrollLeft, d.documentElement.scrollLeft)
            };
        },
        pageDimension: function () {
            var d = document;
            return {
                width: Math.max(d.body.scrollWidth, d.documentElement.scrollWidth),
                height: Math.max(d.body.scrollHeight, d.documentElement.scrollHeight)
            };
        },
        closeFloat : function(){
            that.find('#'+this.close).click(function(){
                that.hide();
            }).css('cursor','pointer');
        }
    };
    if (obj) $.extend(lock, obj);
    lock.init();
};
//页面跳转添加推荐码
function URLModify(ref){
	var ref = ref;
	var nodes = document.all;
	for(var i=0;i<nodes.length;i++){
		var a = $(nodes[i]).attr("href");
		var b = $(nodes[i]).attr("onclick");
		a += "";
		b += "";
		if(a.indexOf("../app/") != -1){
			if(a.indexOf("?") != -1){
				if(a.indexOf("ref=") != -1){
					$(nodes[i]).attr("href",a);
				}else{
					$(nodes[i]).attr("href",a + "&ref=" + ref);
				}
			}else{
				$(nodes[i]).attr("href",a + "?ref=" + ref);
			}
		}
		if(b.indexOf("window.location.href") != -1){
			if(b.indexOf("../app/") != -1){
				var c = b.substring(b.indexOf("/") - 2,b.lastIndexOf("'"));
				if(c.indexOf("?") != -1){
					if(c.indexOf("ref=") != -1){
						$(nodes[i]).attr("onclick","window.location.href='" + c + "'");
					}else{
						$(nodes[i]).attr("onclick","window.location.href='" + c + "&ref=" + ref + "'");
					}
				}else{
					$(nodes[i]).attr("onclick","window.location.href='" + c + "?ref=" + ref + "'");
				}
			}
		}else if(b.indexOf("self.location.href") != -1){
			if(b.indexOf("../app/") != -1){
				var d = b.substring(b.indexOf("/") - 2,b.lastIndexOf("'"));
				if(d.indexOf("?") != -1){
					if(d.indexOf("ref=") != -1){
						$(nodes[i]).attr("onclick","self.location.href='" + d + "'");
					}else{
						$(nodes[i]).attr("onclick","self.location.href='" + d + "&ref=" + ref + "'");
					}
				}else{
					$(nodes[i]).attr("onclick","self.location.href='" + d + "?ref=" + ref + "'");
				}
			}
		}
	}
}
//banner图与优惠活动传链接
function bannerLink(banneres){
	//banner图点击处理
	var bannerPcOrMp = $("#DeviceMode").val();
	/*var banneres = $("#banner_link").val();*/
	/*alert(banneres);*/
	if ( banneres == null || banneres == "") {
		return false; 
	} else {
		if( bannerPcOrMp == 'PC') {
			if (banneres.indexOf("/app/") != -1) {
				window.location.href=banneres;
			} else {
				window.open(banneres);
			}
		} else {
			if (banneres.indexOf("/app/") != -1) {
				if (banneres.indexOf("/app/home") != -1 || banneres.indexOf("/app/joinNow") != -1) {
					window.location.href=banneres;
				} else if (banneres.indexOf("/app/promotion") != -1) {
						$("#bottomNavClose").click();
						$("#zhedie .acc_top").click();
						window.location.href ="#zhedie";
				} else {
					var endIndex;
					if (banneres.indexOf("?") != -1){
						endIndex = banneres.lastIndexOf("?");
					} else {
						endIndex = banneres.lenght;
					}
					var newsForPage = banneres.substring(banneres.lastIndexOf("/"),endIndex);
					window.location.href=banneres.replace(newsForPage,"/loginPage");
				}
			} else {
				window.open(banneres);
			}
		}
	}
};
