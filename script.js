for (var i = 0; i < 12; i++){
  $('.drumButtons').append("<img src='assets/button.png' id='drum"+i+"' class='drums' onclick='play("+i+")'/>");
  $('.soundLinks').append( "<audio data-key='65' class='sounds' src='assets/"+i+".wav'></audio>")
};
   function play(i){
   	   $('.sounds')[i].pause();
       $(".sounds")[i].currentTime = 0
 	   $(".sounds")[i].play();
       $(".sounds")[i].volume = 1;
  };