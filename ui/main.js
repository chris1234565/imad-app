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





var button=document.getElementById('counter');

button.onclick=function(){
var request=new XMLHTTPRequest();

request.onreadystatechange=function(){
  if(request.readystate===XMLHTTPRequest.DONE){
      if(request.status===200){
          var counter=request.responseText;
          var sp=document.getElementById('count');
          sp.innerHTML=counter.toString();
      }
  }  
};
request.open('GET','http://celestianc73.imad.hasura-app.io',true);
request.send(null);
    
};


