import loadCardComponent from "./card-component.js";

const body = document.body;


document.addEventListener("DOMContentLoaded", async () => {
  const cardComponent = await loadCardComponent();
  const body = document.getElementById('box-element');
  body.appendChild(cardComponent);
});

