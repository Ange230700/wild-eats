  
const form = document.querySelector("#contactForm")
const textarea = document.querySelector("#textarea")
const header = document.querySelector("header")
const message = document.querySelector(".message")
const submit = document.querySelector("#submit")


form.addEventListener("submit", (event) =>  {
        event.preventDefault()
        message.innerHTML = ""
        form.reset()
        message.style.display = "flex"
        const messageSend = document.createElement("h5")
        messageSend.innerHTML = "✅ Message envoyé! Nous vous recontacterons bientôt"
        message.append(messageSend)

})
