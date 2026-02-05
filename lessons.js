/* ============================================
   SpeakEasy - Lessons Page JavaScript
   Quiz Data and Functionality
   ============================================ */

// Quiz data for all three levels
const quizData = {
    easy: [
        // Topic 1: Hello & Greetings
        {
            id: 1,
            topic: "Hello & Greetings",
            question: "How do you say hello in the morning? 👋",
            options: ["Good morning", "Good night", "Goodbye", "Thank you"],
            correct: 0
        },
        // Topic 2: My Name & Age
        {
            id: 2,
            topic: "My Name & Age",
            question: "What do you say when someone asks 'What's your name?' 👶",
            options: ["My name is Tom", "I am happy", "I like apples", "I am five"],
            correct: 0
        },
        // Topic 3: Colors and Naming Things
        {
            id: 3,
            topic: "Colors and Naming Things",
            question: "What color is an apple? 🍎",
            options: ["Blue", "Red", "Green", "Yellow"],
            correct: 1
        },
        // Topic 4: Numbers and Simple Sentences
        {
            id: 4,
            topic: "Numbers and Simple Sentences",
            question: "How many fingers do you have on one hand? ✋",
            options: ["Three", "Four", "Five", "Six"],
            correct: 2
        },
        // Topic 5: My Family
        {
            id: 5,
            topic: "My Family",
            question: "What do you call your mother's sister? 👩",
            options: ["Aunt", "Uncle", "Cousin", "Grandma"],
            correct: 0
        },
        // Topic 6: Daily Action Words
        {
            id: 6,
            topic: "Daily Action Words",
            question: "What do you do in the morning when you wake up? 🌅",
            options: ["Sleep", "Eat breakfast", "Go to bed", "Say goodnight"],
            correct: 1
        },
        // Topic 7: Classroom English
        {
            id: 7,
            topic: "Classroom English",
            question: "What do you say when you want to answer a question? ✋",
            options: ["I don't know", "May I go out?", "I know the answer!", "I'm tired"],
            correct: 2
        },
        // Topic 8: Describing Things
        {
            id: 8,
            topic: "Describing Things",
            question: "How do you describe a big elephant? 🐘",
            options: ["Small", "Big", "Tiny", "Little"],
            correct: 1
        },
        // Topic 9: Feelings and Polite Words
        {
            id: 9,
            topic: "Feelings and Polite Words",
            question: "What do you say when someone helps you? 😊",
            options: ["Sorry", "Please", "Thank you", "Goodbye"],
            correct: 2
        },
        // Topic 10: Practicing Small Conversations
        {
            id: 10,
            topic: "Practicing Small Conversations",
            question: "If someone says 'How are you?', what can you say? 💬",
            options: ["I'm fine, thank you", "Goodbye", "My name is Sam", "I am five"],
            correct: 0
        },
        // Extra quizzes (repeating popular topics)
        {
            id: 11,
            topic: "Hello & Greetings",
            question: "What do you say when you leave? 👋",
            options: ["Hello", "Goodbye", "Good morning", "Thank you"],
            correct: 1
        },
        {
            id: 12,
            topic: "Colors and Naming Things",
            question: "What color is the sky? ☁️",
            options: ["Red", "Green", "Blue", "Yellow"],
            correct: 2
        },
        {
            id: 13,
            topic: "Numbers and Simple Sentences",
            question: "Complete: I ___ a student.",
            options: ["am", "is", "are", "be"],
            correct: 0
        },
        {
            id: 14,
            topic: "Daily Action Words",
            question: "What do you do with a book? 📚",
            options: ["Eat", "Read", "Sleep", "Run"],
            correct: 1
        },
        {
            id: 15,
            topic: "Feelings and Polite Words",
            question: "What do you say when you want something nicely? 🙏",
            options: ["Thank you", "Sorry", "Please", "Goodbye"],
            correct: 2
        }
    ],
    intermediate: [
        // Topic 1: Hello & Greetings
        {
            id: 1,
            topic: "Hello & Greetings",
            question: "Which greeting is used in the afternoon? 🌤️",
            options: ["Good morning", "Good afternoon", "Good night", "Hello"],
            correct: 1
        },
        // Topic 2: My Name & Age
        {
            id: 2,
            topic: "My Name & Age",
            question: "How do you tell someone you are 7 years old? 🎂",
            options: ["I am seven years old", "I have seven", "I am seven", "My age seven"],
            correct: 0
        },
        // Topic 3: Colors and Naming Things
        {
            id: 3,
            topic: "Colors and Naming Things",
            question: "What do you call a red, round fruit? 🍎",
            options: ["Banana", "Apple", "Orange", "Grape"],
            correct: 1
        },
        // Topic 4: Numbers and Simple Sentences
        {
            id: 4,
            topic: "Numbers and Simple Sentences",
            question: "Complete: There ___ three cats.",
            options: ["is", "am", "are", "be"],
            correct: 2
        },
        // Topic 5: My Family
        {
            id: 5,
            topic: "My Family",
            question: "What do you call your father's father? 👴",
            options: ["Uncle", "Grandpa", "Cousin", "Brother"],
            correct: 1
        },
        // Topic 6: Daily Action Words
        {
            id: 6,
            topic: "Daily Action Words",
            question: "What do you do when you are hungry? 🍽️",
            options: ["Sleep", "Eat", "Run", "Read"],
            correct: 1
        },
        // Topic 7: Classroom English
        {
            id: 7,
            topic: "Classroom English",
            question: "What do you say when you don't understand? 🤔",
            options: ["I know", "I understand", "I don't understand", "I'm finished"],
            correct: 2
        },
        // Topic 8: Describing Things
        {
            id: 8,
            topic: "Describing Things",
            question: "How do you describe something that tastes sweet? 🍭",
            options: ["Sour", "Sweet", "Bitter", "Salty"],
            correct: 1
        },
        // Topic 9: Feelings and Polite Words
        {
            id: 9,
            topic: "Feelings and Polite Words",
            question: "What do you say when you make a mistake? 😔",
            options: ["Thank you", "Please", "Sorry", "Hello"],
            correct: 2
        },
        // Topic 10: Practicing Small Conversations
        {
            id: 10,
            topic: "Practicing Small Conversations",
            question: "If someone says 'Nice to meet you!', what do you reply? 🤝",
            options: ["Goodbye", "Nice to meet you too!", "I'm fine", "Thank you"],
            correct: 1
        },
        // Extra quizzes
        {
            id: 11,
            topic: "Hello & Greetings",
            question: "What greeting do you use in the evening? 🌙",
            options: ["Good morning", "Good afternoon", "Good evening", "Good night"],
            correct: 2
        },
        {
            id: 12,
            topic: "Colors and Naming Things",
            question: "What color do you get when you mix red and yellow? 🎨",
            options: ["Green", "Blue", "Orange", "Purple"],
            correct: 2
        },
        {
            id: 13,
            topic: "Numbers and Simple Sentences",
            question: "Complete: She ___ playing in the park.",
            options: ["is", "am", "are", "be"],
            correct: 0
        },
        {
            id: 14,
            topic: "Daily Action Words",
            question: "What do you do with your teeth after eating? 🦷",
            options: ["Wash", "Brush", "Run", "Sleep"],
            correct: 1
        },
        {
            id: 15,
            topic: "Feelings and Polite Words",
            question: "What do you say when someone says 'Thank you'? 😊",
            options: ["Please", "Sorry", "You're welcome", "Goodbye"],
            correct: 2
        }
    ],
    hard: [
        // Topic 1: Hello & Greetings
        {
            id: 1,
            topic: "Hello & Greetings",
            question: "Which is the most formal way to greet someone? 👔",
            options: ["Hey", "Hi", "Hello", "What's up"],
            correct: 2
        },
        // Topic 2: My Name & Age
        {
            id: 2,
            topic: "My Name & Age",
            question: "Complete: I ___ from London.",
            options: ["am", "is", "are", "come"],
            correct: 0
        },
        // Topic 3: Colors and Naming Things
        {
            id: 3,
            topic: "Colors and Naming Things",
            question: "What do you call a vehicle with four wheels? 🚗",
            options: ["Bicycle", "Car", "Bus", "Train"],
            correct: 1
        },
        // Topic 4: Numbers and Simple Sentences
        {
            id: 4,
            topic: "Numbers and Simple Sentences",
            question: "Complete: They ___ going to school.",
            options: ["is", "am", "are", "be"],
            correct: 2
        },
        // Topic 5: My Family
        {
            id: 5,
            topic: "My Family",
            question: "What do you call your mother's mother? 👵",
            options: ["Aunt", "Grandma", "Sister", "Cousin"],
            correct: 1
        },
        // Topic 6: Daily Action Words
        {
            id: 6,
            topic: "Daily Action Words",
            question: "What do you do when you are tired? 😴",
            options: ["Eat", "Play", "Sleep", "Run"],
            correct: 2
        },
        // Topic 7: Classroom English
        {
            id: 7,
            topic: "Classroom English",
            question: "What do you say when you finish your work? ✅",
            options: ["I need help", "I'm finished", "I don't know", "Can I go?"],
            correct: 1
        },
        // Topic 8: Describing Things
        {
            id: 8,
            topic: "Describing Things",
            question: "How do you describe something that moves very fast? ⚡",
            options: ["Slow", "Fast", "Big", "Small"],
            correct: 1
        },
        // Topic 9: Feelings and Polite Words
        {
            id: 9,
            topic: "Feelings and Polite Words",
            question: "What do you say when you are happy about something? 😄",
            options: ["I'm sad", "I'm happy", "I'm angry", "I'm tired"],
            correct: 1
        },
        // Topic 10: Practicing Small Conversations
        {
            id: 10,
            topic: "Practicing Small Conversations",
            question: "Complete the conversation: A: 'What's your favorite color?' B: '___'",
            options: ["My favorite color is blue", "I am fine", "Thank you", "Goodbye"],
            correct: 0
        },
        // Extra quizzes
        {
            id: 11,
            topic: "Hello & Greetings",
            question: "What do you say when you meet someone for the first time? 👋",
            options: ["See you later", "Nice to meet you", "Goodbye", "How are you?"],
            correct: 1
        },
        {
            id: 12,
            topic: "Colors and Naming Things",
            question: "What do you call a place where you learn? 🏫",
            options: ["Park", "School", "Home", "Shop"],
            correct: 1
        },
        {
            id: 13,
            topic: "Numbers and Simple Sentences",
            question: "Complete: We ___ friends.",
            options: ["is", "am", "are", "be"],
            correct: 2
        },
        {
            id: 14,
            topic: "Daily Action Words",
            question: "What do you do when you want to know something? 🤔",
            options: ["Ask", "Sleep", "Eat", "Run"],
            correct: 0
        },
        {
            id: 15,
            topic: "Feelings and Polite Words",
            question: "What do you say when you want to excuse yourself? 🚪",
            options: ["Thank you", "Excuse me", "Hello", "Goodbye"],
            correct: 1
        }
    ]
};

