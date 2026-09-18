# Assignment Helper (Text to Handwriting)

![Assignment Helper Preview](images/apple-touch-icon.png)

A comprehensive web-based tool designed to seamlessly convert typed text into highly realistic images that look like human handwriting. Perfect for students, educators, and anyone who needs to generate handwritten assignments, notes, letters, or documents directly from digital text in seconds!

## Comprehensive Feature Set

### Handwriting Customization
- **Pre-loaded Fonts:** Choose from a wide variety of built-in handwriting styles including *Homemade Apple*, *Caveat*, *Liu Jian Mao Cao*, *Dreamer*, *Indie Flower*, *Handlee*, and *Des Montilles*.
- **Upload Custom Fonts:** Have your own handwriting digitized? Easily upload your personal `.ttf` or `.otf` font file and generate assignments in your own handwriting.
- **Dynamic Adjustments:** 
  - Change **Font Size**, **Letter Spacing**, and **Word Spacing** to mimic natural human irregularities.
  - Pick your **Ink Color** (Standard Blue, Deep Black, or Red).
  - Adjust the **Heading Scale** and vertical position/padding.

### Realistic Paper Elements
- **Paper Styles:** Toggle realistic paper **Margins** and **Background Lines**.
- **Visual Effects:** Apply post-processing visual effects like **Scanner Mode** (adds dynamic contrast and gradient shading to simulate a scanned document) or **Shadows** (adds ambient lighting overlays).
- **Resolution Control:** Render your final output in Very Low to Very High resolutions.

### AI Paraphraser
- Don't want to get caught copying? Use the built-in **AI Paraphraser** (powered by DeepSeek / OpenRouter API) to completely rewrite your text to make it sound natural and human-like before it gets converted into handwriting.

### Interactive Drawing Mode
- Need to include a diagram in your assignment? Open the **Drawing Canvas**, sketch out your diagram with your mouse or touch screen, and inject it directly into the handwritten paper.

### Export & Download Options
- Download individual generated pages as high-quality **JPEG images**.
- Compile and download all your generated pages into a single **PDF document** for easy submission.

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need the following installed on your computer:
- **[Node.js](https://nodejs.org/)** (v14 or higher is recommended)
- **Git** (for version control and cloning)

### 1. Installation

Open your terminal or command prompt and run the following commands:

```bash
# Clone the repository
git clone <YOUR_REPO_URL>

# Navigate into the project directory
cd Assignment-Helper-main

# Install the necessary dependencies
npm install
```

### 2. Setting Up the AI Paraphraser (Optional)
If you wish to use the AI Paraphraser feature, you will need to provide an API key. 
1. Open `js/app.mjs` in your code editor.
2. Locate the `fetch` call in the `#paraphrase-button` event listener (around line 197).
3. Replace `YOUR_API_KEY` with your actual OpenRouter API key.
*(Note: Never push your real API key to a public GitHub repository. It is highly recommended to proxy this request through a secure backend in a production environment).*

### 3. Running the Project Locally

The project includes a simple local development server. To start the application:

```bash
npm run dev
```

This will launch the application on `http://localhost:3000` (or `5000` depending on the `serve` package defaults).

**Alternative Methods:**
If you don't want to use Node/NPM, you can serve the static files using Python:
```bash
python -m http.server 3000
```
Then navigate to `http://localhost:3000` in your browser.

---

## How to Use the Application

1. **Input Data:** Paste your assignment text into the main content editable area. Ensure you fill out the Name, Roll Number, and Date at the top of the page.
2. **Paraphrase (Optional):** Paste text into the AI Paraphraser sidebar, click "Paraphrase", and copy the humanized text into your main paper.
3. **Customize:** Use the right sidebar to tweak the handwriting font, ink color, spacing, and page effects until it looks authentic.
4. **Draw (Optional):** Click the "Draw" button to sketch any required diagrams. Click "Add to Paper" when finished.
5. **Generate:** Click the **"Generate Image"** button. The app will calculate the height of your text and automatically split it into multiple pages if necessary.
6. **Download:** Review your generated images at the bottom of the screen. You can download them individually or click **"Download All Images as PDF"**.

---

## Deployment Guide

Because this project is entirely frontend-based (HTML, CSS, Vanilla JS), it can be deployed easily to any static hosting provider for free.

**Deploying to GitHub Pages:**
1. Make sure your code is pushed to your GitHub repository.
2. Go to your repository settings > **Pages**.
3. Under "Source", select the `main` branch and `/ (root)` folder.
4. Click Save. Your app will be live in a few minutes!

**Deploying to Vercel (Recommended):**
1. Run `npx vercel` in your terminal inside the project directory.
2. Follow the prompts to deploy instantly.

---

## How to Change the Git Repository

If you downloaded this code and want to link it to your own brand new GitHub repository, run these commands:

```bash
# 1. Remove the link to the original remote repository
git remote remove origin

# 2. Add your new repository URL (replace with your actual link)
git remote add origin https://github.com/MuhammadAbdullah20111/Assignment-Helper/

# 3. Rename the default branch to 'main' (if it isn't already)
git branch -M main

# 4. Push all your code to the new repository
git push -u origin main
```

---

## Built With

- **Vanilla JavaScript, HTML5, CSS3:** For the core application and styling.
- **[html2canvas](https://html2canvas.hertzen.com/):** For rendering the DOM elements (the paper and text) into downloadable images.
- **[jsPDF](https://github.com/parallax/jsPDF):** For compiling the generated images into a standard PDF document.
- **OpenRouter API:** Powering the AI Paraphraser logic.

---

## License

This project is open-source and available under the **MIT License**. Feel free to modify, distribute, and enhance it! If you find it helpful, please consider starring the repository.
