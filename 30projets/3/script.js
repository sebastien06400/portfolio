const folder = document.querySelector(".folder")
let pic1 = document.querySelector(".pic1")
let pic2 = document.querySelector(".pic2")
let fileClicked = false
let mousex = 0;
let mousey = 0;
let xx = 0;
let yy = 0;
let onFolder = false;
let ord = 0;
let abs = 0;
const enfant = document.querySelector(".enfant")
const papa = document.querySelector(".parent")
const exit = document.querySelector(".exit")



window.addEventListener("click", (e) => {
    if (fileClicked === true) {
        window.removeEventListener("mousemove", fileMoving);
        fileClicked = false;
        if (onFolder === true) {
            // console.log(e.target.className)
            e.target.parentNode.removeChild(e.target);
            enfant.insertAdjacentHTML("beforeend", `<img class="${e.target.className}" src=${e.target.currentSrc} alt="photo" width="100px"  data-abs=${e.target.dataset.abs} data-ord=${e.target.dataset.ord}>`)
            folder.style.backgroundColor = "transparent";
            onFolder = false;
        } 
    }
    else if (fileClicked === false && e.target.classList.value.split(' ').includes("movable")) {
        fileClicked = true;
        mousex =  e.screenX;
        mousey =  e.screenY;
        drag(e);    
    };
});


function drag(event) {
    if (fileClicked === true) {
        xx = event.x - event.target.offsetWidth;
        yy = event.y - event.target.offsetHeight;

        ord = event.target.dataset.ord
        abs = event.target.dataset.abs

        // if (event.target.className.split(" ").includes("folder")) {
            window.addEventListener("mousemove", fileMoving);
        // }

    };
};

function fileMoving(e) {
    document.documentElement.style.setProperty(abs, yy + e.screenY - mousey + 25 + "px");
    document.documentElement.style.setProperty(ord, xx + e.screenX - mousex + 50 + "px");
    if (e.target.classList.contains("picture") && e.x < folder.x + 50 && e.x > folder.x - 50 && e.y < folder.y + 50 && e.y > folder.y - 50) {
        folder.style.backgroundColor = "red";
        onFolder = true;
    }
    else {
        folder.style.backgroundColor = "transparent";
        onFolder = false;
    };
    console.log(folder.x)
    console.log(e.x)
};


pic1.addEventListener("dblclick", aggrandir)
pic2.addEventListener("dblclick", aggrandir)
folder.addEventListener("dblclick", openFolder)



function aggrandir(e) {
    if (e.target.width === 100) {
        console.log("big")
        e.target.width = 500
        document.documentElement.style.setProperty(e.target.dataset.ord, `${e.target.x-200}px`);
        document.documentElement.style.setProperty(e.target.dataset.abs, `${e.target.y-70}px`);
    }
    else if (e.target.width === 500) {
        e.target.width = 1000
        document.documentElement.style.setProperty(e.target.dataset.ord, `${e.target.x-250}px`);
        document.documentElement.style.setProperty(e.target.dataset.abs, `${e.target.y-110}px`);
    }
    else if (e.target.width === 1000) {
        e.target.width = 100
        document.documentElement.style.setProperty(e.target.dataset.ord, `${e.target.x+450}px`);
        document.documentElement.style.setProperty(e.target.dataset.abs, `${e.target.y+180}px`);
    }
}

let level = 0;

function openFolder() {
    papa.classList.toggle("hidden")
    enfant.classList.toggle("hidden")
    level = -1;
    pic1 = document.querySelector(".pic1")
    pic2 = document.querySelector(".pic2")
    pic1.addEventListener("dblclick", aggrandir)
    pic2.addEventListener("dblclick", aggrandir)
}

exit.addEventListener("click", () => {
    papa.classList.toggle("hidden")
    enfant.classList.toggle("hidden")
    level = 0;
    pic1 = document.querySelector(".pic1")
    pic2 = document.querySelector(".pic2")
    pic1.addEventListener("dblclick", aggrandir)
    pic2.addEventListener("dblclick", aggrandir)
    folder.addEventListener("dblclick", openFolder)
})