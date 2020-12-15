// document.querySelectorAll(`div[data-key="${}"]`)

// const keys = Array.from(document.querySelectorAll(".song-div"))
// keys.forEach(key => keyListener(key))

// function keyListener(key) {

// }
const lyricsContents = Array.from(document.querySelectorAll(".lyrics"));
const filterBox = document.querySelector(".filter");
const musicBoxes = Array.from(document.querySelectorAll(".songbox"));
const musics = document.querySelectorAll("audio");
const stop = document.querySelector(".stop");
const notice = document.querySelector(".notice");


function playMusic(e) {
    let div = document.querySelector(`div[data-key="${e.keyCode}"]`) 
    if (div === null) return
    let music = document.querySelector(`audio[data-key="${e.keyCode}"]`) 
    stopMusics()
    music.play()
    div.classList.add("playing")
    notice.classList.add("hidden")
    let content = document.querySelector(`div[lyrics-key="${e.keyCode}"]`) 
    content.classList.add("display")
    filterBox.classList.add("stretch")
};


function stopMusics() {
    musics.forEach(music => music.pause());
    musicBoxes.forEach(box => box.classList.remove("playing"));
    filterBox.classList.remove("stretch")
    lyricsContents.forEach(content => content.classList.remove("display"))
    notice.classList.remove("hidden")
};

// stop button
stop.addEventListener('click', () => {
  stopMusics()
});

// event play music on click
musicBoxes.forEach(box => box.addEventListener('click', () => {
    let music = document.querySelector(`audio[data-key="${box.attributes[1].value}"]`) 
    stopMusics()
    music.play()
    box.classList.add("playing")
    let content = document.querySelector(`div[lyrics-key="${box.attributes[1].value}"]`) 
    content.classList.add("display")
    setTimeout(displayLyric, 400, content)
    filterBox.classList.add("stretch")
    notice.classList.add("hidden")
  })
);

function displayLyric(content) {
  content.classList.add("delayed-display")
};

window.addEventListener('keydown', playMusic);
