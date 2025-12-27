/* ============================================
   SpeakEasy - Video Lesson Page JavaScript
   Video Data and Quiz Functionality
   ============================================ */

// Video lesson data with quizzes
const videoLessons = {
    1: {
        title: "Lesson 1: Hello and Greetings 👋",
        description: "Learn how to say hello, goodbye, and greet your friends!",
        videoId: "dQw4w9WgXcQ", // YouTube video ID (placeholder)
        quizzes: [
            {
                id: 1,
                question: "How do you say hello in the morning? 🌅",
                options: ["Good morning", "Good night", "Goodbye", "Thank you"],
                correct: 0
            },
            {
                id: 2,
                question: "What do you say when you meet someone? 👋",
                options: ["Goodbye", "Hello", "Thank you", "Sorry"],
                correct: 1
            },
            {
                id: 3,
                question: "What do you say when you leave? 👋",
                options: ["Hello", "Good morning", "Goodbye", "Please"],
                correct: 2
            }
        ]
    },
    2: {
        title: "Lesson 2: Colors 🌈",
        description: "Discover all the beautiful colors around you!",
        videoId: "dQw4w9WgXcQ",
        quizzes: [
            {
                id: 1,
                question: "What color is an apple? 🍎",
                options: ["Blue", "Red", "Green", "Yellow"],
                correct: 1
            },
            {
                id: 2,
                question: "What color is the sky? ☁️",
                options: ["Red", "Green", "Blue", "Yellow"],
                correct: 2
            },
            {
                id: 3,
                question: "What color is the sun? ☀️",
                options: ["Blue", "Green", "Yellow", "Purple"],
                correct: 2
            }
        ]
    },
    3: {
        title: "Lesson 3: Numbers 🔢",
        description: "Count from 1 to 10 and have fun with numbers!",
        videoId: "dQw4w9WgXcQ",
        quizzes: [
            {
                id: 1,
                question: "How many fingers do you have on one hand? ✋",
                options: ["Three", "Four", "Five", "Six"],
                correct: 2
            },
            {
                id: 2,
                question: "What comes after number 5? 🔢",
                options: ["Four", "Six", "Seven", "Eight"],
                correct: 1
            },
            {
                id: 3,
                question: "How many eyes do you have? 👀",
                options: ["One", "Two", "Three", "Four"],
                correct: 1
            }
        ]
    },
    4: {
        title: "Lesson 4: Animals 🐶",
        description: "Meet all the amazing animals and learn their names!",
        videoId: "dQw4w9WgXcQ",
        quizzes: [
            {
                id: 1,
                question: "What do you call a baby dog? 🐕",
                options: ["Kitten", "Puppy", "Cub", "Chick"],
                correct: 1
            },
            {
                id: 2,
                question: "What sound does a cat make? 🐱",
                options: ["Woof", "Meow", "Moo", "Quack"],
                correct: 1
            },
            {
                id: 3,
                question: "Which animal says 'Moo'? 🐄",
                options: ["Dog", "Cat", "Cow", "Duck"],
                correct: 2
            }
        ]
    },
    5: {
        title: "Lesson 5: Family 👨‍👩‍👧‍👦",
        description: "Learn words for mom, dad, sister, brother, and more!",
        videoId: "dQw4w9WgXcQ",
        quizzes: [
            {
                id: 1,
                question: "What do you call your mother's sister? 👩",
                options: ["Aunt", "Uncle", "Cousin", "Grandma"],
                correct: 0
            },
            {
                id: 2,
                question: "What do you call your father's father? 👴",
                options: ["Uncle", "Grandpa", "Cousin", "Brother"],
                correct: 1
            },
            {
                id: 3,
                question: "What do you call your mother's mother? 👵",
                options: ["Aunt", "Grandma", "Sister", "Cousin"],
                correct: 1
            }
        ]
    },
    6: {
        title: "Lesson 6: Food 🍎",
        description: "Yummy foods and how to say their names in English!",
        videoId: "dQw4w9WgXcQ",
        quizzes: [
            {
                id: 1,
                question: "What do you eat for breakfast? 🥐",
                options: ["Dinner", "Breakfast", "Lunch", "Snack"],
                correct: 1
            },
            {
                id: 2,
                question: "Which fruit is red and round? 🍎",
                options: ["Banana", "Apple", "Orange", "Grape"],
                correct: 1
            },
            {
                id: 3,
                question: "What do you drink when you're thirsty? 💧",
                options: ["Food", "Water", "Toy", "Book"],
                correct: 1
            }
        ]
    },
    7: {
        title: "Lesson 7: Body Parts 👀",
        description: "Learn about your eyes, nose, mouth, and more!",
        videoId: "dQw4w9WgXcQ",
        quizzes: [
            {
                id: 1,
                question: "What do you use to see? 👀",
                options: ["Ears", "Eyes", "Nose", "Mouth"],
                correct: 1
            },
            {
                id: 2,
                question: "What do you use to smell? 👃",
                options: ["Eyes", "Ears", "Nose", "Hands"],
                correct: 2
            },
            {
                id: 3,
                question: "How many hands do you have? ✋",
                options: ["One", "Two", "Three", "Four"],
                correct: 1
            }
        ]
    },
    8: {
        title: "Lesson 8: Actions 🏃",
        description: "Run, jump, dance! Learn action words!",
        videoId: "dQw4w9WgXcQ",
        quizzes: [
            {
                id: 1,
                question: "What do you do with a book? 📚",
                options: ["Eat", "Read", "Sleep", "Run"],
                correct: 1
            },
            {
                id: 2,
                question: "What do you do when you're tired? 😴",
                options: ["Eat", "Play", "Sleep", "Run"],
                correct: 2
            },
            {
                id: 3,
                question: "What do you do with food? 🍽️",
                options: ["Sleep", "Eat", "Run", "Read"],
                correct: 1
            }
        ]
    },
    9: {
        title: "Lesson 9: Weather ☀️",
        description: "Sunny, rainy, or snowy? Learn weather words!",
        videoId: "dQw4w9WgXcQ",
        quizzes: [
            {
                id: 1,
                question: "What do you see in the sky during the day? ☀️",
                options: ["Moon", "Stars", "Sun", "Clouds"],
                correct: 2
            },
            {
                id: 2,
                question: "What falls from the sky when it rains? 🌧️",
                options: ["Snow", "Rain", "Sun", "Wind"],
                correct: 1
            },
            {
                id: 3,
                question: "What do you wear when it's cold? 🧥",
                options: ["Shorts", "Coat", "Swimsuit", "T-shirt"],
                correct: 1
            }
        ]
    },
    10: {
        title: "Lesson 10: Simple Sentences 💬",
        description: "Put words together to make sentences!",
        videoId: "dQw4w9WgXcQ",
        quizzes: [
            {
                id: 1,
                question: "Complete: I ___ a student.",
                options: ["am", "is", "are", "be"],
                correct: 0
            },
            {
                id: 2,
                question: "Complete: She ___ playing.",
                options: ["is", "am", "are", "be"],
                correct: 0
            },
            {
                id: 3,
                question: "Complete: We ___ friends.",
                options: ["is", "am", "are", "be"],
                correct: 2
            }
        ]
    }
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Get video ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('id');
    
    if (videoId && videoLessons[videoId]) {
        loadVideoLesson(videoId);
    } else {
        // If no valid video ID, redirect to courses
        window.location.href = 'courses.html';
    }
});

