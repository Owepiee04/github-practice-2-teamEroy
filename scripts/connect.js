import loadCardComponent from "./card-component.js";
import loadFooterComponent from "./footer.js";
const body = document.body;


document.addEventListener("DOMContentLoaded", async () => {
    const body = document.getElementById('box-element');
    const cardComponent = await loadCardComponent();
  
    body.appendChild(cardComponent);

    const footerComponent = await loadFooterComponent();
    body.appendChild(footerComponent);
});

