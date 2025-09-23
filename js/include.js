// Funktion för att ladda HTML i en div
function loadHTML(url, containerId, callback) {
  fetch(url)
    .then(resp => resp.text())
    .then(html => {
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = html;
        if (callback) callback();
      } else {
        console.error("Element med id", containerId, "finns inte!");
      }
    })
    .catch(err => console.error("Kunde inte ladda", url, err));
}

// Ladda header och footer direkt
document.addEventListener("DOMContentLoaded", () => {
  loadHTML('header.html', 'header');
  loadHTML('footer.html', 'footer');
});

// Funktion för att ladda sektioner via knapp
function loadSection(url) {
  loadHTML(url, 'main-container', () => {
    typeWriter("text-container", textLines);
  });
}
