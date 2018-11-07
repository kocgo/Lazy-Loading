// Execute Once When Window Loaded
window.onload = lazyLoad;

// Executes Throttle Function Once (which returns another function)
window.onscroll = throttle(function (){
    lazyLoad();
},300);

window.onresize = throttle(function (){
    lazyLoad();
},300);

// Throttle Scroll Event
function throttle(callback, limit){
    let throttling = false;
    return function(){
        // UNTHROTTLED PART!
        if(!throttling){
            callback.call();
            throttling = true;
            setTimeout(function (){
                throttling = false;
            }, limit);
        }
    }
}

function lazyLoad(){
    //Select All Images with "lazy" Class
    let lazyImages = document.querySelectorAll("img.lazy");

    //Iterate Through the Array to change SRC with DATA-SRC
    for(let i=0; i<lazyImages.length; i++){

        //Check if the Image is in Viewport
        if(elementInViewport(lazyImages[i])){
            lazyImages[i].setAttribute('src', lazyImages[i].getAttribute('data-src'));
            lazyImages[i].classList.remove('lazy');
        }
    }
}

// This function is checking if the element is in viewport
function elementInViewport(el) {
    let rect = el.getBoundingClientRect();

    return (
        rect.top <= (window.innerHeight - 155) &&
        rect.right <= (window.innerWidth)
    )
}
