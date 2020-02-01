(function(ns){
    function Scroll(element){

        var content = document.createElement("div");
        var container = document.createElement("div");
        var _this =this;
        var cssText = "position: absolute; visibility:hidden; left:0; white-space:nowrap;";
        this.element = element;
        this.contentWidth = 0;
        this.stop = false;

        content.innerHTML = element.innerHTML;

        //获取元素真实宽度
        content.style.cssText = cssText;
        element.appendChild(content);
        this.contentWidth = content.offsetWidth;

        content.style.cssText= "float:left;";
        container.style.cssText = "width: " + (this.contentWidth*2) + "px; overflow:hidden";
        container.appendChild(content);
        container.appendChild(content.cloneNode(true));
        element.innerHTML = "";
        element.appendChild(container);

        container.onmouseover = function(e){
            clearInterval(_this.timer);

        };

        container.onmouseout = function(e){
            _this.timer = setInterval(function(){
                _this.run();
            },20);


        };
        _this.timer = setInterval(function(){
            _this.run();
        }, 20);
    }

    Scroll.prototype = {

        run: function(){

            var _this = this;
            var element = _this.element;

            element.scrollLeft = element.scrollLeft + 1;

            if(element.scrollLeft >=  this.contentWidth ) {
                element.scrollLeft = 0;
            }
        }
    };
    ns.Scroll = Scroll;
}(window));

$(function(){

    checkUser();

    $.get('action.php?action=advice',function(data){
        var sHtml = data;
        $("#msgNews").html(sHtml);
        var sc = new Scroll(document.getElementById("msgNews"));
    });


})

var isTuijian = false;
var strTuijian = "";

//初始化商品
function initShop(){

    $.ajax({
        url: 'action.php?action=shop',
        dataType: 'json',
        cache: false,
        type: 'POST',
        success: function (obj) {
            var sHtml = '';
            $.each(obj, function(i, award){
                sHtml += '<option value="'+award.id+'">'+award.prize_name+'</option>';
            })
            $('#shop').html(sHtml);

            onChange();

            $('#shop').change(function(){
                onChange();
            })


        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            var x = 1;
        }
    })

}

