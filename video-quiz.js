/* ============================================
   SpeakEasy - Video Lesson Page JavaScript
   Video Data and Quiz Functionality
   ============================================ */

// Video lesson data with quizzes
const videoLessons = {
    1: {
        title: "Lesson 1: Hello and Greetings 👋",
        description: "Learn how to say hello, goodbye, and greet your friends!",
        videoSrc: "https://player.vimeo.com/video/1162179869" , // YouTube video ID (placeholder)
        quizzes: [
            {
    id: 1,
    question: "What do we say when we meet someone?",
    options: ["Bye", "Hello", "Night"],
    correct: 1
},
{
    id: 2,
    question: "What do we say in the morning?",
    options: ["Good night", "Good morning", "Bye"],
    correct: 1
},
{
    id: 3,
    question: "“Hello, I am Sam.” is used for:",
    options: ["Saying bye", "Introducing yourself", "Asking a question"],
    correct: 1
},
{
    id: 4,
    question: "What do we say when we leave?",
    options: ["Hello", "Hi", "Bye"],
    correct: 2
}

        ]
    },
    2: {
        title: "Lesson 2: Framing Sentences",
        description: "Discover all the beautiful colors around you!",
        videoSrc: "https://player.vimeo.com/video/1162179981",
        quizzes: [
            {
    id: 1,
    question: "Choose the correct sentence:",
    options: ["I student am", "I am a student", "Am I student"],
    correct: 1
},
{
    id: 2,
    question: "Which sentence is correct?",
    options: ["Name my Vivan is", "My name is Vivan", "Name is my Vivan"],
    correct: 1
},
{
    id: 3,
    question: "“My ice-cream is melting.” is a:",
    options: ["Question", "Sentence", "Word"],
    correct: 1
},
{
    id: 4,
    question: "Which one is a sentence?",
    options: ["watching movie", "I watch movie.", "Movie watch"],
    correct: 1
}

        ]
    },
    3: {
        title: "Lesson 3: Colours & Naming Things",
        description: "Count from 1 to 10 and have fun with numbers!",
        videoSrc: "https://player.vimeo.com/video/1162180113",
        quizzes: [
            {
    id: 1,
    question: "What colour is an apple?",
    options: ["Blue", "Red", "Black"],
    correct: 1
},
{
    id: 2,
    question: "Choose the correct sentence:",
    options: ["The car is black.", "Car black is", "Black is car"],
    correct: 0
},
{
    id: 3,
    question: "Which word is a colour?",
    options: ["Bag", "Yellow", "Ball"],
    correct: 1
},
{
    id: 4,
    question: "“Blue bag” means:",
    options: ["Bag is blue", "Bag is big", "Bag is small"],
    correct: 0
}

        ]
    },
    4: {
        title: "Lesson 4: Numbers & Simple Sentences",
        description: "Meet all the amazing animals and learn their names!",
        videoSrc: "https://player.vimeo.com/video/1162180229",
        quizzes: [
            {
    id: 1,
    question: "Which number comes after Four?",
    options: ["One", "Five", "Four"],
    correct: 1
},
{
    id: 2,
    question: "Choose the correct sentence:",
    options: ["I have two apples.", "I two have apples.", "I apples two."],
    correct: 0
},
{
    id: 3,
    question: "How many books? 🎒🎒📚📚📚",
    options: ["Two", "Three", "Four"],
    correct: 1
},
{
    id: 4,
    question: "“Twelve pens” shows:",
    options: ["Colour", "Number", "Action"],
    correct: 1
}

        ]
    },
    5: {
        title: "Lesson 5: Is / Am / Are",
        description: "Learn words for mom, dad, sister, brother, and more!",
        videoSrc: "https://player.vimeo.com/video/1162279382",
        quizzes: [
            {
    id: 1,
    question: "I _ a student.",
    options: ["is", "am", "are"],
    correct: 1
},
{
    id: 2,
    question: "She _ my friend.",
    options: ["am", "are", "is"],
    correct: 2
},
{
    id: 3,
    question: "They _ dancing.",
    options: ["is", "am", "are"],
    correct: 2
},
{
    id: 4,
    question: "Which sentence is correct?",
    options: ["We is learning", "We am learning", "We are learning"],
    correct: 2
}

        ]
    },
    6: {
        title: "Lesson 6: Daily Action Words (Verbs)",
        description: "Yummy foods and how to say their names in English!",
        videoSrc: "https://player.vimeo.com/video/1162180466",
        quizzes: [
            {
    id: 1,
    question: "Which word shows action?",
    options: ["Ball", "Eat", "Red"],
    correct: 1
},
{
    id: 2,
    question: "Choose the correct sentence:",
    options: ["I food eat", "I eat food.", "Eat I food"],
    correct: 1
},
{
    id: 3,
    question: "What do we do at night?",
    options: ["Play cricket", "Sleep", "Eat lunch"],
    correct: 1
},
{
    id: 4,
    question: "“Drink” means:",
    options: ["To eat", "To sleep", "To have water"],
    correct: 2
}

        ]
    },
        7: {
    title: "Lesson 7: WH Questions",
    description: "Learn how to ask questions using who, what, when, where, why, and how",
    videoSrc: "https://player.vimeo.com/video/1162279568",
    quizzes: [
        {
    id: 1,
    question: "_____ is in your bag?",
    options: ["Who", "Where", "What"],
    correct: 2
},
{
    id: 2,
    question: "“___ is standing near the door?” Choose the correct word.",
    options: ["What", "Where", "Who"],
    correct: 2
},
{
    id: 3,
    question: "When answer is: “On the table.” Which is the correct question?",
    options: ["What is the table?", "Who is on the table?", "Where is the book?"],
    correct: 2
},
{
    id: 4,
    question: "Choose the correct pair:",
    options: ["What – place", "Who – thing", "Where – place"],
    correct: 2
}

    ]
},
    8: {
        title: "Lesson 8: Classroom English",
        description: "Learn about your eyes, nose, mouth, and more!",
        videoSrc: "https://player.vimeo.com/video/1162180566",
        quizzes: [
            {
    id: 1,
    question: "Teacher says: “_ your book.”",
    options: ["Close", "Open", "Throw"],
    correct: 1
},
{
    id: 2,
    question: "What do students do when teacher says “Sit down”?",
    options: ["Stand", "Sit", "Run"],
    correct: 1
},
{
    id: 3,
    question: "“This is my book.” is used in:",
    options: ["Playground", "Classroom", "Market"],
    correct: 1
},
{
    id: 4,
    question: "Which one of these does not belong inside a classroom?",
    options: ["Book", "Bench", "Ball"],
    correct: 2
}

        ]
    },
    9: {
        title: "Lesson 9: Describing Things (Adjectives)",
        description: "Run, jump, dance! Learn action words!",
        videoSrc: "https://player.vimeo.com/video/1162180695",
        quizzes: [
            {
    id: 1,
    question: "Which word describes size?",
    options: ["Red", "Big", "Water"],
    correct: 1
},
{
    id: 2,
    question: "You hold ice in your hand. How does it feel?",
    options: ["Hot", "Cold", "Heavy"],
    correct: 1
},
{
    id: 3,
    question: "Which word describes feeling?",
    options: ["Happy", "Book", "Ball"],
    correct: 0
},
{
    id: 4,
    question: "“Small” is opposite of:",
    options: ["Big", "Red", "Happy"],
    correct: 0
}

        ]
    },
    10: {
        title: "Lesson 10: Feelings & Polite Words",
        description: "Sunny, rainy, or snowy? Learn weather words!",
        videoSrc: "https://player.vimeo.com/video/1162180748",
        quizzes: [
            {
    id: 1,
    question: "Which word shows feeling?",
    options: ["Happy", "Table", "Blue"],
    correct: 0
},
{
    id: 2,
    question: "What do we say to be polite?",
    options: ["Give", "Please", "Fast"],
    correct: 1
},
{
    id: 3,
    question: "What do we say after help?",
    options: ["Sorry", "Thank you", "Hello"],
    correct: 1
},
{
    id: 4,
    question: "“I am sad” shows:",
    options: ["Colour", "Feeling", "Action"],
    correct: 1
}

        ]
    },
    11: {
        title: "Lesson 11: Small Conversation – Teacher & Student",
        description: "Put words together to make sentences!",
        videoSrc: "https://player.vimeo.com/video/1162297875",
        quizzes: [
            {
    id: 1,
    question: "Teacher says: “Why are you late?” Best student reply is:",
    options: ["Late bus.", "Because I missed the bus.", "I am late."],
    correct: 1
},
{
    id: 2,
    question: "Teacher asks: “Did you do homework?” Correct reply:",
    options: ["Yes, I have.", "Homework.", "No care."],
    correct: 0
},
{
    id: 3,
    question: "Which is polite?",
    options: ["Give book", "Please give me the book.", "Book now"],
    correct: 1
},
{
    id: 4,
    question: "Who is in class with the teacher?",
    options: ["Student", "Parent", "Driver"],
    correct: 0
}

        ]
    },
    12: {
    title: "Lesson 12: Small Conversation – Two Friends",
    description: "Learn how friends talk politely and kindly!",
    videoSrc: "https://player.vimeo.com/video/1162297977",
    quizzes: [
        {
            id: 1,
            question: "Friend: Look at my drawing! You say:",
            options: ["Wow, it’s nice!", "Go", "Sit"],
            correct: 0
        },
        {
            id: 2,
            question: "Friend asks: “How are you?” Correct reply:",
            options: ["I fine.", "I am fine.", "Fine is."],
            correct: 1
        },
        {
            id: 3,
            question: "Which is friendly?",
            options: ["Don’t talk", "Thank you", "Let’s play."],
            correct: 2
        },
        {
            id: 4,
            question: "When friends leave, they say:",
            options: ["Good night", "Bye", "Sorry"],
            correct: 1
        }
    ]
},


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
    videoPlayer.src = lesson.videoSrc + "?autoplay=0&title=0&byline=0&portrait=0";

    
    // Button logic
    const totalLessons = Object.keys(videoLessons).length;

    const prevBtn = document.getElementById("prevLessonBtn");
    const nextBtn = document.getElementById("nextLessonBtn");

    const current = parseInt(lessonId);

    // Previous button
    if (current > 1) {
        prevBtn.href = `video-lesson.html?id=${current - 1}`;
        prevBtn.style.display = "inline-block";
    } else {
        prevBtn.style.display = "none";
    }

    // Next button
    if (current < totalLessons) {
        nextBtn.href = `video-lesson.html?id=${current + 1}`;
        nextBtn.style.display = "inline-block";
    } else {
        nextBtn.style.display = "none";
    }

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
                    feedback.innerHTML = '❌ Try again! The correct answer is highlighted. ';
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
        message = 'Good job! Keep practicing and you\'ll get even better!';
        emoji = '👍';
    } else {
        message = 'Nice try! Watch the video again and try once more! 📚';
        emoji = '';
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

