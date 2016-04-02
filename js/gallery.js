// Javascript Document
(function(){
console.log("gallery working");
// variables
var photos =["mov1", "mov2", "mov3", "mov4", "mov5", "mov6"];
var captions = ["ArmyofDarkness", "BettleJuice","BlackHawkDown", "Cloudy", "DespicableMe", "Dredd"]; 
var el = document.querySelector("#galleryList"); 
var anchors = el.querySelectorAll("a"); 
var guitar = document.querySelector("#Movies");
var caption = document.querySelector("#caption");

// functions
function swapImage(e) {
      e.preventDefault(); 
    var thisImg = "images/"+photos[e.target.id]+".jpg";  
    guitar.src = thisImg;
 }

 function swapText(e)
 {
	 e.preventDefault();
     var thisText = captions[e.target.id];
     caption.innerHTML = thisText;
     console.log(captions[e.target.id]);
 }

// listeners 
for(var i = 0; i<anchors.length ; i++)
{
     anchors[i].addEventListener("click", swapImage, false);
     anchors[i].addEventListener("click", swapText, false); 
}


})();