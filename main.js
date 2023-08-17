var mouseevent="";

var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");



canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e){
    color= document.getElementById("cor").value;
    largura = document.getElementById("largura").value;
    mouseevent="mousedown";

}

canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e){
mousex=e.clientX - canvas.offsetLeft;
mousey=e.clientY - canvas.offsetTop;

if(mouseevent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth = largura;
    ctx.arc(mousex,mousey,40,0,2*Math.PI);
    ctx.stroke(); 
}
}
canvas.addEventListener("mouseup", mymouseup)

function mymouseup(e){
    mouseevent="mouseup";
}

function limparcanvas(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height)
}