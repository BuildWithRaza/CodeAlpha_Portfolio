let hamburger=document.querySelector(".hamburger")
let navclose=document.querySelector(".nav-close")
let navul=document.querySelector("nav ul")

//adding event listener to hamburger
hamburger.addEventListener("click",() => {
    navul.style.transform="translate(15px,-15px)"
    hamburger.style.display="none";
    navclose.style.display="block";
}
)

//adding event listener to close the nav
navclose.addEventListener("click",() => {
    navul.style.transform="translate(120%,-20px)";
    navclose.style.display="none";
    hamburger.style.display="block";
}
)

let lightbox=document.getElementById("lightBox")
let lightboxResume=document.querySelector(".lightBoxResume")
let lightboxResumePdf=document.querySelector(".lightBoxResume iframe")
let lightboxCertificates=document.querySelector(".lightBoxCertificates")
let lightboxCertificatesPdf=document.querySelector(".lightBoxCertificates img")
let certificates=document.querySelectorAll(".certificates img")


let nav=document.querySelector("nav")

let previous=document.querySelector(".previous")
let next=document.querySelector(".next");

Array.from(certificates).forEach(element => {
    console.log(element.src);
    
});



//adding listener to the view resume button
let viewResume=document.querySelector(".viewResumeButton button");
viewResume.addEventListener("click",() => {
    lightbox.style.display="flex";
    nav.style.zIndex="0";
    lightboxResume.classList.remove("hide");
    console.log('resume');
    
}
)

//show certificate function
let index=0;
function showCertificate(){
    lightboxCertificatesPdf.src=certificates[index].src
}

//adding event listener to the viewCertificate button
let viewCertificate=document.querySelector(".viewCertificatesButton button");
viewCertificate.addEventListener("click",() => {
    nav.style.zIndex="0";
    lightboxCertificates.classList.remove("hide")
    index=0;
    showCertificate();
    lightbox.style.display="flex";
    console.log('certificate');
    
}
)



//Adding Event Listener to close the lightBox
let close=document.querySelector(".close")
close.addEventListener("click",() => {
    lightbox.style.display="none";
    lightboxResume.classList.add("hide")
    lightboxCertificates.classList.add("hide")
     nav.style.zIndex="10";
}
)

//Adding Event Listener to the Previous Button

previous.addEventListener("click",() => {
    if(index===0){
        index=certificates.length-1;
    }
    else {
        index--;
    }
    setTimeout(() => {
        showCertificate();
    }, 300);
    
}
)

//Adding Event Listener to the Next Button

next.addEventListener("click",() => {
    if(index==certificates.length-1){
        index=0;
    }
    else{
        index++;
    }
    setTimeout(() => {
        showCertificate();
    }, 300);
}
)