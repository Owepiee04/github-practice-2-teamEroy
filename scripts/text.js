export default async function loadTextComponent() {
  const response = await fetch("../components/text.html");
  const html = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const card = doc.querySelector(".container");
  return card.cloneNode(true);
}