export default async function loadNavBarComponent() {
  const response = await fetch("../components/navbar.html");
  const html = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const card = doc.querySelector(".site-nav");
  return card.cloneNode(true);
}                       