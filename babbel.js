var images=["medias/carousel/carousel1.jpg","medias/carousel/carousel2.jpg","medias/carousel/carousel3.jpg","medias/carousel/carousel4.jpg"];

var i=0;

var next=function(){
    var slider=document.getElementById("slider");
    i=i+1
    if(i == 4){
        i = 0
    }
    slider.src = images[i]
};

var prev=function(){
    var slider=document.getElementById("slider");
    i=i-1
    if(i <0 ){
        i=3
    }
    slider.src = images[i]
};