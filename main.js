const localStorageKey = 'to-do-list'
function newTask() {
    let input = document.getElementById('input-new')
    
    // validate
    if(!input.value) {
        alert('Digite algo')
    } else {
        // adiconando no logal de estoque
        let values = JSON. parse(localStorage.getItem(localStorageKey) ||  "[]")
        values.push({
            name: input.value
        })
        localStorage. setItem(localStorageKey,JSON.stringify(values))
        showValues()
    }
}

function showValues() {
    let values = JSON. parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    for(let i = 0; i < values.length; i++) {
        list.innerHTML += `<li>${values[i] ['name']}<button id="btn-ok" onclick="removeItem("${values[i] ['name']}")">ok</button></li>`
    }
}

function removeItem(data) {
    let values = JSON. parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.find(x =>. name == data)
    values.splice(index,1)
    localStorage. setItem(localStorageKey,JSON.stringify(values))
    showValues()
}

showValues()