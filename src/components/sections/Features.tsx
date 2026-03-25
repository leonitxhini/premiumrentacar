import { motion } from "framer-motion";
import { ShieldCheck, Headset, Infinity as InfinityIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-black" />,
      title: "Full KASKO",
      description: "Drive with absolute peace of mind. Comprehensive insurance covers you against all unforeseen events."
    },
    {
      icon: <Headset className="w-8 h-8 text-black" />,
      title: "24/7 Assistance",
      description: "Day or night, our premium support team is just a call away to assist you anywhere in Kosovo."
    },
    {
      icon: <InfinityIcon className="w-8 h-8 text-black" />,
      title: "No KM Limit",
      description: "Kilometra pa limit. Explore without boundaries and enjoy your journey with zero restrictions."
    }
  ];

  return (
    <section id="features" className="pt-36 pb-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm md:text-base font-bold text-[#F5C800] mb-4 uppercase tracking-[0.3em] font-sans">PREMIUM STANDARDS</h2>
          <div className="h-px w-24 bg-[#F5C800] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Card className="h-full bg-card rounded-none border-t-[3px] border-t-[#F5C800] border-x-0 border-b-0 group">
                <CardContent className="p-10 text-center flex flex-col items-center">
                  <div className="mb-6 w-16 h-16 bg-[#F5C800] rounded-none flex items-center justify-center rotate-45 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-[#F5C800]/10">
                    <div className="-rotate-45">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[#F5C800] mb-4 tracking-wider uppercase">{feature.title}</h3>
                  <p className="text-white/70 font-sans font-light leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