// Track scores for each level
const scores = {
    easy: { correct: 0, total: 0 },
    intermediate: { correct: 0, total: 0 },
    hard: { correct: 0, total: 0 }
};

// Current level
let currentLevel = 'easy';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeLevels();
    renderQuizzes('easy');
    setupLevelTabs();
    updateProgress();
});

// Initialize level switching
function initializeLevels() {
    const levelTabs = document.querySelectorAll('.level-tab');
    levelTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const level = this.getAttribute('data-level');
            switchLevel(level);
        });
    });
}

// Switch between levels
function switchLevel(level) {
    currentLevel = level;
    
    // Update active tab
    document.querySelectorAll('.level-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-level="${level}"]`).classList.add('active');
    
    // Update active level content
    document.querySelectorAll('.level-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${level}-level`).classList.add('active');
    
    // Render quizzes for the selected level
    renderQuizzes(level);
    updateProgress();
}

// Render quizzes for a level
function renderQuizzes(level) {
    const container = document.getElementById(`${level}-quizzes`);
    const quizzes = quizData[level];
    
    container.innerHTML = '';
    
    quizzes.forEach((quiz, index) => {
        const quizCard = document.createElement('div');
        quizCard.className = 'quiz-card';
        quizCard.setAttribute('data-quiz-id', quiz.id);
        
        quizCard.innerHTML = `
            <div class="quiz-header">
                <span class="quiz-number">Quiz ${index + 1}</span>
                <span class="quiz-topic">${quiz.topic}</span>
            </div>
            <h3 class="quiz-question">${quiz.question}</h3>
            <div class="quiz-options" data-correct="${quiz.correct}">
                ${quiz.options.map((option, optIndex) => `
                    <button class="quiz-option" data-option="${optIndex}">
                        ${option}
                    </button>
                `).join('')}
            </div>
            <div class="quiz-feedback"></div>
        `;
        
        container.appendChild(quizCard);
    });
    
    // Add event listeners to quiz options
    setupQuizListeners();
}

// Setup quiz option click listeners
function setupQuizListeners() {
    const quizCards = document.querySelectorAll('.quiz-card');
    
    quizCards.forEach(card => {
        const options = card.querySelectorAll('.quiz-option');
        const feedback = card.querySelector('.quiz-feedback');
        const optionsContainer = card.querySelector('.quiz-options');
        const correctAnswer = parseInt(optionsContainer.getAttribute('data-correct'));
        
        options.forEach((option, index) => {
            option.addEventListener('click', function() {
                // Disable all options in this quiz
                options.forEach(opt => {
                    opt.disabled = true;
                    opt.classList.remove('hover-effect');
                });
                
                // Check if answer is correct
                if (index === correctAnswer) {
                    this.classList.add('correct');
                    feedback.innerHTML = '✅ Correct! Great job! 🎉';
                    feedback.className = 'quiz-feedback correct-feedback';
                    scores[currentLevel].correct++;
                } else {
                    this.classList.add('incorrect');
                    // Highlight correct answer
                    options[correctAnswer].classList.add('correct');
                    feedback.innerHTML = '❌ Try again! The correct answer is highlighted.';
                    feedback.className = 'quiz-feedback incorrect-feedback';
                }
                
                scores[currentLevel].total++;
                updateProgress();
            });
        });
    });
}

// Setup level tab functionality
function setupLevelTabs() {
    // Already handled in initializeLevels
}

// Update progress indicator
function updateProgress() {
    const currentScore = scores[currentLevel];
    const scoreElement = document.getElementById('score');
    const totalElement = document.getElementById('total');
    const starsDisplay = document.getElementById('starsDisplay');
    
    if (scoreElement && totalElement) {
        scoreElement.textContent = currentScore.correct;
        totalElement.textContent = currentScore.total;
    }
    
    // Update stars based on percentage
    if (starsDisplay && currentScore.total > 0) {
        const percentage = (currentScore.correct / currentScore.total) * 100;
        let stars = '';
        if (percentage >= 80) {
            stars = '⭐⭐⭐';
        } else if (percentage >= 60) {
            stars = '⭐⭐';
        } else if (percentage >= 40) {
            stars = '⭐';
        } else {
            stars = '🌟';
        }
        starsDisplay.textContent = stars;
    }
}

