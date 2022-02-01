canvas= document.getElementById("mycanvas");
ctx= canvas.getContext("2d");
mouseEvent = "empty";
width = 3;
color= "red";
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent= "mouseLeave";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUp";
}


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    width=document.getElementById("widthchanger").value;
    color=document.getElementById("colorchanger").value;
    Radius=document.getElementById("radius").value;
    
    
    mouseEvent="mouseDown"

}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    cpx=e.clientX-can.offsetLeft;
    cpy=e.clientY-can.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath()
        ctx.lineWidth= width;
        ctx.strokeStyle= color;
        ctx.arc(cpx,cpy,Radius,0,2*Math.PI)
        ctx.stroke()
    
    }
    
}
