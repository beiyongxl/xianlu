
var save="";
var tim=1;
setInterval("tim++",10);
var b=1;
var autourl=new Array();
autourl[1]="http://vn4411.com";autourl[2]="http://www.997765.com";autourl[3]="http://vn4477.com";autourl[4]="http://vn4488.com";autourl[5]="http://vn4499.com";autourl[6]="http://vn4499.com";
function auto(url,b){
    $("#sudu"+b).html(tim+"ms");
}
function run(){
    for(var i=1;i<autourl.length;i++){
        document.write("<img name=\"suduname\" src=\""+autourl[i]+"/"+"\" width=\"1\" height=\"1\" onerror=\"auto('"+autourl[i]+"',"+i+")\" style=\"display:none\" />");
    }
}
run();
document.write(save);
