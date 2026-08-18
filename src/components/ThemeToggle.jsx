import { Moon,Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
export const ThemeToggle =()=>{

    const [isDarkMode,setIsDarkMOde]=useState(false);

    useEffect(()=>{
        const storedTheme=localStorage.getItem("theme");

        if(storedTheme==="dark"){
            setIsDarkMOde(true)
            document.documentElement.classList.add("dark")
        }
        else{
             localStorage.setItem("theme","dark")
            setIsDarkMOde(true)

        }
    },[])

    const toggleTheme=()=>{

        if(isDarkMode){
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme","light")
            setIsDarkMOde(false)
        }

        else{
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme","dark")
            setIsDarkMOde(true)
        }
    }

    return <button onClick={toggleTheme}  className={cn("fixed top-16 right-5  flex md:top-5 md:right-5  z-50 p-2 rounded-full transition-colors duration-300"
        ,"focus:outline-hidden"
    )}>
        
        {isDarkMode ? 
        
        <Sun className="h-6 w-6 text-yellow-300 "/> 
        
        :
        
        <Moon className="h-6 w-6 text-blue-300"/>
        
        }</button>
};