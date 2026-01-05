
## 1. Overview of Processing and p5.js

Processing is an open-source programming language and development environment initiated by Casey Reas and Ben Fry in 2001. It was designed to make visual arts and interactive design accessible to programmers, artists, designers, and educators through simplified syntax and immediate visual feedback.

**p5.js** is the official JavaScript port of Processing, maintained by the Processing Foundation. It runs natively in web browsers, enabling cross-platform deployment without additional software installation. Key advantages include:
- Direct integration with HTML/CSS/JavaScript ecosystems.
- Instant preview via local servers.
- Extensive community libraries for sound, video, machine learning, and physics.
- Excellent compatibility with modern development tools such as Visual Studio Code.

As of January 2026, p5.js version 1.9+ remains the standard for web-based creative coding.

## 2. Setting Up p5.js in Visual Studio Code

Visual Studio Code offers superior debugging, IntelliSense, and extension support compared to the traditional Processing IDE, making it the preferred editor for p5.js development.

### Step-by-Step Configuration

1. **Install VS Code Extensions** (recommended):
   - **p5.vscode** by Sam Lavigne: Provides syntax highlighting, code snippets, and a built-in preview server.
   - **Live Server** by Ritwick Dey: For instant browser reloading.
   - **ESLint** (optional): For JavaScript best practices.

2. **Create a New Project Folder** and add these files:

**index.html** (HTML host file)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>p5.js Processing Sketch</title>
    <!-- Load p5.js from CDN (latest version) -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js"></script>
    <!-- Load your sketch -->
    <script src="sketch.js" defer></script>
    <style>
        body { margin: 0; padding: 0; background: #f0f0f0; }
        canvas { display: block; }
    </style>
</head>
<body>
</body>
</html>