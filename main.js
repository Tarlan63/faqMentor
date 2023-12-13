let accordionBodyStatus = [];
let accordianImageStatus = [];

let accordionBodies = document.getElementsByClassName("accordion-body");

let accordionImages = document.querySelectorAll(".accordion-button img");

function initializeStatus() {

     for (let i=0 ; i < accordionBodies.length; i++) {
        accordionBodyStatus[i] = false;
        accordianImageStatus[i] = false;
     }


}

initializeStatus();

function show(event) {

    let imageIndex = Array.from(accordionImages).indexOf(event.target);
    
    
    if (imageIndex >= 0 && imageIndex < accordionBodies.length) {
        let currentBody = accordionBodies[imageIndex];
        let currentImage = accordionImages[imageIndex];
       
        accordionBodyStatus[imageIndex] = !accordionBodyStatus[imageIndex];
        let displayValue = accordionBodyStatus[imageIndex] ? "block" : "none";
        currentBody.style.display = displayValue;

        accordianImageStatus[imageIndex] = !accordianImageStatus[imageIndex]
        let imageSrc = accordianImageStatus[imageIndex] ? "./assets/images/icon-minus.svg" : "./assets/images/icon-plus.svg"
        currentImage.src = imageSrc;
        
    }
    

}



for ( let i=0; i < accordionImages.length; i++){
    accordionImages[i].addEventListener("click", show);
    
}
