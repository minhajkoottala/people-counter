let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let backspaceEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function backspace() {
    count -= 1
    backspaceEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
