# EGU GPT English Practice Guide

A sophisticated, static multi-page website designed to guide students through structured English practice sessions using ChatGPT. The site features an elegant "Editorial/Academic" aesthetic with clear typography and easy-to-use prompt copy functionality.

**📍 Live Site:** [https://geomingical.github.io/EGU_student/](https://geomingical.github.io/EGU_student/)

## Project Overview

This site provides structured guidance on leveraging GPT for English language learning across four main phases:

- **Topic 1**: 素材輸入與草稿生成 (Material Input & Script Generation)
- **Topic 2**: 語音朗讀練習 (Voice-based Script Practice)
- **Topic 3**: 專有名詞與發音糾正 (Terminology & Pronunciation Drill)
- **Topic 4**: 角色扮演問答練習 (Role-play Q&A Simulation)

## Directory Structure

```
EGU_student/
├── index.html          # Homepage with topic overview and instructions
├── topic-1.html        # Material Input & Script Generation
├── topic-2.html        # Voice-based Script Practice
├── topic-3.html        # Terminology & Pronunciation Drill
├── topic-4.html        # Role-play Q&A Simulation
├── styles.css          # Global stylesheet (Editorial Aesthetic)
├── script.js           # Client-side JavaScript (Clipboard interactions)
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Running Locally

1. Navigate to the project directory:
   ```bash
   cd /Users/ming/Desktop/git_project/EGU_student
   ```

2. Open `index.html` in your browser:
   - **Using file protocol**: Double-click `index.html`
   - **Using a local server** (recommended):
     ```bash
     python3 -m http.server 8000
     ```
     Then visit `http://localhost:8000`

## Features

- **Distinctive UI/UX**: Implements an editorial, academic-deck aesthetic using Playfair Display and Source Serif 4.
- **Responsive Layout**: Adapts gracefully from desktop to mobile screens.
- **Interactive Prompt Cards**: Distinct visual cards with client-side "Copy to Clipboard" functionality and visual feedback.
- **Semantic HTML**: Valid, accessible HTML5 structure with proper ARIA labels.
- **Zero Dependencies**: Pure HTML, CSS, and JavaScript. No external frameworks or package managers required.

## Browser Compatibility

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android

## License

© 2025 EGU GPT English Practice Guide. Design for Learning.