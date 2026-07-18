let images=document.querySelectorAll(".gallery img")
let lightbox=document.getElementById("lightBox")
let lightboxImage=document.querySelector(".lightBoxImage img")

function filterSelection(category){

    const items=document.querySelectorAll(".gallery .image");

    items.forEach(item=>{

        if(category==="all"){

            item.classList.remove("hide");

        }

        else if(item.classList.contains(category)){

            item.classList.remove("hide");

        }

        else{

            item.classList.add("hide");

        }

    });

}

function showImage(){
    lightboxImage.src=images[current].src
}

//Activating LightBox after click on Image
current=0;
Array.from(images).forEach((img,index) => {
    img.addEventListener("click",() => {
         current=index;
        lightbox.style.display="flex";
        showImage();
    }
    )
}
)

//Adding Event Listener to close
let close=document.querySelector(".close")
close.addEventListener("click",() => {
    lightbox.style.display="none";
}
)

//Adding Event Listener to the Previous Button
let previous=document.querySelector(".previous")
previous.addEventListener("click",() => {
    if(current===0){
        current=images.length-1;
    }
    else {
        current--;
    }
    showImage();
}
)

//Adding Event Listener to the Next Button
let next=document.querySelector(".next");
next.addEventListener("click",() => {
    if(current==images.length-1){
        current=0;
    }
    else{
        current++;
    }
    showImage();
}
)