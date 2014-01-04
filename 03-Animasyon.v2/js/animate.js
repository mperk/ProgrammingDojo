(function(){

  window.requestAnimFrame = (function(){ 
    return  window.requestAnimationFrame       ||  
            window.webkitRequestAnimationFrame ||  
            window.mozRequestAnimationFrame    ||  
            window.oRequestAnimationFrame      ||  
            window.msRequestAnimationFrame     ||  
            function( callback ){ 
              window.setTimeout(callback, 1000 / 60); 
            }; 
  })(); 


   var x = 1; 
  function drawIt() { 
      window.requestAnimFrame(drawIt); 
      var aniCanvas = document.getElementById('canvas'); 
      var ani = aniCanvas.getContext('2d');
      //ani.clearRect(0,0,aniCanvas.width,aniCanvas.height); 
	  ani.beginPath();
	  ani.clearRect(19+(x-4),19,62,62);
	  ani.closePath();
      ani.fillStyle = "green"; 
      //ani.fillRect(x,100,200,100); 
	  ani.beginPath();
	  ani.arc(50+x,50,30,0,Math.PI*2,true);
	  ani.closePath();
	  ani.fill();
      x+=5; 
	  if(x>550)
	  	{
			ani.clearRect(19+(x-4),19,62,62);
			x=1;
			}
  } 
  window.requestAnimFrame(drawIt); 
})();