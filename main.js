const passportInput = document.querySelector(".passportInput")
const passportCheck = document.querySelector(".passportCheck")
const passportResult = document.querySelector(".passportResult")

const passportRegExp = /^[1-2]\d{13}$/

passportCheck.addEventListener("click", () => {
    if (passportRegExp.test(passportInput.value)){
        passportResult.innerText = "Good!"
        passportResult.style.color = "green"
    } else {
        passportResult.innerText = "error"
        passportResult.style.color = "red"
    }
})
