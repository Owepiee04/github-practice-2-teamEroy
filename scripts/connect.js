import loadCardComponent from "./card-component.js";
import loadFooterComponent from "./footer.js";
import loadRatingsCardComponent from "./ratings-card.js";
import loadAboutUsComponent from "./about_us.js";
const body = document.body;


document.addEventListener("DOMContentLoaded", async () => {
    const body = document.getElementById('box-element');

    // const aboutUs = await loadAboutUsComponent();
    // body.appendChild(aboutUs);
    const ratingsComponent = await loadRatingsCardComponent();

    body.appendChild(ratingsComponent);

    const cardComponent = await loadCardComponent();
  
    body.appendChild(cardComponent);

    const footerComponent = await loadFooterComponent();
    body.appendChild(footerComponent);
});

