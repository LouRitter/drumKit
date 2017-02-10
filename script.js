var keys=[81,87,69,82,65,83,68,70,90,88,67,86];
var letters=['Q','W','E','R','A','S','D','F','Z','X','C','V'];
for (var i = 0; i < 12; i++){
  $('.drumButtons').append("<div class='buttons'><img src='assets/button.png' id='drum"+i+"' class='drums' onclick='play("+i+")'/><p>"+letters[i]+
  	"</p></div>");
  $('.soundLinks').append( "<audio data-key='"+keys[i]+"' class='sounds' src='assets/"+i+".wav'></audio>")
};
   function play(i){
   	   $('.sounds')[i].pause();
       $(".sounds")[i].currentTime = 0
 	   $(".sounds")[i].play();
       $(".sounds")[i].volume = 1;
  };

   function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  }
  window.addEventListener('keydown', playSound);

 
