var folder = "images/slideshow/";
var filename_pattern = "slide_X.jpg";

window.onload = function() {

    var marquees = document.getElementsByClassName('marquee-span');
    

    for (let id in marquees) {
        const marquee = marquees[id];
        for (let i = 0; i < 10; i++) {
            const filename = filename_pattern.replace('X', i);
    
            var filepath = folder + filename;
    
            var div = document.createElement("div");
            div.classList.add("marquee-item");
    
            var img = document.createElement("img");
            img.src = filepath;
            img.alt = `clock_img_${i}`  /* For good practice */
            
            div.appendChild(img);
    
    
            try{
                marquee.appendChild(div);
            } catch {
                console.log("Error that shouldn't exist");
                break;
            }
        }
    }

    setScrollHeight();

    
}


var setScrollHeight = function() {
    var scroll = document.getElementById("scrollSpecs");
    var parent = scroll.parentNode;
    const parentHeight = parent.offsetHeight;
    scroll.style.setProperty("--height", (80 / 100 * parentHeight).toString() + "px");
    console.log(20 / 100 * parentHeight);
}

