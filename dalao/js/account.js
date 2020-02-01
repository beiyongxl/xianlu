$(document).ready(function(){
//	 getBalance();
//	getMessage(1);
//	getMessageNumber();
});

function hidePromotion(promotionId){
	$("#"+promotionId).hide();
}

function showPromotion(promotionId){
	$("#"+promotionId).show();
}

function showmessageL(){
	JqueryShowMessage("请先登入！");
}
function pokergamemssage(){
	JqueryShowMessage("游戏即将上线！");
}
function locationpage(type){
	location.href=type;
}
function locationpageAddGIF(type){
//	$("#maskDiv").show();
	location.href=type;
}

function locationPageJump(type){
	location.href=type;
}

function openTypepage(type){
	var all = null;
	var wo = null;
	var pasw = null;
	var agreement = null;
	var opusLive= null;
	var tt = null;
	if(type == "depositCash" ||type == "depositATM" ||type == "depositWY" ||type == "depositXN" || type == "depositOnLine"|| type == "depositOnLineGuo" || type == "withdrawOnLine" 
		|| type == "depositBaoFoo" || type == "depositOnLineZhi" || type == "addNewBankCard" || type == "depositXinSheng" || type == "depositOnLineTong"
		|| type == "depositThirdAll" || type == "depositThird"){
		all = window.open("",'depositOnLine',"left=150,top=20,height=600,width=1040,toolbar=no,resizable=yes,menubar=no,location=no, status=no,scrollbars=yes"); 
		all.focus();
	}else if(type == "depositAllType" || type == "personCenter" || type == "CreditConversion" || type == "withdrawType" || type == "unreadMessages" || type == "personalMsg"
		|| type == "password" || type == "totalReport"){
		/*if (!wo.colsed()) {
			wo.colse();
		}*/
		wo = window.open("",'withdrawOnLine',"left=150,top=20,height=600,width=1040,toolbar=no,resizable=yes,menubar=no,location=no, status=no,scrollbars=yes");
		wo.focus();
	}else if(type == "withdrawChangePassword"){
//		all = window.open("",'depositOnLine',"left=150,top=20,height=600,width=1040,toolbar=no,resizable=yes,menubar=no,location=no, status=no,scrollbars=yes"); 
		pasw = window.open("",'withdrawChangePassword',"left=400,top=160,height=400,width=500,toolbar=no,resizable=yes,menubar=no,location=no, status=no,scrollbars=yes");
	}else if(type == "agreement"){
		 agreement = window.open("",'agreement',"left=250,top=160,height=400,width=500,toolbar=no,resizable=yes,menubar=no,location=no, status=no,scrollbars=yes");
	}else if(type == "opusLive"){
		alert("ok1");
		opusLive = window.open("",'opusLive',"toolbar=no,resizable=yes,menubar=no,location=no, status=no,scrollbars=yes");
	}else{
		 tt = window.open("",'liveindow',"left=50,top=50,height=800,width=1040,toolbar=no,resizable=yes,menubar=no,location=no, status=no,scrollbars=yes");
	}
	
	var o = {
			type:type
	};
	var jsonuserinfo = $.toJSON(o);
	$.ajax({
		type : "post",
		url : $("#path").val() + "/app/openTypepage?" + Math.random()*10000,
		data : jsonuserinfo,
		contentType : 'application/json',
		dataType : "json",
		async:false, 
		timeout : 10000,
		beforeSend : function(xmlhttprequest) {
		},
		success : function(data) {
			if(data){
				if(data.success){
				 if(type == "depositAllType" || type == "personCenter" || type == "CreditConversion" || type == "withdrawType" || type == "unreadMessages" 
					 || type == "personalMsg" || type == "password" || type == "totalReport"){
					 wo.location=data.linkPage;
					}else if(data.linkPage == "withdrawChangePassword"){
						pasw.location=data.linkPage;
					}else if(data.linkPage == "agreement"){
						agreement.location=data.linkPage;
					}else if(type == "depositCash" ||type == "depositATM" ||type == "depositATM" ||type == "depositWY" || type == "depositXN" ||type == "depositOnLine" || type== "depositOnLineGuo" ||type == "withdrawOnLine" 
						|| type == "depositBaoFoo" || type == "depositOnLineZhi" || type == "addNewBankCard" || type == "depositXinSheng" || type == "depositOnLineTong"
						|| type == "depositThirdAll" || type == "depositThird"){
						all.location=data.linkPage; 
					}else if(type == "opusLive"){
						opusLive.location=data.linkPage;
					}else {
						tt.location=data.linkPage; 
					}
					
				}else{
					if(all != null){
						all.close();
					}else if(wo != null){
						wo.close();
					}else if(pasw != null){
						pasw.close();
					}else if(agreement != null){
						agreement.close();
					}else if(tt != null){
						tt.close();
					}else if(opusLive != null){
						opusLive.close();
					}
					
					if(data.message=="SESSION_EXPIRED"){
						JqueryShowMessageHome(l_basic['sessionExpired']);
					}else{
						JqueryShowMessage(data.message);
					}
				}
			}
		},
		error : function(xmlhttprequest, error) {
			if(all != null){
				all.close();
			}else if(wo != null){
				wo.close();
			}else if(pasw != null){
				pasw.close();
			}else if(agreement != null){
				agreement.close();
			}else if(tt != null){
				tt.close();
			}else if(opusLive != null){
				opusLive.close();
			}
		},
		complete : function() {
		}
	});
}

function openTypepageNoLogin(type){
	if(type == "agreement"){
		var agreement = window.open("",'agreement',"left=300,top=150,height=390,width=750,toolbar=no,resizable=yes,menubar=no,location=no, status=no,scrollbars=yes");
		agreement.focus();
	}else if(type == "instructions"){
		var instructions = window.open("",'instructions',"left=300,top=50,height=600,width=600,toolbar=no,resizable=yes,menubar=no,location=no, status=no,scrollbars=yes");
		instructions.focus();
	}
	var o = {
			type:type	
	};
	var jsonuserinfo = $.toJSON(o);
	$.ajax({
		type : "post",
		url : $("#path").val() + "/app/openTypepageNoLogin?" + Math.random()*10000,
		data : jsonuserinfo,
		contentType : 'application/json',
		dataType : "json",
		async:true, 
		timeout : 50000,
		beforeSend : function(xmlhttprequest) {
		},
		success : function(data) {
			if(data){
				if(data.success){
					if(data.linkPage == "agreement"){
						agreement.location=data.linkPage;
					}else if(data.linkPage == "instructions"){
						instructions.location=data.linkPage;
					}
				}else{
//					if(data.message=="SESSION_EXPIRED"){
//						JqueryShowMessageHome(l_basic['sessionExpired']);
//					}else{
//						JqueryShowMessage(data.message);
//					}
				}
			}
		},
		error : function(xmlhttprequest, error) {
		},
		complete : function() {
		}
	});
}


function getAnnounceList(pageNumber){
	$("#pageNext").unbind();
	$("#pagePrev").unbind();
		var RecordsPage = 20;// 每页显示多少条
		var o = {
				pageNumber : pageNumber + "",//当前页
				RecordsPage : RecordsPage + "" 
		};
		var jsonuserinfo = $.toJSON(o);
		$.ajax({
			type : "post",
			url : $("#path").val() + "/app/getAnnounceList?" + Math.random()*10000,
			data : jsonuserinfo,
			contentType : 'application/json',
			dataType : "json",
			async : true, 
			timeout : 50000,
			beforeSend : function(xmlhttprequest) {
			},
			success : function(data) {
				if(data){
					if (data.success==true) {
						$("#result_table tbody").html("");
						if(data.resultList.length > 0){
							
							for(var i=0;i<data.resultList.length;i++){
								var con = data.resultList[i][0].replace(/[\r\n]/g, "");
								var tdhtml = "";
									tdhtml = "<tr>";
									tdhtml +="<td>"+data.resultList[i][1]+"</td>";
									tdhtml +="<td><a onclick='openAnnounceContent(\""+con+"\",\""+l_message['msg5']+"\")' class='r_t_td_a'>"+data.resultList[i][0].substring(0,30)+"</a></td>";
									tdhtml +="</tr>";
								$("#result_table tbody").append(tdhtml);
							}
							$("#result_table tr").mousemove(function() {
								tr_move(this);
							});
							$("#result_table tr").mouseout(function() {
								tr_out(this);
							});
								
								$("#currMemberNum").html(data.total);
								$("#noRecord").hide();
								$("#pageMember").show();
								var pageNum = data.pageNumber;//当前页
								var pageAllNumber = data.pageAllNumber;//总页数
								$("#allPageNum").html(pageAllNumber);
								if(pageNumber == 1) {
									if(pageAllNumber != 1) {
										$("#pageNext").click(function(){
											getAnnounceList(pageNumber + 1);
										});
									}
								} else if(pageNumber == pageAllNumber) {
									$("#pagePrev").click(function(){
										getAnnounceList(pageNumber - 1);
									});
								} else {
									$("#pageNext").click(function(){
										getAnnounceList(pageNumber + 1);
									});
									$("#pagePrev").click(function(){
										getAnnounceList(pageNumber - 1);
									});
								}
								
								var pageNumHtml = "";
								var forEnd;
								var forBegin;
								if(pageAllNumber > 10) {
									if(pageNumber > 5) {
										if(pageAllNumber - pageNumber > 5) {
											forEnd = pageNumber + 5;
											forBegin = pageNum - 4;
										} else {
											forEnd = pageAllNumber;
											forBegin = pageAllNumber - 9;
										}
									} else {
										forEnd = 10;
										forBegin = 1;
									}
								} else {
									forEnd = pageAllNumber;
									forBegin = 1;
								}
								for ( var j = forBegin; j <= forEnd; j++) {
									if(j != pageNumber) {
										pageNumHtml += "<a onclick=\"getAnnounceList("+j+");\" style='color:#000;cursor: pointer;' >"+ j+$("#pageNext").unbind();
										$("#pagePrev").unbind();
										var RecordsPage = 20;// 每页显示多少条
										var o = {
												pageNumber : pageNumber + "",//当前页
												RecordsPage : RecordsPage + "" 
										};
										var jsonuserinfo = $.toJSON(o);
										$.ajax({
											type : "post",
											url : $("#path").val() + "/app/getAnnounceList?" + Math.random()*10000,
											data : jsonuserinfo,
											contentType : 'application/json',
											dataType : "json",
											async : true, 
											timeout : 50000,
											beforeSend : function(xmlhttprequest) {
											},
											success : function(data) {
												if(data){
													if (data.success==true) {
														$("#result_table tbody").html("");
														if(data.resultList.length > 0){
															
															for(var i=0;i<data.resultList.length;i++){
																var con = data.resultList[i][0].replace(/[\r\n]/g, "");
																var tdhtml = "";
																	tdhtml = "<tr>";
																	tdhtml +="<td>"+data.resultList[i][1]+"</td>";
																	tdhtml +="<td><a onclick='openAnnounceContent(\""+con+"\",\""+l_message['msg5']+"\")' class='r_t_td_a'>"+data.resultList[i][0]+"</a></td>";
																	tdhtml +="</tr>";
																$("#result_table tbody").append(tdhtml);
															}
															$("#result_table tr").mousemove(function() {
																tr_move(this);
															});
															$("#result_table tr").mouseout(function() {
																tr_out(this);
															});
																
																$("#currMemberNum").html(data.total);
																$("#noRecord").hide();
																$("#pageMember").show();
																var pageNum = data.pageNumber;//当前页
																var pageAllNumber = data.pageAllNumber;//总页数
																$("#allPageNum").html(pageAllNumber);
																if(pageNumber == 1) {
																	if(pageAllNumber != 1) {
																		$("#pageNext").click(function(){
																			getAnnounceList(pageNumber + 1);
																		});
																	}
																} else if(pageNumber == pageAllNumber) {
																	$("#pagePrev").click(function(){
																		getAnnounceList(pageNumber - 1);
																	});
																} else {
																	$("#pageNext").click(function(){
																		getAnnounceList(pageNumber + 1);
																	});
																	$("#pagePrev").click(function(){
																		getAnnounceList(pageNumber - 1);
																	});
																}
																
																var pageNumHtml = "";
																var forEnd;
																var forBegin;
																if(pageAllNumber > 10) {
																	if(pageNumber > 5) {
																		if(pageAllNumber - pageNumber > 5) {
																			forEnd = pageNumber + 5;
																			forBegin = pageNum - 4;
																		} else {
																			forEnd = pageAllNumber;
																			forBegin = pageAllNumber - 9;
																		}
																	} else {
																		forEnd = 10;
																		forBegin = 1;
																	}
																} else {
																	forEnd = pageAllNumber;
																	forBegin = 1;
																}
																for ( var j = forBegin; j <= forEnd; j++) {
																	if(j != pageNumber) {
																		pageNumHtml += "<a onclick=\"getAnnounceList("+j+");\" style='color:#000;cursor: pointer;' >"+ j + "</a>&nbsp;";
																	} else {
																		pageNumHtml += "<font class='F_bold currPageNumber''>"+ j + "</font>&nbsp;";
																	}
																}
																$("#currPageNum").html(pageNumHtml);
																
														}else{
															$("#pageMember").hide();
															$("#noRecord").show();
														}
													}else{
														if(data.message=='SESSION_EXPIRED'){
															JqueryShowMessageHome(l_basic['sessionExpired']);
														}else if(data.message=='TRY_AGAIN'){
															JqueryShowMessage(l_basic['tryAgain']);
														}else{
															JqueryShowMessage(data.message);
														}
													}
												}else{
													JqueryShowMessage(l_basic['tryAgain']);
												}
												
											},
											error : function(xmlhttprequest, error) {
											},
											complete : function() {
											}
										});+ "</a>&nbsp;";
									} else {
										pageNumHtml += "<font class='F_bold currPageNumber''>"+ j + "</font>&nbsp;";
									}
								}
								$("#currPageNum").html(pageNumHtml);
								
						}else{
							$("#pageMember").hide();
							$("#noRecord").show();
						}
					}else{
						if(data.message=='SESSION_EXPIRED'){
							JqueryShowMessageHome(l_basic['sessionExpired']);
						}else if(data.message=='TRY_AGAIN'){
							JqueryShowMessage(l_basic['tryAgain']);
						}else{
							JqueryShowMessage(data.message);
						}
					}
				}else{
					JqueryShowMessage(l_basic['tryAgain']);
				}
				
			},
			error : function(xmlhttprequest, error) {
			},
			complete : function() {
			}
		});
}

function dispersionAnnounce(pageNumber){
	$("#pageNext").unbind();
	$("#pagePrev").unbind();
		var RecordsPage = 3;// 每页显示多少条
		var o = {};
		var jsonuserinfo = $.toJSON(o);
		$.ajax({
			type : "post",
			url : $("#path").val() + "/app/getAnnounceListAll?" + Math.random()*10000,
			data : jsonuserinfo,
			contentType : 'application/json',
			dataType : "json",
			async : true, 
			timeout : 50000,
			beforeSend : function(xmlhttprequest) {
			},
			success : function(data) {
				if(data){
					if (data.success==true) {
						
						$("#result_table tbody").html("");
						if(data.resultList.length > 0){
							$("#currMemberNum").html(data.resultList.length);
							/*onclick='JqueryShowMessageJustCloseMarquee(\""+con+"\",\""+l_message['msg5']+"\")'*/
							for(var i=0;i<data.resultList.length;i++){
								var con = data.resultList[i][0].replace(/[\r\n]/g, "");
								var tdhtml = "";
									tdhtml = "<tr>";
									tdhtml +="<td>"+(i+1)+"</td>";
									tdhtml +="<td>"+data.resultList[i][1]+"</td>";
									tdhtml +="<td><a  class='r_t_td_a'>"+data.resultList[i][0]+"</a></td>";
									tdhtml +="</tr>";
								$("#result_table tbody").append(tdhtml);
							}
							
							/*$("#currMemberNum").html(data.total);*/
							$("#noRecord").hide();
							$("#pageMember").show();
							var pageNum = 1;//当前页
							var pageAllNumber = Math.ceil(data.resultList.length/RecordsPage);//总页数
							$("#allPageNum").html(pageAllNumber);
							if(pageNumber == 1) {
								if(pageAllNumber != 1) {
									$("#pageNext").click(function(){
										dispersionAnnounce(pageNumber + 1);
									});
								}
							} else if(pageNumber == pageAllNumber) {
								$("#pagePrev").click(function(){
									dispersionAnnounce(pageNumber - 1);
								});
							} else {
								$("#pageNext").click(function(){
									dispersionAnnounce(pageNumber + 1);
								});
								$("#pagePrev").click(function(){
									dispersionAnnounce(pageNumber - 1);
								});
							}
							
							var pageNumHtml = "";
							var forEnd;
							var forBegin;
							if(pageAllNumber > 10) {
								if(pageNumber > 5) {
									if(pageAllNumber - pageNumber > 5) {
										forEnd = pageNumber + 5;
										forBegin = pageNum - 4;
									} else {
										forEnd = pageAllNumber;
										forBegin = pageAllNumber - 9;
									}
								} else {
									forEnd = 10;
									forBegin = 1;
								}
							} else {
								forEnd = pageAllNumber;
								forBegin = 1;
							}
							for ( var j = forBegin; j <= forEnd; j++) {
								if(j != pageNumber) {
									pageNumHtml += "<a onclick=\"dispersionAnnounce("+j+");\" style='color:#000;cursor: pointer;' >"+ j + "</a>&nbsp;";
								} else {
									pageNumHtml += "<font class='F_bold currPageNumber''>"+ j + "</font>&nbsp;";
								}
							}
							$("#currPageNum").html(pageNumHtml);
						}
					}else{
						if(data.message=='SESSION_EXPIRED'){
							JqueryShowMessageHome(l_basic['sessionExpired']);
						}else if(data.message=='TRY_AGAIN'){
							JqueryShowMessage(l_basic['tryAgain']);
						}else{
							JqueryShowMessage(data.message);
						}
					}
				}else{
					JqueryShowMessage(l_basic['tryAgain']);
				}
				
			},
			error : function(xmlhttprequest, error) {
			},
			complete : function() {
				gamePaging($("table[id = 'result_table'] tbody tr"),pageNumber*RecordsPage,pageNumber*RecordsPage-RecordsPage);
			}
		});
	
}

function openAnnounceContent(Content,title){

	$("#dialog").dialog({
		height: 330, 
		width: 390, 
		modal: true, 
		draggable: false, 
		resizable:false ,
		show : {
			effect : "clip",
			duration : 200
		},
		hide : {
			effect : "clip",
			duration : 200
	}});
	$("#dialog").dialog("option", "title", title);
	$("#dialog").dialog("open");
	$("#p_dialog").html(Content);
}




