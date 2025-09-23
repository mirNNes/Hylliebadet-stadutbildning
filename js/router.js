function loadSection(file) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.querySelector('.container').innerHTML = html;
    });
}
