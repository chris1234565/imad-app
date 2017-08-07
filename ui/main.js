console.log('Loaded!');
var element=document.getElementById('main');
element.innerHTML='Cool';
var image=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    image.style.marginLeft=marginLeft+'px';
}
image.onclick=function(){
   var interval= setInterval(moveRight,50);
};

var c=0;
var button=document.getElementById('chris_counter');
button.onclick=function(){
  c=c+1;
  var span=document.getElementById('c_count');
  span.innerHTML=c.toString();
};