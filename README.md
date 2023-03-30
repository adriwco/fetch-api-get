## fetch-api-get
Exemplo: Fetch API (GET) - jsonplaceholder.typicode

```js
async function fetchApiData() {
  fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => console.log(json))
/*...*/        
}
const exibirBtn = document.querySelector("#exibirBtn");
exibirBtn.addEventListener("click", fetchApiData);
```
ou 
```js
async function fetchApiData() {
const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
const data = await response.json();
/*...*/        
}
const exibirBtn = document.querySelector("#exibirBtn");
exibirBtn.addEventListener("click", fetchApiData);
```
#
Criando elemento <code>li</code> e atribuindo a <code>ul</code> contendo o conteúdo da API <code>jsonplaceholder</code>.
```js
const list = document.querySelector("#fill_list");
data.slice(startIndex, startIndex + 10).forEach((item) => {
  const li = document.createElement("li");
  li.setAttribute("id", item.id);
  li.textContent = `(${item.id}) ${item.title}`;
  list.insertAdjacentHTML("beforeend", li.outerHTML);
});
```
#
Função de "prev_button" e "next_button"
```js
let startIndex = 0;
let totalItems = 0;
async function fetchApiData() {
/*...*/
totalItems = data.length;
/*...*/        
}

const prevButton = document.querySelector("#prev_button");
const nextButton = document.querySelector("#next_button");

prevButton.addEventListener("click", () => {
  if (startIndex > 0) {
    startIndex -= 10;
    fetchApiData();
  }
});

nextButton.addEventListener("click", () => {
  startIndex += 10;
  fetchApiData();
});

function showNext() {
  startIndex += 10;
  if (startIndex >= totalItems) {
    startIndex = totalItems - 10;
  }
  fetchApiData();
}

const nextBtn = document.querySelector("#next_button");
nextBtn.addEventListener("click", showNext);
```
***
### <p align="center">🔸[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)🔸</p>
