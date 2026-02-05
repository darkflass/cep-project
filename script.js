/* ============================================
   SpeakEasy - JavaScript Functionality
   ============================================ */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // Mobile Navigation Toggle
    // ============================================
    
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Toggle menu visibility when hamburger is clicked
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = menuToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking on a link (mobile)
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
        
        // Close menu when clicking outside (mobile)
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // ============================================
    // Quiz Functionality
    // ============================================
    
    const quizForm = document.getElementById('quizForm');
    const quizResults = document.getElementById('quizResults');
    
    // Correct answers for the quiz
    const correctAnswers = {
        q1: 'a', // Hello
        q2: 'b', // Yellow
        q3: 'b', // Five
        q4: 'b', // Puppy
        q5: 'b'  // Thank you
    };
    
    // Handle quiz form submission
    if (quizForm && quizResults) {
        quizForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent form from submitting normally
            
            // Get all selected answers
            const userAnswers = {};
            let allAnswered = true;
            
            // Check each question
            Object.keys(correctAnswers).forEach(questionId => {
                const selectedOption = quizForm.querySelector(`input[name="${questionId}"]:checked`);
                if (selectedOption) {
                    userAnswers[questionId] = selectedOption.value;
                } else {
                    allAnswered = false;
                }
            });
            
            // Check if all questions are answered
            if (!allAnswered) {
                alert('Please answer all questions before submitting! 😊');
                return;
            }
            
            // Calculate score
            let score = 0;
            const totalQuestions = Object.keys(correctAnswers).length;
            
            Object.keys(correctAnswers).forEach(questionId => {
                if (userAnswers[questionId] === correctAnswers[questionId]) {
                    score++;
                }
            });
            
            // Calculate percentage
            const percentage = Math.round((score / totalQuestions) * 100);
            
            // Display results
            displayQuizResults(score, totalQuestions, percentage);
            
            // Scroll to results
            quizResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }
    
    // Function to display quiz results
    function displayQuizResults(score, total, percentage) {
        // Remove hidden class
        quizResults.classList.remove('hidden');
        
        // Generate message based on score
        let message = '';
        let emoji = '';
        
        if (percentage === 100) {
            message = 'Perfect! You are an English superstar! 🌟';
            emoji = '🎉';
        } else if (percentage >= 80) {
            message = 'Excellent work! You\'re doing great! 🎊';
            emoji = '👏';
        } else if (percentage >= 60) {
            message = 'Good job! Keep practicing and you\'ll get even better! ';
            emoji = '👍';
        } else {
            message = 'Nice try! Don\'t give up, keep learning! 📚';
            emoji = '💪';
        }
        
        // Create results HTML
        quizResults.innerHTML = `
            <h3>Quiz Results ${emoji}</h3>
            <div class="score">${score} / ${total}</div>
            <div class="message">${message}</div>
            <p style="margin-top: 1rem; color: #666;">You got ${percentage}% correct!</p>
            <button onclick="location.reload()" class="submit-btn" style="margin-top: 1.5rem; max-width: 300px;">
                Try Again! 🔄
            </button>
        `;
    }
    
    // ============================================
    // Smooth Scrolling for Anchor Links
    // ============================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ============================================
    // Add Active Menu Highlight Based on Current Page
    // ============================================
    
    // This is already handled in HTML with the 'active' class,
    // but we can add additional JavaScript if needed for dynamic highlighting
    
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
});


//theme logic


// ================================
// Dark Mode Toggle (GLOBAL)
// ================================
const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {
  // Set correct icon on load
  if (localStorage.getItem("theme") === "dark") {
    themeBtn.textContent = "☀️";
  }

  themeBtn.addEventListener("click", () => {
    const html = document.documentElement;
    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      themeBtn.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      themeBtn.textContent = "🌙";
    }
  });
}

