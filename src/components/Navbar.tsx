import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Fleet", href: "#fleet" },
    { name: "Why Us", href: "#why-us" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-white/5 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-3 group">
              <img 
                src="/logo.jpeg" 
                alt="Premium Rent a Car Logo" 
                className="h-12 w-12 rounded-full object-cover p-[2px] bg-[#F5C800] group-hover:scale-105 transition-transform"
              />
              <div className="hidden sm:block">
                <h1 className="font-display text-2xl font-bold tracking-[0.2em] text-[#F5C800] uppercase">
                  PREMIUM
                </h1>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-sans">Rent a Car</p>
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-[#F5C800] transition-colors uppercase tracking-widest font-sans"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:049202929" className="flex items-center gap-2 text-white/80 hover:text-[#F5C800] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wider font-sans">049 20 29 29</span>
            </a>
            <a href="#contact">
              <Button variant="gold" className="uppercase tracking-widest text-xs font-sans">
                Reserve Now
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-[#F5C800] transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-96 py-4" : "max-h-0"
        )}
      >
        <div className="flex flex-col space-y-4 px-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-white hover:text-[#F5C800] transition-colors uppercase tracking-widest py-2 border-b border-white/5 font-sans"
            >
              {link.name}
            </a>
          ))}
          <a href="tel:049202929" className="flex items-center gap-2 text-[#F5C800] py-2">
            <Phone className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wider font-sans">049 20 29 29</span>
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
            <Button variant="gold" className="w-full uppercase tracking-widest text-xs mt-2 font-sans">
              Reserve Now
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
