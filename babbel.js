var images=["medias/carousel/carousel1.jpg",
            "medias/carousel/carousel2.jpg",
            "medias/carousel/carousel3.jpg",
            "medias/carousel/carousel4.jpg"];
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