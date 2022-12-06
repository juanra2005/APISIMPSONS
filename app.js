const options = { method: 'GET' };
const URL = 'https://thesimpsonsquoteapi.glitch.me/quotes';

fetch(URL, options)
  .then(response => response.json())
  .then(data => {
    createCard(data[0])
  })
  .catch(err => console.error(err));

function createCard(Character) {
  const { character, quote, image } = Character;

  const mainContent = document.getElementById("main-container");

  const main = document.getElementById("main");
  const button = document.getElementById("button")

  const card = document.createElement("div");
  const title = document.createElement("h2");
  const img = document.createElement("img");
  const quoteCharacter = document.createElement("p");

  main.classList.add("card");
  img.classList.add("img");
  title.classList.add("name");
  quoteCharacter.classList.add("paragraph");

  title.textContent = character;
  img.src = image;
  img.alt = image;
  quoteCharacter.textContent = quote;

  main.appendChild(card);
  card.appendChild(title);
  card.appendChild(img);
  card.appendChild(quoteCharacter);
  mainContent.appendChild(button);

}

button.addEventListener("click", () => {
  {
    window.location.reload()
  }
})