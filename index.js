const bladespin2 = document.getElementById("blade2")
const bladespin1 = document.getElementById("blade1")

function fanOnbtn() {
    bladespin1.classList.remove("anime-spin2")
    bladespin2.classList.remove("anime-spin2")
    bladespin1.classList.add("anime-spin")
    bladespin2.classList.add("anime-spin")
}
function fanOffbtn() {
    bladespin1.classList.remove("anime-spin")
    bladespin2.classList.remove("anime-spin")
    bladespin1.classList.remove("anime-spin2")
    bladespin2.classList.remove("anime-spin2")
    bladespin1.classList.remove("anime-spin3")
    bladespin2.classList.remove("anime-spin3")
    bladespin1.classList.remove("anime-spin4")
    bladespin2.classList.remove("anime-spin4")

}
function fanLowspeed1btn() {
    bladespin1.classList.remove("anime-spin3")
    bladespin2.classList.remove("anime-spin3")
    bladespin1.classList.remove("anime-spin4")
    bladespin2.classList.remove("anime-spin4")
    bladespin1.classList.remove("anime-spin")
    bladespin2.classList.remove("anime-spin")
    bladespin1.classList.add("anime-spin2")
    bladespin2.classList.add("anime-spin2")

}
function fanLowspeed2btn() {
    bladespin1.classList.remove("anime-spin4")
    bladespin2.classList.remove("anime-spin4")
    bladespin1.classList.remove("anime-spin")
    bladespin2.classList.remove("anime-spin")
    bladespin1.classList.remove("anime-spin2")
    bladespin2.classList.remove("anime-spin2")
    bladespin1.classList.add("anime-spin3")
    bladespin2.classList.add("anime-spin3")

}
function fanLowspeed3btn() {
    bladespin1.classList.remove("anime-spin")
    bladespin2.classList.remove("anime-spin")
    bladespin1.classList.remove("anime-spin2")
    bladespin2.classList.remove("anime-spin2")
    bladespin1.classList.remove("anime-spin3")
    bladespin2.classList.remove("anime-spin3")
    bladespin1.classList.add("anime-spin4")
    bladespin2.classList.add("anime-spin4")

}
