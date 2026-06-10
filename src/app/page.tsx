"use client";

import Image from "next/image";
import TransitionLink from "@/components/ui/TransitionLink";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div style={{ opacity }} className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Aurelia Interior"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-sm tracking-[0.3em] uppercase mb-6"
          >
            Taste the Extraordinary
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-8xl lg:text-9xl tracking-tight mb-8"
          >
            Aurelia
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <TransitionLink
              href="/menu"
              className="inline-block border border-white/50 px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-500"
            >
              Discover Menu
            </TransitionLink>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Content */}
        {/* Philosophy Section */}
        <section className="py-32 px-6 md:px-12 bg-background relative z-20 overflow-hidden">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl mb-12 heading-underline heading-underline-center">Culinary Poetry</h2>
              <p className="text-lg md:text-xl font-light leading-relaxed text-foreground/80 mt-12">
                At Aurelia, we believe dining is an art form. Every dish is a carefully crafted narrative, blending local terroir with avant-garde techniques to create an unforgettable symphony of flavors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Dish */}
        <section className="py-20 px-6 md:px-12 bg-background overflow-hidden">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1 }}
              className="w-full md:w-1/2 relative h-[50vh] md:h-[70vh]"
            >
              <Image
                src="/images/food_1.png"
                alt="Signature Dish"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-sm"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <h3 className="uppercase tracking-widest text-xs text-accent mb-4 font-semibold">Signature</h3>
              <h2 className="font-serif text-4xl md:text-5xl mb-8 heading-underline">Ocean&apos;s Whisper</h2>
              <p className="font-light text-foreground/70 mb-8 mt-10 leading-relaxed">
                Diver scallops seared to perfection, resting on a bed of squid ink risotto, delicately garnished with sea foam and micro sorrel. A true testament to our commitment to the sea.
              </p>
              <TransitionLink href="/menu" className="group flex items-center gap-4 text-sm uppercase tracking-widest font-medium">
                <span className="group-hover:text-accent transition-colors">View full menu</span>
                <span className="block w-12 h-[1px] bg-foreground group-hover:bg-accent group-hover:w-16 transition-all duration-300" />
              </TransitionLink>
            </motion.div>
          </div>
        </section>
    </div>
  );
}
