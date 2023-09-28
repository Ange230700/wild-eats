
    //const message = "Email envoyé! Nous vous recontacterons bientôt";
 //créer class dans css, voir si animation, appendchild   

const form = document.querySelector("#contactForm")
const textarea = document.querySelector("#textarea")
const header = document.querySelector("header")
const message = document.querySelector(".message")
const input = document.querySelector("#submit")


form.onsubmit = function (event) {
    event.preventDefault()
    const messageSend = document.createElement("h4")
    messageSend.innerHTML = "✅ Email envoyé! Nous vous recontacterons bientôt"
    message.append(messageSend)
    
}
