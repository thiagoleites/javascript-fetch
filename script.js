// FETCH API DATA
const button = document.getElementById("getDados")
const lista = document.getElementById("lista")

function fetchApiData() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then( response => response.json() )
    .then (data => {
      
      data.map((item) => {
        const li = document.createElement("li")

        li.setAttribute('class', 'list-group-item')
        li.innerHTML = item.title
        lista.appendChild(li)
      })
    })
}

button.addEventListener("click", fetchApiData)
