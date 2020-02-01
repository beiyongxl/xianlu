var browser = {
  versions: function () {
    var u = navigator.userAgent,
        app = navigator.appVersion
    return {
      trident: u.indexOf('Trident') > -1,
      presto: u.indexOf('Presto') > -1,
      webKit: u.indexOf('AppleWebKit') > -1,
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
      mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/),
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
      iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
      iPad: u.indexOf('iPad') > -1,
      webApp: u.indexOf('Safari') == -1
    }
  }()
}

function GetQueryString (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}

b = GetQueryString('channelCode')

if (b == null) {
  url = window.location.href
  a = url + '?channelCode=978753&code=1'
  window.location.href = a
}

/*function downApp() {
	var ua = window.navigator.userAgent;
	var isBaidu = ua.indexOf('baiduboxapp') !== -1;
	if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
		showXR()	
		if (isBaidu) {
            hideXR()
			showBaiduT()
		}else{
			loading(function () {
	        $('.loadingBox').css('display', 'none');
	    }, 5000);
      // window.location.href = 'itms-services:///?action=download-manifest&amp;url=https://raw.githubusercontent.com/buttCar/kjzb1/master/kyqp_xymj.plist'
      openInstall.wakeupOrInstall();
    }
	}else{
		loading(function () {
	        $('.loadingBox').css('display', 'none');
	    }, 5000);
    // window.location.href = '../apk/kyqp.apk'
    openInstall.wakeupOrInstall();
	}
}*/

// 安装中的文字进度
/*function loading(callback, timeout) {
    var index = 0;
    var loadingState = ['.', '..', '...'];
    var intervalId = setInterval(function () {
        if (index > 2) {
            index = 0;
        }
        
        $('.loadingBox').css('display', 'block');
        $('#download_btn').text('正在加载中，稍后请点击“安装”继续' + loadingState[index]);
        index++
    }, 500);

    setTimeout(function () {
        if (intervalId) {
            clearInterval(intervalId);
        }
        if (callback) callback(); //回调
    }, timeout || 7000);
}
function showXR(){
	$('.trustBox').fadeIn()
}
function hideXR(){
	$('.trustBox').hide()
}
function showBaiduT(){
	$('#open_safari').fadeIn()
}
function hideBaiduT(){
	$('#open_safari').hide()
}
$(function(){
  if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
  	$('.trustBtn').show()
  } else {
  	$('.trustBtn').hide()
  }
  
})*/
