import { typeWriter } from './typewriter.js';

function loadSection(sectionJson, quizJson) {
  // Ladda text + bilder
  fetch(sectionJson)
    .then(res => res.json())
    .then(data => typeWriter("text-container", data, 700));

  // Ladda quiz
  fetch(quizJson)
    .then(res => res.json())
    .then(data => renderQuiz(data));
}

function renderQuiz(quizData) {
  const container = document.getElementById("quiz-container");
  const result = document.getElementById("quizResult");
  container.innerHTML = "";

  quizData.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("quiz-question");

    const p = document.createElement("p");
    p.textContent = q.question;
    div.appendChild(p);

    q.options.forEach(opt => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "q" + index;
      input.value = opt.correct ? "ratt" : "fel";
      label.appendChild(input);
      label.appendChild(document.createTextNode(" " + opt.text));
      div.appendChild(label);
      div.appendChild(document.createElement("br"));
    });

    container.appendChild(div);
  });

  const btn = document.createElement("button");
  btn.textContent = "Kontrollera svar";
  btn.onclick = () => checkQuiz(quizData.length);
  container.appendChild(btn);
}

function checkQuiz(totalQuestions) {
  const container = document.getElementById("quiz-container");
  const result = document.getElementById("quizResult");
  let correctCount = 0;

  for (let i = 0; i < totalQuestions; i++) {
    const selected = container.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === "ratt") correctCount++;
  }

  result.textContent = correctCount === totalQuestions 
    ? "Allt rätt! Du kan gå vidare." 
    : `Du fick ${correctCount} av ${totalQuestions} rätt. Försök igen.`;
}

loadSection("sections/intro.json", "js/quizzes/quiz-intro.json");

