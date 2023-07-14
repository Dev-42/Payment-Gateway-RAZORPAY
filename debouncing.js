let userInput = document.getElementById('search').value;
let debounceTimer,delay = 3000
function debounce(){
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(userInput,delay)
    console.log(debounceTimer)
}

document.getElementById('search').addEventListener('keyup',debounce)