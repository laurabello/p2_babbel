var images=["medias/carousel/carousel1.jpg",
            "medias/carousel/carousel2.jpg",
            "medias/carousel/carousel3.jpg",
            "medias/carousel/carousel4.jpg"];
var totalitems = images.length


var elnumSlider = document.getElementById("numslider")
elnumSlider.innerHTML = "1 / " + totalitems 

var slider=document.getElementById("slider");

var i=0;
var next=function(){
    i=i+1
    if(i == 4){
        i = 0
    }
    slider.src = images[i]
    elnumSlider.innerHTML =  (i+1) + " / " + totalitems
};

var prev=function(){
    i=i-1
    if(i <0 ){
        i=3
    }
    slider.src = images[i]
    elnumSlider.innerHTML =  (i+1) + " / " + totalitems
};