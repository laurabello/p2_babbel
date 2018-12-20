var images=["medias/carousel/carousel1.jpg","medias/carousel/carousel2.jpg","medias/carousel/carousel3.jpg","medias/carousel/carousel4.jpg"];


var elnumSlider = document.getElementById("numslider")
elnumSlider.innerHTML = "1 / " + totalitems 

var slider=document.getElementById("slider");

var i=0;
var next=function(){
    i++;
    if (i<images.length){
        slider.src=images[i]
        }
    else{
        i==0
    };
    elnumSlider.innerHTML =  (i+1) + " / " + totalitems
};

var prev=function(){
    i--;
    if (i<images.length){
        slider.src=images[i]
        }
    else{
        i==0
    };
};





// total num slider
// i=0;
// totalitems=0
// var totalitems=function(){
//     var slider=document.getElementById("slider");
//     if (i=slider.length){
//         totalitems.innertext=[i];
//     }
//     else {
//         i==0
//     }
// };
// totalitems.innertext = "totalslider";


// for (i=0; i < slider.length; i++);
