import { Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-20 pb-10 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-[#F5C800]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.jpeg" alt="Logo" className="w-12 h-12 rounded-full p-[2px] bg-[#F5C800]" />
              <div>
                <h4 className="font-display text-2xl font-bold tracking-[0.2em] text-[#F5C800] uppercase">PREMIUM</h4>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-sans">Rent a Car</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 font-sans">
              Don't dream it, rent it. The finest selection of premium vehicles in Pristina, providing VIP service and unparalleled comfort.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/premium_rentacar" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-none bg-card flex items-center justify-center text-white hover:bg-[#F5C800] hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 font-sans">
              {['Home', 'Features', 'Fleet', 'Why Us'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-white/50 hover:text-[#F5C800] transition-colors text-sm uppercase tracking-widest">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-6 uppercase tracking-wider">Our Fleet</h4>
            <ul className="space-y-3 text-sm text-white/50 uppercase tracking-widest font-sans">
              <li>Audi Models</li>
              <li>BMW Series</li>
              <li>VW Tiguan R-Line</li>
              <li>VW Polo Highline</li>
              <li>Škoda Octavia/Superb</li>
              <li>Golf 7.5 GTD</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4 font-sans">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <MapPin className="w-5 h-5 text-[#F5C800] flex-shrink-0" />
                <span>Jusuf Gervalla<br/>Pristina, Kosovo</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Phone className="w-5 h-5 text-[#F5C800] flex-shrink-0" />
                <a href="tel:049202929" className="hover:text-[#F5C800] transition-colors">049 20 29 29</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Mail className="w-5 h-5 text-[#F5C800] flex-shrink-0" />
                <a href="mailto:info@premiumrentacarks.com" className="hover:text-[#F5C800] transition-colors truncate">info@premiumrentacarks.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 font-sans">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Premium Rent a Car. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