function getPokerBetDetail(id, pageNumber){
	$("#pageNext").unbind();
	$("#pagePrev").unbind();
	var fromDateObj = $("#from_date");
	var toDateObj =  $("#to_date");
	var RecordsPage = 20;// 每页显示多少条
	if(!checkFromToDate(fromDateObj.val(), toDateObj.val())) {
		JqueryShowMessage(l_basic['dateError']);
		return;
	}
	var o = {
		parentId:"" + id,
		fromDate : fromDateObj.val(),
		toDate :  toDateObj.val(),
		fromHour: $("#from_hour").val(),
		fromMinute: $("#from_minute").val(),
		fromSecond: $("#from_second").val(),
		toHour: $("#to_hour").val(),
		toMinute: $("#to_minute").val(),
		toSecond: $("#to_second").val(),
		pageNumber : pageNumber + "",
		RecordsPage : RecordsPage + "" 
	};
	
	var jsonuserinfo = $.toJSON(o);
	$.ajax({
		type : "post",
		url : $("#path").val() + "/app/getPokerBetDetail?" + Math.random()*10000,
		data : jsonuserinfo,
		contentType : 'application/json',
		dataType : "json",
		async : true,
	    timeout : 20000,
		beforeSend : function() {
			$("#progressBar").show();
		},
		success : function(data) {

			if (data) {
				if (data.success == true) {
					
					$("#result_table tbody").html("");
					$("#total_table tbody").html("");
					if(data.resultList.length > 0) {
						var cardIcons = {
							CLUB: '\u2663',
					        DIAMOND: '\u2666',
					        SPADE: '\u2660',
					        HEART: '\u2665'
						};
						var playerCards = "";
						var bestCards = "";
						var communityCards = "";
						
						var trHtml = "";
						var betCount = 0;
						var stake = 0;
						var validStake = 0;
						var winLoss = 0;
						var jackpotBuyAmount = 0;
						var jakcpotWinAmount = 0;
						var total = 0;
						for ( var i = 0; i < data.resultList.length; i++) {
							trHtml = "<tr>";
							
	                        playerCards = data.resultList[i].playerCards;
	                        bestCards = data.resultList[i].bestCards;
	                        communityCards = data.resultList[i].communityCards;
	                        
	                        if(playerCards == null || playerCards == "null" || playerCards == "") {
	                        	playerCards = "-";
	                        } else {
	                        	
	                        	playerCards=replaceCards(playerCards);
//	                        	playerCards = playerCards.replace(/T/g,"10");
//		                        playerCards = playerCards.replace(/c /g,"<span style='font-size:20px;'>" + cardIcons['CLUB']+"</span>&nbsp;&nbsp;");
//		                        playerCards = playerCards.replace(/d /g,"<span style='font-size:20px; color:#f00;'>" +cardIcons['DIAMOND']+"</span>&nbsp;&nbsp;");
//		                        playerCards = playerCards.replace(/s /g,"<span style='font-size:20px;'>" +cardIcons['SPADE']+"</span>&nbsp;&nbsp;");     
//		                        playerCards = playerCards.replace(/h /g,"<span style='font-size:20px; color:#f00;'>" +cardIcons['HEART']+"</span>&nbsp;&nbsp;");
	                        }
	                        if(bestCards == null || bestCards == "null" || bestCards == "") {
	                        	bestCards = "-";
	                        } else {
	                        	bestCards = replaceCards(bestCards);
//	                        	bestCards = bestCards.replace(/T/g,"10");
//		                        bestCards = bestCards.replace(/c /g,"<span style='font-size:20px;'>" + cardIcons['CLUB']+"</span>&nbsp;&nbsp;");
//		                        bestCards = bestCards.replace(/d /g,"<span style='font-size:20px; color:#f00;'>" +cardIcons['DIAMOND']+"</span>&nbsp;&nbsp;");
//		                        bestCards = bestCards.replace(/s /g,"<span style='font-size:20px;'>" +cardIcons['SPADE']+"</span>&nbsp;&nbsp;");     
//		                        bestCards = bestCards.replace(/h /g,"<span style='font-size:20px; color:#f00;'>" +cardIcons['HEART']+"</span>&nbsp;&nbsp;");
	                        }
	                        
	                        if(communityCards == null || communityCards == "null" || communityCards == "") {
	                        	communityCards = "-";
	                        } else {
	                        	communityCards = replaceCards(communityCards);
//	                        	communityCards = communityCards.replace(/T/g,"10");
//	                        	communityCards = communityCards.replace(/c /g,"<span style='font-size:20px;'>" + cardIcons['CLUB']+"</span>&nbsp;");
//	                        	communityCards = communityCards.replace(/d /g,"<span style='font-size:20px; color:#f00;'>" +cardIcons['DIAMOND']+"</span>&nbsp;");
//	                        	communityCards = communityCards.replace(/s /g,"<span style='font-size:20px;'>" +cardIcons['SPADE']+"</span>&nbsp;");     
//	                        	communityCards = communityCards.replace(/h /g,"<span style='font-size:20px; color:#f00;'>" +cardIcons['HEART']+"</span>&nbsp;");
	                        }
	                    	
							trHtml += "<td>" + (i + 1) + "</td>" +
									  "<td>Holdem</td>"+
									  "<td>"+ data.resultList[i].tableInfoId + " / " +data.resultList[i].gameInfoId+"</td>"+
									  "<td class='F_bold' style='min-width:40px'>"+ playerCards + "</td>"+
									  "<td class='F_bold' style='min-width:100px'>"+ communityCards + "</td>"+
									  "<td class='F_bold' style='min-width:100px'>"+ bestCards + "</td>"+
									  "<td class='F_bold f_right'>"+ formatNumber(data.resultList[i].stakeAmount,2) + "</td>"+
									  "<td class='F_bold f_right'>"+ formatNumber(data.resultList[i].validStake,2) + "</td>"+
									  "<td class='F_bold f_right' style='min-width:80px'>"+ formatNumberWinLoss(data.resultList[i].winLoss,2) + "</td>"+//"<a onclick='openDetail("+id+","+data.resultList[i].tableInfoId+","+data.resultList[i].gameInfoId+")'><span style='display:inline-block; cursor: pointer;' class='ui-icon ui-helper-clearfix ui-icon-grip-diagonal-se'>&nbsp;&nbsp;&nbsp;</span></a></td>"+
									  "<td class='F_bold f_right'>"+ formatNumberWinLoss(-data.resultList[i].jackpotBuyAmount,2) + "</td>"+
									  "<td class='F_bold f_right'>"+ formatNumberWinLoss(data.resultList[i].jackpotWinAmount,2) + "</td>"+
									  "<td>"+ formartTime(data.resultList[i].betTime,1) + "</td>"+
//									  "<td>"+ data.resultList[i].ip + "</td>"+
									  
								    "</tr>";
						
							$("#result_table tbody").append(trHtml);
							
							betCount = betCount + 1;
							stake = stake + data.resultList[i].stakeAmount;
							validStake = validStake + data.resultList[i].validStake;
							winLoss = winLoss + data.resultList[i].winLoss;
							jackpotBuyAmount = jackpotBuyAmount + data.resultList[i].jackpotBuyAmount;
							jakcpotWinAmount = jakcpotWinAmount + data.resultList[i].jackpotWinAmount ;
							
						}
						
						total = winLoss - jackpotBuyAmount + jakcpotWinAmount;
						
						trHtml = "<tr>"+
						  "<td class='F_bold' style='padding:5px !important;'>Current Page</td>"+
						  "<td class='F_bold'>"+ betCount + "</td>"+
						  "<td class='F_bold f_right'>"+ formatNumber(stake,2) + "</td>"+
						  "<td class='F_bold f_right'>"+ formatNumber(validStake,2) + "</td>"+
						  "<td class='F_bold f_right'>"+ formatNumberWinLoss(winLoss,2) + "</td>"+
						  "<td class='F_bold f_right'>"+ formatNumberWinLoss(-jackpotBuyAmount,2) + "</td>"+
						  "<td class='F_bold f_right'>"+ formatNumberWinLoss(jakcpotWinAmount,2) + "</td>"+
						  "<td class='F_bold f_right'>"+ formatNumberWinLoss(total,2) + "</td>"+
					    "</tr>";
					
						$("#total_table tbody").append(trHtml);
						
						trHtml = "<tr>"+
								  "<td class='F_bold' style='padding:5px !important;'>All Page</td>"+
								  "<td class='F_bold'>"+ data.pokerMemberReportTotal.betCount + "</td>"+
								  "<td class='F_bold f_right'>"+ formatNumber(data.pokerMemberReportTotal.stakeAmount,2) + "</td>"+
								  "<td class='F_bold f_right'>"+ formatNumber(data.pokerMemberReportTotal.validStake,2) + "</td>"+
								  "<td class='F_bold f_right'>"+ formatNumberWinLoss(data.pokerMemberReportTotal.winLoss,2) + "</td>"+
								  "<td class='F_bold f_right'>"+ formatNumberWinLoss(-data.pokerMemberReportTotal.jackpotBuyAmount,2) + "</td>"+
								  "<td class='F_bold f_right'>"+ formatNumberWinLoss(data.pokerMemberReportTotal.jackpotWinAmount,2) + "</td>"+
								  "<td class='F_bold f_right'>"+ formatNumberWinLoss(data.pokerMemberReportTotal.total,2) + "</td>"+
							    "</tr>";
						$("#total_table tbody").append(trHtml);
						
						$("#result_table tbody tr" ).mousemove(function(){
							tr_move(this);
						});
						$("#result_table tbody tr" ).mouseout(function(){
							tr_out(this);
						});

						$("#total_table").show();
						$('.auto').autoNumeric('init');
						$("#noRecord").hide();
						$("#pageMember").show();
						$("#currMemberNum").html(data.MemberListTotal);
						
						var pageNum = data.pageNumber;//当前页
						var pageAllNumber = data.pageAllNumber;
						$("#allPageNum").html(pageNum);
						if(pageNum == 1) {
							if(pageAllNumber != 1) {
								$("#pageNext").click(function(){
									getPokerBetDetail(id,(pageNum + 1));
								});
							}
						} else if(pageNum == pageAllNumber) {
							$("#pagePrev").click(function(){
								getPokerBetDetail(id,(pageNum - 1));
							});
						} else {
							$("#pageNext").click(function(){
								getPokerBetDetail(id,(pageNum + 1));
							});
							$("#pagePrev").click(function(){
								getPokerBetDetail(id,(pageNum - 1));
							});
						}
						
						var pageNumHtml = "";
						var forEnd;
						var forBegin;
						if(pageAllNumber > 10) {
							if(pageNum > 5) {
								if(pageAllNumber - pageNum > 5) {
									forEnd = pageNum + 5;
									forBegin = pageNum - 4;
								} else {
									forEnd = pageAllNumber;
									forBegin = pageAllNumber - 9;
								}
							} else {
								forEnd = 10;
								forBegin = 1;
							}
						} else {
							forEnd = pageAllNumber;
							forBegin = 1;
						}
						for ( var j = forBegin; j <= forEnd; j++) {
							if(j != pageNum) {
								pageNumHtml += "<a onclick=\"getPokerBetDetail("+id+","+j+");\" style='cursor: pointer;'>"+ j + "</a>&nbsp;";
							} else {
								pageNumHtml += "<font style='color:#f00;  font-weight: bold;'>"+ j + "</font>&nbsp;";
							}
						}
						$("#currPageNum").html(pageNumHtml);
						$("#progressBar").hide();
					} else {
						$("#progressBar").hide();
						$("#pageMember").hide();
						$("#noRecord").show();
					} 
//					 $( "#dialog" ).dialog({
//						  width:480,
//						  height:320,
//					      autoOpen: false,
//					      modal: true,
//					      show: {
//					        effect: "clip",
//					        duration: 200
//					      },
//					      hide: {
//					        effect: "clip",
//					        duration: 200
//					      }
//					    });
				
				} else{
					 if(data.message='SESSION_EXPIRED'){
							JqueryShowMessageHome(l_basic['sessionExpired']);
						}else if(data.message=='TRY_AGAIN'){
							JqueryShowMessage(l_basic['tryAgain']);
						}else {
							JqueryShowMessage(data.message);
						}
				}
			}else{
				JqueryShowMessage(l_basic['tryAgain']);
			}
		
		},
		error : function(xmlhttprequest, error) {
//			JqueryShowMessage(l_basic['tryAgain']);
		},
		complete : function() {
		}
	});
}

function replaceCards(cards){
//	cards = cards.replace(/T/g,"10");
	cards = cards.replace(/Ac /g,"<div class='CA_playerCards'></div>");
	cards = cards.replace(/2c /g,"<div class='C2_playerCards'></div>");
	cards = cards.replace(/3c /g,"<div class='C3_playerCards'></div>");
	cards = cards.replace(/4c /g,"<div class='C4_playerCards'></div>");
	cards = cards.replace(/5c /g,"<div class='C5_playerCards'></div>");
	cards = cards.replace(/6c /g,"<div class='C6_playerCards'></div>");
	cards = cards.replace(/7c /g,"<div class='C7_playerCards'></div>");
	cards = cards.replace(/8c /g,"<div class='C8_playerCards'></div>");
	cards = cards.replace(/9c /g,"<div class='C9_playerCards'></div>");
	cards = cards.replace(/Tc /g,"<div class='CT_playerCards'></div>");
	cards = cards.replace(/Jc /g,"<div class='CJ_playerCards'></div>");
	cards = cards.replace(/Qc /g,"<div class='CQ_playerCards'></div>");
	cards = cards.replace(/Kc /g,"<div class='CK_playerCards'></div>");
	
//-----------------------------------------------------------------------------	
	cards = cards.replace(/Ad /g,"<div class='DA_playerCards'></div>");
	cards = cards.replace(/2d /g,"<div class='D2_playerCards'></div>");
	cards = cards.replace(/3d /g,"<div class='D3_playerCards'></div>");
	cards = cards.replace(/4d /g,"<div class='D4_playerCards'></div>");
	cards = cards.replace(/5d /g,"<div class='D5_playerCards'></div>");
	cards = cards.replace(/6d /g,"<div class='D6_playerCards'></div>");
	cards = cards.replace(/7d /g,"<div class='D7_playerCards'></div>");
	cards = cards.replace(/8d /g,"<div class='D8_playerCards'></div>");
	cards = cards.replace(/9d /g,"<div class='D9_playerCards'></div>");
	cards = cards.replace(/Td /g,"<div class='DT_playerCards'></div>");
	cards = cards.replace(/Jd /g,"<div class='DJ_playerCards'></div>");
	cards = cards.replace(/Qd /g,"<div class='DQ_playerCards'></div>");
	cards = cards.replace(/Kd /g,"<div class='DK_playerCards'></div>");
	
//---------------------------------------------------------------------------
	cards = cards.replace(/Ah /g,"<div class='HA_playerCards'></div>");
	cards = cards.replace(/2h /g,"<div class='H2_playerCards'></div>");
	cards = cards.replace(/3h /g,"<div class='H3_playerCards'></div>");
	cards = cards.replace(/4h /g,"<div class='H4_playerCards'></div>");
	cards = cards.replace(/5h /g,"<div class='H5_playerCards'></div>");
	cards = cards.replace(/6h /g,"<div class='H6_playerCards'></div>");
	cards = cards.replace(/7h /g,"<div class='H7_playerCards'></div>");
	cards = cards.replace(/8h /g,"<div class='H8_playerCards'></div>");
	cards = cards.replace(/9h /g,"<div class='H9_playerCards'></div>");
	cards = cards.replace(/Th /g,"<div class='HT_playerCards'></div>");
	cards = cards.replace(/Jh /g,"<div class='HJ_playerCards'></div>");
	cards = cards.replace(/Qh /g,"<div class='HQ_playerCards'></div>");
	cards = cards.replace(/Kh /g,"<div class='HK_playerCards'></div>");

//----------------------------------------------------------------------------	
	cards = cards.replace(/As /g,"<div class='SA_playerCards'></div>");
	cards = cards.replace(/2s /g,"<div class='S2_playerCards'></div>");
	cards = cards.replace(/3s /g,"<div class='S3_playerCards'></div>");
	cards = cards.replace(/4s /g,"<div class='S4_playerCards'></div>");
	cards = cards.replace(/5s /g,"<div class='S5_playerCards'></div>");
	cards = cards.replace(/6s /g,"<div class='S6_playerCards'></div>");
	cards = cards.replace(/7s /g,"<div class='S7_playerCards'></div>");
	cards = cards.replace(/8s /g,"<div class='S8_playerCards'></div>");
	cards = cards.replace(/9s /g,"<div class='S9_playerCards'></div>");
	cards = cards.replace(/Ts /g,"<div class='ST_playerCards'></div>");
	cards = cards.replace(/Js /g,"<div class='SJ_playerCards'></div>");
	cards = cards.replace(/Qs /g,"<div class='SQ_playerCards'></div>");
	cards = cards.replace(/Ks /g,"<div class='SK_playerCards'></div>");
	
	return cards;
}


function changeMemberSubmit(form,status){
	if(status) {
		var o = {};
		var a = $("#userNikeNameForm").serializeArray();
	    $.each(a, function() {
	       if (o[this.name]) {
	           if (!o[this.name].push) {
	               o[this.name] = [o[this.name]];
	           }
	           o[this.name].push(this.value || '');
	       } else {
	           o[this.name] = this.value || '';
	       }
	    });
		var jsonuserinfo = $.toJSON(o);
		$.ajax({
			type : "post",
			url : $("#path").val() + "/app/changeMember?" + Math.random()*10000,
			data : jsonuserinfo,
			contentType : 'application/json',
			dataType : "json",
			async:false, 
			timeout : 50000,
			beforeSend : function(xmlhttprequest) {
			},
			success : function(data) {
				if (data) {
					if(data.success == true) {
						JqueryShowMessageReload(l_profile['msg1']);
					} else {
						if(data.message == 'CHECK_CODE') {
							JqueryShowMessage(l_profile['msg2']);
							changeRegCode();
						} else if(data.message == 'STATUS_NO_OPEN') {
							JqueryShowMessageReload(l_profile['msg3']);
						}else if(data.message == 'SESSION_EXPIRED') {
							JqueryShowMessageHome(l_basic['sessionExpired']);
						} else if(data.message == 'TRY_AGAIN') {
							JqueryShowMessage(l_basic['tryAgain']);
						}
					}
				}
			},
			error : function(xmlhttprequest, error) {
			},
			complete : function() {
			}
		});
	} 
}

