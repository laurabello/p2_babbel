<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cec
var images=["medias/carousel/carousel1.jpg",
            "medias/carousel/carousel2.jpg",
            "medias/carousel/carousel3.jpg",
            "medias/carousel/carousel4.jpg"];
<<<<<<< HEAD
var slider = document.getElementById("slider")
var i = 0;

var next=function(){
    i++;
    if (i >= images.length){
        i = 0
        }

    slider.src=images[i]
};

var prev=function(){
    i--;
    if (i < 0){
        i = slider.length - 1
        }
    slider.src=images[i]
};

(function(){
    var basenode = document.getElementById("listimages");
    for(let j = 0; j < images.length; j++){
        //Creation of node for li
        let node = document.createElement("li");

        //attach li to the list
        basenode.appendChild(node);
        node.innerHTML = "."

        node.addEventListener("click", function(){
            slider.src = images[j];
        })
    }
})()


setInterval(() => next() , 5000);
=======
var images=["medias/carousel/carousel1.jpg","medias/carousel/carousel2.jpg","medias/carousel/carousel3.jpg","medias/carousel/carousel4.jpg"];
=======
var totalitems = images.length
>>>>>>> origin/cec


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
<<<<<<< HEAD
};
>>>>>>> cec
=======
    elnumSlider.innerHTML =  (i+1) + " / " + totalitems
};
>>>>>>> origin/cec
