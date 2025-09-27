export function typeWriter(containerId, lines, delay = 500) {
  const container = document.getElementById(containerId);
  if (!container) return; 
  let i = 0;

  function showLine() {
    if (i < lines.length) {
      const line = lines[i];

      if (line.type === "text") {
        const p = document.createElement("p");
        container.appendChild(p);

        let charIndex = 0;
        function typeChar() {
          if (charIndex < line.content.length) {
            p.innerHTML += line.content[charIndex];
            charIndex++;
            setTimeout(typeChar, 15);
          } else {
            i++;
            setTimeout(showLine, delay);
          }
        }
        typeChar();
      } else if (line.type === "image") {
        const img = document.createElement("img");
        img.src = line.content;
        img.style.maxWidth = "100%";
        img.style.margin = "20px 0";
        container.appendChild(img);

        i++;
        setTimeout(showLine, delay);
      }
    }
  }

  showLine();
}
