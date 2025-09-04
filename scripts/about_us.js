export default async function loadAboutUsComponent() {
  const response = await fetch("../components/about_us.html");
  const html = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const card = doc.getElementById("about-us");
  return card.cloneNode(true);
}                       