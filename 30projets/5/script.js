const allPannels = document.getElementsByClassName("pannel")
let openedPannel = document.getElementsByClassName("open")
let openedRightPannel = document.getElementsByClassName("open-right")


Array.from(allPannels).forEach(pannel => { pannel.addEventListener("mouseover", (e) => openPannel(e))});
Array.from(allPannels).forEach(pannel => { pannel.addEventListener("click", (e) => openPannel(e))});


function openPannel(e) {
    openedPannel = document.getElementsByClassName("open")
    openedRightPannel = document.getElementsByClassName("open-right")
    if (openedPannel.length !== 0) {
        console.log(openedPannel)
        openedPannel[0].classList.toggle("open")
        openedRightPannel[0].classList.toggle("open-right")
    }

    if(e.target.classList.contains("left")) {
        e.target.classList.toggle("open")
        e.target.nextElementSibling.classList.toggle("open-right")
    }
    else {
        e.target.classList.toggle("open-right")
        e.target.previousElementSibling.classList.toggle("open")
    }
}