function onChange(){
    var _id = $('#shop').val();
    $.ajax({
        url: 'action.php?action=getInfo',
        dataType: 'json',
        cache: false,
        type: 'POST',
        data: {id : _id},
        success: function (obj) {
            switch(obj.stat){
                case '-1':
                    //alert('数据读取错误');
                    break;
                case '0':
                    $('#kucun').val(obj.num);
                    $('#jifen').val(obj.score);
                    break;
                default:
                    break;
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            var x = 1;
        }
    })
}

//检查用户
function checkUser(){

    $.ajax({
        url: 'action.php?action=check',
        dataType: 'json',
        cache: false,
        type: 'POST',
        success: function (obj) {
            switch(obj.stat){
                case '-1':
                    //
                    break;
                case '-2':
                    //$('#fade').show();
                    //$('#light').show();
                    break;
                case '0':
                    //已绑定
                    $('#div_name').html(obj.user);
                    $('#div_score').html('积分：'+obj.score);
                    $('#div_day').html('已连续签到'+obj.day+'天');
                    $('#tuijianren').val(obj.recomand);
                    if(obj.recomand != ""){
                        isTuijian = true;
                        strTuijian = obj.recomand;
                    }
                    $('#noLogDiv').hide();
                    $('#LogDiv').show();

                    if(obj.active == "1"){
                        $('#lottery').show();
                    }

                    break;
                default:
                    break;
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            var x = 1;
        }
    })
}

//绑定用户
function btnLogin(){

    var username = $('#user_name').val();

    if(username==""){
        alert('会员帐号不能为空!');
        return;
    }

    $.ajax({
        url: 'action.php?action=login',
        dataType: 'json',
        cache: false,
        type: 'POST',
        data: {username : username},
        success: function (obj) {
            switch(obj.stat){
                case '-1':
                    alert('填写信息不能为空!');
                    break;
                case '-2':
                    alert('当前会员帐号未注册');
                    break;
                case '-4':
                    alert('会员帐号只能是数字字母下划线组合');
                    break;
                case '0':
                    //登录成功
                    closeTBt();
                    checkUser();
                    break;
                default:
                    break;
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            var x = 1;
        }
    })
}

//签到
function btnSign(){
    $.ajax({
        url: 'action.php?action=sign',
        dataType: 'json',
        cache: false,
        type: 'POST',
        success: function (obj) {
            switch(obj.stat){
                case '-1':
                    alert('请先登录');
                    break;
                case '-2':
                    alert('用户信息读取失败');
                    break;
                case '-3':
                    alert('您今天已经签到过了');
                    break;
                case '0':
                    alert('签到成功');
                    checkUser();
                    break;
                default:
                    break;
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            var x = 1;
        }
    })

}

//兑换礼品
function btnChange(){

    if(!confirm('确认兑换？')){
        return;
    }

    var _id = $('#shop').val();
    $.ajax({
        url: 'action.php?action=changeShop',
        dataType: 'json',
        cache: false,
        type: 'POST',
        data: {id : _id},
        success: function (obj) {
            switch(obj.stat){
                case '-1':
                    alert('数据读取错误');
                    break;
                case '-2':
                    alert('很遗憾,您的积分不足');
                    break;
                case '-3':
                    alert('库存不足,无法兑换');
                    break;
                case '0':
                    alert('已提交兑换，请等待派彩，谢谢！');
                    closeTBt();
                    checkUser();
                    break;
                default:
                    break;
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            var x = 1;
        }
    })
}

//神秘礼金
function btnLottery(){

    $.ajax({
        url: 'action.php?action=active',
        dataType: 'json',
        cache: false,
        type: 'POST',
        success: function (obj) {
            switch(obj.stat){
                case '-1':
                    alert('数据读取错误');
                    break;
                case '5':
                    alert('神秘彩金活动未开启,敬请期待!');
                    break;
                case '6':
                    alert('神秘礼金活动已结束,敬请期待下次精彩活动!');
                    break;
                case '-3':
                    alert('神秘礼金已经领取完毕,敬请期待下次精彩活动!');
                    break;
                case '-4':
                    alert('您已经领取过神秘礼金了,欢迎下次继续参与!');
                    break;
                case '0':
                    checkUser();
                    alert('领取成功,恭喜您获得了 '+obj.score+' 积分!');
                    break;
                default:
                    break;
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            var x = 1;
        }
    })
}

//绑定推荐人
function btnRecomand(){

    var tuijianren = $('#tuijianren').val();
    var tuijianren1 = $('#tuijianren1').val();
    if(tuijianren==""){
        alert('推荐人帐号不能为空');
        return;
    }

    if(tuijianren != tuijianren1){
        alert('两次输入的推荐人帐号不一致');
        return;
    }

    $.ajax({
        url: 'action.php?action=recomand',
        dataType: 'json',
        cache: false,
        type: 'POST',
        data: {tuijianren : tuijianren},
        success: function (obj) {
            switch(obj.stat){
                case '-1':
                    alert('数据读取错误');
                    break;
                case '-2':
                    alert('修改失败,您已经绑定过推荐人!');
                    break;
                case '-3':
                    alert('推荐人帐号不存在!');
                    break;
                case '-5':
                    alert('推荐人不能是自己!');
                    break;
                case '0':
                    checkUser();
                    isTuijian = true;
                    strTuijian = obj.recomand;
                    alert('修改成功');
                    closeTBt();
                    break;
                default:
                    break;
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            var x = 1;
        }
    })
}

function scoreList(){
    queryPage(1);
    $('#scoreList').css("color","red");
    $('#changeList').css("color","black");
    $('#changeTable').hide();
    $('#scoreTable').show();
}

function changeList(){
    queryPage_T(1);
    $('#changeList').css("color","red");
    $('#scoreList').css("color","black");
    $('#changeTable').show();
    $('#scoreTable').hide();
}

var pagesize = 5;

function queryPage_T(page){

    $.ajax({

        url: 'action.php?action=querylist&p='+page+'&size='+pagesize,

        dataType: 'json',

        cache: false,

        type: 'GET',

        success: function (obj) {

            if(obj.count != 0){

                var sHtml1 = "";

                var x = "";

                $.each(obj.data, function(i, award){

                    switch(award.state){
                        case "0":
                            x = '<font color=black >已下单</font>';
                            break;
                        case "1":
                            x = '<font color=green >已添加彩金</font>';
                            break;
                        case "2":
                            x = '<font color=red >已取消兑换</font>';
                            break;
                    }

                    sHtml1 +="<tr><td>"+award.prize_name+"</td><td>"+award.add_time+"</td><td>"+x+"</td></tr>";

                })

                var sPage = Paging(page,pagesize,obj.count,2,"queryPage_T",'','','上一页','下一页');

                $(".quotes").html(sPage);

                $("#changeBody").html(sHtml1);

            }else{

                $("#changeBody").html("<tr><td colspan='3'>未找到相关信息</td></tr>");

            }

        },

        error: function(XMLHttpRequest, textStatus, errorThrown) {

            var x = 1;

        }

    })

}

function queryPage(page){


    $.ajax({

        url: 'action.php?action=querylist1&p='+page+'&size='+pagesize,

        dataType: 'json',

        cache: false,

        type: 'GET',

        success: function (obj) {

            if(obj.count != 0){

                var sHtml1 = "";

                var x = "";

                $.each(obj.data, function(i, award){

                    switch(award.score_type){
                        case "1":
                            x = '签到';
                            break;
                        case "2":
                            x = '兑换';
                            break;
                        case "3":
                            x = '充值';
                            break;
                        case "4":
                            x = '绑定';
                            break;
                        case "5":
                            x = '取消订单';
                            break;
                        case "6":
                            x = '推荐绑定';
                            break;
                        case "7":
                            x = '神秘彩金';
                            break;
                    }

                    sHtml1 +="<tr><td>"+award.add_time+"</td><td>"+x+"</td><td>"+award.change_score+"</td><td>"+award.old_score+"</td></tr>";

                })

                var sPage = Paging(page,pagesize,obj.count,2,"queryPage",'','','上一页','下一页');

                $(".quotes").html(sPage);

                $("#scoreBody").html(sHtml1);

            }else{

                $("#scoreBody").html("<tr><td colspan='4'>未找到相关信息</td></tr>");

            }

        },

        error: function(XMLHttpRequest, textStatus, errorThrown) {

            var x = 1;

        }

    })

}


function Paging(pageNum,pageSize,totalCount,skipCount,fuctionName,currentStyleName,currentUseLink,preText,nextText,firstText,lastText){

    var returnValue = "";

    var begin = 1;

    var end = 1;

    var totalpage = Math.floor(totalCount / pageSize);

    if(totalCount % pageSize >0){

        totalpage ++;

    }

    if(preText == null){

        firstText = "prev";

    }

    if(nextText == null){

        nextText = "next";

    }



    begin = pageNum - skipCount;

    end = pageNum + skipCount;



    if(begin <= 0){

        end = end - begin +1;

        begin = 1;

    }



    if(end > totalpage){

        end = totalpage;

    }

    for(count = begin;count <= end;count ++){

        if(currentUseLink){

            if(count == pageNum){

                returnValue += "<a class=\""+currentStyleName+"\" href=\"#\" onclick=\""+fuctionName+"("+count.toString()+");\">"+count.toString()+"</a> ";

            }

            else{

                returnValue += "<a href=\"#\" onclick=\"" + fuctionName + "(" + count.toString() + ");\">" + count.toString() + "</a> ";

            }

        }

        else {

            if (count == pageNum) {

                returnValue += "<span class=\""+currentStyleName+"\">"+count.toString()+"</span> ";

            }

            else{

                returnValue += "<a href=\"#\" onclick=\""+fuctionName+"("+count.toString()+");\">"+count.toString()+"</a> ";}

        }

    }

    if(pageNum - skipCount >1){

        returnValue = " ... "+returnValue;

    }

    if(pageNum + skipCount < totalpage){

        returnValue = returnValue + " ... ";

    }



    if(pageNum > 1){

        returnValue = "<a href=\"#\" onclick=\""+fuctionName+"("+(pageNum - 1).toString()+");\"> " + preText + "</a> " + returnValue;

    }

    if(pageNum < totalpage){

        returnValue = returnValue + " <a href=\"#\" onclick=\""+fuctionName+"("+(pageNum+1).toString()+");\">" + nextText + "</a>";

    }



    if(firstText!= null){

        if(pageNum >1){

            returnValue = "<a href=\"#\" onclick=\""+fuctionName+"(1);\">" + firstText + "</a> " + returnValue;}

    }

    if(lastText !=null){

        if(pageNum < totalpage){

            returnValue = returnValue + " " + " <a href=\"#\" onclick=\""+fuctionName+"("+totalpage.toString()+");\">" + lastText + "</a>";}

    }

    return returnValue;

}

var win_height = 0;

//登录框
function logBox(){

    createTBt();
    var html_body = '';
    html_body += '<div style="position:relative; width:100%;background:rgb(100,86,86);height:70px;-webkit-border-radius:5px 5px 0px 0px;border-bottom:0px;">';
    html_body += '<div style="position:relative;float:left;color:white;font-size:16pt;height:70px;line-height:70px;left:6%;">填写您的会员帐号</div>';
    html_body += '<div  onclick="closeTBt()" style="position:relative;float:right;height:70px;line-height:70px;width:70px;color:white;font-size:40pt;">×</div></div>';
    html_body += '<div style="width:90%;position:relative;top:20px;left:5%;height:350px;">';
    html_body += '<br/><div style="width:100%;-webkit-border-radius: 7px;background-color:#e3e3e3; padding-right:10px;">';
    html_body += '<input type="text"  id="user_name"  placeholder="会员帐号" style="text-align:left;background: rgba(227, 227, 227,1);border:none;margin-top:10px;height:65px;line-height:65px;font-size:18pt;padding-left:10px;width:100%;-webkit-border-radius: 7px;"/></div>';
    html_body += '<br/><br/><div onclick="btnLogin()" style="position:relative;width:89%;left:5%;color:white;font-size:20pt;font-weight:bold;height:70px;line-height:70px;text-align:center;background-color:rgb(255,102,0);-webkit-border-radius:7px 7px 10px 10px;">';
    html_body += '确定登录</div>';


    document.getElementById('wind').innerHTML = html_body;

}

//绑定框
function recomandBox(){

    createTBt();
    var html_body = '';
    html_body += '<div style="position:relative; width:100%;background:rgb(100,86,86);height:70px;-webkit-border-radius:5px 5px 0px 0px;border-bottom:0px;">';


    if(!isTuijian){
        html_body += '<div style="position:relative;float:left;color:white;font-size:16pt;height:70px;line-height:70px;left:6%;">填写您的推荐人</div>';
        html_body += '<div  onclick="closeTBt()" style="position:relative;float:right;height:70px;line-height:70px;width:70px;color:white;font-size:40pt;">×</div></div>';
        html_body += '<div style="width:90%;position:relative;top:20px;left:5%;height:350px;">';
        html_body += '<br/><div style="width:100%;-webkit-border-radius: 7px;background-color:#e3e3e3; padding-right:10px;">';
        html_body += '<input type="text"  id="tuijianren"  placeholder="推荐人" style="text-align:left;background: rgba(227, 227, 227,1);border:none;margin-top:10px;height:65px;line-height:65px;font-size:18pt;padding-left:10px;width:100%;-webkit-border-radius: 7px;"/></div>';
        html_body += '<br/><div style="width:100%;-webkit-border-radius: 7px;background-color:#e3e3e3; padding-right:10px;">';
        html_body += '<input type="text" maxlength="11" id="tuijianren1"  placeholder="确认推荐人" style="text-align:left;background: rgba(227, 227, 227,1);border:none;margin-top:10px;height:65px;line-height:65px;font-size:18pt;padding-left:10px;width:100%;-webkit-border-radius: 7px;"/></div>';
        html_body += '<br/><div onclick="btnRecomand()" style="position:relative;width:89%;left:5%;color:white;font-size:20pt;font-weight:bold;height:70px;line-height:70px;text-align:center;background-color:rgb(255,102,0);-webkit-border-radius:7px 7px 10px 10px;">';
        html_body += '确定修改</div>';

    }else{
        html_body += '<div style="position:relative;float:left;color:white;font-size:16pt;height:70px;line-height:70px;left:6%;">推荐人</div>';
        html_body += '<div  onclick="closeTBt()" style="position:relative;float:right;height:70px;line-height:70px;width:70px;color:white;font-size:40pt;">×</div></div>';
        html_body += '<div style="width:90%;position:relative;top:20px;left:5%;height:200px;">';
        html_body += '<br/><div style="width:100%;-webkit-border-radius: 7px;background-color:#e3e3e3; padding-right:10px;">';
        html_body += '<input type="text" value="'+strTuijian+'"  readonly id="tuijianren"  placeholder="推荐人" style="text-align:left;background: rgba(227, 227, 227,1);border:none;margin-top:10px;height:65px;line-height:65px;font-size:18pt;padding-left:10px;width:100%;-webkit-border-radius: 7px;"/></div>';
        html_body += '</div>';
    }

    document.getElementById('wind').innerHTML = html_body;

}

//明细列表
function queryBox(){

    createTBt();
    var html_body = '';
    html_body += '<div style="position:relative; width:100%;background:rgb(100,86,86);height:70px;-webkit-border-radius:5px 5px 0px 0px;border-bottom:0px;">';
    html_body += '<div style="position:relative;float:left;color:white;font-size:16pt;height:70px;line-height:70px;left:6%;">明细列表</div>';
    html_body += '<div  onclick="closeTBt()" style="position:relative;float:right;height:70px;line-height:70px;width:70px;color:white;font-size:40pt;">×</div></div>';
    html_body += '<div style="width:90%;position:relative;top:20px;left:5%;height:700px;">';
    html_body += '<p style="text-align:center;"><span id="scoreList" onClick="scoreList()" style="cursor:pointer;color:red;font-weight:bold;">积分明细</span>&nbsp;|&nbsp;<span id="changeList" onClick="changeList()" style="cursor:pointer;color:#000;font-weight:bold;">兑换明细</span></p> '
    html_body +=  '<br/><table class="gridtable" id="changeTable" width="100%" style="display:none"  >'
    html_body +=  '<tr class="ad">'
    html_body +=  '	<td>兑换筹码</td>'
    html_body +=  '	<td style="width:180px;">兑换时间</td>'
    html_body +=  '	<td style="width:130px;">订单状态</td>'
    html_body +=  '</tr>'
    html_body +=  '<tbody id="changeBody"></tbody>'
    html_body +=  '</table>'
    html_body +=  '<table class="gridtable" id="scoreTable" width="100%" >'
    html_body +=  '	<tr class="ad">'
    html_body +=  '		<td>操作时间</td>'
    html_body +=  '		<td>积分类型</td>'
    html_body +=  '		<td>积分变动</td>'
    html_body +=  '		<td>当前积分</td>'
    html_body +=  '	</tr>'
    html_body +=  '	<tbody id="scoreBody"></tbody>'
    html_body +=  '	</table>'
    html_body +=  '	<div class="quotes" style="padding:10px 0px;"></div>'

    html_body += '</div>';

    document.getElementById('wind').innerHTML = html_body;

    queryPage(1);
    $('#changeTable').hide();
    $('#scoreTable').show();
}

//兑换框
function changeBox(){

    createTBt();
    var html_body = '';
    html_body += '<div style="position:relative; width:100%;background:rgb(100,86,86);height:70px;-webkit-border-radius:5px 5px 0px 0px;border-bottom:0px;">';
    html_body += '<div style="position:relative;float:left;color:white;font-size:16pt;height:70px;line-height:70px;left:6%;">选择礼品进行兑换</div>';
    html_body += '<div  onclick="closeTBt()" style="position:relative;float:right;height:70px;line-height:70px;width:70px;color:white;font-size:40pt;">×</div></div>';
    html_body += '<div style="width:90%;position:relative;top:20px;left:5%;height:700px;">';
    html_body += '<br/><div style="width:100%;-webkit-border-radius: 7px;background-color:#e3e3e3; padding-right:10px;">';
    html_body += '<p>选择筹码：<select name="shop" id="shop"><option value="1">88元筹码</option></select></p></div>';
    html_body += '<br/><div style="width:100%;-webkit-border-radius: 7px;background-color:#e3e3e3; padding-right:10px;">';
    html_body += '<p>当前库存：<input name="kucun" id="kucun" readonly type="text" value="0"></p> </div>';
    html_body += '<br/><div style="width:100%;-webkit-border-radius: 7px;background-color:#e3e3e3; padding-right:10px;">';
    html_body += '<p>所需积分：<input name="jifen" id="jifen" readonly type="text" value="0" ></p></div>';
    html_body += '<br/><div onclick="btnChange()" style="position:relative;width:89%;left:5%;color:white;font-size:20pt;font-weight:bold;height:70px;line-height:70px;text-align:center;background-color:rgb(255,102,0);-webkit-border-radius:7px 7px 10px 10px;">';
    html_body += '确定兑换</div>';

    document.getElementById('wind').innerHTML = html_body;

    initShop();
}

function createTBt()
{
    closeTBt();
    var div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.zIndex = '90002';
    div.style.top = '0px';
    div.style.backgroundColor = 'white';
    div.style.width = '100%';
    div.style.left = '0px';
    div.style.minHeight = (win_height - 70) + 'px';
    div.style.webkitAnimation = 'wind_down 0.3s 0s 1 linear both';
    div.id = 'wind';
    div.style.webkitBorderRadius = "10px 10px 0px 0px";
    document.body.appendChild(div);
}

function closeTBt()
{
    var TBwind = document.getElementById("wind");

    if(TBwind != null)
    {
        document.body.removeChild(TBwind);
    }
}
