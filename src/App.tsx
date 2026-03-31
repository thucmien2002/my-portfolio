import { useLayoutEffect, useState } from 'react';
import Navbar from './components/Navbar'
import About from './sections/About';
import Contact from './sections/Contact';
import Hero from './sections/Hero'
import Projects from './sections/Projects';

function App() {

  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useLayoutEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);


  return (
    <div className="min-h-screen font-sans bg-white text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
