"use client";

import TransitionLink from "@/components/ui/TransitionLink";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const links = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden && !isMobileOpen ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled || isMobileOpen
          ? "bg-background/90 backdrop-blur-md py-4 shadow-sm text-foreground" 
          : (pathname === "/" ? "bg-transparent py-6 text-white" : "bg-transparent py-6 text-foreground")
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <TransitionLink href="/" className="font-serif text-2xl tracking-tight font-semibold">
          Aurelia
        </TransitionLink>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <TransitionLink
              key={link.name}
              href={link.path}
              className="relative text-sm tracking-widest uppercase font-medium hover:text-accent transition-colors group opacity-80 hover:opacity-100"
            >
              {link.name}
              {pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 right-0 h-[2px] bg-accent"
                  initial={false}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </TransitionLink>
          ))}
        </div>
        
        {/* Mobile menu trigger */}
        <button 
          className="md:hidden flex flex-col gap-[5px] p-2 z-50 relative"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <motion.div 
            animate={isMobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-current transition-colors" 
          />
          <motion.div 
            animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-[2px] bg-current transition-colors" 
          />
          <motion.div 
            animate={isMobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="w-6 h-[2px] bg-current transition-colors" 
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-full h-[100dvh] bg-background flex flex-col items-center justify-center gap-8 md:hidden text-foreground -z-10"
          >
            {links.map((link) => (
              <TransitionLink
                key={link.name}
                href={link.path}
                className="text-3xl font-serif tracking-widest uppercase hover:text-accent transition-colors"
              >
                {link.name}
              </TransitionLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
