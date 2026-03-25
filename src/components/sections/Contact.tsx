import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { Button } from "../ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm md:text-base font-bold text-[#F5C800] mb-4 uppercase tracking-[0.3em] font-sans">RESERVE YOUR DRIVE</h2>
            <div className="h-px w-24 bg-[#F5C800] mx-auto mb-6"></div>
            <p className="text-white/60 max-w-2xl mx-auto font-sans">
              Ready to experience Pristina in premium style? Contact us today to secure your vehicle. Our 24/7 concierge is standing by.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="bg-card rounded-none p-8 text-center hover:-translate-y-2 transition-transform duration-300 relative"
          >
            <div className="w-16 h-16 bg-[#F5C800] rounded-full flex items-center justify-center mx-auto mb-6 text-black shadow-lg shadow-[#F5C800]/20">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2 uppercase tracking-wide">Call Us 24/7</h3>
            <p className="text-white/60 mb-6 font-sans font-light text-sm">Immediate assistance and booking</p>
            <a href="tel:049202929" className="text-3xl font-[family-name:--font-hero] text-[#F5C800] hover:text-white transition-colors tracking-widest font-bold">
              049 20 29 29
            </a>
            <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-[#F5C800] hidden lg:block opacity-30"></div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bg-card rounded-none p-8 text-center hover:-translate-y-2 transition-transform duration-300 relative"
          >
            <div className="w-16 h-16 bg-[#F5C800] rounded-full flex items-center justify-center mx-auto mb-6 text-black shadow-lg shadow-[#F5C800]/20">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2 uppercase tracking-wide">Location</h3>
            <p className="text-white/60 mb-6 font-sans font-light text-sm">Pick up your premium vehicle</p>
            <p className="text-lg font-sans font-medium text-white/90">
              Jusuf Gervalla<br/>
              Pristina, Kosovo
            </p>
            <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-[#F5C800] hidden lg:block opacity-30"></div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="bg-card rounded-none p-8 text-center hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="w-16 h-16 bg-[#F5C800] rounded-full flex items-center justify-center mx-auto mb-6 text-black shadow-lg shadow-[#F5C800]/20">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2 uppercase tracking-wide">Email Us</h3>
            <p className="text-white/60 mb-6 font-sans font-light text-sm">For corporate and long-term inquiries</p>
            <a href="mailto:info@premiumrentacarks.com" className="text-lg font-sans font-medium text-[#F5C800] hover:text-white transition-colors break-all">
              info@premiumrentacarks.com
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
           <a 
             href="https://instagram.com/premium_rentacar" 
             target="_blank" 
             rel="noreferrer"
           >
             <Button variant="outline" size="lg" className="gap-3 font-sans">
               <Instagram className="w-5 h-5" />
               FOLLOW US ON INSTAGRAM
             </Button>
           </a>
        </motion.div>
      </div>
    </section>
  );
}
