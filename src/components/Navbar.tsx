"use client"

import SunIcon from '@/components/icons/SunIcon'
import MoonIcon from '@/components/icons/MoonIcon'
import { useState, useEffect } from 'react'

const initialThemeState = () => {
  if(typeof window !== "undefined"){
    if(localStorage.getItem("theme")){
      return localStorage.getItem("theme") as "light" | "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "dark";
};

const Navbar = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(initialThemeState());

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
   if(theme === "dark"){
    document.documentElement.classList.add("dark")
   }else {
    document.documentElement.classList.remove("dark")
  }
  localStorage.setItem("theme", theme)
  }, [theme]);
  
  if (!hasMounted) {
    return <>Cargando...</>;
  }

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <header className='flex items-center mb-10 space-x-2'>
      <h1 className='flex-grow text-3xl font-bold dark:text-white text-[#212129]'>devfinder</h1>
     
        <span className="dark:text-white uppercase text-[#717c94] font-extrabold">
          {theme === "light" ? "dark" : "light"}
        </span>
        <button onClick={handleTheme}>
          {theme === "light" ? (
              <MoonIcon
                className='dark:fill-white fill-[#717c94]'
                height={25}
              />
            ) : (
              <SunIcon 
                width={25} 
                className='dark:fill-white fill-[#717c94]'
              />
            )}
        </button>
      
    </header>
  )
}
export default Navbar