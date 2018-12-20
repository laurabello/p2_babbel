var images=[
    "/home/aymeric/Desktop/remplacent/babbeltest/p2_babbel/medias/carousel/carousel1.jpg","/home/aymeric/Desktop/remplacent/babbeltest/p2_babbel/medias/carousel/carousel2.jpg","/home/aymeric/Desktop/remplacent/babbeltest/p2_babbel/medias/carousel/carousel3.jpg","/home/aymeric/Desktop/remplacent/babbeltest/p2_babbel/medias/carousel/carousel4.jpg"];


i=0;
var next = function() {

    var slider=document.getElementById("slider");
    i++;
    if (i < images.length){
        slider.src=images[i];
    }
    else{
        slider.src=images[i];
        i=0;
    };
};

var prev = function(){
    var slider=document.getElementById("slider");
    i--;
    if (i < images.length) {
        slider.src=images[i]
        }
    if (i=-1){
        slider.src=images[i];
        i=5
    }
    else{
        slider.src=images[i];
        i = images.length-1;
    };
}