// Load video lesson and quizzes
function loadVideoLesson(lessonId) {
    const lesson = videoLessons[lessonId];
    
    // Update page title
    document.title = lesson.title + " - SpeakEasy";
    
    // Update lesson title and description
    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('lessonDescription').textContent = lesson.description;
    
    // Load video
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.src = `https://www.youtube.com/embed/${lesson.videoId}?autoplay=0`;
    videoPlayer.title = lesson.title;
    
    // Render quizzes
    renderQuizzes(lesson.quizzes);
}

// Render quizzes
function renderQuizzes(quizzes) {
    const container = document.getElementById('videoQuizzes');
    container.innerHTML = '';
    
    quizzes.forEach((quiz, index) => {
        const quizCard = document.createElement('div');
        quizCard.className = 'video-quiz-card';
        quizCard.setAttribute('data-quiz-id', quiz.id);
        
        quizCard.innerHTML = `
            <div class="video-quiz-header">
                <span class="video-quiz-number">Question ${index + 1}</span>
            </div>
            <h3 class="video-quiz-question">${quiz.question}</h3>
            <div class="video-quiz-options" data-correct="${quiz.correct}">
                ${quiz.options.map((option, optIndex) => `
                    <button class="video-quiz-option" data-option="${optIndex}">
                        ${option}
                    </button>
                `).join('')}
            </div>
            <div class="video-quiz-feedback"></div>
        `;
        
        container.appendChild(quizCard);
    });
    
    // Add event listeners
    setupVideoQuizListeners();
}

