x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
var apple = "";
var speak_data = "";
var to_number = "";
draw_apple = "set";


var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
   apple = loadImage('apple.png');
}
function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
function setup() {
  canvas = createCanvas(900, 600);
}
recognition.onresult = function(event){
  var to_number = Number(content);

  console.log(event);

  var content = event.results[0][0].transcript;

  if(Number.isInteger(to_number)){
    document.getElementById("status").innerHTML = "System is listening please speak";  
  }

}

function draw() {
  if(draw_apple == "set")
  {
    
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    for(var i = 1; i <= to_number; i++)
    {
      x = Math.floor(Math.random()*700);
      y = Math.floor(Math.random()*400);
      image(apple, x, y, 50, 50);
    } 
    draw_apple = "";
  }
}
function speak(){
  var synth = window.speechSynthesis;

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

  speak_data = "";
}

 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
 

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

   

}






