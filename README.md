# ⏱️ Stopwatch App

A modern, responsive, and professional **Stopwatch App** built using **HTML5, CSS3, and Vanilla JavaScript**. The application provides accurate time tracking with support for **Hours, Minutes, Seconds, and Milliseconds**, along with lap recording, pause/resume functionality, and automatic identification of the fastest and slowest laps.

Designed with a beautiful **glassmorphism UI**, animated gradient background, and smooth interactions, this project is beginner-friendly while showcasing modern JavaScript concepts and responsive web design.

---

## ✨ Features

- ⏱️ Accurate stopwatch with **HH:MM:SS:MS** format
- ▶️ Start stopwatch
- ⏸️ Pause stopwatch
- ▶️ Resume stopwatch
- 🔄 Reset stopwatch
- 🏁 Record unlimited lap times
- 📋 Scrollable lap history
- ⚡ Automatically highlights the **Fastest Lap**
- 🐢 Automatically highlights the **Slowest Lap**
- 🚫 Prevents multiple timers from running simultaneously
- 🔒 Smart button enable/disable based on stopwatch state
- 🎨 Modern Glassmorphism Card Design
- 🌈 Beautiful Animated Gradient Background
- ✨ Smooth hover effects and button animations
- 📱 Fully responsive for desktop, tablet, and mobile devices
- 🚀 Built using pure HTML, CSS, and JavaScript (No Frameworks)

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

---

## 📁 Project Structure

```text
stopwatch-app/
│── index.html
│── style.css
│── script.js
│── README.md
```

---

## 🚀 Installation & Usage

1. Clone or download this repository.

2. Open the project folder.

3. Open `index.html` in any modern web browser.

4. Use the available controls:

   - ▶️ **Start** — Start the stopwatch.
   - ⏸️ **Pause** — Pause the current timer.
   - ▶️ **Resume** — Continue from the paused time.
   - 🏁 **Lap** — Record the current stopwatch time.
   - 🔄 **Reset** — Reset the stopwatch and clear all laps.

5. View recorded laps in the scrollable **Lap History** section.

6. The application automatically highlights:

   - ⚡ Fastest Lap
   - 🐢 Slowest Lap

---

## ⚙️ How It Works

The stopwatch uses the browser's **`requestAnimationFrame()`** API for smooth and accurate timing.

Each recorded lap is stored inside a JavaScript array, and the application automatically compares all lap times to determine the fastest and slowest laps.

Time is displayed in the following format:

```text
HH : MM : SS : MS
```

Example:

```text
01 : 15 : 42 : 357
```

---

## 🔮 Future Improvements

- 🌙 Dark / Light Mode
- 💾 Save Lap History using Local Storage
- 📤 Export Lap Times as CSV
- 📄 Export Results as PDF
- 🔊 Sound Effects
- 🎯 Keyboard Shortcuts
- 📊 Statistics (Average, Fastest & Slowest Lap)
- 🏆 Best Personal Record Tracking
- 📱 Progressive Web App (PWA)
- 🌍 Multi-language Support

---

## 👨‍💻 Author

**M Mubbashir Idrees**

- 🌐 **GitHub:** https://github.com/mubbashirdevsite

---

## 🤝 Contributing

Contributions, suggestions, and feature requests are welcome.

Feel free to fork this repository and submit a pull request to improve the project.

---

## 📄 License

This project is open-source and available for educational, personal, and portfolio purposes.

---

⭐ **If you found this project helpful, don't forget to give it a Star on GitHub!**