const hour = document.querySelector(".hour")
const min = document.querySelector(".min")
const sec = document.querySelector(".tick")

function tick() {
  console.log("ok")

  const now = new Date();

  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  const hours = now.getHours()



  sec.style.transform = `rotate(${seconds*6+270}deg)`
  min.style.transform = `rotate(${minutes*6+270 + seconds/10}deg)`
  hour.style.transform = `rotate(${hours*30+270 + minutes/2}deg)`


}


setInterval(tick, 1000)


const hebreux = document.querySelector(".hebreux")


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

hebreux.addEventListener("click", () => transHebreux())

function transHebreux() {
  a1.innerHTML = "א"
  a2.innerHTML = "ב"
  a3.innerHTML = "א"
  a4.innerHTML = "א"
  a5.innerHTML = "א"
  a6.innerHTML = "א"
  a7.innerHTML = "א"
  a8.innerHTML = "א"
  a9.innerHTML = "א"
  a10.innerHTML = "א"
  a11.innerHTML = "א"
  a12.innerHTML = "א"

}