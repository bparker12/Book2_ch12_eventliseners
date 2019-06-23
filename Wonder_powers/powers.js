document.querySelector("#activate-flight").addEventListener( "click", () => {
    flightHandlerFunction(replaceFlight)
})

/*Add the correct string as the first argument to addEventListener()
Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> 
(section, not button) and replace it with a class of enabled.
Have your developer tools open. When you click the button, the following element...*/

let replaceFlight = document.querySelector("#flight")
let replaceMind = document.querySelector("#mindreading")
let replaceXray = document.querySelector("#xray")

function flightHandlerFunction (target) {
    target.classList.replace("disabled", "enabled")
    console.log(target)
} 

let deactivate = document.querySelectorAll("#powerlist")

function allDeactive () {
    replaceFlight.classList.replace("enabled", "disabled")
    replaceMind.classList.replace("enabled", "disabled")
    replaceXray.classList.replace("enabled", "disabled")
}
function allActivate () {
    replaceFlight.classList.replace("disabled", "enabled")
    replaceMind.classList.replace("disabled", "enabled")
    replaceXray.classList.replace("disabled", "enabled")
}

document.querySelector("#activate-mindreading").addEventListener("click", () => {
    flightHandlerFunction(replaceMind)
})
document.querySelector("#activate-xray").addEventListener("click", () => {
    flightHandlerFunction(replaceXray)
})

document.querySelector("#activate-all").addEventListener("click", () => {
    allActivate()
})
document.querySelector("#deactivate-all").addEventListener("click", () => {
    allDeactive()
})