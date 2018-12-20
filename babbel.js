var images=["/home/laura/Documents/Simplon/Projets/p2_babbel/p2_babbel/medias/carousel/carousel1.jpg","/home/laura/Documents/Simplon/Projets/p2_babbel/p2_babbel/medias/carousel/carousel2.jpg","/home/laura/Documents/Simplon/Projets/p2_babbel/p2_babbel/medias/carousel/carousel3.jpg","/home/laura/Documents/Simplon/Projets/p2_babbel/p2_babbel/medias/carousel/carousel4.jpg"];

i=0;
var next=function(){
    var slider=document.getElementById("slider");
    i++;
    if (i<images.length){
        slider.src=images[i]
        }
    else{
        i=0
        slider.src=images[i] 
    };
};

var prev=function(){
    var slider=document.getElementById("slider");
    i--;
    if (i >= 0){
        slider.src=images[i]
        }
    else{
        i=images.length-1
        slider.src=images[i]
    };
};