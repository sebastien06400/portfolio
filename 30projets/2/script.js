const hour = document.querySelector(".hour")
const min = document.querySelector(".min")
const sec = document.querySelector(".tick")
const audio = new Audio('alarme.mp3');
const alarmButton = document.querySelector(".alarm-button")
let stopAlarm = false;
let alarme = document.querySelector(".alarm-input")


function tick() {
  console.log("ok")

  const now = new Date();

  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  const hours = now.getHours()

  sec.style.transform = `rotate(${seconds*6+270}deg)`
  min.style.transform = `rotate(${minutes*6+270 + seconds/10}deg)`
  hour.style.transform = `rotate(${hours*30+270 + minutes/2}deg)`

  if (alarme.value.substring(0,2) == now.getHours() && alarme.value.substring(3,5) == now.getMinutes() && stopAlarm == false) {
    audio.play();
    alarmButton.innerHTML="STOP";
  }
}


setInterval(tick, 1000)


const hebreux = document.querySelector(".hebreux")
const occidental = document.querySelector(".occidental")
const arabe = document.querySelector(".arabe")
const chinois = document.querySelector(".chinois")
const coreen = document.querySelector(".coreen")


const a1 = document.querySelector(".a1")
const a2 = document.querySelector(".a2")
const a3 = document.querySelector(".a3")
const a4 = document.querySelector(".a4")
const a5 = document.querySelector(".a5")
const a6 = document.querySelector(".a6")
const a7 = document.querySelector(".a7")
const a8 = document.querySelector(".a8")
const a9 = document.querySelector(".a9")
const a10 = document.querySelector(".a10")
const a11 = document.querySelector(".a12")
const a12 = document.querySelector(".a13")

hebreux.addEventListener("click", (event) => trans(enHebreux,event))
occidental.addEventListener("click", (event) => trans(enOccidental,event))
arabe.addEventListener("click", (event) => trans(enArabe,event))
chinois.addEventListener("click", (event) => trans(enChinois,event))
coreen.addEventListener("click", (event) => trans(enCoreen,event))


const enHebreux = ["א","ב","ג","ד","ה","ו","ז","ח","ט","י","יא","יב"]
const enOccidental = [1,2,3,4,5,6,7,8,9,10,11,12]
const enArabe = ["١","٢","٣","٤","٥","٦","٧","٨","٩","١٠","١١","١٢"] 
const enChinois = ["一","二","三","四","五","六","七","八","九","十","十一","十二"]
const enCoreen = ["일","이","삼","사","오","육","칠","팔","구","십","십일","십이"]

function trans(langue, event) {
  for (let i = 1; i < 13; i++) {
    let divChiffre = document.querySelector(`div[chiffre="${i}"]`) 
    divChiffre.innerHTML = langue[i-1]
  }
  hebreux.classList.remove("selected")
  arabe.classList.remove("selected")
  occidental.classList.remove("selected")
  chinois.classList.remove("selected")
  coreen.classList.remove("selected")
  event.target.classList.toggle("selected")
}


alarmButton.addEventListener("click", (event) => {
  if (event.target.innerHTML == "STOP") {
    audio.pause();
    event.target.innerHTML = "OK"
    stopAlarm = true;
    setTimeout(stopStopAlarm, 60000)
  }
})

function stopStopAlarm() {
  stopAlarm = false;
}

const bouttonLangues = document.querySelector(".boutton-langues")
const langues = document.querySelector(".langues")


bouttonLangues.addEventListener("click", () => {
  langues.classList.toggle("hidden")
})
