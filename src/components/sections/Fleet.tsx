import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Zap, Settings2, ShieldCheck, MessageCircle, Infinity } from "lucide-react";

const fleet = [
  {
    name: "Audi A6",
    model: "Premium Sedan",
    category: "Business",
    image: "/images/audi-a6.png",
    specs: { seats: 5, fuel: "Diesel", transmission: "Automatic" },
    tag: "Popular",
    featured: true,
  },
  {
    name: "BMW 5 Series",
    model: "Executive Sedan",
    category: "Luxury",
    image: "/images/bmw-5.png",
    specs: { seats: 5, fuel: "Diesel", transmission: "Automatic" },
    tag: "Top Pick",
    featured: false,
  },
  {
    name: "VW Tiguan",
    model: "R-Line SUV",
    category: "SUV",
    image: "/images/vw-tiguan.png",
    specs: { seats: 5, fuel: "Diesel", transmission: "Automatic" },
    tag: null,
    featured: false,
  },
  {
    name: "VW Polo",
    model: "Highline Compact",
    category: "City",
    image: "/images/vw-polo.png",
    specs: { seats: 5, fuel: "Petrol", transmission: "Automatic" },
    tag: null,
    featured: false,
  },
  {
    name: "Škoda",
    model: "Octavia / Superb",
    category: "Comfort",
    image: "/images/skoda.png",
    specs: { seats: 5, fuel: "Diesel", transmission: "Automatic" },
    tag: null,
    featured: false,
  },
  {
    name: "Golf 7.5",
    model: "GTD Edition",
    category: "Sport",
    image: "/images/golf-75.png",
    specs: { seats: 5, fuel: "Diesel", transmission: "Automatic" },
    tag: "New",
    featured: false,
  },
];

const categories = ["All", ...Array.from(new Set(fleet.map((c) => c.category)))];

function buildWhatsApp(carName: string) {
  const msg = encodeURIComponent(
    `🚗 *Booking Request — Premium Rent a Car*\n\n*Vehicle:* ${carName}\n\nPlease let me know availability and pricing. Thank you!`
  );
  return `https://wa.me/38349202929?text=${msg}`;
}

export default function Fleet() {
  const [active, setActive] = useState("All");

  const visible = active === "All" ? fleet : fleet.filter((c) => c.category === active);

  return (
    <section id="fleet" className="py-28 bg-[#0d0d0d] relative overflow-hidden">

      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #F5C800 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-3"
            >
              <div className="h-px w-10 bg-[#F5C800]" />
              <span className="text-[#F5C800] tracking-[0.3em] text-xs uppercase font-bold font-sans">
                Our Collection
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight font-sans"
            >
              Premium Fleet
            </motion.h2>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {[
              { icon: <ShieldCheck className="w-4 h-4" />, label: "Full KASKO" },
              { icon: <Infinity className="w-4 h-4" />, label: "No KM Limit" },
              { icon: <Settings2 className="w-4 h-4" />, label: "Automatic" },
            ].map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 bg-white/5 border border-white/10 text-white/70 text-xs font-medium px-3 py-2 rounded-full"
              >
                <span className="text-[#F5C800]">{b.icon}</span>
                {b.label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Filter Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 font-sans ${
                active === cat
                  ? "bg-[#F5C800] text-black shadow-lg shadow-[#F5C800]/20"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {cat}
              {active === cat && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-[#F5C800] -z-10"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* ── Cards Grid ── */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((car) => (
              <motion.div
                key={car.name}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -8 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="relative bg-[#F7F7F7] rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-[0_24px_64px_rgba(0,0,0,0.22)] hover:-translate-y-1.5">

                  {/* ── Image ── */}
                  <div className="relative h-52 overflow-hidden bg-[#e8e8e8] shrink-0">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Fade bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F7F7F7] via-[#F7F7F7]/10 to-transparent" />

                    {/* Category — top left */}
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
                      {car.category}
                    </div>

                    {/* Tag — top right */}
                    {car.tag && (
                      <div className="absolute top-3 right-3 bg-[#F5C800] text-black text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-widest">
                        {car.tag}
                      </div>
                    )}
                  </div>

                  {/* ── Content ── */}
                  <div className="flex flex-col flex-1 px-5 pt-3 pb-5 font-sans">

                    {/* Name + model */}
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">{car.name}</h3>
                      <p className="text-gray-400 text-xs mt-0.5 uppercase tracking-wide font-medium">{car.model}</p>
                    </div>

                    {/* Specs grid */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <SpecBadge icon={<Users className="w-3.5 h-3.5" />} label={`${car.specs.seats} Seats`} />
                      <SpecBadge icon={<Zap className="w-3.5 h-3.5" />} label={car.specs.fuel} />
                      <SpecBadge icon={<Settings2 className="w-3.5 h-3.5" />} label={car.specs.transmission} />
                      <SpecBadge icon={<ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />} label="Full KASKO" green />
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-200 mb-4" />

                    {/* Included perks */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
                        <Infinity className="w-3 h-3 text-[#F5C800]" /> No KM limit
                      </span>
                      <span className="text-gray-200">·</span>
                      <span className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
                        <ShieldCheck className="w-3 h-3 text-emerald-500" /> Insurance incl.
                      </span>
                    </div>

                    {/* CTA — grows to bottom of card */}
                    <div className="mt-auto">
                      <a
                        href={buildWhatsApp(car.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-[#F5C800] hover:bg-[#e6b800] active:scale-[0.98] text-black text-sm font-bold py-3 rounded-xl transition-all duration-150"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Book via WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Bottom strip ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8"
        >
          <p className="text-white/30 text-sm font-sans text-center sm:text-left">
            All vehicles · Full KASKO included · No km limit · 24/7 roadside assistance
          </p>
          <a
            href="tel:049202929"
            className="text-[#F5C800] text-sm font-bold tracking-wide hover:underline font-sans whitespace-nowrap"
          >
            📞 049 20 29 29
          </a>
        </motion.div>

      </div>
    </section>
  );
}

function SpecBadge({
  icon,
  label,
  green = false,
}: {
  icon: React.ReactNode;
  label: string;
  green?: boolean;
}) {
  return (
    <div className="flex items-center gap-1.5 bg-[#EDEDEE] rounded-lg px-2.5 py-2">
      <span className={green ? "text-emerald-600" : "text-gray-400"}>{icon}</span>
      <span className={`text-xs font-medium ${green ? "text-emerald-700" : "text-gray-600"}`}>
        {label}
      </span>
    </div>
  );
}
