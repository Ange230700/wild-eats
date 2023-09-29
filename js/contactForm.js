
    //const message = "Email envoyé! Nous vous recontacterons bientôt";
 //créer class dans css, voir si animation, appendchild   

const form = document.querySelector("#contactForm")
const textarea = document.querySelector("#textarea")
const header = document.querySelector("header")
const message = document.querySelector(".message")
const input = document.querySelector("#submit")


form.addEventListener("submit", (event) =>  {
        event.preventDefault()
        message.innerHTML = ""
        form.reset()
        const messageSend = document.createElement("h4")
        messageSend.innerHTML = "✅ Message envoyé! Nous vous recontacterons bientôt"
        message.append(messageSend)
} )
