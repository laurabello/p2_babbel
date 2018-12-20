var images=["medias/carousel/carousel1.jpg","/medias/carousel/carousel2.jpg","medias/carousel/carousel3.jpg","medias/carousel/carousel4.jpg"];

i=0;
var next=function(){
    var slider=document.getElementById("slider");
    i++;
    if (i<images.length){
        slider.src=images[i];
        }
    else{
        i==0;
    }
};

i=0;
var prev=function(){
    var slider=document.getElementById("slider");
    i--;
    if (i<images.length){
        slider.src=images[i];
        }
    else{
        i==0;
    }
};