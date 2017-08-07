console.log('Loaded!');
var element=document.getElementById('main');
element.innerHTML='Cool';
var image=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    image.style.marginLeft=marginLeft+'px';
}
image.onclick=function(){
   var interval= setInterval(moveRight,100);
};

var c=0;
var button=document.getElementById('counter');
button.onclick=function(){
  c=c+1;
  var span=document.getElementById('count');
  span.innerHTML=c.toString();
};