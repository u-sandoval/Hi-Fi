// Highlight the current page link in the navbar
document.addEventListener("DOMContentLoaded", () => {
    // Get the current file name (e.g., "about.html" or "index.html")
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
  
    // Select all <a> tags inside the nav
    const navLinks = document.querySelectorAll("nav a");
  
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
  
      if (href === currentPage) {
        // Add active classes (Tailwind: underline and yellow text)
        link.classList.add("text-yellow-400", "underline", "font-semibold");
      }
    });
  });
  
// ✅ Quiz logic
document.addEventListener("DOMContentLoaded", () => {
  const quizForm = document.getElementById("quiz-form");
  const quizQuestion = document.getElementById("quiz-question");
  const quizOptions = document.getElementById("quiz-options");
  const quizFeedback = document.getElementById("quiz-feedback");
  const quizCorrect = document.getElementById("quiz-correct");
  const nextQuestionButton = document.getElementById("next-question");
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  const submitButton = quizForm.querySelector("button[type='submit']");

  // Quiz questions and answers
  const questions = [
    {
      question: "Which of the following best describes ethical use of ChatGPT in academic settings?",
      options: [
        "Submitting ChatGPT-generated answers as your own.",
        "Using ChatGPT to understand concepts before writing your own response.",
        "Asking ChatGPT to complete take-home exams for you.",
        "Copying and pasting ChatGPT text without citation."
      ],
      correct: "B"
    },
    {
      question: "What is a key principle of academic honesty?",
      options: [
        "Using AI to replace your own work.",
        "Citing sources, including AI-generated content.",
        "Submitting AI-generated essays without review.",
        "Avoiding collaboration with peers."
      ],
      correct: "B"
    },
    {
      question: "How should you verify AI-generated information?",
      options: [
        "Trust it without question.",
        "Cross-check with trusted sources like .edu or .gov.",
        "Use it as-is for academic submissions.",
        "Assume it is always accurate."
      ],
      correct: "B"
    },
    {
      question: "What is an example of ethical AI use?",
      options: [
        "Using AI to brainstorm ideas for a project.",
        "Submitting AI-generated work as your own.",
        "Using AI to complete an exam.",
        "Avoiding AI tools entirely."
      ],
      correct: "A"
    },
    {
      question: "Why is it important to check for outdated AI information?",
      options: [
        "AI always provides the latest information.",
        "AI may generate responses based on old data.",
        "Outdated information is always accurate.",
        "It is unnecessary to verify AI content."
      ],
      correct: "B"
    }
  ];

  let currentQuestionIndex = 0;

  // Load a question
  function loadQuestion(index) {
    const question = questions[index];
    quizQuestion.textContent = question.question;
    quizOptions.innerHTML = question.options
      .map(
        (option, i) => `
        <label class="block">
          <input type="radio" name="answer" value="${String.fromCharCode(65 + i)}" class="mr-2" />
          ${String.fromCharCode(65 + i)}. ${option}
        </label>
      `
      )
      .join("");
    quizFeedback.classList.add("hidden");
    quizCorrect.classList.add("hidden");
    nextQuestionButton.classList.add("hidden");
    submitButton.classList.remove("hidden");
  }

  // Update progress bar
  function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  }

  // Handle form submission
  quizForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const selected = document.querySelector("input[name='answer']:checked");
    if (!selected) {
      quizFeedback.textContent = "❌ Please select an answer.";
      quizFeedback.classList.remove("hidden");
      return;
    }

    const value = selected.value;
    const correctAnswer = questions[currentQuestionIndex].correct;

    if (value === correctAnswer) {
      quizFeedback.classList.add("hidden");
      quizCorrect.classList.remove("hidden");
      nextQuestionButton.classList.remove("hidden");
    } else {
      quizFeedback.textContent = "❌ Incorrect. Try again.";
      quizFeedback.classList.remove("hidden");
    }
  });

  // Handle next question
  nextQuestionButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion(currentQuestionIndex);
      updateProgress();
    } else {
      quizQuestion.textContent = "🎉 Congratulations! You completed the quiz.";
      quizOptions.innerHTML = "";
      quizFeedback.classList.add("hidden");
      quizCorrect.classList.add("hidden");
      nextQuestionButton.classList.add("hidden");
      submitButton.classList.add("hidden"); // Hide the submit button
      progressText.textContent = "Quiz Completed!";
      progressBar.style.width = "100%";
    }
  });

  // Initialize quiz
  loadQuestion(currentQuestionIndex);
  updateProgress();
});

// Checklist logic
document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".check-item");
    const doneMessage = document.getElementById("doneMessage");
    const resetButton = document.getElementById("resetChecklist");
  
    function updateChecklistStatus() {
      const allChecked = Array.from(checkboxes).every(cb => cb.checked);
      doneMessage.classList.toggle("hidden", !allChecked);
    }
  
    checkboxes.forEach(cb => cb.addEventListener("change", updateChecklistStatus));
  
    resetButton.addEventListener("click", () => {
      checkboxes.forEach(cb => cb.checked = false);
      doneMessage.classList.add("hidden");
    });
  });