function changePasswordSubmit(form,status){
	if(status) {
		var o = {};
		var a = $("#userPassWordForm").serializeArray();
	    $.each(a, function() {
	       if (o[this.name]) {
	           if (!o[this.name].push) {
	               o[this.name] = [o[this.name]];
	           }
	           o[this.name].push(this.value || '');
	       } else {
	           o[this.name] = this.value || '';
	       }
	    });
		var jsonuserinfo = $.toJSON(o);
		$.ajax({
			type : "post",
			url : $("#path").val() + "/app/changePassword?" + Math.random()*10000,
			data : jsonuserinfo,
			contentType : 'application/json',
			dataType : "json",
			async:false, 
			timeout : 50000,
			beforeSend : function(xmlhttprequest) {
			},
			success : function(data) {
				if (data) {
					if(data.success == true) {
						if (data.isPhone == true) {
							JqueryShowMessageHome(l_password['msg7']);
						} else {
							JqueryShowMessageCloseWindow(l_password['msg7']);
						}
					} else {
						if(data.message == 'STATUS_NO_OPEN'){
							JqueryShowMessage(l_password['msg4']);
						}else if(data.message == 'USERNAME_OR_PASSWORD') {
							JqueryShowMessage(l_password['msg2']);
//							changeRegCode();
						} else if(data.message == 'SESSION_EXPIRED') {
							JqueryShowMessageHome(l_basic['sessionExpired']);
						} else if(data.message == 'TRY_AGAIN') {
							JqueryShowMessage(l_basic['tryAgain']);
						} else if(data.message == 'DEMO') {
							JqueryShowMessage(l_password['msg6']);
						}
					}
				}
			},
			error : function(xmlhttprequest, error) {
			},
			complete : function() {
			}
		});
	} 
}

function callPassword(field, rules, i, options){
    if (field.val() == $("#txtPassword").val()) {
    	return l_password['msg3'];
}
}
//function callPassword(field, rules, i, options){
//    if (field.val() == $("#txtPassword").val() || !Pwd_Safety($("#txtNewPassword").val())) {
//    	return l_password['msg3'];
//}
//}
//
////判斷密碼是是否合法（合法返回True）
//var Num1='123456789';
//var Num2='987654321';
//var rex1=/[0-9]+/g;
//var rex2=/[a-z]+/g;
//function Pwd_Safety(t_PWD) { 
//    var PWD_Legality=true;
//    var t_PWD_str=t_PWD.toLowerCase();
//    
//    var resx1=/^[0-9]+$/g;
//    if (resx1.test(t_PWD_str)) PWD_Legality=false;
//    resx1=/^[a-z]+$/g;
//    if (resx1.test(t_PWD_str)) PWD_Legality=false;
//
//    var strs1=t_PWD_str.match(rex1);
//    if(strs1!=null){
//    for(var i=0;i<strs1.length;i++){
//     if(strs1[i].length>3){
//       if(Num1.indexOf(strs1[i])!=-1)
//         PWD_Legality=false;//数字顺序
//       if(Num2.indexOf(strs1[i])!=-1)
//         PWD_Legality=false;//数字倒序
//    }}}
//    strs1=t_PWD_str.match(rex2);
//    if(strs1!=null){
//    if(strs1.length==1){
//      if(strs1[0].length==1)    
//         PWD_Legality=false;}//只有一个字母
//    }
//
//    for(var i=0;i<t_PWD_str.length-2;i++){
//    if(t_PWD_str.charAt(i)==t_PWD_str.charAt(i+1)){
//     if(t_PWD_str.charAt(i)==t_PWD_str.charAt(i+2)){
//        PWD_Legality=false;
//    }}}
//
//    if (t_PWD=="123abc") PWD_Legality=false;
//    if (t_PWD=="abc123") PWD_Legality=false;
//
//    //if (PWD_Legality==false) JqueryShowMessage(l_password['msg8']);
//    return PWD_Legality; 
//}

function formatAmount(amount){
	var reg=/(\d{3})\,*/g;
	var formatAmount = amount.replace(reg, '$1,');
	if (formatAmount.charAt(formatAmount.length-1) == ",") {
		formatAmount = formatAmount.substring(0,formatAmount.length-1);
	}
//	var formatAmount = amount.substring(0,amount.indexOf("."));
	$("#txtAmount").val(formatAmount);
}

function callDepositAmount(field, rules, i, options){
	var minA = document.getElementById('DminA').innerHTML;
	var maxA = document.getElementById('DmaxA').innerHTML;
	if(minA == "" && maxA == ""){
		return "* " + l_depositNotBaking['msg1'];
	}else if (Number(field.val()) < minA || Number(field.val()) > maxA) {
//	    return "* " + "存款金额必须"+minA+"-"+maxA+"之间";
    	return "* " + l_depositAmount['msg1']+minA+"-"+maxA+l_depositAmount['msg2'];
    } 
}

function callDepositAmountFormat(field, rules, i, options){
	var minA = document.getElementById('DminA').innerHTML.replace(/,/g, "");
	var maxA = document.getElementById('DmaxA').innerHTML.replace(/,/g, "");
	var amount = field.val().replace(/,/g, "");
	if (parseInt(amount) < minA || parseInt(amount) > maxA) {
//		return "* " + "存款金额必须"+minA+"-"+maxA+"之间";
		return "* " + l_depositAmount['msg1']+minA+"-"+maxA+l_depositAmount['msg2'];
	} 
}

function callAmountFormat (field, rules, i, options) {
	var reg=/^[\d,]*$/;
	var amount = field.val();
	if (!reg.exec(amount)) {
		return l_integerFormat['msg1'];
	}
}

function callDepositOnLineAmount(field, rules, i, options){
	var minA = $("#ThriedMinAmount").val();
	var maxA = $("#ThriedMaxAmount").val();
	if (Number(field.val()) < minA || Number(field.val()) > maxA) {
//	return "* " + "存款金额必须"+minA+"-"+maxA+"之间";
	return "* " + l_depositAmount['msg1']+minA+"-"+maxA+l_depositAmount['msg2'];

	} 
}

function callWithdrawAmount(field, rules, i, options){
	var minA = $("#minWithdrawAmount").val();
	var maxA = $("#maxWithdrawAmount").val();
	if (Number(field.val()) < minA || Number(field.val()) > maxA) {
	return "* " + l_withdraw['msg7'];

	}  
}

function callWithdrawAmountFormat(field, rules, i, options){
	var minA = $("#minWithdrawAmount").val();
	var maxA = $("#maxWithdrawAmount").val();
	var amount = field.val().replace(/,/g, "");
	if (parseInt(amount) < minA || parseInt(amount) > maxA) {
		return "* " + l_withdraw['msg7'];
		
	}  
}

function callWithdrawPassword(field, rules, i, options){

	var reg=/^[\-\+]?\d+$/;
	if ($("#withdrawPassword").val().length != 6) {
		return "* " + l_withdraw['msg12'];
	}  
	if (!reg.exec($("#withdrawPassword").val())){
		return "* " + l_withdraw['msg13']; 
	}
}

function callWithdrawPasswordBind(field, rules, i, options){
	if ($("#txtWithdrawPassword").val().length != 6) {
		return "* " + l_withdraw['msg12'];
	}  
}

