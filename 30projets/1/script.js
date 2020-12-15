// document.querySelectorAll(`div[data-key="${}"]`)

// const keys = Array.from(document.querySelectorAll(".song-div"))
// keys.forEach(key => keyListener(key))

// function keyListener(key) {

// }


window.addEventListener('keydown', playMusic)

const musics = document.querySelectorAll("audio");

function playMusic(e) {
    let div = document.querySelector(`div[data-key="${e.keyCode}"]`) 
    if (div === null) return
    let music = document.querySelector(`audio[data-key="${e.keyCode}"]`) 
    stopMusics()
    music.play()
    div.classList.add("playing")
}

function stopMusics() {
    musics.forEach(music => music.pause());
    musicBoxes.forEach(box => box.classList.remove("playing"));

}

// stop button
const stop = document.querySelector(".stop");
stop.addEventListener('click', () => {
  stopMusics()
});


const musicBoxes = Array.from(document.querySelectorAll(".songbox"));
musicBoxes.forEach(box => box.addEventListener('click', () => {
    let music = document.querySelector(`audio[data-key="${box.attributes[1].value}"]`) 
    stopMusics()
    music.play()
    box.classList.add("playing")
  })
);
