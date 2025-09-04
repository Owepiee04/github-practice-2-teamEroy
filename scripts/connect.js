import loadCardComponent from "./card-component.js";
import loadFooterComponent from "./footer.js";
import loadRatingsCardComponent from "./ratings-card.js";
import loadAboutUsComponent from "./about_us.js";
import loadNavBarComponent from "./navbar.js";
import loadTextComponent from "./text.js";
const body = document.body;


document.addEventListener("DOMContentLoaded", async () => {
    const body = document.getElementById('box-element');



    const navBarComponent = await loadNavBarComponent();

    body.prepend(navBarComponent);

    const textFlex = document.getElementById('text-and-rating-flex');

    const textComponent = await loadTextComponent();

    textFlex.appendChild(textComponent);
 
    const ratingsComponent = await loadRatingsCardComponent();

    textFlex.appendChild(ratingsComponent);
    // const aboutUs = await loadAboutUsComponent();
    // body.appendChild(aboutUs);
   

    const cardComponent = await loadCardComponent();
  
    body.appendChild(cardComponent);

    const footerComponent = await loadFooterComponent();
    body.appendChild(footerComponent);
});

