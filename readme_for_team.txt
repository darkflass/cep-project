SpeakEasy – Learn English the Fun Way!

SpeakEasy is a child-friendly English learning web app designed to help kids learn English through videos, quizzes, and interactive lessons — completely free.

It is built as a static website and works perfectly on Netlify, GitHub Pages, or any normal web server.

--------------------------------------------------
FEATURES
--------------------------------------------------
• Video-based lessons (Vimeo hosted)
• Interactive quizzes after every lesson
• Progress based navigation
• Light & Dark mode
• Mobile friendly design
• Fast and lightweight

--------------------------------------------------
PROJECT STRUCTURE
--------------------------------------------------
/SpeakEasy
│
├── index.html
├── courses.html
├── video-lesson.html
├── lessons.html
├── about.html
├── contact.html
│
├── style.css
├── script.js
├── lessons.js
├── video-quiz.js
│
├── thumbnails/
└── videos/ (unused – Vimeo is used instead)

--------------------------------------------------
HOW VIDEOS WORK
--------------------------------------------------
Videos are embedded from Vimeo using iframe links.

Each lesson video is stored inside:
video-quiz.js → videoLessons

Example:
videoSrc: "https://player.vimeo.com/video/1149690739"

The player uses iframe so there is:
• No heavy video hosting
• No bandwidth cost
• No direct video downloads
• Fast streaming

--------------------------------------------------
HOW TO CHANGE A VIDEO
--------------------------------------------------
Open video-quiz.js

Find:
videoSrc: "https://player.vimeo.com/video/1149690739"

Replace with your own Vimeo embed link.

--------------------------------------------------
HOW TO CHANGE THUMBNAILS
--------------------------------------------------
Open:
courses.html

Find:
<img src="thumbnails/lesson1.jpg">

To change:
1. Put your image inside /thumbnails/
2. Rename it (example: animals.jpg)
3. Update:
<img src="thumbnails/animals.jpg">

--------------------------------------------------
HOW TO CHANGE TITLES & DESCRIPTIONS
--------------------------------------------------
You must change them in two places.

Courses page:
courses.html

<h3>Lesson 1: Hello and Greetings</h3>
<p>Learn how to say hello...</p>

Video page:
video-quiz.js

title: "Lesson 1: Hello and Greetings"
description: "Learn how to say hello..."

Both must match.

--------------------------------------------------
LESSON LINKING SYSTEM
--------------------------------------------------
Lessons use numbers:
video-lesson.html?id=1
video-lesson.html?id=2

So lesson 1 in courses.html must match lesson 1 in video-quiz.js

--------------------------------------------------
HOW QUIZZES WORK
--------------------------------------------------
Each lesson has 3 questions inside video-quiz.js.

Example:
{
 question: "What color is the apple?",
 options: ["Red","Blue"],
 correct: 0
}

The system:
• Checks answers
• Shows results
• Allows retry

--------------------------------------------------
DARK MODE
--------------------------------------------------
Theme is stored using localStorage.
The theme switch works on all pages.

--------------------------------------------------
RUN LOCALLY
--------------------------------------------------
Just open index.html
Or run:
python -m http.server

Then open:
http://localhost:8000

--------------------------------------------------
DEPLOYMENT
--------------------------------------------------
Works on:
• Netlify
• GitHub Pages
• Any static hosting

--------------------------------------------------
WHY VIMEO
--------------------------------------------------
• No bandwidth cost
• No piracy
• High quality streaming
• Works on all devices

--------------------------------------------------
MADE WITH LOVE FOR KIDS
--------------------------------------------------
