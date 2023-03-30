## fetch-api-get
Exemplo: Fetch API (GET) - jsonplaceholder.typicode

```js
function fetchApiData() {
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
<code>.then()</code> e <code>async/await</code> são duas maneiras diferentes de lidar com código assíncrono em JavaScript.

O método <code>.then()</code> é uma abordagem baseada em promessa, onde a função de retorno é chamada quando a promessa é resolvida com sucesso ou rejeitada com um erro. Com <code>.then()</code>, você pode encadear várias chamadas para lidar com a resposta e os erros.

Por exemplo, com <code>.then()</code>, você pode escrever código para buscar dados de uma API e, em seguida, manipulá-los da seguinte maneira:
```js
function fetchApiData() {
  fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error));
}
```
Por outro lado, <code>async/await</code> é uma sintaxe mais recente que torna o código assíncrono mais parecido com código síncrono, permitindo que você escreva código que parece executar em ordem sequencial. Com <code>async/await</code>, você pode esperar que uma promessa seja resolvida antes de continuar com o próximo trecho de código.

Por exemplo, com <code>async/await</code>, você pode escrever o mesmo código da seguinte maneira:
```js
async function fetchApiData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error);
  }
}
```
O <code>async</code> antes da declaração da função indica que ela retornará uma promessa, e o <code>await</code> é usado para esperar a resolução da promessa antes de prosseguir. O <code>try/catch</code> é usado para lidar com erros que podem ocorrer durante a execução.

Em geral, a escolha entre <code>.then()</code> e <code>async/await</code> depende da preferência pessoal e do estilo de codificação, bem como das necessidades específicas do projeto. Ambas as abordagens são válidas e têm seus prós e contras, e é importante estar familiarizado com ambas as sintaxes para escrever código assíncrono efetivamente.

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
