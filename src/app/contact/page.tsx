"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="font-serif text-5xl md:text-8xl mb-12 heading-underline heading-underline-center">Reservations</h1>
          <p className="text-foreground/60 font-light uppercase tracking-widest text-sm max-w-xl mx-auto mt-10">
            Secure your table at Aurelia
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/3 space-y-12"
          >
            <div>
              <h3 className="font-serif text-2xl mb-8 heading-underline">Location</h3>
              <p className="font-light text-foreground/70 leading-relaxed mt-6">
                123 Culinary Avenue<br />
                New York, NY 10001<br />
                Valet parking available.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl mb-8 heading-underline">Hours</h3>
              <p className="font-light text-foreground/70 leading-relaxed mt-6">
                <span className="block mb-2">Mon - Thu: 5:00 PM - 10:00 PM</span>
                <span className="block mb-2">Fri - Sat: 5:00 PM - 11:00 PM</span>
                <span className="block">Sunday: 4:00 PM - 9:00 PM</span>
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-2xl mb-8 heading-underline">Contact</h3>
              <p className="font-light text-foreground/70 leading-relaxed mt-6">
                +1 (555) 123-4567<br />
                reservations@aurelia.com
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-2/3"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-foreground/50 font-semibold">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-accent transition-colors font-light" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-foreground/50 font-semibold">Email</label>
                  <input type="email" className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-accent transition-colors font-light" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-foreground/50 font-semibold">Date</label>
                  <input type="date" className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-accent transition-colors font-light" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-foreground/50 font-semibold">Guests</label>
                  <select className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-accent transition-colors font-light appearance-none rounded-none">
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5+ People</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2 pt-4">
                <label className="text-xs uppercase tracking-widest text-foreground/50 font-semibold">Special Requests</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-foreground/20 py-3 focus:outline-none focus:border-accent transition-colors font-light resize-none" placeholder="Dietary requirements, celebrations..." />
              </div>
              
              <button className="bg-foreground text-background px-10 py-4 uppercase tracking-widest text-sm hover:bg-accent hover:text-white transition-colors duration-300 w-full md:w-auto">
                Request Reservation
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
