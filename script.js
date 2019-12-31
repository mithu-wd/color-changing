document.onmousemove=function(){
    var x1=event.clientX;
    var y1=event.clientY;
    
    var x2=window.innerWidth;
    var y2=window.innerHeight;

var h=parseInt(y1/window.innerHeight*100);
var w=parseInt(x1/window.innerWidth*100)

var G=150;
var B=h*2.5;
var R=w*2.5;
document.getElementById("mouse").textContent=("Position "+x1+" "+y1);



document.getElementById("main").style.backgroundColor=
"rgb("+R+","+
G+","+B+")";
}







document.onmouseleave=function()
{
    document.getElementById("mouse").textContent=("Position 0 0");
    document.getElementById("main").style.backgroundColor="white"

}