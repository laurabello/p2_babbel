var images=["medias/carousel/carousel1.jpg",
    "medias/carousel/carousel2.jpg",
    "medias/carousel/carousel3.jpg",
    "medias/carousel/carousel4.jpg"];

i=0;
//document.getElementById("number").innerHTML = i + 1;

var next=function(){
    var slider=document.getElementById("slider");
    i++;
    document.getElementById("number").innerHTML = i + 1;
    if (i<images.length){
        slider.src=images[i]
        }
    else{
        i=0
        document.getElementById("number").innerHTML = i + 1;
        slider.src=images[i]
    };
};

var prev=function(){
    var slider=document.getElementById("slider");
    i--;
    document.getElementById("number").innerHTML = i + 1;
    if (i >= 0){
        slider.src=images[i]
        }
    else{
        i=images.length-1
        document.getElementById("number").innerHTML = i + 1;
        slider.src=images[i]
    };
};

/*

var elem = document.getElementById("animate");
var width = elem.offsetWidth;
var widthPic = elem.querySelectorAll('img');
document.queryAll
alert(widthPic);
var pos = 0;

function leftMove() {
  var elem = document.getElementById("animate");
  var width = document.getElementById('animate').offsetWidth;

  alert(widthPic);
  var pos = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == width) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.left = pos + "px"; 
    }
  }
}

function rightMove() {
  var elem = document.getElementById("animate");
  var width = document.getElementById('animate').offsetWidth;
  var pos = width/5;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos--; 
      elem.style.left = pos + "px"; 
    }
  }
}


function puce() {

};*/