// Setup quiz option click listeners
function setupVideoQuizListeners() {
    const quizCards = document.querySelectorAll('.video-quiz-card');
    let totalCorrect = 0;
    let totalAnswered = 0;
    const totalQuizzes = quizCards.length;
    
    quizCards.forEach(card => {
        const options = card.querySelectorAll('.video-quiz-option');
        const feedback = card.querySelector('.video-quiz-feedback');
        const optionsContainer = card.querySelector('.video-quiz-options');
        const correctAnswer = parseInt(optionsContainer.getAttribute('data-correct'));
        let answered = false;
        
        options.forEach((option, index) => {
            option.addEventListener('click', function() {
                if (answered) return; // Prevent multiple answers
                answered = true;
                totalAnswered++;
                
                // Disable all options in this quiz
                options.forEach(opt => {
                    opt.disabled = true;
                    opt.classList.remove('hover-effect');
                });
                
                // Check if answer is correct
                if (index === correctAnswer) {
                    this.classList.add('correct');
                    feedback.innerHTML = '✅ Correct! Great job! 🎉';
                    feedback.className = 'video-quiz-feedback correct-feedback';
                    totalCorrect++;
                } else {
                    this.classList.add('incorrect');
                    // Highlight correct answer
                    options[correctAnswer].classList.add('correct');
                    feedback.innerHTML = '❌ Try again! The correct answer is highlighted. 💪';
                    feedback.className = 'video-quiz-feedback incorrect-feedback';
                }
                
                // Check if all quizzes are answered
                if (totalAnswered === totalQuizzes) {
                    setTimeout(() => {
                        showVideoQuizResults(totalCorrect, totalQuizzes);
                    }, 500);
                }
            });
        });
    });
}

// Show quiz results
function showVideoQuizResults(correct, total) {
    const resultsDiv = document.getElementById('videoQuizResults');
    const percentage = Math.round((correct / total) * 100);
    
    let message = '';
    let emoji = '';
    
    if (percentage === 100) {
        message = 'Perfect! You are an English superstar! 🌟';
        emoji = '🎉';
    } else if (percentage >= 67) {
        message = 'Excellent work! You\'re doing great! 🎊';
        emoji = '👏';
    } else if (percentage >= 33) {
        message = 'Good job! Keep practicing and you\'ll get even better! 💪';
        emoji = '👍';
    } else {
        message = 'Nice try! Watch the video again and try once more! 📚';
        emoji = '💪';
    }
    
    resultsDiv.innerHTML = `
        <h3>Quiz Results ${emoji}</h3>
        <div class="video-quiz-score">${correct} / ${total}</div>
        <div class="video-quiz-message">${message}</div>
        <p style="margin-top: 1rem; color: #666;">You got ${percentage}% correct!</p>
        <div class="video-quiz-actions">
            <button onclick="location.reload()" class="video-quiz-retry-btn">
                Try Again! 🔄
            </button>
            <a href="courses.html" class="video-quiz-back-btn">
                Back to Courses 📚
            </a>
        </div>
    `;
    
    resultsDiv.classList.remove('hidden');
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

