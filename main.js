x = 0;
y = 0;

screen_width = 0;
screen_height = 0;
draw_apple = "";
apple = "";
speak_data = "";
to_number = 0;

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload()
{
  apple = loadImage("apple.png")
}

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak"; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var content = event.results[0][0].transcript;

   document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content;
   to_numeber = Number(content);
   if(Number.isInteger(to_number))
    {
      document.getElementById("status").innerHTML = "Started drawing apples";
      draw_apple = "set";
    }else
    {
      document.getElementById("status").innerHTML = "The speech has not recognized the number";
    }
}

function setup() {
  canvas = createCanvas(900, 600);
}

function draw() {
 if (draw_apple == "set")
 {
  for( var i = 1; i <= to_number ;i++)
  {
    x = Math.floor(Math.random()*900);
    y = Math.floor(Math.random()*600);
    Image(apple,x,y,50,50);

  }
  document.getElementById("status").innerHTML = to_number + "Apples Drawn";
  speak_data = to_number+"Apples Drawn"; 
  speak();
  draw_apple = "";
 }
}

function speak()
{
  var synth = window.speechSynthesis;
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  speak_data="";
}














