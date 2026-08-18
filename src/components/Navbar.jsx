import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu,X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10 ">
            <span className="text-glow text-foreground"> Praneeth's </span>
            Portfolio
          </span>
        </a>

        {/** DESKTOP NAVBAR */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              href={item.href}
              key={key}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 backdrop-blur-3xl"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/**MOBILE VIEW NAVBAR */}

        <button onClick={()=> setisMenuOpen((prev)=>!prev)}
         className="md:hidden p-2 text-foreground z-50"
         aria-label={isMenuOpen ? "Close Menu":"Open Menu"}>
          {isMenuOpen ? <X size ={24}/>: <Menu size={24}/>}
          
          </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col  space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                href={item.href}
                key={key}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setisMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
