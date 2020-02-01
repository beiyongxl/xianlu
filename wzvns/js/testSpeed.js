    var save=""; 
	var tim=1;  
	setInterval("tim++",10);  
	var b=1;  
	var autourl=new Array();  
	autourl[1]="http://stst.7900005.com";
	autourl[2]="http://stst.7900005.com";
	autourl[3]="http://stst.7900005.com";
	autourl[4]="http://stst.7900005.com";
	autourl[5]="http://stst.7900005.com";
	autourl[6]="http://stst.7900005.com";
	autourl[7]="http://stst.7900005.com";
	autourl[8]="http://stst.7900005.com";
	autourl[9]="http://stst.7900005.com";
 
	function auto(url,b){ 
		$("#sudu"+b).val(tim+"ms");
	}  
	function run(){  
		for(var i=1;i<autourl.length;i++){  
			document.write("<img name=\"suduname\" src=\""+autourl[i]+"/"+"\" width=\"1\" height=\"1\" onerror=\"auto('http://"+autourl[i]+"',"+i+")\" style=\"display:none\" />");
		} 
	}  
	run();  
	document.write(save); 
