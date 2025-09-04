import loadCardComponent from "./card-component.js";
import loadFooterComponent from "./footer.js";
import loadRatingsCardComponent from "./ratings-card.js";
import loadAboutUsComponent from "./about_us.js";
import loadNavBarComponent from "./navbar.js";
import loadTextComponent from "./text.js";
const body = document.body;

var aboutUsState = false;

const setAboutUsState = async () =>
{
    
    console.log("About us state clicked!");
    
    const body = document.getElementById('box-element');

    const navBarComponent = await loadNavBarComponent();


    
    console.log(navBarComponent);

    
    const aboutUsButton =  navBarComponent.querySelector('.btn-primary');
    aboutUsButton.onclick = setAboutUsState;

    const homeButton = navBarComponent.querySelector('.btn-home');
    homeButton.onclick = setHomeState;


    const textFlex = document.getElementById('text-and-rating-flex');

    const cardComponent = body.querySelector('#card-container');

    body.removeChild(cardComponent);

    textFlex.replaceChildren();
    const aboutUs = await loadAboutUsComponent();
    textFlex.appendChild(aboutUs);
}

const setHomeState = async () =>{

    const body = document.getElementById('box-element');

    const navBarComponent = await loadNavBarComponent();
    const aboutUsButton =  navBarComponent.querySelector('.btn-primary');
    aboutUsButton.onclick = setAboutUsState;

    const homeButton = navBarComponent.querySelector('.btn-home');
    homeButton.onclick = setHomeState;



    const textFlex = document.getElementById('text-and-rating-flex');

    const textComponent = await loadTextComponent();

    textFlex.replaceChildren();
    textFlex.appendChild(textComponent);
 
    const ratingsComponent = await loadRatingsCardComponent();

    textFlex.appendChild(ratingsComponent);

    const cardComponent = await loadCardComponent();
  
    const footer = body.querySelector('.site-footer');
    body.insertBefore(cardComponent, footer);

}


document.addEventListener("DOMContentLoaded", async () => {
    const body = document.getElementById('box-element');

    const navBarComponent = await loadNavBarComponent();

    body.prepend(navBarComponent);

    
    console.log(navBarComponent);

    
    const aboutUsButton =  navBarComponent.querySelector('.btn-primary');
    aboutUsButton.onclick = setAboutUsState;

    const homeButton = navBarComponent.querySelector('.btn-home');
    homeButton.onclick = setHomeState;
    const textFlex = document.getElementById('text-and-rating-flex');

    const textComponent = await loadTextComponent();

    textFlex.appendChild(textComponent);
 
    const ratingsComponent = await loadRatingsCardComponent();

    textFlex.appendChild(ratingsComponent);

    const cardComponent = await loadCardComponent();
  
    body.appendChild(cardComponent);
    


    const footerComponent = await loadFooterComponent();
    body.appendChild(footerComponent);
});


