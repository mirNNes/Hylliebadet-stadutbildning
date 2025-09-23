// Texten som ska skrivas rad för rad
const textLines = [
  "Städrummet – Viktig startpunkt i våra rutiner",
  "Städrummet är där vi börjar och avslutar arbetsdagen, så det är viktigt att du känner till rutinerna och hur allt fungerar.",
  "Utrymmet: Själva städrummet är litet, därför är det extra viktigt att bara nödvändiga saker finns där.",
  "Utrustning i städrummet: Tvättmaskin – för smutsiga moppar och mikrodukar, Torktumlare – för att torka moppar och dukar, Tre städvagnar – används i den dagliga verksamheten, Singelskurmaskiner, Kombiskurmaskiner, Rena moppar och mikrodukar.",
  "Städförråd (vänster om städrummet): Här finns städmaterial, redskap och diverse saker som används dagligen.",
  "Förråd (höger om städrummet): Maskiner som används mer sällan, terasstvätt/högtryckstvätt, ångmaskiner i olika storlekar, reservdelar.",
  "Om du letar efter något extra, som duschslang, tvål- eller papperdispenser eller toalettspolknapp – så finns det ofta här.",
  "Rutiner: Lämna alltid tillbaka saker du har använt på rätt plats, rengör städmaskiner och redskap efter användning, fråga kollega om du är osäker, sätt maskiner på laddning efter användning."
];

// Typwriter-funktion
function typeWriter(containerId, lines, delay = 500) {
  const container = document.getElementById(containerId);
  if (!container) return; // skyddar mot null
  let i = 0;

  function showLine() {
    if (i < lines.length) {
      const p = document.createElement("p");
      container.appendChild(p);

      let charIndex = 0;
      function typeChar() {
        if (charIndex < lines[i].length) {
          p.innerHTML += lines[i][charIndex];
          charIndex++;
          setTimeout(typeChar, 15);
        } else {
          i++;
          setTimeout(showLine, delay);
        }
      }
      typeChar();
    }
  }

  showLine();
}
