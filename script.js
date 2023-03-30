let startIndex = 0;
let totalItems = 0;

async function fetchApiData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();
  totalItems = data.length;

  const list = document.querySelector("#fill_list");
  list.innerHTML = ""; // Limpa a lista antes de adicionar os novos elementos

  /* 
  for (let i = startIndex; i < startIndex + 10; i++) {
    const item = data[i];
    if (!item) break; // Verifica se o elemento existe
    const li = document.createElement("li");
    li.setAttribute("id", item.id);
    li.textContent = item.title;
    list.insertAdjacentHTML("beforeend", li.outerHTML);
  }
  */
  data.slice(startIndex, startIndex + 10).forEach((item) => {
    const li = document.createElement("li");
    li.setAttribute("id", item.id);
    li.textContent = `(${item.id}) ${item.title}`;
    list.insertAdjacentHTML("beforeend", li.outerHTML);
  });
  // O método slice(startIndex, startIndex + 10) retorna um novo array com os elementos do índice startIndex até o índice startIndex + 10, o que é equivalente ao loop for anterior.
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

/* 
window.addEventListener("load", () => {
  fetchApiData();
});
*/

const exibirBtn = document.querySelector("#exibirBtn");
exibirBtn.addEventListener("click", fetchApiData);

const nextBtn = document.querySelector("#next_button");
nextBtn.addEventListener("click", showNext);
