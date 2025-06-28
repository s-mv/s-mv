import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 80;
  const deletingSpeed = 50;

  const greetings = [
    { text: "Hello there!", time: 4000 },
    { text: "Привет!", time: 1200 },
    { text: "Hello there!", time: 4000 },
    { text: "नमस्कार!", time: 1200 },
    { text: "Hello there!", time: 4000 },
    { text: "¡Hola!", time: 1200 },
    { text: "Hello there!", time: 4000 },
    { text: "नमस्ते!", time: 1200 },
  ];

  useEffect(() => {
    if (isTyping) {
      if (charIndex < greetings[currentIndex].text.length) {
        const typingTimer = setTimeout(() => {
          setDisplayText(greetings[currentIndex].text.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);

        return () => clearTimeout(typingTimer);
      } else {
        const pauseTimer = setTimeout(() => {
          setIsTyping(false);
        }, greetings[currentIndex].time);

        return () => clearTimeout(pauseTimer);
      }
    } else {
      if (charIndex > 0) {
        const deletingTimer = setTimeout(() => {
          setDisplayText(greetings[currentIndex].text.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, deletingSpeed);

        return () => clearTimeout(deletingTimer);
      } else {
        setIsTyping(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
      }
    }
  }, [currentIndex, charIndex, isTyping]);

  return (
    <section className="py-20">
      <h1 className="text-4xl font-bold mb-2">{displayText}<span className="text-purple-500 animate-pulse">|</span></h1>
      <h2 className="text-2xl text-green-400 mb-4">It's smv, also known as Shreerang Vaidya.</h2>
      <p className="text-gray-300 mb-8 max-w-2xl">
        I love to tinker around with compilers and systems, but I'm interested in all things tech.
      </p>

      <div className="flex flex-wrap gap-3">
        <a
          href="#socials"
          className="px-4 py-2 bg-purple-700 hover:bg-purple-600 transition-colors rounded inline-block"
        >
          Connect
        </a>
        <a
          href="#projects"
          className="px-4 py-2 bg-transparent border border-purple-700 hover:bg-purple-900 transition-colors rounded inline-block"
        >
          See My Work
        </a>
        <a
          href="#skills"
          className="px-4 py-2 bg-transparent border border-purple-700 hover:bg-purple-900 transition-colors rounded inline-block"
        >
          My Skills
        </a>
      </div>
    </section>
  )
}
