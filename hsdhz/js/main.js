$(function() {
    //搜索框交互
    var
        placeholder = window.INPUT_PLACEHOLDER || '遇到问题找答案 来7710导航搜一下',
        baiduUrl = 'http://www.baidu.com/s?wd=',
        googleUrl = 'http://www.google.com.hk/search?q=',
        searchEl = $('#search');

    $('.button', searchEl).on('click', function(e) {
        var
            keyword = $('.keyword', searchEl).val(),
            url = e.target.name == 'baidu' ? baiduUrl : googleUrl;


        window.open(url + encodeURIComponent(keyword));
        e.preventDefault();
    });

    $('.keyword', searchEl)
        .val(placeholder)
        .on('focus', function(e) {
            var keyword = $(e.target);
            if(keyword.val() == placeholder) {
                keyword.removeClass('default-word').val('');
            }
        })
        .on('blur', function(e) {
            var keyword = $(e.target);
            if(keyword.val() == '') {
                keyword.addClass('default-word').val(placeholder);
            }
        });
    var lai="";
    var laiv="";
    var windex=this.location.href.indexOf("?");
    if(this.location.href.indexOf("seo")>0){
        lai="&lai=seo";
        laiv=lai;
    }else if(windex>0){
        //lai="&lai="+this.location.href.substr(windex+1);
        laiv=lai;
    }else{
        var ref=document.referrer;
        if(ref.indexOf("www.baidu.com")>0&&ref.indexOf("%E5%AE%9D%E9%A9%AC%E4%BC%9A")>0){
            lai="&lai=seo";
            laiv=lai;
        }
    }

    //跳转修改
    //专区
    $("#catalog ul").eq(0).find("a").each(function(i){
        if(i!=6&&i!=7&&i!=8&&i!=9&&i!=10&&i!=11){
            //$(this).attr("href","u.php?u=m"+i+lai);
        }
        if(i>5){
            lai="";
        }
    });
    //浏览器下载
    $("nav.site-list a").eq(0).attr("href","u.php?u=t1");
    $("nav.site-list a").eq(1).attr("href","u.php?u=t2");
    $("nav.site-list a").eq(2).attr("href","u.php?u=t3");

    //vip
    $("#catalog ul").eq(1).find("a").each(function(i){
        // $(this).attr("href","/u.php?u=vip"+i+laiv);
    });
    //agent
    $("#catalog ul").eq(4).find("a").each(function(i){
        // $(this).attr("href","/u.php?u=ag"+i);
    });
    //下面联系和关于我们
    $("#nav a").eq(0).attr("href","/u.php?u=ot1");
    $("#nav a").eq(3).attr("href","/u.php?u=ot2");
});
//新手指南
function direction(){
    $("#divtip").fadeIn();
    setTimeout(function(){$("#divtip").fadeOut();},2500);
}
//线路检测
function checkLine(){
    $("#divtip").fadeIn();
    setTimeout(function(){$("#divtip").fadeOut();},2500);
}
//提示关闭
function closetip(){
    $("#divtip").fadeOut();
}