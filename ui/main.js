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

var counter=0;
var button=document.getElementById('abc');
button.onclick=function(){
  counter=counter+1;
  var span=document.getElementById('c');
  span.innerHTML=counter.toString();
};
