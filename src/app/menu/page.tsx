"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Menu() {
  const categories = [
    {
      title: "Starters",
      image: "/images/food_2.png", // Reusing the artisan cocktail/small dish image
      items: [
        { name: "Truffle Arancini", price: "24", description: "Wild mushroom, black truffle, aged parmesan foam" },
        { name: "Wagyu Carpaccio", price: "32", description: "Caper berry, quail egg, smoked olive oil, micro arugula" },
        { name: "Lobster Bisque", price: "28", description: "Butter-poached lobster, cognac cream, chervil" }
      ]
    },
    {
      title: "Mains",
      image: "/images/food_1.png",
      items: [
        { name: "Pan-Seared Halibut", price: "52", description: "Saffron beurre blanc, asparagus puree, fingerling potatoes" },
        { name: "Duck À L'Orange", price: "48", description: "Dry-aged duck breast, grand marnier glaze, endive" },
        { name: "A5 Kobe Ribeye", price: "120", description: "Charred broccolini, bone marrow jus, truffle mash" }
      ]
    },
    {
      title: "Desserts",
      image: "/images/hero.png", // Using the elegant interior/ambient shot for desserts
      items: [
        { name: "Valrhona Chocolate Soufflé", price: "22", description: "Madagascar vanilla bean anglaise" },
        { name: "Lemon Basil Tart", price: "18", description: "Torched meringue, candied zest" }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <h1 className="font-serif text-5xl md:text-8xl mb-6 heading-underline heading-underline-center">Menu</h1>
          <p className="text-foreground/60 font-light uppercase tracking-widest text-sm mt-10">Autumn / Winter Collection</p>
        </motion.div>

        <div className="space-y-40">
          {categories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={cn(
                "flex flex-col gap-16 items-center",
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* Category Image */}
              <div className="w-full md:w-1/2 relative h-[40vh] md:h-[60vh] rounded-sm overflow-hidden group">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={idx === 0}
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* Category Items */}
              <div className="w-full md:w-1/2 md:px-12">
                <h2 className="font-serif text-5xl mb-12 heading-underline">
                  {category.title}
                </h2>
                <div className="space-y-12 mt-10">
                  {category.items.map((item, i) => (
                    <div key={item.name} className="group cursor-pointer">
                      <div className="flex justify-between items-baseline mb-2">
                        <h3 className="text-xl md:text-2xl font-serif group-hover:text-accent transition-colors">{item.name}</h3>
                        <div className="flex-1 mx-6 border-b border-dotted border-foreground/20" />
                        <span className="text-xl font-light">${item.price}</span>
                      </div>
                      <p className="text-foreground/60 font-light text-sm md:text-base">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
