import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WhyUs() {
  const points = [
    "Uncompromising Premium Quality",
    "Flawlessly Maintained Fleet",
    "Discreet & VIP Service",
    "No Hidden Fees or Limits",
    "24/7 Concierge Support",
    "Seamless Booking Experience"
  ];

  return (
    <section id="why-us" className="relative py-32 overflow-hidden border-y border-white/5">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src={`${import.meta.env.BASE_URL}images/texture-bg.png`}
          alt="Premium Texture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display text-white leading-tight mb-6">
              Setting the Standard in <br />
              <span className="text-primary italic">Kosovo</span>
            </h2>
            <p className="text-lg text-white/70 font-light mb-8 leading-relaxed">
              At Premium Rent a Car, we don't just provide vehicles; we deliver an experience. 
              Our dedication to excellence ensures that every journey you take is enveloped 
              in comfort, safety, and undeniable style. 
            </p>
            <p className="text-xl text-white font-display border-l-2 border-primary pl-6 py-2 italic mb-10">
              "Don't dream it, rent it!"
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-white/80 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden relative border border-white/10 shadow-2xl">
               <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
               <img 
                 src={`${import.meta.env.BASE_URL}images/why-us-car.png`}
                 alt="Premium Fleet" 
                 className="w-full h-full object-cover object-center"
               />
               <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
                  <div className="flex items-center gap-4">
                    <img src="/logo.jpeg" alt="Logo" className="w-16 h-16 rounded-full border border-primary/50" />
                    <div>
                      <h4 className="text-white font-display text-xl">Premium Rent a Car</h4>
                      <p className="text-primary text-sm uppercase tracking-widest">Pristina</p>
                    </div>
                  </div>
               </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary/50 rounded-tr-3xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary/50 rounded-bl-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
