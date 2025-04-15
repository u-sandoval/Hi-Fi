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

    // ✅ Quiz logic (only if quiz exists)
    const quizForm = document.querySelector("form");
    if (quizForm) {
    quizForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const selected = document.querySelector("input[name='q1']:checked");
        if (!selected) {
        alert("Please select an answer.");
        return;
        }

        const value = selected.value;

        if (value === "B") {
        alert("✅ Correct! Using ChatGPT to understand concepts is ethical.");
        } else {
        alert("❌ Incorrect. Try again or review the ethics section.");
        }
        });
    }
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
  

  
