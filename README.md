# Rishabh Shukla’s Portfolio Website

Welcome to the repository for my **Personal Portfolio** website—a sleek, single-page application showcasing my skills, projects, timeline, and more. This project uses **React**, **Tailwind CSS**, and **Framer Motion** to deliver a modern, dark-themed design with subtle animations.

<br/>

![Portfolio Preview](/public/preview.png)  
<sup><sub>*(last updated on February 15, 2025)*</sub></sup>

---

## ✨ Features

- **Interactive Dock Navigation**  
  A macOS-style dock at the bottom of the screen lets you smoothly navigate between sections.

- **Animated Hero & Split Text**  
  Eye-catching hero section featuring a custom text-splitting animation for a memorable first impression.

- **About & Technologies Sections**  
  Includes rotating text animations, a dark-themed design, and animated skill tiles using pixel effects.

- **Project Spotlight Cards**  
  Radial spotlight hover animations that highlight project cards, each with a “View Now” GitHub link button.

- **Framer Motion Animations**  
  Sections (About, Technologies, Timeline, etc.) fade/slide in on scroll for a polished user experience.

- **Timeline**  
  Displays your education and experience milestones in a vertical timeline with subtle entry animations.

- **Contact & Footer**  
  A built-in contact form and footer section with your details, ensuring users can easily reach out.

<br/>

---

## 📂 Project Structure

```
├─ src/
│   ├─ components/
│   │   ├─ Dock.jsx
│   │   ├─ SplashCursor.jsx
│   │   ├─ PixelCard.jsx
│   │   └─ ...
│   ├─ sections/
│   │   ├─ Hero.jsx
│   │   ├─ About.jsx
│   │   ├─ TechSection.jsx
│   │   ├─ Projects.jsx
│   │   ├─ Timeline.jsx
│   │   └─ Contact.jsx
│   ├─ App.jsx
│   ├─ index.css
│   └─ main.jsx
├─ public/
│   └─ resume.pdf (Optional Resume)
├─ package.json
├─ tailwind.config.js
└─ vite.config.js (or similar config)
```

- **`components/`**: Reusable UI elements (Dock, PixelCard, etc.)  
- **`sections/`**: Each major section of the one-page site (Hero, About, etc.)  
- **`App.jsx`**: Main layout combining all sections and the Dock.  
- **`index.css`** & **`tailwind.config.js`**: Tailwind CSS configuration and global styles.

<br/>


## ⚙️ Key Technologies

- **React**: A JavaScript library for building interactive user interfaces.  
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.  
- **Framer Motion**: For smooth, spring-based animations and scroll-triggered reveals.  
- **React Icons**: Collection of icons, including VSC, Fi, Fa, etc.  
- **Vite** (or CRA): A fast dev build tool (depending on your chosen config).

<br/>

---

## 🌟 Highlights

### 1. Interactive Dock
A macOS-inspired dock at the bottom of the screen to quickly jump between **Home**, **About**, **Technologies**, **Projects**, **Timeline**, and **Contact**.

### 2. Hero Section & Cursor Effects
Custom **SplitText** animation for the hero text.

### 3. Animated Timeline & Pixel Cards
- **Timeline**: Showcases education and career milestones with icons.  
- **PixelCard**: Hover effects that generate shimmering pixel grids in the background.

### 4. “Spotlight” Project Cards
Hovering over a project triggers a **radial gradient** effect that centers on the cursor, making each project visually “pop.”

### 5. Contact Form & Footer
Collect messages from potential clients or collaborators, and wrap things up with a minimal, dark-themed footer.

<br/>

---

## 🤝 Contributing

1. [Fork the repository](https://github.com/rishabh-ml/portfolio)  
2. Create a **feature branch** (`git checkout -b feature/my-feature`)  
3. Commit your changes (`git commit -m 'Add some feature'`)  
4. Push to the branch (`git push origin feature/my-feature`)  
5. Open a **Pull Request**  

Feel free to submit issues or pull requests for improvements!

<br/>

---

## 📧 Contact

- **Email**: rishabh@example.com  
- **LinkedIn**: [linkedin.com/in/rishabhshukla](https://www.linkedin.com/in/rishabh-shukla-439538349/)  
- **Twitter**: [@rishabhshukla](https://x.com/rishabh_ml_)

<br/>

<p align="center">
  <strong>Thank you for exploring my portfolio!</strong><br/>
  <em>If you find this useful or inspirational, consider giving a ⭐ on GitHub!</em>
</p>
