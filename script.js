const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener("change", save)

function save() {
    localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

function add() {
    const today = new Date().toLocaleDateString("pt-br").slice(0,-5)
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists) {
        alert("entrei")
        return
    }

    nlwSetup.addDay(today)
}


const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()