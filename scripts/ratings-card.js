export default async function loadRatingsCardComponent() {
  const response = await fetch("../components/ratings_card.html");
  const html = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const card = doc.getElementById("ratings");
  return card.cloneNode(true);
}