var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

for(var i=0;i<1000;i++){
   ctx.strokeStyle ="#" +  Math.floor(Math.random()*0xFFFFFF).toString(16);
   ctx.beginPath();
   ctx.arc(Math.floor(Math.random()*(100)+1) , Math.floor(Math.random()*(80)+1), Math.floor(Math.random()*(20)+1), 0 ,2*Math.PI);
   ctx.stroke();
}