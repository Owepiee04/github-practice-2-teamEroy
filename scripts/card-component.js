export default async function loadCardComponent() {
  const response = await fetch("../components/card-component.html");
  const html = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const card = doc.getElementById("card-container");
  return card.cloneNode(true);
}