function checkInvaildSymbol(field, rules, i, options){
	var reg = new RegExp (/\"|\'|\<|\>|\;|\\|\/|\:/);
	if (reg.exec(field.val().trim())){
		return "* " + l_withdraw['msg11']; 
	}
	/*if (reg.exec($("#txtDeposit_User_Name").val().trim())){
		return "* " + l_withdraw['msg11']; 
	}else if(reg.exec($("#txtFirstName").val().trim())){
		return "* " + l_withdraw['msg11']; 
	}else if(reg.exec($("#txtFromAccountName").val().trim())){
		return "* " + l_withdraw['msg11']; 
	}*/
}

function depositSubmit(form,status){
	if(status) {
		var o = {};
		var a = $("#userForm").serializeArray();
	    $.each(a, function() {
	       if (o[this.name]) {
	           if (!o[this.name].push) {
	               o[this.name] = [o[this.name]];
	           }
	           o[this.name].push(this.value || '');
	       } else {
	           o[this.name] = this.value || '';
	       }
	    });
		var jsonuserinfo = $.toJSON(o);
		$.ajax({
			type : "post",
			url : $("#path").val() + "/app/depositSubmit?" + Math.random()*10000,
			data : jsonuserinfo,
			contentType : 'application/json',
			dataType : "json",
			async:false, 
			timeout : 50000,
			beforeSend : function(xmlhttprequest) {
			},
			success : function(data) {
				if (data) {
					if(data.success == true) {
						JqueryShowMessageReload(l_deposit['msg1']);
					} else {
						if(data.message == 'SESSION_EXPIRED') {
							JqueryShowMessageHome(l_basic['sessionExpired']);
						}else if(data.message == 'STATUS_NO_OPEN') {
							JqueryShowMessage(l_deposit['msg3']);
						}else if(data.message == 'TRY_AGAIN') {
							JqueryShowMessage(l_basic['tryAgain']);
						}
					}
				}
			},
			error : function(xmlhttprequest, error) {
			},
			complete : function() {
			}
		});
	} 
}

function withdrawSubmit(form,status){
	if(status) {
		var o = {};
		var a = $("#userForm").serializeArray();
	    $.each(a, function() {
	       if (o[this.name]) {
	           if (!o[this.name].push) {
	               o[this.name] = [o[this.name]];
	           }
	           o[this.name].push(this.value || '');
	       } else {
	           o[this.name] = this.value || '';
	       }
	    });
		var jsonuserinfo = $.toJSON(o);
		$.ajax({
			type : "post",
			url : $("#path").val() + "/app/withdrawSubmit?" + Math.random()*10000,
			data : jsonuserinfo,
			contentType : 'application/json',
			dataType : "json",
			async:false, 
			timeout : 50000,
			beforeSend : function(xmlhttprequest) {
			},
			success : function(data) {
				if (data) {
					if(data.success == true) {
						JqueryShowMessageReload(l_withdraw['msg1']);
					} else {
						if(data.message == 'USERNAME_OR_PASSWORD') {
							JqueryShowMessage(l_withdraw['msg2']);
						} else if(data.message == 'STATUS_NO_OPEN') {
							JqueryShowMessage(l_withdraw['msg4']);
						} else if(data.message == 'INSUFFICIENT_BALANCE') {
							JqueryShowMessage(l_withdraw['msg3']);
						} else if(data.message == 'SESSION_EXPIRED') {
							JqueryShowMessageHome(l_basic['sessionExpired']);
						} else if(data.message == 'TRY_AGAIN') {
							JqueryShowMessage(l_basic['tryAgain']);
						}
					}
				}
			},
			error : function(xmlhttprequest, error) {
			},
			complete : function() {
			}
		});
	} 
}

function referralSubmit(form,status){
	if(status) {
		var o = {};
		var a = $("#userForm").serializeArray();
	    $.each(a, function() {
	       if (o[this.name]) {
	           if (!o[this.name].push) {
	               o[this.name] = [o[this.name]];
	           }
	           o[this.name].push(this.value || '');
	       } else {
	           o[this.name] = this.value || '';
	       }
	    });
		var jsonuserinfo = $.toJSON(o);
		$.ajax({
			type : "post",
			url : $("#path").val() + "/app/referralModifySubmit?" + Math.random()*10000,
			data : jsonuserinfo,
			contentType : 'application/json',
			dataType : "json",
			async:false, 
			timeout : 50000,
			beforeSend : function(xmlhttprequest) {
			},
			success : function(data) {
				if (data) {
					if(data.success == true) {
						JqueryShowMessageReload(l_referral['msg1']);
					} else {
						if(data.message == 'RECORD_EXISTS') {
							JqueryShowMessage(l_referral['msg2']);
						}else if(data.message == 'SESSION_EXPIRED') {
							JqueryShowMessageHome(l_basic['sessionExpired']);
						} else if(data.message == 'TRY_AGAIN') {
							JqueryShowMessage(l_basic['tryAgain']);
						}
					}
				}
			},
			error : function(xmlhttprequest, error) {
			},
			complete : function() {
			}
		});
	} 
}



function getHsitory(pageNumber){
	$("#pageNext").unbind();
	$("#pagePrev").unbind();
	var fromDateObj = $("#from_date");
	var toDateObj = $("#to_date");
	$("#progressBar").show();
	if(!checkFromToDate(fromDateObj.val(), toDateObj.val())) {
		JqueryShowMessageReload(l_basic['dateError']);
		return;
	}
	var o = {
		fromDate:fromDateObj.val(),
		toDate:toDateObj.val(),
		fromHour : $("#from_hour").val(),
		fromMinute : $("#from_minute").val(),
		fromSecond : $("#from_second").val(),
		toHour : $("#to_hour").val(),
		toMinute : $("#to_minute").val(),
		toSecond : $("#to_second").val(),
		type:$("#type").val(),
		status:$("#status").val(),
		pageNumber:pageNumber+"",
		RecordsPage:"10"
	};
	var jsonuserinfo = $.toJSON(o);
	$.ajax({
		type : "post",
		url : $("#path").val() + "/app/getHistory?" + Math.random()*10000,
		data : jsonuserinfo,
		contentType : 'application/json',
		dataType : "json",
		async:false, 
		timeout : 50000,
		beforeSend : function(xmlhttprequest) {
//			$("#progressBar").show();
		},
		success : function(data) {
			if (data) {
				if(data.success == true) {
					$("#table_history tbody").html("");
					if(data.resultList.length > 0) {
						var trHtml = "";
						var markString = "";
						for ( var i = 0; i < data.resultList.length; i++) {
							markString = "";
							if (data.resultList[i][6] == "Third Code=SUCCESS") {
								markString="交易成功";
							} else {
								markString=data.resultList[i][6];
							}
							trHtml = "<tr>";
							trHtml += "<td >"+ data.resultList[i][0] + "</a></td>"+
									  "<td >"+ l_transferRecordType[data.resultList[i][1]] + "</a></td>"+
									  "<td >"+ formatNumber(data.resultList[i][2],2) + "</a></td>"+
									  "<td >"+ formatNumber(data.resultList[i][7],2) + "</a></td>"+
									  "<td >"+ formatNumber(data.resultList[i][8],2) + "</a></td>"+
									  "<td >"+ l_bankPaymentMethod[data.resultList[i][5]] + "</a></td>"+
									  "<td >"+ l_transferRecordStatus[data.resultList[i][3]] + "</a></td>"+
									  "<td >"+ data.resultList[i][4] + "</a></td>";
									  
							if($("th:last").html() == "备注"){
								trHtml += "<td >"+ markString + "</a></td>"+
								  	"</tr>";
							} else {
								trHtml += "</tr>";
							}
							$("#table_history tbody").append(trHtml);
						}
//						$('.auto').autoNumeric('init');

						$("#table_history tr").addClass("tr_background");
						
						$("#table_history tr" ).mousemove(function(){
							tr_move(this);
						});
						$("#table_history tr" ).mouseout(function(){
							tr_out(this);
						});
						
					
						$("#noRecord").hide();
						$("#pageMember").show();
						$("#currMemberNum").html(data.memberCreditLogListTotal);
						
						var pageNum = data.pageNumber;
						var pageAllNumber = data.pageAllNumber;
						
						$("#allPageNum").html(pageNum);
						if(pageNum == 1) {
							if(pageAllNumber != 1) {
								$("#pageNext").click(function(){
									getHsitory((pageNum + 1));
								});
							}
						} else if(pageNum == pageAllNumber) {
							$("#pagePrev").click(function(){
								getHsitory((pageNum - 1));
							});
						} else {
							$("#pageNext").click(function(){
								getHsitory((pageNum + 1));
							});
							$("#pagePrev").click(function(){
								getHsitory((pageNum - 1));
							});
						}
						
						var pageNumHtml = "";
						var forEnd;
						var forBegin;
						if(pageAllNumber > 10) {
							if(pageNum > 5) {
								if(pageAllNumber - pageNum > 5) {
									forEnd = pageNum + 5;
									forBegin = pageNum - 4;
								} else {
									forEnd = pageAllNumber;
									forBegin = pageAllNumber - 9;
								}
							} else {
								forEnd = 10;
								forBegin = 1;
							}
						} else {
							forEnd = pageAllNumber;
							forBegin = 1;
						}
						for ( var j = forBegin; j <= forEnd; j++) {
							if(j != pageNum) {
								pageNumHtml += "<a onclick=\"getHsitory("+j+");\" style='cursor: pointer;color:#333;'>"+ j + "</a>&nbsp;";
							} else {
								pageNumHtml += "<font class='F_bold ' style='color:#f00; font-weight: bold;'>"+ j + "</font>&nbsp;";
							}
						}
						$("#currPageNum").html(pageNumHtml);
					} else {
						$("#pageMember").hide();
						$("#table_history tbody").append(
								"<tr>" +
								"<td colspan = '9'>当前没有数据!</td>" +
								"</tr>"		
						);
					} 
					$("#progressBar").hide();
				} else {
					$("#progressBar").hide();
					JqueryShowMessage(l_basic['tryAgain']);
				}
			}
		},
		error : function(xmlhttprequest, error) {
			$("#progressBar").hide();
		},
		complete : function() {
		}
	});
}
function getCreditConversionHistory(pageNumber){
	$("#pageNext").unbind();
	$("#pagePrev").unbind();
	var fromDateObj = $("#from_date");
	var toDateObj = $("#to_date");
	$("#progressBar").show();
	if(!checkFromToDate(fromDateObj.val(), toDateObj.val())) {
		JqueryShowMessageReload(l_basic['dateError']);
		return;
	}
	var o = {
			fromDate:fromDateObj.val(),
			toDate:toDateObj.val(),
			fromHour : $("#from_hour").val(),
			fromMinute : $("#from_minute").val(),
			fromSecond : $("#from_second").val(),
			toHour : $("#to_hour").val(),
			toMinute : $("#to_minute").val(),
			toSecond : $("#to_second").val(),
			creditOut:$("#creditOut").val(),
			creditIn:$("#creditIn").val(),
			pageNumber:pageNumber+"",
			RecordsPage:"10"
	};
	var jsonuserinfo = $.toJSON(o);
	$.ajax({
		type : "post",
		url : $("#path").val() + "/app/getCreditConversionHistory?" + Math.random()*10000,
		data : jsonuserinfo,
		contentType : 'application/json',
		dataType : "json",
		async:false, 
		timeout : 50000,
		beforeSend : function(xmlhttprequest) {
//			$("#progressBar").show();
		},
		success : function(data) {
			if (data) {
				if(data.success == true) {
					$("#table_history tbody").html("");
					if(data.resultList.length > 0) {
						var trHtml = "";
						var creditOut = "";
						var creditIn = "";
						for ( var i = 0; i < data.resultList.length; i++) {
							
							/*if (data.resultList[i][1] == "1") {
								creditOut = l_wallet['MAIN_WALLET'];
							} else if (data.resultList[i][1] == "2") {
								creditOut = l_wallet['DS_LOTTERY_WALLET'];
							} else if (data.resultList[i][1] == "3") {
								creditOut = l_wallet['SOPRT_WALLET'];
							}  
							
							if (data.resultList[i][3] == "1") {
								creditIn = l_wallet['MAIN_WALLET'];
							} else if (data.resultList[i][3] == "2") {
								creditIn = l_wallet['DS_LOTTERY_WALLET'];
							} else if (data.resultList[i][3] == "3") {
								creditIn = l_wallet['SOPRT_WALLET'];
							}  */
							trHtml = "<tr>";
							trHtml += "<td >"+ data.resultList[i][0] + "</a></td>"+
							"<td >"+ l_wallet[data.walletIdAndNameMap[data.resultList[i][1]]] + "</a></td>"+
							"<td >"+ l_CreditConversion[data.resultList[i][2]] + "</a></td>"+
							"<td >"+ l_wallet[data.walletIdAndNameMap[data.resultList[i][3]]] + "</a></td>"+
							"<td >"+ l_CreditConversion[data.resultList[i][4]] + "</a></td>"+
							"<td >"+ data.resultList[i][5] + "</a></td>"+
							"<td >"+ data.resultList[i][6] + "</a></td>"+
							"</tr>";
							$("#table_history tbody").append(trHtml);
						}
//						$('.auto').autoNumeric('init');

						$("#table_history tr").addClass("tr_background");
						
						$("#table_history tr" ).mousemove(function(){
							tr_move(this);
						});
						$("#table_history tr" ).mouseout(function(){
							tr_out(this);
						});
						
						
						$("#noRecord").hide();
						$("#pageMember").show();
						$("#currMemberNum").html(data.conversionHistoryTotal);
						
						var pageNum = data.pageNumber;
						var pageAllNumber = data.pageAllNumber;
						
						$("#allPageNum").html(pageNum);
						if(pageNum == 1) {
							if(pageAllNumber != 1) {
								$("#pageNext").click(function(){
									getCreditConversionHistory((pageNum + 1));
								});
							}
						} else if(pageNum == pageAllNumber) {
							$("#pagePrev").click(function(){
								getCreditConversionHistory((pageNum - 1));
							});
						} else {
							$("#pageNext").click(function(){
								getCreditConversionHistory((pageNum + 1));
							});
							$("#pagePrev").click(function(){
								getCreditConversionHistory((pageNum - 1));
							});
						}
						
						var pageNumHtml = "";
						var forEnd;
						var forBegin;
						if(pageAllNumber > 10) {
							if(pageNum > 5) {
								if(pageAllNumber - pageNum > 5) {
									forEnd = pageNum + 5;
									forBegin = pageNum - 4;
								} else {
									forEnd = pageAllNumber;
									forBegin = pageAllNumber - 9;
								}
							} else {
								forEnd = 10;
								forBegin = 1;
							}
						} else {
							forEnd = pageAllNumber;
							forBegin = 1;
						}
						for ( var j = forBegin; j <= forEnd; j++) {
							if(j != pageNum) {
								pageNumHtml += "<a onclick=\"getCreditConversionHistory("+j+");\" style='cursor: pointer;color:#333;'>"+ j + "</a>&nbsp;";
							} else {
								pageNumHtml += "<font class='F_bold ' style='color:#f00; font-weight: bold;'>"+ j + "</font>&nbsp;";
							}
						}
						$("#currPageNum").html(pageNumHtml);
					} else {
						$("#pageMember").hide();
						$("#table_history tbody").append(
								"<tr>" +
								"<td colspan = '7'>当前没有数据!</td>" +
								"</tr>"		
						);
					} 
					$("#progressBar").hide();
				} else {
					$("#progressBar").hide();
					JqueryShowMessage(l_basic['tryAgain']);
				}
			}
		},
		error : function(xmlhttprequest, error) {
			$("#progressBar").hide();
		},
		complete : function() {
		}
	});
}

function  getWallet(){

	var o = {
	};
	var jsonuserinfo = $.toJSON(o);
	$.ajax({
		type : "post",
		url : $("#path").val() + "/app/getWallet?" + Math.random()*10000,
		data : jsonuserinfo,
		contentType : 'application/json',
		dataType : "json",
		async : true, 
		timeout : 20000,
		beforeSend : function(xmlhttprequest) {
		},
		success : function(data) {
			if (data) {
				if(data.success == true) {
					var ohtml = "";
					$("#creditOut").html("");
					$("#creditIn").html("");
					for(var i=0;i<data.walletList.length;i++){
						ohtml +="<option value='"+data.walletList[i][0]+"'>"+l_wallet[data.walletList[i][1]]+"</option>";
						$("#creditOut").html(ohtml);
						$("#creditIn").html(ohtml);
					}
				} 
			}
		},
		error : function(xmlhttprequest, error) {
		},
		complete : function() {
		}
	});

}
function  setPaste(pasteString){
	var o = {
			pasteString:pasteString
	};
	var jsonuserinfo = $.toJSON(o);
	$.ajax({
		type : "post",
		url : $("#path").val() + "/app/setPaste?" + Math.random()*10000,
		data : jsonuserinfo,
		contentType : 'application/json',
		dataType : "json",
		async : true, 
		timeout : 20000,
		beforeSend : function(xmlhttprequest) {
		},
		success : function(data) {
			if (data) {
				if(data.success == true) {
				} 
			}
		},
		error : function(xmlhttprequest, error) {
		},
		complete : function() {
		}
	});
	
}
function  getAllWallet(){
	
	var o = {
	};
	var jsonuserinfo = $.toJSON(o);
	$.ajax({
		type : "post",
		url : $("#path").val() + "/app/getWallet?" + Math.random()*10000,
		data : jsonuserinfo,
		contentType : 'application/json',
		dataType : "json",
		async : false, 
		timeout : 20000,
		beforeSend : function(xmlhttprequest) {
		},
		success : function(data) {
			if (data) {
				if(data.success == true) {
					var ohtml ="<option value='0'>"+l_wallet['ALL']+"</option>";
					$("#creditOut").html("");
					$("#creditIn").html("");
					for(var i=0;i<data.walletIdAndNameList.length;i++){
						ohtml +="<option value='"+data.walletIdAndNameList[i][0]+"'>"+l_wallet[data.walletIdAndNameList[i][1]]+"</option>";
						$("#creditOut").html(ohtml);
						$("#creditIn").html(ohtml);
					}
				} 
			}
		},
		error : function(xmlhttprequest, error) {
		},
		complete : function() {
		}
	});
	
}

function getAllBalanceForMobile() {
	 getBalanceForMobile("MAIN_WALLET");
	 getBalanceForMobile("DS_LOTTERY_WALLET");
	 getBalanceForMobile("SOPRT_WALLET");
	 getBalanceForMobile("AG_LIVE_WALLET");
	 getBalanceForMobile("OG_WALLET");
	 getBalanceForMobile("BBIN_WALLET");
	 getBalanceForMobile("YY_WALLET");
	 getBalanceForMobile("PT_WALLET");
	 getBalanceForMobile("GG_WALLET");
	 getBalanceForMobile("SPADE_WALLET");
	 getBalanceForMobile("OPUS_SPORT_WALLET");
	 getBalanceForMobile("OPUS_LIVE_SLOT_WALLET");
	 getBalanceForMobile("MG_WALLET");
	 getBalanceForMobile("CMD_SPORT_WALLET");
}

//获取内存余额
function getBalance(pNetwork){
	var o = {
		pNetwork:pNetwork
	};
	var twoOther = $("#twoOhter").val();
	var jsonuserinfo = $.toJSON(o);
	$.ajax({
		type : "post",
		url : $("#path").val() + "/app/getBalance?" + Math.random()*10000,
		data : jsonuserinfo,
		contentType : 'application/json',
		dataType : "json",
		async : true, 
		timeout : 20000,
		beforeSend : function(xmlhttprequest) {
			if (pNetwork == "MAIN_WALLET") {
				if (twoOther == "idTwo") {
					$(".all_balance").html("&nbsp;--");
				} else {
					$("#all_balance").html("&nbsp;--");
				}
			} else if (pNetwork == "DS_LOTTERY_WALLET"){
				$("#all_blce").html("&nbsp;--");
			} else if (pNetwork == "SOPRT_WALLET"){
				$("#sport_balance").html("&nbsp;--");
			} else if (pNetwork == "AG_LIVE_WALLET"){
				$("#ag_balance").html("&nbsp;--");
			} else if (pNetwork == "BBIN_WALLET"){
				$("#bbin_balance").html("&nbsp;--");
			} else if (pNetwork == "OG_WALLET"){
				$("#og_balance").html("&nbsp;--");
			} else if (pNetwork == "YY_WALLET"){
				$("#yy_balance").html("&nbsp;--");
			} else if (pNetwork == "PT_WALLET"){
				$("#pt_balance").html("&nbsp;--");
			} else if (pNetwork == "GG_WALLET"){
				$("#gg_balance").html("&nbsp;--");
			} else if (pNetwork == "SPADE_WALLET"){
				$("#sg_balance").html("&nbsp;--");
			} else if (pNetwork == "OPUS_SPORT_WALLET"){
				$("#opusSport_balance").html("&nbsp;--");
			} else if (pNetwork == "OPUS_LIVE_SLOT_WALLET"){
				$("#opus_live_slot_balance").html("&nbsp;--");
			} else if (pNetwork == "ALLBET_WALLET"){
				$("#allbet_balance").html("&nbsp;--");
			} else if (pNetwork == "MG_WALLET"){
				$("#mg_balance").html("&nbsp;--");
			} else if (pNetwork == "PJ_WALLET"){
				$("#pj_balance").html("&nbsp;--");
			} else if (pNetwork == "SUNBET_LIVE_WALLET"){
				$("#sunbet_live_balance").html("&nbsp;--");
			} else if (pNetwork == "HB_WALLET"){
				$("#hb_balance").html("&nbsp;--");
			} else if (pNetwork == "IWC_SPORT_WALLET"){
				$("#iwc_sport_balance").html("&nbsp;--");
			} else if (pNetwork == "CMD_SPORT_WALLET"){
				$("#cmd_sport_balance").html("&nbsp;--");
			} else if (pNetwork == "KY_WALLET"){
				$("#ky_balance").html("&nbsp;--");
			} else if (pNetwork == "IG_CHESS_WALLET"){
				$("#igChess_balance").html("&nbsp;--");
			}   
		},
		success : function(data) {
			if (data) {
				if(data.success == true) {
					if (pNetwork == "MAIN_WALLET") {
						if (twoOther == "idTwo") {
							$(".all_balance").html(data.balance);
						} else {
							$("#all_balance").html(data.balance);
						}
					} else if (pNetwork == "DS_LOTTERY_WALLET"){
						$("#all_blce").html(data.dsLotteryBalance);
					} else if (pNetwork == "SOPRT_WALLET"){
						if (data.m8SportBalance == -1) {
							$("#sport_balance").html(l_message['msg11']);
						} else {
							$("#sport_balance").html(data.m8SportBalance);
						}
					} else if (pNetwork == "AG_LIVE_WALLET"){
						$("#ag_balance").html(data.agLiveBalance);
					} else if (pNetwork == "BBIN_WALLET"){
						$("#bbin_balance").html(data.BBINBalance);
					} else if (pNetwork == "OG_WALLET"){
						$("#og_balance").html(data.OGBalance);
					} else if (pNetwork == "YY_WALLET"){
						if (data.YYBalance == -1) {
							$("#yy_balance").html(l_message['msg11']);
						} else {
							$("#yy_balance").html(data.YYBalance);
						}
						
//						$("#yy_balance").html(data.YYBalance);
					} else if (pNetwork == "PT_WALLET"){
						if (data.PTBalance == -1) {
							$("#yy_balance").html(l_message['msg11']);
						} else {
							$("#pt_balance").html(data.PTBalance);
						}
					} else if (pNetwork == "GG_WALLET"){
						$("#gg_balance").html(data.GGBalance);
					} else if (pNetwork == "SPADE_WALLET"){
						$("#sg_balance").html(data.SGBalance);
					} else if (pNetwork == "OPUS_SPORT_WALLET"){
						$("#opusSport_balance").html(data.OpusSportBalance);
					} else if (pNetwork == "OPUS_LIVE_SLOT_WALLET"){
						$("#opus_live_slot_balance").html(data.OpusLiveSlotBalance);
					} else if (pNetwork == "ALLBET_WALLET"){
						$("#allbet_balance").html(data.allBetBalance);
					} else if (pNetwork == "MG_WALLET"){
						$("#mg_balance").html(data.MGBalance);
					} else if (pNetwork == "PJ_WALLET"){
						$("#pj_balance").html(data.PjBalance);
					} else if (pNetwork == "SUNBET_LIVE_WALLET"){
						$("#sunbet_live_balance").html(data.SunbetBalance);
					} else if (pNetwork == "HB_WALLET"){
						$("#hb_balance").html(data.HBBalance);
					} else if (pNetwork == "IWC_SPORT_WALLET"){
						$("#iwc_sport_balance").html(data.IwcSportBalance);
					} else if (pNetwork == "CMD_SPORT_WALLET"){
						$("#cmd_sport_balance").html(data.CmdSportBalance);
					} else if (pNetwork == "KY_WALLET"){
						$("#ky_balance").html(data.KyBalance);
					} else if (pNetwork == "IG_CHESS_WALLET"){
						$("#igChess_balance").html(data.IgChessBalance);
					}
//						$("#live_blce").html("<span class='cridtConversion_msg'>"+b_msg['live']+"</span>");
				} else {
					if(data.message == 'SESSION_EXPIRED') {
						JqueryShowMessageHome(l_basic['sessionExpired']);
					} else if(data.message == 'TRY_AGAIN') {
//						JqueryShowMessage(l_basic['tryAgain']);
						$("#all_blce").html(l_message['msg12']);
					}
				}
			}
		},
		error : function(xmlhttprequest, error) {
		},
		complete : function() {
		}
	});
}

//及时获取余额
function getBalanceTimely(pNetwork){
	var o = {
			pNetwork:pNetwork
		};
		var twoOther = $("#twoOhter").val();
		var jsonuserinfo = $.toJSON(o);
		$.ajax({
			type : "post",
			url : $("#path").val() + "/app/getBalanceTimely?" + Math.random()*10000,
			data : jsonuserinfo,
			contentType : 'application/json',
			dataType : "json",
			async : true, 
			timeout : 20000,
			beforeSend : function(xmlhttprequest) {
				if (pNetwork == "MAIN_WALLET") {
					if (twoOther == "idTwo") {
						$(".all_balance").html("&nbsp;--");
					} else {
						$("#all_balance").html("&nbsp;--");
					}
				} else if (pNetwork == "DS_LOTTERY_WALLET"){
					$("#all_blce").html("&nbsp;--");
				} else if (pNetwork == "SOPRT_WALLET"){
					$("#sport_balance").html("&nbsp;--");
				} else if (pNetwork == "AG_LIVE_WALLET"){
					$("#ag_balance").html("&nbsp;--");
				} else if (pNetwork == "BBIN_WALLET"){
					$("#bbin_balance").html("&nbsp;--");
				} else if (pNetwork == "OG_WALLET"){
					$("#og_balance").html("&nbsp;--");
				} else if (pNetwork == "YY_WALLET"){
					$("#yy_balance").html("&nbsp;--");
				} else if (pNetwork == "PT_WALLET"){
					$("#pt_balance").html("&nbsp;--");
				} else if (pNetwork == "GG_WALLET"){
					$("#gg_balance").html("&nbsp;--");
				} else if (pNetwork == "SPADE_WALLET"){
					$("#sg_balance").html("&nbsp;--");
				} else if (pNetwork == "OPUS_SPORT_WALLET"){
					$("#opusSport_balance").html("&nbsp;--");
				} else if (pNetwork == "OPUS_LIVE_SLOT_WALLET"){
					$("#opus_live_slot_balance").html("&nbsp;--");
				} else if (pNetwork == "ALLBET_WALLET"){
					$("#allbet_balance").html("&nbsp;--");
				} else if (pNetwork == "MG_WALLET"){
					$("#mg_balance").html("&nbsp;--");
				} else if (pNetwork == "PJ_WALLET"){
					$("#pj_balance").html("&nbsp;--");
				} else if (pNetwork == "IWC_SPORT_WALLET"){
					$("#iwc_sport_balance").html("&nbsp;--");
				} else if (pNetwork == "CMD_SPORT_WALLET"){
					$("#cmd_sport_balance").html("&nbsp;--");
				} else if (pNetwork == "KY_WALLET"){
					$("#ky_balance").html("&nbsp;--");
				} else if (pNetwork == "IG_CHESS_WALLET"){
					$("#igChess_balance").html("&nbsp;--");
				}   
			},
			success : function(data) {
				if (data) {
					if(data.success == true) {
						if (pNetwork == "MAIN_WALLET") {
							if (twoOther == "idTwo") {
								$(".all_balance").html(data.balance);
							} else {
								$("#all_balance").html(data.balance);
							}
						} else if (pNetwork == "DS_LOTTERY_WALLET"){
							$("#all_blce").html(data.dsLotteryBalance);
						} else if (pNetwork == "SOPRT_WALLET"){
							if (data.m8SportBalance == -1) {
								$("#sport_balance").html(l_message['msg11']);
							} else {
								$("#sport_balance").html(data.m8SportBalance);
							}
						} else if (pNetwork == "AG_LIVE_WALLET"){
							$("#ag_balance").html(data.agLiveBalance);
						} else if (pNetwork == "BBIN_WALLET"){
							$("#bbin_balance").html(data.BBINBalance);
						} else if (pNetwork == "OG_WALLET"){
							$("#og_balance").html(data.OGBalance);
						} else if (pNetwork == "YY_WALLET"){
							if (data.YYBalance == -1) {
								$("#yy_balance").html(l_message['msg11']);
							} else {
								$("#yy_balance").html(data.YYBalance);
							}
							
//							$("#yy_balance").html(data.YYBalance);
						} else if (pNetwork == "PT_WALLET"){
							if (data.PTBalance == -1) {
								$("#yy_balance").html(l_message['msg11']);
							} else {
								$("#pt_balance").html(data.PTBalance);
							}
						} else if (pNetwork == "GG_WALLET"){
							$("#gg_balance").html(data.GGBalance);
						} else if (pNetwork == "SPADE_WALLET"){
							$("#sg_balance").html(data.SGBalance);
						} else if (pNetwork == "OPUS_SPORT_WALLET"){
							$("#opusSport_balance").html(data.OpusSportBalance);
						} else if (pNetwork == "OPUS_LIVE_SLOT_WALLET"){
							$("#opus_live_slot_balance").html(data.OpusLiveSlotBalance);
						} else if (pNetwork == "ALLBET_WALLET"){
							$("#allbet_balance").html(data.allBetBalance);
						} else if (pNetwork == "MG_WALLET"){
							$("#mg_balance").html(data.MGBalance);
						} else if (pNetwork == "PJ_WALLET"){
							$("#pj_balance").html(data.PjBalance);
						} else if (pNetwork == "IWC_SPORT_WALLET"){
							$("#iwc_sport_balance").html(data.IwcSportBalance);
						} else if (pNetwork == "CMD_SPORT_WALLET"){
							$("#cmd_sport_balance").html(data.CmdSportBalance);
						} else if (pNetwork == "KY_WALLET"){
							$("#ky_balance").html(data.KyBalance);
						} else if (pNetwork == "IG_CHESS_WALLET"){
							$("#igChess_balance").html(data.IgChessBalance);
						}
//							$("#live_blce").html("<span class='cridtConversion_msg'>"+b_msg['live']+"</span>");
					} else {
						if(data.message == 'SESSION_EXPIRED') {
							JqueryShowMessageHome(l_basic['sessionExpired']);
						} else if(data.message == 'TRY_AGAIN') {
//							JqueryShowMessage(l_basic['tryAgain']);
							$("#all_blce").html(l_message['msg12']);
						}
					}
				}
			},
			error : function(xmlhttprequest, error) {
			},
			complete : function() {
			}
		});
}

function getBalanceForMobile(pNetwork){
	var o = {
		pNetwork:pNetwork
	};
	var jsonuserinfo = $.toJSON(o);
	$.ajax({
		type : "post",
		url : $("#path").val() + "/app/getBalance?" + Math.random()*10000,
		data : jsonuserinfo,
		contentType : 'application/json',
		dataType : "json",
		async : true, 
		timeout : 20000,
		beforeSend : function(xmlhttprequest) {
			if (pNetwork == "MAIN_WALLET") {
				$(".MAIN_WALLET").html("&nbsp;--");
			} else if (pNetwork == "DS_LOTTERY_WALLET"){
				$(".DS_LOTTERY_WALLET").html("&nbsp;--");
			} else if (pNetwork == "SOPRT_WALLET"){
				$(".SOPRT_WALLET").html("&nbsp;--");
			} else if (pNetwork == "AG_LIVE_WALLET"){
				$(".AG_LIVE_WALLET").html("&nbsp;--");
			} else if (pNetwork == "BBIN_WALLET"){
				$(".BBIN_WALLET").html("&nbsp;--");
			} else if (pNetwork == "OG_WALLET"){
				$(".OG_WALLET").html("&nbsp;--");
			} else if (pNetwork == "YY_WALLET"){
				$(".YY_WALLET").html("&nbsp;--");
			} else if (pNetwork == "PT_WALLET"){
				$(".PT_WALLET").html("&nbsp;--");
			} else if (pNetwork == "GG_WALLET"){
				$(".GG_WALLET").html("&nbsp;--");
			} else if (pNetwork == "SPADE_WALLET"){
				$(".SPADE_WALLET").html("&nbsp;--");
			} else if (pNetwork == "OPUS_SPORT_WALLET"){
				$(".OPUS_SPORT_WALLET").html("&nbsp;--");
			} else if (pNetwork == "OPUS_SPORT_WALLET"){
				$(".OPUS_LIVE_SLOT_WALLET").html("&nbsp;--");
			} else if (pNetwork == "ALLBET_WALLET"){
				$(".ALLBET_WALLET").html("&nbsp;--");
			} else if (pNetwork == "MG_WALLET"){
				$(".MG_WALLET").html("&nbsp;--");
			} else if (pNetwork == "PJ_WALLET"){
				$(".PJ_WALLET").html("&nbsp;--");
			} else if (pNetwork == "IWC_SPORT_WALLET"){
				$(".IWC_SPORT_WALLET").html("&nbsp;--");
			} else if (pNetwork == "CMD_SPORT_WALLET"){
				$(".CMD_SPORT_WALLET").html("&nbsp;--");
			} else if (pNetwork == "KY_WALLET"){
				$(".KY_WALLET").html("&nbsp;--");
			} else if (pNetwork == "IG_CHESS_WALLET"){
				$(".IG_CHESS_WALLET").html("&nbsp;--");
			} 
		},
		success : function(data) {
			if (data) {
				if(data.success == true) {
					if (pNetwork == "MAIN_WALLET") {
						$(".MAIN_WALLET").html(data.balance);
					} else if (pNetwork == "DS_LOTTERY_WALLET"){
						$(".DS_LOTTERY_WALLET").html(data.dsLotteryBalance);
					} else if (pNetwork == "SOPRT_WALLET"){
						if (data.m8SportBalance == -1) {
							$(".SOPRT_WALLET").html(l_message['msg11']);
						} else {
							$(".SOPRT_WALLET").html(data.m8SportBalance);
						}
					} else if (pNetwork == "AG_LIVE_WALLET"){
						$(".AG_LIVE_WALLET").html(data.agLiveBalance);
					} else if (pNetwork == "BBIN_WALLET"){
						$(".BBIN_WALLET").html(data.BBINBalance);
					} else if (pNetwork == "OG_WALLET"){
						$(".OG_WALLET").html(data.OGBalance);
					} else if (pNetwork == "YY_WALLET"){
						if (data.YYBalance == -1) {
							$(".YY_WALLET").html(l_message['msg11']);
						} else {
							$(".YY_WALLET").html(data.YYBalance);
						}
						
//						$("#yy_balance").html(data.YYBalance);
					} else if (pNetwork == "PT_WALLET"){
						$(".PT_WALLET").html(data.PTBalance);
					} else if (pNetwork == "GG_WALLET"){
						$(".GG_WALLET").html(data.GGBalance);
					} else if (pNetwork == "SPADE_WALLET"){
						$(".SPADE_WALLET").html(data.SGBalance);
					} else if (pNetwork == "OPUS_SPORT_WALLET"){
						$(".OPUS_SPORT_WALLET").html(data.OpusSportBalance);
					} else if (pNetwork == "OPUS_LIVE_SLOT_WALLET"){
						$(".OPUS_LIVE_SLOT_WALLET").html(data.OpusLiveSlotBalance);
					} else if (pNetwork == "ALLBET_WALLET"){
						$(".ALLBET_WALLET").html(data.OpusSportBalance);
					} else if (pNetwork == "MG_WALLET"){
						$(".MG_WALLET").html(data.MGBalance);
					} else if (pNetwork == "PJ_WALLET"){
						$(".PJ_WALLET").html(data.PjBalance);
					} else if (pNetwork == "IWC_SPORT_WALLET"){
						$(".IWC_SPORT_WALLET").html(data.IwcSportBalance);
					} else if (pNetwork == "CMD_SPORT_WALLET"){
						$(".CMD_SPORT_WALLET").html(data.CmdSportBalance);
					} else if (pNetwork == "KY_WALLET"){
						$(".KY_WALLET").html(data.KyBalance);
					} else if (pNetwork == "IG_CHESS_WALLET"){
						$(".IG_CHESS_WALLET").html(data.IgChessBalance);
					}
//						$("#live_blce").html("<span class='cridtConversion_msg'>"+b_msg['live']+"</span>");
				} else {
					if(data.message == 'SESSION_EXPIRED') {
						JqueryShowMessageHome(l_basic['sessionExpired']);
					} else if(data.message == 'TRY_AGAIN') {
//						JqueryShowMessage(l_basic['tryAgain']);
						$(".all_blce").html(l_message['msg12']);
					}
				}
			}
		},
		error : function(xmlhttprequest, error) {
		},
		complete : function() {
		}
	});
}

function getBalanceFormat(pNetwork){
	var o = {
			pNetwork:pNetwork
	};
	var jsonuserinfo = $.toJSON(o);
	$.ajax({
		type : "post",
		url : $("#path").val() + "/app/getBalance?" + Math.random()*10000,
		data : jsonuserinfo,
		contentType : 'application/json',
		dataType : "json",
		async : true, 
		timeout : 20000,
		beforeSend : function(xmlhttprequest) {
			if (pNetwork == "MAIN_WALLET") {
				$("#all_balance").html("&nbsp;--");
			} else if (pNetwork == "DS_LOTTERY_WALLET"){
				$("#all_blce").html("&nbsp;--");
			} else if (pNetwork == "SOPRT_WALLET"){
				$("#sport_balance").html("&nbsp;--");
			} else if (pNetwork == "AG_LIVE_WALLET"){
				$("#ag_balance").html("&nbsp;--");
			} else if (pNetwork == "BBIN_WALLET"){
				$("#bbin_balance").html("&nbsp;--");
			} else if (pNetwork == "OG_WALLET"){
				$("#og_balance").html("&nbsp;--");
			} else if (pNetwork == "YY_WALLET"){
				$("#yy_balance").html("&nbsp;--");
			} else if (pNetwork == "PT_WALLET"){
				$("#pt_balance").html("&nbsp;--");
			} else if (pNetwork == "GG_WALLET"){
				$("#gg_balance").html("&nbsp;--");
			} else if (pNetwork == "SPADE_WALLET"){
				$("#sg_balance").html("&nbsp;--");
			} else if (pNetwork == "OPUS_SPORT_WALLET"){
				$("#opusSport_balance").html("&nbsp;--");
			} else if (pNetwork == "OPUS_LIVE_SLOT_WALLET"){
				$("#opus_live_slot_balance").html("&nbsp;--");
			} else if (pNetwork == "ALLBET_WALLET"){
				$("#allbet_balance").html("&nbsp;--");
			} else if (pNetwork == "MG_WALLET"){
				$("#mg_balance").html("&nbsp;--");
			} else if (pNetwork == "PJ_WALLET"){
				$("#pj_balance").html("&nbsp;--");
			} else if (pNetwork == "SUNBET_LIVE_WALLET"){
				$("#sunbet_live_balance").html("&nbsp;--");
			} else if (pNetwork == "HB_WALLET"){
				$("#hb_balance").html("&nbsp;--");
			} else if (pNetwork == "IWC_SPORT_WALLET"){
				$("#iwc_sport_balance").html("&nbsp;--");
			} else if (pNetwork == "CMD_SPORT_WALLET"){
				$("#cmd_sport_balance").html("&nbsp;--");
			} else if (pNetwork == "KY_WALLET"){
				$("#ky_balance").html("&nbsp;--");
			} else if (pNetwork == "IG_CHESS_WALLET"){
				$("#igChess_balance").html("&nbsp;--");
			}
		},
		success : function(data) {
			if (data) {
				if(data.success == true) {
					if (pNetwork == "MAIN_WALLET") {
						var allBalance = data.balance
						$("#all_balance").html("<span id='ydCss' class='auto'>"+data.balance+"</span>");
						$('.auto').autoNumeric('init');
					} else if (pNetwork == "DS_LOTTERY_WALLET"){
						$("#all_blce").html(data.dsLotteryBalance);
					} else if (pNetwork == "SOPRT_WALLET"){
						if (data.m8SportBalance == -1) {
							$("#sport_balance").html(l_message['msg11']);
						} else {
							$("#sport_balance").html(data.m8SportBalance);
						}
					} else if (pNetwork == "AG_LIVE_WALLET"){
						$("#ag_balance").html(data.agLiveBalance);
					} else if (pNetwork == "BBIN_WALLET"){
						$("#bbin_balance").html(data.BBINBalance);
					} else if (pNetwork == "OG_WALLET"){
						$("#og_balance").html(data.OGBalance);
					} else if (pNetwork == "YY_WALLET"){
						if (data.YYBalance == -1) {
							$("#yy_balance").html(l_message['msg11']);
						} else {
							$("#yy_balance").html(data.YYBalance);
						}
						
//						$("#yy_balance").html(data.YYBalance);
					} else if (pNetwork == "PT_WALLET"){
						$("#pt_balance").html(data.PTBalance);
					} else if (pNetwork == "GG_WALLET"){
						$("#gg_balance").html(data.GGBalance);
					} else if (pNetwork == "SPADE_WALLET"){
						$(".sg_balance").html(data.SGBalance);
					} else if (pNetwork == "OPUS_SPORT_WALLET"){
						$(".opusSport_balance").html(data.OpusSportBalance);
					} else if (pNetwork == "OPUS_LIVE_SLOT_WALLET"){
						$(".opus_live_slot_balance").html(data.OpusLiveSlotBalance);
					} else if (pNetwork == "ALLBET_WALLET"){
						$("#allbet_balance").html(data.allBetBalance);
					} else if (pNetwork == "MG_WALLET"){
						$("#mg_balance").html(data.MGBalance);
					} else if (pNetwork == "PJ_WALLET"){
						$("#pj_balance").html(data.PjBalance);
					} else if (pNetwork == "SUNBET_LIVE_WALLET"){
						$("#sunbet_live_balance").html(data.MGBalance);
					} else if (pNetwork == "HB_WALLET"){
						$("#hb_balance").html(data.PjBalance);
					} else if (pNetwork == "IWC_SPORT_WALLET"){
						$("#iwc_soprt_balance").html(data.IwcSportBalance);
					} else if (pNetwork == "CMD_SPORT_WALLET"){
						$("#cmd_soprt_balance").html(data.CmdSportBalance);
					} else if (pNetwork == "KY_WALLET"){
						$("#ky_balance").html(data.KyBalance);
					} else if (pNetwork == "IG_CHESS_WALLET"){
						$("#igChess_balance").html(data.IgChessBalance);
					}
//						$("#live_blce").html("<span class='cridtConversion_msg'>"+b_msg['live']+"</span>");
				} else {
					if(data.message == 'SESSION_EXPIRED') {
						JqueryShowMessageHome(l_basic['sessionExpired']);
					} else if(data.message == 'TRY_AGAIN') {
//						JqueryShowMessage(l_basic['tryAgain']);
						$("#all_blce").html(l_message['msg12']);
					}
				}
			}
		},
		error : function(xmlhttprequest, error) {
		},
		complete : function() {
		}
	});
}

function getBalanceByClass(pNetwork){
	var o = {
		pNetwork:pNetwork
	};
	var jsonuserinfo = $.toJSON(o);
	$.ajax({
		type : "post",
		url : $("#path").val() + "/app/getBalance?" + Math.random()*10000,
		data : jsonuserinfo,
		contentType : 'application/json',
		dataType : "json",
		async : true, 
		timeout : 20000,
		beforeSend : function(xmlhttprequest) {
			if (pNetwork == "MAIN_WALLET") {
				$(".MAIN_WALLET").html("&nbsp;--");
			} else if (pNetwork == "DS_LOTTERY_WALLET"){
				$(".DS_LOTTERY_WALLET").html("&nbsp;--");
			} else if (pNetwork == "SOPRT_WALLET"){
				$(".SOPRT_WALLET").html("&nbsp;--");
			} else if (pNetwork == "AG_LIVE_WALLET"){
				$(".AG_LIVE_WALLET").html("&nbsp;--");
			} else if (pNetwork == "BBIN_WALLET"){
				$(".BBIN_WALLET").html("&nbsp;--");
			} else if (pNetwork == "OG_WALLET"){
				$(".OG_WALLET").html("&nbsp;--");
			} else if (pNetwork == "YY_WALLET"){
				$(".YY_WALLET").html("&nbsp;--");
			} else if (pNetwork == "PT_WALLET"){
				$(".PT_WALLET").html("&nbsp;--");
			} else if (pNetwork == "GG_WALLET"){
				$(".GG_WALLET").html("&nbsp;--");
			} else if (pNetwork == "SPADE_WALLET"){
				$(".SPADE_WALLET").html("&nbsp;--");
			} else if (pNetwork == "OPUS_SPORT_WALLET"){
				$(".OPUS_SPORT_WALLET").html("&nbsp;--");
			} else if (pNetwork == "OPUS_LIVE_SLOT_WALLET"){
				$(".OPUS_LIVE_SLOT_WALLET").html("&nbsp;--");
			} else if (pNetwork == "ALLBET_WALLET"){
				$(".ALLBET_WALLET").html("&nbsp;--");
			} else if (pNetwork == "MG_WALLET"){
				$(".MG_WALLET").html("&nbsp;--");
			} else if (pNetwork == "PJ_WALLET"){
				$(".PJ_WALLET").html("&nbsp;--");
			} else if (pNetwork == "SUNBET_LIVE_WALLET"){
				$(".SUNBET_LIVE_WALLET").html("&nbsp;--");
			} else if (pNetwork == "HB_WALLET"){
				$(".HB_WALLET").html("&nbsp;--");
			} else if(pNetwork == "IWC_SPORT_WALLET"){
				$(".IWC_SPORT_WALLET").html("&nbsp;--");
			} else if(pNetwork == "CMD_SPORT_WALLET"){
				$(".CMD_SPORT_WALLET").html("&nbsp;--");
			} else if(pNetwork == "KY_WALLET"){
				$(".KY_WALLET").html("&nbsp;--");
			} else if(pNetwork == "IG_CHESS_WALLET"){
				$(".IG_CHESS_WALLET").html("&nbsp;--");
			} 
		},
		success : function(data) {
			if (data) {
				if(data.success == true) {
					if (pNetwork == "MAIN_WALLET") {
						$(".MAIN_WALLET").html(data.balance);
					} else if (pNetwork == "DS_LOTTERY_WALLET"){
						$(".DS_LOTTERY_WALLET").html(data.dsLotteryBalance);
					} else if (pNetwork == "SOPRT_WALLET"){
						if (data.m8SportBalance == -1) {
							$(".SOPRT_WALLET").html(l_message['msg11']);
						} else {
							$(".SOPRT_WALLET").html(data.m8SportBalance);
						}
					} else if (pNetwork == "AG_LIVE_WALLET"){
						$(".AG_LIVE_WALLET").html(data.agLiveBalance);
					} else if (pNetwork == "BBIN_WALLET"){
						$(".BBIN_WALLET").html(data.BBINBalance);
					} else if (pNetwork == "OG_WALLET"){
						$(".OG_WALLET").html(data.OGBalance);
					} else if (pNetwork == "YY_WALLET"){
						if (data.YYBalance == -1) {
							$(".YY_WALLET").html(l_message['msg11']);
						} else {
							$(".YY_WALLET").html(data.YYBalance);
						}
						
//						$("#yy_balance").html(data.YYBalance);
					} else if (pNetwork == "PT_WALLET"){
						$(".PT_WALLET").html(data.PTBalance);
					} else if (pNetwork == "GG_WALLET"){
						$(".GG_WALLET").html(data.GGBalance);
					} else if (pNetwork == "SPADE_WALLET"){
						$(".SPADE_WALLET").html(data.SGBalance);
					} else if (pNetwork == "OPUS_SPORT_WALLET"){
						$(".OPUS_SPORT_WALLET").html(data.OpusSportBalance);
					} else if (pNetwork == "OPUS_LIVE_SLOT_WALLET"){
						$(".OPUS_LIVE_SLOT_WALLET").html(data.OpusLiveSlotBalance);
					} else if (pNetwork == "ALLBET_WALLET"){
						$(".ALLBET_WALLET").html(data.allBetBalance);
					} else if (pNetwork == "MG_WALLET"){
						$(".MG_WALLET").html(data.MGBalance);
					} else if (pNetwork == "PJ_WALLET"){
						$(".PJ_WALLET").html(data.PjBalance);
					} else if (pNetwork == "SUNBET_LIVE_WALLET"){
						$(".SUNBET_LIVE_WALLET").html(data.SunbetBalance);
					} else if (pNetwork == "HB_WALLET"){
						$(".HB_WALLET").html(data.HBBalance);
					} else if(pNetwork == "IWC_SPORT_WALLET"){
						$(".IWC_SPORT_WALLET").html(data.IwcSportBalance);
					} else if(pNetwork == "CMD_SPORT_WALLET"){
						$(".CMD_SPORT_WALLET").html(data.CmdSportBalance);
					} else if(pNetwork == "KY_WALLET"){
						$(".KY_WALLET").html(data.KyBalance);
					} else if(pNetwork == "IG_CHESS_WALLET"){
						$(".IG_CHESS_WALLET").html(data.IgChessBalance);
					}
//						$("#live_blce").html("<span class='cridtConversion_msg'>"+b_msg['live']+"</span>");
				} else {
					if(data.message == 'SESSION_EXPIRED') {
						JqueryShowMessageHome(l_basic['sessionExpired']);
					} else if(data.message == 'TRY_AGAIN') {
//						JqueryShowMessage(l_basic['tryAgain']);
						$(".all_blce").html(l_message['msg12']);
					}
				}
			}
		},
		error : function(xmlhttprequest, error) {
		},
		complete : function() {
		}
	});
}

function changeRegCode() {
    $('#checkRegCodeImage').hide().attr('src', $("#path").val()+'/app/checkCode/image?' + Math.floor(Math.random()*100) ).fadeIn();  
} 

function centreSwitching(type){
	$.ajax({
		type : "POST",
		url :  $("#path").val()+"/app/"+type,
		data : '',
		contentType : 'application/json',
		dataType : "html",
		beforeSend : function(xmlhttprequest) {
//			$("#typeAA").html("<img src='"+$(path).val()+"/"+$(site).val()+"/"+$(languageType).val()+"/images/white.gif'>");
//			$("#maskDiv").show();
		},
		success : function(data) {
			$("#typeAA").html(data);
		},
		error : function(e) {
			JqueryShowMessage(l_basic['tryAgain']);
		}
	});
}
function unreadMessages(){
	JqueryShowMessage(l_basic['unreadMessages']);
}

function getMessages(pageNumber){
		$("#pageNext").unbind();
		$("#pagePrev").unbind();
			var RecordsPage = 20;// 每页显示多少条
			var o = {
					pageNumber : pageNumber + "",//当前页
					RecordsPage : RecordsPage + "" 
			};
			var jsonuserinfo = $.toJSON(o);
			$.ajax({
				type : "post",
				url : $("#path").val() + "/app/getMessages?" + Math.random()*10000,
				data : jsonuserinfo,
				contentType : 'application/json',
				dataType : "json",
				async : true, 
				timeout : 50000,
				beforeSend : function(xmlhttprequest) {
				},
				success : function(data) {
					if(data){
						if (data.success==true) {
							$("#result_table tbody").html("");
							if(data.resultList.length > 0){
								for(var i=0;i<data.resultList.length;i++){
									var tdhtml = "";
										tdhtml = "<tr>";
										tdhtml +="<td><a onclick='openAnnounceContent(\""+data.resultList[i][0]+"\",\""+l_message['msg5']+"\")' class='r_t_td_a'>"+data.resultList[i][0].substring(0,30)+"...</a></td>";
										tdhtml +="<td>"+data.resultList[i][1]+"</td>";
										tdhtml +="<td><input type='button' style='background:#f68b1e;color:#fff;width:55px;border-radius:3px;border:medium none' value='删除' onclick='deleteMessage(\""+data.resultList[i][0]+"\",\""+l_message['msg5']+"\")' /></td>";
										tdhtml +="</tr>";
									$("#result_table tbody").append(tdhtml);
								}
								$("#result_table tr").mousemove(function() {
									tr_move(this);
								});
								$("#result_table tr").mouseout(function() {
									tr_out(this);
								});
									
									$("#currMemberNum").html(data.total);
									$("#noRecord").hide();
									$("#pageMember").show();
									var pageNum = data.pageNumber;//当前页
									var pageAllNumber = data.pageAllNumber;//总页数
									$("#allPageNum").html(pageNum);
									if(pageNumber == 1) {
										if(pageAllNumber != 1) {
											$("#pageNext").click(function(){
												getAnnounceList(pageNumber + 1);
											});
										}
									} else if(pageNumber == pageAllNumber) {
										$("#pagePrev").click(function(){
											getAnnounceList(pageNumber - 1);
										});
									} else {
										$("#pageNext").click(function(){
											getAnnounceList(pageNumber + 1);
										});
										$("#pagePrev").click(function(){
											getAnnounceList(pageNumber - 1);
										});
									}
									
									var pageNumHtml = "";
									var forEnd;
									var forBegin;
									if(pageAllNumber > 10) {
										if(pageNumber > 5) {
											if(pageAllNumber - pageNumber > 5) {
												forEnd = pageNumber + 5;
												forBegin = pageNum - 4;
											} else {
												forEnd = pageAllNumber;
												forBegin = pageAllNumber - 9;
											}
										} else {
											forEnd = 10;
											forBegin = 1;
										}
									} else {
										forEnd = pageAllNumber;
										forBegin = 1;
									}
									for ( var j = forBegin; j <= forEnd; j++) {
										if(j != pageNumber) {
											pageNumHtml += "<a onclick=\"getMessages("+j+");\" style='color:#000;cursor: pointer;' >"+ j + "</a>&nbsp;";
										} else {
											pageNumHtml += "<font class='F_bold currPageNumber''>"+ j + "</font>&nbsp;";
										}
									}
									$("#currPageNum").html(pageNumHtml);
									
							}else{
								$("#pageMember").hide();
								$("#noRecord").show();
							}
						}else{
							if(data.message=='SESSION_EXPIRED'){
								JqueryShowMessageHome(l_basic['sessionExpired']);
							}else if(data.message=='TRY_AGAIN'){
								JqueryShowMessage(l_basic['tryAgain']);
							}else{
								JqueryShowMessage(data.message);
							}
						}
					}else{
						JqueryShowMessage(l_basic['tryAgain']);
					}
					
				},
				error : function(xmlhttprequest, error) {
				},
				complete : function() {
				}
			});
}

function joinNowOpen(type) {
	$("#floatLogins").hide();
	location.href=type;
}

var games = ["KLC","SSC","BJC","XYC","JSC","TJSC","XJSC","JXSC","YNSC","SHSC","TJKC","HNKC","GXKC","AHK3","JLK3","GXK3"];

function showRules(){
    for(var i = 0; i < games.length; i++){
	   $("#rules_" + games[i]).hide();
	}
    
     var chsGameType=$("#slt_issue_results_gameType_gz").val();
  $("#rules_" + chsGameType).show();
}

function chooseBankCard(bankId){
	$("#bankId").val(bankId);
	$("#bankName").val($("#bankName" + bankId).val());
	$("#branchName").val($("#branchName" + bankId).val());
	$("#accountNumber").val($("#accountNumber" + bankId).val());
}

function deleteChooseBankCard(bankId){
	$("#deleteBankId").val(bankId);
	$("#deleteBankName").val($("#deleteBankName" + bankId).val());
	$("#deleteBranchName").val($("#deleteBranchName" + bankId).val());
	$("#deleteAccountNumber").val($("#deleteAccountNumber" + bankId).val());
}

function withdrawPwModifyShow(){
	var number = $("#number").val();
	if (number%2 == 0) {
		$("#newWithdrawPwDiv").show();
		$("#confirmNewWithdrawPwDiv").show();
		$("#number").val(parseInt(number) + parseInt(1))
	} else {
		$("#newWithdrawPwDiv").hide();
		$("#confirmNewWithdrawPwDiv").hide();
		$("#number").val(parseInt(number) + parseInt(1))
	}
}



var cacheImg = function(type) {
	var link = "";
//	var link = $( "#" + type + "Link").val();
	var o = {
			type:type
	};
	var jsonuserinfo = $.toJSON(o);
	$.ajax({
		type : "post",
		url : $("#path").val() + "/app/getGameLink?" + Math.random()*10000,
		data : jsonuserinfo,
		contentType : 'application/json',
		dataType : "json",
		async:true, 
		timeout : 50000,
		beforeSend : function(xmlhttprequest) {
		},
		success : function(data) {
			if(data){
				if(data.success){
					if (data.link != null) {
						link = data.link;
						window.setTimeout("", 1000);
						for ( var i = 1; i < 4; i++) {
							var idName= type + "SpeedLine"+i;
							var img = document.createElement('img');
							
							if(type == "lottery"){
								img.onerror = getErrorLottery;
								img.onload =  getLoadLottery;
							} else if (type == "lotto") {
								img.onerror = getErrorLotto;
								img.onload =  getLoadLotto;
							} else if (type == "lotteryPJ") {
								img.onerror = getErrorLotteryPJ;
								img.onload =  getLoadLotteryPJ;
							} else if (type == "lottoPJ") {
								img.onerror = getErrorLottoPJ;
								img.onload =  getLoadLottoPJ;
							} else if (type == "lottoFfcIg") {
								img.onerror = getErrorLottoFfcIg;
								img.onload =  getLoadLottoFfcIg;
							}else if (type == "lottoFfcPJ") {
								img.onerror = getErrorLottoFfcPJ;
								img.onload =  getLoadLottoFfcPJ;
							}else if (type == "lotteryIGVR") {
								img.onerror = getErrorLotteryIGVR;
								img.onload =  getLoadLotteryIGVR;
							}/*else if (type == "lottoFfcIGVR") {
								img.onerror = getErrorLottoFfcIGVR;
								img.onload =  getLoadLottoFfcIGVR;
							}*/
							
//							img.onerror = getError(type,i);
//							img.onload =  getLoad(type,i);
							img.number = i;
							img.time = new Date().getTime();
							if (i == 1) {
								img.src = (link.split(",")[0] + "?") + new Date().getTime(); 
							} else if (i == 2) {
								img.src = (link.split(",")[1] + "?") + new Date().getTime(); 
							} else {
								img.src = (link.split(",")[2] + "?") + new Date().getTime(); 
							}
							
							document.getElementById(idName).innerHTML ="测速中...";
						}
					}
				}
			}
		},
		error : function(xmlhttprequest, error) {
		},
		complete : function() {
		}
	});
	
	
	
//	function getError(type,i){
//		alert("getError" + type + "SpeedLine"+i);
//		var speedLine = "'" + type + "SpeedLine"+i + "'";
//		alert(speedLine);
//		document.getElementById(speedLine).innerHTML ="无法连接";
//	}
//
//	function getLoad(type,i){
//		alert("getLoad" + type + "SpeedLine"+i);
//		var speedLine = type + "SpeedLine"+i;
//		var speed = (new Date().getTime() -  this.time) / 5;
//		document.getElementById("'" + speedLine + "'").innerHTML =speed+"毫秒";
//	}

	function getErrorLottery(){
		document.getElementById("lotterySpeedLine"+this.number).innerHTML ="无法连接";
	}

	function getLoadLottery(){
		var speed = (new Date().getTime() -  this.time) / 5;
		document.getElementById("lotterySpeedLine"+this.number).innerHTML =speed+"毫秒";
	}
	
	function getErrorLotto(){
		document.getElementById("lottoSpeedLine"+this.number).innerHTML ="无法连接";
	}
	function getLoadLotto(){
		var speed = (new Date().getTime() -  this.time) / 5;
		document.getElementById("lottoSpeedLine"+this.number).innerHTML =speed+"毫秒";
	}
	function getErrorLotteryPJ(){
		document.getElementById("lotteryPJSpeedLine"+this.number).innerHTML ="无法连接";
	}

	function getLoadLotteryPJ(){
		var speed = (new Date().getTime() -  this.time) / 5;
		document.getElementById("lotteryPJSpeedLine"+this.number).innerHTML =speed+"毫秒";
	}

	function getErrorLottoPJ(){
		document.getElementById("lottoPJSpeedLine"+this.number).innerHTML ="无法连接";
	}
	function getLoadLottoPJ(){
		var speed = (new Date().getTime() -  this.time) / 5;
		document.getElementById("lottoPJSpeedLine"+this.number).innerHTML =speed+"毫秒";
	}
	
	function getErrorLottoFfcIg(){
		document.getElementById("lottoFfcIgSpeedLine"+this.number).innerHTML ="无法连接";
	}
	function getLoadLottoFfcIg(){
		var speed = (new Date().getTime() -  this.time) / 5;
		document.getElementById("lottoFfcIgSpeedLine"+this.number).innerHTML =speed+"毫秒";
	}

	function getErrorLottoFfcPJ(){
		document.getElementById("lottoFfcPJSpeedLine"+this.number).innerHTML ="无法连接";
	}
	function getLoadLottoFfcPJ(){
		var speed = (new Date().getTime() -  this.time) / 5;
		document.getElementById("lottoFfcPJSpeedLine"+this.number).innerHTML =speed+"毫秒";
	}

	//IG(视频)传统彩
	function getErrorLotteryIGVR(){
		document.getElementById("lotteryIGVRSpeedLine"+this.number).innerHTML ="无法连接";
	}
	function getLoadLotteryIGVR(){
		var speed = (new Date().getTime() -  this.time) / 5;
		document.getElementById("lotteryIGVRSpeedLine"+this.number).innerHTML =speed+"毫秒";
	}
	//IG(视频)官方彩
	/*function getErrorLotteryIGVR(){
		document.getElementById("lottoFfcIGVRSpeedLine"+this.number).innerHTML ="无法连接";
	}
	function getLoadLotteryIGVR(){
		var speed = (new Date().getTime() -  this.time) / 5;
		document.getElementById("lottoFfcIGVRSpeedLine"+this.number).innerHTML =speed+"毫秒";
	}*/

//	if (type == "lottery"){//时时彩
//		window.setTimeout("", 1000);
//			for ( var i = 1; i < 4; i++) {
//				var idName="lotterySpeedLine"+i;
//				var line="line"+i;
//				var img = document.createElement('img');
//				img.onerror = getError;
//				img.onload =  getLoad;
//				img.number = i;
//				img.time = new Date().getTime();
//				if (i == 1) {
//					img.src = (lotteryLink.split(",")[0] + "?") + new Date().getTime(); 
//				} else if (i == 2) {
//					img.src = (lotteryLink.split(",")[1] + "?") + new Date().getTime(); 
//				} else {
//					img.src = (lotteryLink.split(",")[2] + "?") + new Date().getTime(); 
//				}
//				
//				$("#lotteryLine").show();
//				document.getElementById(idName).innerHTML ="测速中...";
//			} 
//	} else {//香港彩
//		window.setTimeout("", 1000);
//		for ( var i = 1; i < 4; i++) {
//			var idName="lottoSpeedLine"+i;
//			var img = document.createElement('img');
//			img.onerror = getErrorLotto;
//			img.onload =  getLoadLotto;
//			img.number = i;
//			img.time = new Date().getTime();
//			if (i == 1) {
//				img.src = (lottoLink.split(",")[0] + "?") + new Date().getTime(); 
//			} else if (i == 2) {
//				img.src = (lottoLink.split(",")[1] + "?") + new Date().getTime(); 
//			} else {
//				img.src = (lottoLink.split(",")[2] + "?") + new Date().getTime(); 
//			}
//			
//			document.getElementById(idName).innerHTML ="测速中...";
//		}
//		
//	}
	
};

var cacheImgByClass = function(type) {
//	var lotteryLink = $("#lotteryLink").val();
//	var lottoLink = $("#lottoLink").val();
	var link = $( "#" + type + "Link").val();
	window.setTimeout("", 1000);
	for ( var i = 1; i < 4; i++) {
		var idName= type + "SpeedLine"+i;
		var img = document.createElement('img');
		
		if(type == "lottery"){
			img.onerror = getErrorLottery2;
			img.onload =  getLoadLottery2;
		} else if (type == "lotto") {
			img.onerror = getErrorLotto;
			img.onload =  getLoadLotto;
		} else if (type == "lotteryPJ") {
			img.onerror = getErrorLotteryPJ;
			img.onload =  getLoadLotteryPJ;
		} else if (type == "lottoPJ") {
			img.onerror = getErrorLottoPJ;
			img.onload =  getLoadLottoPJ;
		}
//		img.onerror = getError(type,i);
//		img.onload =  getLoad(type,i);
		img.number = i;
		img.time = new Date().getTime();
		if (i == 1) {
			img.src = (link.split(",")[0] + "?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = (link.split(",")[1] + "?") + new Date().getTime(); 
		} else {
			img.src = (link.split(",")[2] + "?") + new Date().getTime(); 
		}
		
		for ( var z = 0; z <$("." + idName).size(); z++) {
			$("." + idName)[z].innerHTML ="测速中...";
		}
	}
};

function getErrorLottery2(){
	document.getElementByClassName("lotterySpeedLine"+this.number).innerHTML ="无法连接";
	for ( var z = 0; z <$("." + "lotterySpeedLine"+this.number); z++) {
		$("." +"lotterySpeedLine"+this.number)[z].innerHTML ="无法连接";
	}
}
function getLoadLottery2(){
	var speed = (new Date().getTime() -  this.time) / 5;
	for ( var z = 0; z <$("." + "lotterySpeedLine"+this.number).size(); z++) {
		$("." +"lotterySpeedLine"+this.number)[z].innerHTML =speed+"毫秒";
	}
}

function getErrorLotto2(){
	for ( var z = 0; z <$("." + "lotterySpeedLine"+this.number).size(); z++) {
		$("." + "lotterySpeedLine"+this.number)[z].innerHTML ="无法连接";
	}
}

function getLoadLotto2(){
	var speed = (new Date().getTime() -  this.time) / 5;
//	document.getElementByClassName("lottoSpeedLine"+this.number).innerHTML =speed+"毫秒";
	
	for ( var z = 0; z <$("." + "lotterySpeedLine"+this.number).size(); z++) {
		$("." + "lotterySpeedLine"+this.number)[z].innerHTML =speed+"毫秒";
	}
}
//
function lineShow(showId){
	$("#"+showId).show();
	$("."+showId).show();
}
function lineHide(hideId){
	$("#"+hideId).hide();
	$("."+hideId).hide();
}

function getNewsContent(url){
	var o = {
			url:url	
	};
	var jsonuserinfo = $.toJSON(o);
	$.ajax({
		type : "post",
		url : $("#path").val() + "/app/getNewsContent?" + Math.random()*10000,
		data : jsonuserinfo,
		contentType : 'application/json',
		dataType : "json",
		async:true, 
		timeout : 50000,
		beforeSend : function(xmlhttprequest) {
		},
		success : function(data) {
			if(data){
				if(data.success){
					window.location=data.linkPage;
				}else{
//					if(data.message=="SESSION_EXPIRED"){
//						JqueryShowMessageHome(l_basic['sessionExpired']);
//					}else{
//						JqueryShowMessage(data.message);
//					}
				}
			}
		},
		error : function(xmlhttprequest, error) {
		},
		complete : function() {
		}
	});
}

function getChatroomLink(){
	var o = {
	};
	var jsonuserinfo = $.toJSON(o);
	$.ajax({
		type : "post",
		url : $("#path").val() + "/app/getChatroomLink?" + Math.random()*10000,
		data : jsonuserinfo,
		contentType : 'application/json',
		dataType : "json",
		async:false, 
		timeout : 50000,
		beforeSend : function(xmlhttprequest) {
		},
		success : function(data) {
			if(data){
				if(data.success){
					window.open(data.chatRoomLink,"_blank");
				}else{
					if(data.message=="SESSION_EXPIRED"){
						JqueryShowMessageHome(l_basic['sessionExpired']);
					}else if(data.message=="DEMO_CHAT"){
						JqueryShowMessageHome(l_basic['demoChat']);
					}else {
						JqueryShowMessage(data.message);
					}
				}
			}
		},
		error : function(xmlhttprequest, error) {
		},
		complete : function() {
		}
	});
}

function getMemberTransferTotal(){
	var o = {};
	var jsonuserinfo = $.toJSON(o);
	$.ajax({
		type : "post",
		url : $("#path").val() + "/app/getMemberTransferTotal?" + Math.random()*10000,
		data : jsonuserinfo,
		contentType : 'application/json',
		dataType : "json",
		async:true, 
		timeout : 50000,
		beforeSend : function(xmlhttprequest) {
			
		},
		success : function(data) {
			if(data){
				if(data.success){
					var memberVipLevelId = data.memberVipLevelId;
					var deposits = data.deposits;
					var depositAmount = data.depositAmount;
					var memberVipLevelName = data.memberVipLevelName;
					
//					if(memberVipLevelId == null){
						
//					}else{
						var popdiv1 = "";
						popdiv1 = '<div id="pop-div1" class="pop-div1">'
						 + '<div class="yhxx">'
						 + '<table class="viptab">'
						 + '<tr>'
						 + '<th class="th1">VIP等级</th>'
						 + '<th>总存款笔数</th>'
						 + '<th class="th3">总存款数</th>'
						 + '</tr>'
						 + '<tr>'
						 + '<td>'+ memberVipLevelName + '</td>'
						 + '<td>' + deposits +  '</td>'
						 + '<td>' + depositAmount +  '</td>'
						 + '</tr>'
						 + '</table>'
						 + '</div>'
						 +'<span class="layui-layer-setwin">'
						 +'<a class="layui-layer-ico layui-layer-close layui-layer-close2" id="closepop">'
						 +'</a>'
						 +'</span>'
						 + '</div>';
						$(".footer").append(popdiv1);
						popupDiv("pop-div1");
						$("#closepop").bind("click", function(){hideDiv("pop-div1");});
//					}
				}else{
					if(data.message=="SESSION_EXPIRED"){
						JqueryShowMessageHome(l_basic['sessionExpired']);
					}else{
						JqueryShowMessage(data.message);
					}
				}
			}
		},
		error : function(xmlhttprequest, error) {
		},
		complete : function() {
		}
	});
	
}

var cacheImgLinkbjcp = function(type) {
	window.setTimeout("", 1000);
	for ( var i = 1; i < 8; i++) {
		var idName="line"+i;
		var img = document.createElement('img');
		img.onerror = getErrorLine;
		img.onload =  getLoadLine;
		img.number = i;
		img.time = new Date().getTime();
		
		if (i == 1) {
			img.src = ("http://bjcp18.com/boJinCPLoginWeb/images/CN/boJinCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = ("http://bjcp28.com/boJinCPLoginWeb/images/CN/boJinCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 3) {
			img.src = ("http://bjcp38.com/boJinCPLoginWeb/images/CN/boJinCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 4) {
			img.src = ("http://bjcp48.com/boJinCPLoginWeb/images/CN/boJinCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 5) {
			img.src = ("http://bjcp58.com/boJinCPLoginWeb/images/CN/boJinCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 6) {
			img.src = ("http://bjcp68.com/boJinCPLoginWeb/images/CN/boJinCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 7) {
			img.src = ("http://bjcp78.com/boJinCPLoginWeb/images/CN/boJinCP/pc/speed.gif?") + new Date().getTime(); 
		}
		
//		$("#lotteryLine").show();
		document.getElementById(idName).innerHTML ="测速中...";
	
	}
};

var cacheImgLinkyc = function(type) {
	window.setTimeout("", 1000);
	for ( var i = 1; i < 7; i++) {
		var idName="line"+i;
		var img = document.createElement('img');
		img.onerror = getErrorLine;
		img.onload =  getLoadLine;
		img.number = i;
		img.time = new Date().getTime();
		
		if (i == 1) {
			img.src = ("http://yicai1234.com/ycLoginWeb/images/CN/yc/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = ("http://yicai2345.com/ycLoginWeb/images/CN/yc/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 3) {
			img.src = ("http://yicai3456.com/ycLoginWeb/images/CN/yc/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 4) {
			img.src = ("http://yicai4567.com/ycLoginWeb/images/CN/yc/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 5) {
			img.src = ("http://yicai5678.com/ycLoginWeb/images/CN/yc/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 6) {
			img.src = ("http://yicai6789.com/ycLoginWeb/images/CN/yc/pc/speed.gif?") + new Date().getTime(); 
		}
		
//		$("#lotteryLine").show();
		document.getElementById(idName).innerHTML ="测速中...";
	
	}
};
function getErrorLine(){
	document.getElementById("line"+this.number).innerHTML ="无法连接";
}


function getLoadLine(){
	var speed = (new Date().getTime() -  this.time) / 5;
	document.getElementById("line"+this.number).innerHTML =speed+"毫秒";
}

var cacheImgLinkzczx = function(type) {
	window.setTimeout("", 1000);
	for ( var i = 1; i < 9; i++) {
		var idName="line"+i;
		var img = document.createElement('img');
		img.onerror = getErrorLine;
		img.onload =  getLoadLine;
		img.number = i;
		img.time = new Date().getTime();
		
		if (i == 1) {
			img.src = ("http://zczx2.com/zhongCaiZXLoginWeb/images/CN/zhongcaiZX/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = ("http://zczx3.com/zhongCaiZXLoginWeb/images/CN/zhongcaiZX/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 3) {
			img.src = ("http://zczx4.com/zhongCaiZXLoginWeb/images/CN/zhongcaiZX/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 4) {
			img.src = ("http://zczx5.com/zhongCaiZXLoginWeb/images/CN/zhongcaiZX/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 5) {
			img.src = ("http://zczx6.com/zhongCaiZXLoginWeb/images/CN/zhongcaiZX/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 6) {
			img.src = ("http://zczx7.com/zhongCaiZXLoginWeb/images/CN/zhongcaiZX/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 7) {
			img.src = ("http://zczx8.com/zhongCaiZXLoginWeb/images/CN/zhongcaiZX/pc/speed.gif?") + new Date().getTime(); 
		}else if (i == 8) {
			img.src = ("http://zczx9.com/zhongCaiZXLoginWeb/images/CN/zhongcaiZX/pc/speed.gif?") + new Date().getTime(); 
		}
		
//		$("#lotteryLine").show();
		document.getElementById(idName).innerHTML ="测速中...";
	
	}
};

var cacheImgLink1cp = function(type) {
	window.setTimeout("", 1000);
	for ( var i = 1; i < 9; i++) {
		var idName="line"+i;
		var img = document.createElement('img');
		img.onerror = getErrorLine;
		img.onload =  getLoadLine;
		img.number = i;
		img.time = new Date().getTime();
		
		if (i == 1) {
			img.src = ("http://1cp.iasia99.com/1CPLoginWeb/images/CN/1cp/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = ("http://1cp.iasia99.com/1CPLoginWeb/images/CN/1cp/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 3) {
			img.src = ("http://1cp.iasia99.com/1CPLoginWeb/images/CN/1cp/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 4) {
			img.src = ("http://1cp.iasia99.com/1CPLoginWeb/images/CN/1cp/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 5) {
			img.src = ("http://1cp.iasia99.com/1CPLoginWeb/images/CN/1cp/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 6) {
			img.src = ("http://1cp.iasia99.com/1CPLoginWeb/images/CN/1cp/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 7) {
			img.src = ("http://1cp.iasia99.com/1CPLoginWeb/images/CN/1cp/pc/speed.gif?") + new Date().getTime(); 
		}else if (i == 8) {
			img.src = ("http://1cp.iasia99.com/1CPLoginWeb/images/CN/1cp/pc/speed.gif?") + new Date().getTime(); 
		}
		
//		$("#lotteryLine").show();
		document.getElementById(idName).innerHTML ="测速中...";
	
	}
};

var cacheImgLinkhncp = function(type) {
	window.setTimeout("", 1000);
	for ( var i = 1; i < 9; i++) {
		var idName="line"+i;
		var img = document.createElement('img');
		img.onerror = getErrorLine;
		img.onload =  getLoadLine;
		img.number = i;
		img.time = new Date().getTime();
		
		if (i == 1) {
			img.src = ("http://www.hncp00.com/hongNiuCPLoginWeb/images/CN/hongNiuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = ("http://www.hncp11.com/hongNiuCPLoginWeb/images/CN/hongNiuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 3) {
			img.src = ("http://www.hncp22.com/hongNiuCPLoginWeb/images/CN/hongNiuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 4) {
			img.src = ("http://www.hncp33.com/hongNiuCPLoginWeb/images/CN/hongNiuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 5) {
			img.src = ("http://www.hncp44.com/hongNiuCPLoginWeb/images/CN/hongNiuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 6) {
			img.src = ("http://www.hncp55.com/hongNiuCPLoginWeb/images/CN/hongNiuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 7) {
			img.src = ("http://www.hncp66.com/hongNiuCPLoginWeb/images/CN/hongNiuCP/pc/speed.gif?") + new Date().getTime(); 
		}else if (i == 8) {
			img.src = ("http://www.hncp77.com/hongNiuCPLoginWeb/images/CN/hongNiuCP/pc/speed.gif?") + new Date().getTime(); 
		}
		
//		$("#lotteryLine").show();
		document.getElementById(idName).innerHTML ="测速中...";
	
	}
};

var cacheImgLinkxyycp = function(type) {
	window.setTimeout("", 1000);
	for ( var i = 1; i < 10; i++) {
		var idName="line"+i;
		var img = document.createElement('img');
		img.onerror = getErrorLine;
		img.onload =  getLoadLine;
		img.number = i;
		img.time = new Date().getTime();
		
		if (i == 1) {
			img.src = ("http://xyy00.com/xiYingYingCPALoginWeb/images/CN/xiYingYingCPA/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = ("http://www.xyy02.com/xiYingYingCPALoginWeb/images/CN/xiYingYingCPA/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 3) {
			img.src = ("http://www.xyy03.com/xiYingYingCPALoginWeb/images/CN/xiYingYingCPA/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 4) {
			img.src = ("http://www.xyy04.com/xiYingYingCPALoginWeb/images/CN/xiYingYingCPA/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 5) {
			img.src = ("http://www.xyy05.com/xiYingYingCPALoginWeb/images/CN/xiYingYingCPA/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 6) {
			img.src = ("http://www.xyy06.com/xiYingYingCPALoginWeb/images/CN/xiYingYingCPA/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 7) {
			img.src = ("http://www.xyy07.com/xiYingYingCPALoginWeb/images/CN/xiYingYingCPA/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 8) {
			img.src = ("http://www.xyy08.com/xiYingYingCPALoginWeb/images/CN/xiYingYingCPA/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 9) {
			img.src = ("http://www.xyy09.com/xiYingYingCPALoginWeb/images/CN/xiYingYingCPA/pc/speed.gif?") + new Date().getTime();
		}
		
//		$("#lotteryLine").show();
		document.getElementById(idName).innerHTML ="测速中...";
	
	}
};

var cacheImgLinkdzcp = function(type) {
	window.setTimeout("", 1000);
	for ( var i = 1; i < 9; i++) {
		var idName="line"+i;
		var img = document.createElement('img');
		img.onerror = getErrorLine;
		img.onload =  getLoadLine;
		img.number = i;
		img.time = new Date().getTime();
		
		if (i == 1) {
			img.src = ("http://www.80990.com/daZhongCPLoginWeb/images/CN/daZhongCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = ("http://www.50016668.com/daZhongCPLoginWeb/images/CN/daZhongCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 3) {
			img.src = ("http://www.50016888.com/daZhongCPLoginWeb/images/CN/daZhongCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 4) {
			img.src = ("http://www.22223356.com/daZhongCPLoginWeb/images/CN/daZhongCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 5) {
			img.src = ("http://www.23235656.com/daZhongCPLoginWeb/images/CN/daZhongCP/pc/speed.gif?") + new Date().getTime(); 
		}
		
//		$("#lotteryLine").show();
		document.getElementById(idName).innerHTML ="测速中...";
	
	}
};

var cacheImgLinkhlcp = function(type) {
	window.setTimeout("", 1000);
	for ( var i = 1; i < 7; i++) {
		var idName="line"+i;
		var img = document.createElement('img');
		img.onerror = getErrorLine;
		img.onload =  getLoadLine;
		img.number = i;
		img.time = new Date().getTime();
		
		if (i == 1) {
			img.src = ("https://hlcp12.com/hongLiCPLoginWeb/images/CN/hongLiCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = ("https://hlcp13.com/hongLiCPLoginWeb/images/CN/hongLiCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 3) {
			img.src = ("https://hlcp14.com/hongLiCPLoginWeb/images/CN/hongLiCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 4) {
			img.src = ("https://hlcp15.com/hongLiCPLoginWeb/images/CN/hongLiCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 5) {
			img.src = ("https://hlcp17.com/hongLiCPLoginWeb/images/CN/hongLiCP/pc/speed.gif?") + new Date().getTime(); 
		}/* else if (i == 6) {
			img.src = ("http://hlcp988.com/hongLiCPLoginWeb/images/CN/hongLiCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 7) {
			img.src = ("http://hlcp777.com/hongLiCPLoginWeb/images/CN/hongLiCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 8) {
			img.src = ("http://hlcp999.com/hongLiCPLoginWeb/images/CN/hongLiCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 9) {
			img.src = ("http://hlcp555.com/hongLiCPLoginWeb/images/CN/hongLiCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 10) {
			img.src = ("http://hlcp111.com/hongLiCPLoginWeb/images/CN/hongLiCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 11) {
			img.src = ("http://hlcp222.com/hongLiCPLoginWeb/images/CN/hongLiCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 12) {
			img.src = ("http://hlcp333.com/hongLiCPLoginWeb/images/CN/hongLiCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 13) {
			img.src = ("http://hlcp444.com/hongLiCPLoginWeb/images/CN/hongLiCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 14) {
			img.src = ("http://hlcp000.com/hongLiCPLoginWeb/images/CN/hongLiCP/pc/speed.gif?") + new Date().getTime(); 
		}*/
		
//		$("#lotteryLine").show();
		document.getElementById(idName).innerHTML ="测速中...";
	
	}
};

var cacheImgLinklfcp = function(type) {
	window.setTimeout("", 1000);
	for ( var i = 1; i < 11; i++) {
		var idName="line"+i;
		var img = document.createElement('img');
		img.onerror = getErrorLine;
		img.onload =  getLoadLine;
		img.number = i;
		img.time = new Date().getTime();
		
		if (i == 1) {
			img.src = ("http://www.lfcp4433.com/leFuCPLoginWeb/images/CN/leFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = ("http://www.lfcp444.com/leFuCPLoginWeb/images/CN/leFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 3) {
			img.src = ("http://www.lfcp4444.com/leFuCPLoginWeb/images/CN/leFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 4) {
			img.src = ("http://www.lfcp4455.com/leFuCPLoginWeb/images/CN/leFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 5) {
			img.src = ("http://www.lfcp4466.com/leFuCPLoginWeb/images/CN/leFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 6) {
			img.src = ("http://www.lfcp4477.com/leFuCPLoginWeb/images/CN/leFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 7) {
			img.src = ("http://www.lfcp4488.com/leFuCPLoginWeb/images/CN/leFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 8) {
			img.src = ("http://www.lfcp4499.com/leFuCPLoginWeb/images/CN/leFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 9) {
			img.src = ("http://www.lfcp5500.com/leFuCPLoginWeb/images/CN/leFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 10) {
			img.src = ("http://www.lfcp5511.com/leFuCPLoginWeb/images/CN/leFuCP/pc/speed.gif?") + new Date().getTime(); 
		}
//		$("#lotteryLine").show();
		document.getElementById(idName).innerHTML ="测速中...";
	
	}
};

var cacheImgLinkcjlm = function(type) {
	window.setTimeout("", 1000);
	for ( var i = 1; i < 11; i++) {
		var idName="line"+i;
		var img = document.createElement('img');
		img.onerror = getErrorLine;
		img.onload =  getLoadLine;
		img.number = i;
		img.time = new Date().getTime();
		
		if (i == 1) {
			img.src = ("http://www.cjlm11.com/caiJieLMLoginWeb/images/CN/caiJieLM/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = ("http://www.cjlm22.com/caiJieLMLoginWeb/images/CN/caiJieLM/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 3) {
			img.src = ("http://www.cjlm33.com/caiJieLMLoginWeb/images/CN/caiJieLM/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 4) {
			img.src = ("http://www.cjlm44.com/caiJieLMLoginWeb/images/CN/caiJieLM/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 5) {
			img.src = ("http://www.cjlm55.com/caiJieLMLoginWeb/images/CN/caiJieLM/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 6) {
			img.src = ("http://www.cjlm66.com/caiJieLMLoginWeb/images/CN/caiJieLM/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 7) {
			img.src = ("http://www.cjlm77.com/caiJieLMLoginWeb/images/CN/caiJieLM/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 8) {
			img.src = ("http://www.cjlm88.com/caiJieLMLoginWeb/images/CN/caiJieLM/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 9) {
			img.src = ("http://www.cjlm99.com/caiJieLMLoginWeb/images/CN/caiJieLM/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 10) {
			img.src = ("http://www.cjlm00.com/caiJieLMLoginWeb/images/CN/caiJieLM/pc/speed.gif?") + new Date().getTime(); 
		}
//		$("#lotteryLine").show();
		document.getElementById(idName).innerHTML ="测速中...";
	
	}
};
var cacheImgLinkcplm = function(type) {
	window.setTimeout("", 1000);
	for ( var i = 1; i < 11; i++) {
		var idName="line"+i;
		var img = document.createElement('img');
		img.onerror = getErrorLine;
		img.onload =  getLoadLine;
		img.number = i;
		img.time = new Date().getTime();
		
		if (i == 1) {
			img.src = ("http://www.cplm11.com/caiPiaoLMLoginWeb/images/CN/caiPiaoLM/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = ("http://www.cplm22.com/caiPiaoLMLoginWeb/images/CN/caiPiaoLM/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 3) {
			img.src = ("http://www.cplm33.com/caiPiaoLMLoginWeb/images/CN/caiPiaoLM/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 4) {
			img.src = ("http://www.cplm44.com/caiPiaoLMLoginWeb/images/CN/caiPiaoLM/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 5) {
			img.src = ("http://www.cplm55.com/caiPiaoLMLoginWeb/images/CN/caiPiaoLM/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 6) {
			img.src = ("http://www.cplm66.com/caiPiaoLMLoginWeb/images/CN/caiPiaoLM/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 7) {
			img.src = ("http://www.cplm77.com/caiPiaoLMLoginWeb/images/CN/caiPiaoLM/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 8) {
			img.src = ("http://www.cplm88.com/caiPiaoLMLoginWeb/images/CN/caiPiaoLM/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 9) {
			img.src = ("http://www.cplm99.com/caiPiaoLMLoginWeb/images/CN/caiPiaoLM/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 10) {
			img.src = ("http://www.cplm999.com/caiPiaoLMLoginWeb/images/CN/caiPiaoLM/pc/speed.gif?") + new Date().getTime(); 
		}
//		$("#lotteryLine").show();
		document.getElementById(idName).innerHTML ="测速中...";
	
	}
};

var cacheImgLinkhongYunCP = function(type) {
	window.setTimeout("", 1000);
	for ( var i = 1; i < 9; i++) {
		var idName="line"+i;
		var img = document.createElement('img');
		img.onerror = getErrorLine;
		img.onload =  getLoadLine;
		img.number = i;
		img.time = new Date().getTime();
		
		if (i == 1) {
			img.src = ("https://www.hycp66.com/hongYunCPLoginWeb/images/CN/hongYunCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = ("https://hycp76.com/hongYunCPLoginWeb/images/CN/hongYunCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 3) {
			img.src = ("https://hycp86.com/hongYunCPLoginWeb/images/CN/hongYunCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 4) {
			img.src = ("http://hycp61.com/hongYunCPLoginWeb/images/CN/hongYunCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 5) {
			img.src = ("http://hycp62.com/hongYunCPLoginWeb/images/CN/hongYunCP/pc/speed.gif?") + new Date().getTime();
		} else if (i == 6) {
			img.src = ("http://hycp63.com/hongYunCPLoginWeb/images/CN/hongYunCP/pc/speed.gif?") + new Date().getTime();			
		} /*else if (i == 7) {
			img.src = ("http://203.176.236.236:98/hycploginag/speed.gif?") + new Date().getTime(); 
		} else if (i == 8) {
			img.src = ("http://203.176.236.236:98/hycploginag/speed.gif?") + new Date().getTime(); 
		} else if (i == 9) {
			img.src = ("http://hycp66.com/hycpLoginWeb/images/CN/hy/pc/speed.gif?") + new Date().getTime();			
		}*/
		
//		$("#lotteryLine").show();
		document.getElementById(idName).innerHTML ="测速中...";
	
	}
};

var cacheImgLinkfctx = function(type) {
	window.setTimeout("", 1000);
	for ( var i = 1; i < 11; i++) {
		var idName="line"+i;
		var img = document.createElement('img');
		img.onerror = getErrorLine;
		img.onload =  getLoadLine;
		img.number = i;
		img.time = new Date().getTime();
		
		if (i == 1) {
			img.src = ("http://www.fctx11.com/fuCaiTianXiaLoginWeb/images/CN/fuCaiTianXia/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = ("http://www.fctx22.com/fuCaiTianXiaLoginWeb/images/CN/fuCaiTianXia/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 3) {
			img.src = ("http://www.fctx33.com/fuCaiTianXiaLoginWeb/images/CN/fuCaiTianXia/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 4) {
			img.src = ("http://www.fctx44.com/fuCaiTianXiaLoginWeb/images/CN/fuCaiTianXia/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 5) {
			img.src = ("http://www.fctx55.com/fuCaiTianXiaLoginWeb/images/CN/fuCaiTianXia/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 6) {
			img.src = ("http://www.fctx66.com/fuCaiTianXiaLoginWeb/images/CN/fuCaiTianXia/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 7) {
			img.src = ("http://www.fctx77.com/fuCaiTianXiaLoginWeb/images/CN/fuCaiTianXia/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 8) {
			img.src = ("http://www.fctx88.com/fuCaiTianXiaLoginWeb/images/CN/fuCaiTianXia/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 9) {
			img.src = ("http://www.fctx99.com/fuCaiTianXiaLoginWeb/images/CN/fuCaiTianXia/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 10) {
			img.src = ("http://fctx00.com/fuCaiTianXiaLoginWeb/images/CN/fuCaiTianXia/pc/speed.gif?") + new Date().getTime(); 
		}
//		$("#lotteryLine").show();
		document.getElementById(idName).innerHTML ="测速中...";
	
	}
};

var cacheImgLinkhxbcp = function(type) {
	window.setTimeout("", 1000);
	for ( var i = 1; i < 9; i++) {
		var idName="line"+i;
		var img = document.createElement('img');
		img.onerror = getErrorLine;
		img.onload =  getLoadLine;
		img.number = i;
		img.time = new Date().getTime();
		
		if (i == 1) {
			img.src = ("http://www.88hxb.com/haoXiangBoLoginWeb/images/CN/haoXiangBoYL/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = ("http://11hxb.com/haoXiangBoLoginWeb/images/CN/haoXiangBoYL/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 3) {
			img.src = ("http://22hxb.com/haoXiangBoLoginWeb/images/CN/haoXiangBoYL/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 4) {
			img.src = ("http://33hxb.com/haoXiangBoLoginWeb/images/CN/haoXiangBoYL/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 5) {
			img.src = ("http://44hxb.com/haoXiangBoLoginWeb/haoXiangBoLoginWeb/images/CN/haoXiangBoYL/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 6) {
			img.src = ("http://55hxb.com/haoXiangBoLoginWeb/images/CN/haoXiangBoYL/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 7) {
			img.src = ("http://66hxb.com/haoXiangBoLoginWeb/images/CN/haoXiangBoYL/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 8) {
			img.src = ("http://77hxb.com/haoXiangBoLoginWeb/images/CN/haoXiangBoYL/pc/speed.gif?") + new Date().getTime(); 
		} 
		
//		$("#lotteryLine").show();
		document.getElementById(idName).innerHTML ="测速中...";
	
	}
};

var cacheImgLinklfcp = function(type) {
	window.setTimeout("", 1000);
	for ( var i = 1; i < 10; i++) {
		var idName="line"+i;
		var img = document.createElement('img');
		img.onerror = getErrorLine;
		img.onload =  getLoadLine;
		img.number = i;
		img.time = new Date().getTime();
		
		if (i == 1) {
			img.src = ("http://6fcp1.com/liuFuCPLoginWeb/images/CN/liuFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = ("http://6fcp2.com/liuFuCPLoginWeb/images/CN/liuFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 3) {
			img.src = ("http://6fcp3.com/liuFuCPLoginWeb/images/CN/liuFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 4) {
			img.src = ("http://6fcp4.com/liuFuCPLoginWeb/images/CN/liuFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 5) {
			img.src = ("http://6fcp5.com/liuFuCPLoginWeb/images/CN/liuFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 6) {
			img.src = ("http://6fcp6.com/liuFuCPLoginWeb/images/CN/liuFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 7) {
			img.src = ("http://6fcp7.com/liuFuCPLoginWeb/images/CN/liuFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 8) {
			img.src = ("http://6fcp8.com/liuFuCPLoginWeb/images/CN/liuFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 9) {
			img.src = ("http://6fcp9.com/liuFuCPLoginWeb/images/CN/liuFuCP/pc/speed.gif?") + new Date().getTime(); 
		} 
		
//		$("#lotteryLine").show();
		document.getElementById(idName).innerHTML ="测速中...";
	
	}
};


var cacheImgLindzklfcp = function(type) {
	window.setTimeout("", 1000);
	for ( var i = 1; i < 10; i++) {
		var idName="line"+i;
		var img = document.createElement('img');
		img.onerror = getErrorLine;
		img.onload =  getLoadLine;
		img.number = i;
		img.time = new Date().getTime();
		
		if (i == 1) {
			img.src = ("http://6fcp1.com/liuFuCPLoginWeb/images/CN/liuFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = ("http://6fcp2.com/liuFuCPLoginWeb/images/CN/liuFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 3) {
			img.src = ("http://6fcp3.com/liuFuCPLoginWeb/images/CN/liuFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 4) {
			img.src = ("http://6fcp4.com/liuFuCPLoginWeb/images/CN/liuFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 5) {
			img.src = ("http://6fcp5.com/liuFuCPLoginWeb/images/CN/liuFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 6) {
			img.src = ("http://6fcp6.com/liuFuCPLoginWeb/images/CN/liuFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 7) {
			img.src = ("http://6fcp7.com/liuFuCPLoginWeb/images/CN/liuFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 8) {
			img.src = ("http://6fcp8.com/liuFuCPLoginWeb/images/CN/liuFuCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 9) {
			img.src = ("http://6fcp9.com/liuFuCPLoginWeb/images/CN/liuFuCP/pc/speed.gif?") + new Date().getTime(); 
		} 
		
//		$("#lotteryLine").show();
		document.getElementById(idName).innerHTML ="测速中...";
	
	}
};


var cacheImgLinklongTengcp = function(type) {
	window.setTimeout("", 1000);
	for ( var i = 1; i < 10; i++) {
		var idName="line"+i;
		var img = document.createElement('img');
		img.onerror = getErrorLine;
		img.onload =  getLoadLine;
		img.number = i;
		img.time = new Date().getTime();
		
		if (i == 1) {
			img.src = ("http://longt888.com/longTengCPLoginWeb/images/CN/longTengCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = ("http://longt168.com/longTengCPLoginWeb/images/CN/longTengCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 3) {
			img.src = ("http://ltcp918.com/longTengCPLoginWeb/images/CN/longTengCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 4) {
			img.src = ("http://longt888.cn/longTengCPLoginWeb/images/CN/longTengCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 5) {
			img.src = ("http://longt666.cn/longTengCPLoginWeb/images/CN/longTengCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 6) {
			img.src = ("http://longt168.cn/longTengCPLoginWeb/images/CN/longTengCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 7) {
			img.src = ("http://ltcp918.cn/longTengCPLoginWeb/images/CN/longTengCP/pc/speed.gif?") + new Date().getTime(); 
		} 
//		$("#lotteryLine").show();
		document.getElementById(idName).innerHTML ="测速中...";
	
	}
};


var cacheImgLinkwuBaiCPE = function(type) {
	window.setTimeout("", 1000);
	for ( var i = 1; i < 10; i++) {
		var idName="line"+i;
		var img = document.createElement('img');
		img.onerror = getErrorLine;
		img.onload =  getLoadLine;
		img.number = i;
		img.time = new Date().getTime();
		
		if (i == 1) {
			img.src = ("http://6090333.com/wuBaiCPELoginWeb/images/CN/wuBaiCPE/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = ("http://6080333.com/wuBaiCPELoginWeb/images/CN/wuBaiCPE/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 3) {
			img.src = ("http://6080333.com/wuBaiCPELoginWeb/images/CN/wuBaiCPE/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 4) {
			img.src = ("http://6067333.com/wuBaiCPELoginWeb/images/CN/wuBaiCPE/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 5) {
			img.src = ("http://6071333.com/wuBaiCPELoginWeb/images/CN/wuBaiCPE/pc/speed.gif?") + new Date().getTime(); 
		}
//		$("#lotteryLine").show();
		document.getElementById(idName).innerHTML ="测速中...";
	
	}
};

var cacheImgLinkwuBaiCPD = function(type) {
	window.setTimeout("", 1000);
	for ( var i = 1; i < 10; i++) {
		var idName="line"+i;
		var img = document.createElement('img');
		img.onerror = getErrorLine;
		img.onload =  getLoadLine;
		img.number = i;
		img.time = new Date().getTime();
		
		if (i == 1) {
			img.src = ("http://61500518.com/wuBaiCPDLoginWeb/images/CN/wuBaiCPD/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = ("http://61500378.com/wuBaiCPDLoginWeb/images/CN/wuBaiCPD/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 3) {
			img.src = ("http://61500218.com/wuBaiCPDLoginWeb/images/CN/wuBaiCPD/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 4) {
			img.src = ("http://71500348.com/wuBaiCPDLoginWeb/images/CN/wuBaiCPD/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 5) {
			img.src = ("http://71500378.com/wuBaiCPDLoginWeb/images/CN/wuBaiCPD/pc/speed.gif?") + new Date().getTime(); 
		}
//		$("#lotteryLine").show();
		document.getElementById(idName).innerHTML ="测速中...";
	
	}
};

var cacheImgLinkamjsylc = function(type) {
	window.setTimeout("", 1000);
	for ( var i = 1; i < 10; i++) {
		var idName="line"+i;
		var img = document.createElement('img');
		img.onerror = getErrorLine;
		img.onload =  getLoadLine;
		img.number = i;
		img.time = new Date().getTime();
		
		if (i == 1) {
			img.src = ("https://www.zk8.com/aoMenJinShaYLCLoginWeb/images/CN/aoMenJinShaYLC/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = ("https://www.58648.com/aoMenJinShaYLCLoginWeb/images/CN/aoMenJinShaYLC/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 3) {
			img.src = ("https://www.zk8.com/aoMenJinShaYLCLoginWeb/images/CN/aoMenJinShaYLC/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 4) {
			img.src = ("http://cp9058.com/aoMenJinShaYLCLoginWeb/images/CN/aoMenJinShaYLC/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 5) {
			img.src = ("http://cp9068.com/aoMenJinShaYLCLoginWeb/images/CN/aoMenJinShaYLC/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 6) {
			img.src = ("http://cp9078.com/aoMenJinShaYLCLoginWeb/images/CN/aoMenJinShaYLC/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 7) {
			img.src = ("https://02058.com/aoMenJinShaYLCLoginWeb/images/CN/aoMenJinShaYLC/pc/speed.gif?") + new Date().getTime(); 
		}
//		$("#lotteryLine").show();
		document.getElementById(idName).innerHTML ="测速中...";
	
	}
};

var cacheImgLinkwbcp = function(type) {
	window.setTimeout("", 1000);
	for ( var i = 1; i < 10; i++) {
		var idName="line"+i;
		var img = document.createElement('img');
		img.onerror = getErrorLine;
		img.onload =  getLoadLine;
		img.number = i;
		img.time = new Date().getTime();
		
		if (i == 1) {
			img.src = ("http://www.3707666.com/wuBaiCPLoginWeb/images/CN/wuBaiCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = ("http://www.3708666.com/wuBaiCPLoginWeb/images/CN/wuBaiCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 3) {
			img.src = ("http://www.3709666.com/wuBaiCPLoginWeb/images/CN/wuBaiCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 4) {
			img.src = ("http://www.3710666.com/wuBaiCPLoginWeb/images/CN/wuBaiCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 5) {
			img.src = ("http://www.3720666.com/wuBaiCPLoginWeb/images/CN/wuBaiCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 6) {
			img.src = ("http://www.3750666.com/wuBaiCPLoginWeb/images/CN/wuBaiCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 7) {
			img.src = ("http://3760666.com/wuBaiCPLoginWeb/images/CN/wuBaiCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 8) {
			img.src = ("http://3780666.com/wuBaiCPLoginWeb/images/CN/wuBaiCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 9) {
			img.src = ("http://3790666.com/wuBaiCPLoginWeb/images/CN/wuBaiCP/pc/speed.gif?") + new Date().getTime(); 
		} 
		
//		$("#lotteryLine").show();
		document.getElementById(idName).innerHTML ="测速中...";
	
	}

};

var cacheImgLinkyzcp = function(type) {
	window.setTimeout("", 1000);
	for ( var i = 1; i < 10; i++) {
		var idName="line"+i;
		var img = document.createElement('img');
		img.onerror = getErrorLine;
		img.onload =  getLoadLine;
		img.number = i;
		img.time = new Date().getTime();
		
		if (i == 1) {
			img.src = ("http://yzcp18.com/yingZhongCPLoginWeb/images/CN/yingZhongCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = ("http://yzcp28.com/yingZhongCPLoginWeb/images/CN/yingZhongCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 3) {
			img.src = ("http://yzcp38.com/yingZhongCPLoginWeb/images/CN/yingZhongCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 4) {
			img.src = ("http://yzcp48.com/yingZhongCPLoginWeb/images/CN/yingZhongCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 5) {
			img.src = ("http://yzcp58.com/yingZhongCPLoginWeb/images/CN/yingZhongCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 6) {
			img.src = ("http://yzcp68.com/yingZhongCPLoginWeb/images/CN/yingZhongCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 7) {
			img.src = ("http://yzcp78.com/yingZhongCPLoginWeb/images/CN/yingZhongCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 8) {
			img.src = ("http://yzcp98.com/yingZhongCPLoginWeb/images/CN/yingZhongCP/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 9) {
			img.src = ("http://233220.com/yingZhongCPLoginWeb/images/CN/yingZhongCP/pc/speed.gif?") + new Date().getTime(); 
		}
//		$("#lotteryLine").show();
		document.getElementById(idName).innerHTML ="测速中...";
	
	}
};

var cacheImgLinkxinlcp = function(type) {
	window.setTimeout("", 1000);
	for ( var i = 1; i < 11; i++) {
		var idName="line"+i;
		var img = document.createElement('img');
		img.onerror = getErrorLine;
		img.onload =  getLoadLine;
		img.number = i;
		img.time = new Date().getTime();
		
		if (i == 1) {
			img.src = ("http://xl2020.com/xinLangCPLoginWeb/images/CN/xinLangCaiPiao/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 2) {
			img.src = ("http://xl2019.com/xinLangCPLoginWeb/images/CN/xinLangCaiPiao/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 3) {
			img.src = ("http://xl2018.com/xinLangCPLoginWeb/images/CN/xinLangCaiPiao/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 4) {
			img.src = ("http://xl2017.com/xinLangCPLoginWeb/images/CN/xinLangCaiPiao/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 5) {
			img.src = ("http://xl2015.com/xinLangCPLoginWeb/images/CN/xinLangCaiPiao/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 6) {
			img.src = ("http://xl2014.com/xinLangCPLoginWeb/images/CN/xinLangCaiPiao/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 7) {
			img.src = ("http://xl2013.com/xinLangCPLoginWeb/images/CN/xinLangCaiPiao/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 8) {
			img.src = ("http://xl2012.com/xinLangCPLoginWeb/images/CN/xinLangCaiPiao/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 9) {
			img.src = ("http://xl2011.com/xinLangCPLoginWeb/images/CN/xinLangCaiPiao/pc/speed.gif?") + new Date().getTime(); 
		} else if (i == 10) {
			img.src = ("http://xl2010.com/xinLangCPLoginWeb/images/CN/xinLangCaiPiao/pc/speed.gif?") + new Date().getTime(); 
		}
//		$("#lotteryLine").show();
		document.getElementById(idName).innerHTML ="测速中...";
	
	}
};