
//dupcliate the eventarget
let messageId = document.querySelector("#message")
let article1 = document.querySelector("#article1")
let article2 = document.querySelector("#article2")

messageId.addEventListener("keyup", function (event) {
    article1.innerHTML = event.target.value
    article2.innerHTML = event.target.value
})

//try with functions

let messageId1 = document.querySelector("#message1")


