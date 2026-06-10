"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="font-serif text-5xl md:text-8xl mb-12 heading-underline heading-underline-center">Our Story</h1>
          <p className="text-foreground/60 font-light uppercase tracking-widest text-sm max-w-xl mx-auto mt-10">
            A journey of passion, precision, and culinary excellence.
          </p>
        </motion.div>

        {/* First Image Block */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2 }}
            className="w-full md:w-1/2 h-[40vh] md:h-[60vh] relative"
          >
            <Image
              src="/images/food_2.png"
              alt="Culinary Creation"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover rounded-sm"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 md:pr-12"
          >
            <h2 className="font-serif text-4xl mb-10 heading-underline">The Genesis</h2>
            <p className="font-light text-foreground/80 leading-relaxed mb-6 mt-8">
              Founded in 2018, Aurelia was born from a simple yet ambitious vision: to redefine the landscape of fine dining. We believe that a restaurant should be more than a place to eat; it should be a sanctuary where the senses are awakened and memories are forged.
            </p>
            <p className="font-light text-foreground/80 leading-relaxed">
              Our culinary philosophy is rooted in immense respect for our ingredients. We partner directly with local foragers, sustainable fisheries, and organic farms to source the absolute best produce available each season.
            </p>
          </motion.div>
        </div>

        {/* Quote Block */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center py-20 border-y border-foreground/10 mb-32"
        >
          <h3 className="font-serif text-3xl md:text-5xl leading-tight mb-8">
            "We don't just cook food. We distill nature's finest elements into unforgettable moments of pure joy."
          </h3>
          <p className="uppercase tracking-widest text-xs font-semibold text-accent">Chef Alessandro Rossi</p>
        </motion.div>

      </div>
    </div>
  );
}
