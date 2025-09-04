export default async function loadFooterComponent() {
  const response = await fetch("../components/footer.html");
  const html = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const card = doc.querySelector(".site-footer");
  return card.cloneNode(true);
}