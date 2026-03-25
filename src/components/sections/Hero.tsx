import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ChevronRight, Calendar, MapPin, Car, Send } from "lucide-react";

const carTypes = ["Any Vehicle", "Audi A6", "BMW 5 Series", "VW Tiguan", "VW Polo", "Škoda", "Golf 7.5"];

const locations = [
  "Pristina — Jusuf Gervalla",
  "Pristina — Airport (PRN)",
  "Prizren",
  "Peja",
  "Gjakova",
  "Mitrovica",
  "Ferizaj",
  "Other (contact us)",
];

function formatDate(iso: string) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}

export default function Hero() {
  const [pickupLocation, setPickupLocation] = useState(locations[0]);
  const [dropoffLocation, setDropoffLocation] = useState(locations[0]);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [carType, setCarType] = useState(carTypes[0]);
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();

    if (!pickupDate || !returnDate) {
      setSubmitted(true);
      return;
    }

    const message =
      `🚗 *Booking Request — Premium Rent a Car*\n\n` +
      `*Vehicle:* ${carType}\n` +
      `*Pick-up:* ${pickupLocation}\n` +
      `*Drop-off:* ${dropoffLocation}\n` +
      `*Pick-up Date:* ${formatDate(pickupDate)}\n` +
      `*Return Date:* ${formatDate(returnDate)}\n\n` +
      `Please confirm availability. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/38349202929?text=${encoded}`, "_blank");
  };

  const fieldError = (val: string) => submitted && !val;

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-20 overflow-visible">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Luxury Car"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 z-10" />
      </div>

      {/* Hero content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex-1 flex flex-col justify-center pb-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-[#F5C800]" />
            <span className="text-[#F5C800] tracking-[0.3em] text-sm uppercase font-bold font-sans">
              Premium Car Rental
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-[family-name:--font-hero] text-white leading-[0.9] mb-6 tracking-wide uppercase">
            DON'T DREAM IT,<br />
            <span className="text-[#F5C800]">RENT IT!</span>
          </h1>

          <p className="text-sm md:text-base text-white/70 mb-10 max-w-xl font-sans">
            Experience Pristina with unmatched luxury. Full KASKO, no km limit, 24/7 premium service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 font-sans">
            <a href="#fleet">
              <Button variant="outline" size="lg" className="w-full sm:w-auto group hover:text-black">
                EXPLORE FLEET
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="tel:049202929">
              <Button variant="gold" size="lg" className="w-full sm:w-auto">
                CALL 049 20 29 29
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── Booking Bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 z-30 translate-y-1/2 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <form
            onSubmit={handleBook}
            noValidate
            className="bg-white rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.30)] overflow-hidden"
          >
            {/* Header strip */}
            <div className="bg-[#F5C800] px-6 py-2.5 flex items-center gap-2">
              <Car className="w-4 h-4 text-black" />
              <span className="text-black text-xs font-bold uppercase tracking-widest">
                Reserve Your Vehicle
              </span>
              <span className="ml-auto text-black/50 text-[10px] font-medium hidden sm:block">
                Sent directly via WhatsApp
              </span>
            </div>

            {/* Fields row */}
            <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-100">

              {/* Pick-up Location */}
              <Field icon={<MapPin className="w-5 h-5 text-[#F5C800]" />} label="Pick-up Location">
                <select
                  value={pickupLocation}
                  onChange={e => setPickupLocation(e.target.value)}
                  className="w-full text-sm font-semibold text-gray-800 bg-transparent outline-none cursor-pointer appearance-none"
                >
                  {locations.map(l => <option key={l}>{l}</option>)}
                </select>
              </Field>

              {/* Drop-off Location */}
              <Field icon={<MapPin className="w-5 h-5 text-[#F5C800]" />} label="Drop-off Location">
                <select
                  value={dropoffLocation}
                  onChange={e => setDropoffLocation(e.target.value)}
                  className="w-full text-sm font-semibold text-gray-800 bg-transparent outline-none cursor-pointer appearance-none"
                >
                  {locations.map(l => <option key={l}>{l}</option>)}
                </select>
              </Field>

              {/* Pick-up Date */}
              <Field
                icon={<Calendar className="w-5 h-5 text-[#F5C800]" />}
                label="Pick-up Date"
                error={fieldError(pickupDate)}
              >
                <input
                  type="date"
                  min={today}
                  value={pickupDate}
                  onChange={e => { setPickupDate(e.target.value); setSubmitted(false); }}
                  className={`w-full text-sm font-semibold bg-transparent outline-none cursor-pointer ${
                    fieldError(pickupDate) ? "text-red-500" : "text-gray-800"
                  }`}
                  required
                />
                {fieldError(pickupDate) && (
                  <p className="text-red-400 text-[10px] mt-0.5">Required</p>
                )}
              </Field>

              {/* Return Date */}
              <Field
                icon={<Calendar className="w-5 h-5 text-[#F5C800]" />}
                label="Return Date"
                error={fieldError(returnDate)}
              >
                <input
                  type="date"
                  min={pickupDate || today}
                  value={returnDate}
                  onChange={e => { setReturnDate(e.target.value); setSubmitted(false); }}
                  className={`w-full text-sm font-semibold bg-transparent outline-none cursor-pointer ${
                    fieldError(returnDate) ? "text-red-500" : "text-gray-800"
                  }`}
                  required
                />
                {fieldError(returnDate) && (
                  <p className="text-red-400 text-[10px] mt-0.5">Required</p>
                )}
              </Field>

              {/* Vehicle */}
              <Field icon={<Car className="w-5 h-5 text-[#F5C800]" />} label="Vehicle">
                <select
                  value={carType}
                  onChange={e => setCarType(e.target.value)}
                  className="w-full text-sm font-semibold text-gray-800 bg-transparent outline-none cursor-pointer appearance-none"
                >
                  {carTypes.map(t => <option key={t}>{t}</option>)}
                </select>
              </Field>

              {/* Submit */}
              <div className="flex items-center justify-center px-4 py-3 md:py-0 shrink-0">
                <button
                  type="submit"
                  className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#F5C800] hover:bg-[#e6b800] active:scale-95 text-black font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-150 whitespace-nowrap"
                >
                  <Send className="w-4 h-4" />
                  Book via WhatsApp
                </button>
              </div>

            </div>
          </form>
        </div>
      </motion.div>

      {/* Gold line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#F5C800] z-20 opacity-40" />
    </section>
  );
}

// ── Field wrapper ──
function Field({
  icon,
  label,
  error,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  error?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex items-start gap-3 px-5 py-4 flex-1 transition-colors ${
        error ? "bg-red-50" : "hover:bg-gray-50"
      }`}
    >
      <div className="mt-0.5 shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <label
          className={`block text-[10px] font-bold uppercase tracking-widest mb-1 ${
            error ? "text-red-400" : "text-gray-400"
          }`}
        >
          {label}
        </label>
        {children}
      </div>
    </div>
  );
}
