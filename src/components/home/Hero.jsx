import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiStar, FiClock, FiMapPin, FiPhone, FiCheck } from 'react-icons/fi';
import { SPA_INFO } from '../../utils/constants';

const trustBadges = [
  { icon: '🌿', label: 'Natural Products', sub: 'Safe & Organic' },
  { icon: '👩‍⚕️', label: 'Expert Therapists', sub: 'Certified Pros' },
  { icon: '💎', label: 'Premium Hygiene', sub: 'Sterilised Rooms' },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-stretch overflow-hidden" style={{ background: '#fdf8f4' }}>

      {/* ══════════════ LEFT CONTENT PANEL ══════════════ */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-[52%] px-8 sm:px-14 xl:px-20 pt-32 pb-20 lg:py-0">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex items-center gap-2 mb-8 w-fit"
        >
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => <FiStar key={i} size={11} fill="#c8956c" stroke="none" />)}
          </div>
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#c8956c' }}>
            Noida's #1 Luxury Spa
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
          <span className="text-xs font-semibold text-green-500">Open 24/7</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif font-bold leading-[1.06] mb-6"
          style={{ fontSize: 'clamp(2.8rem, 4.5vw, 4.2rem)', color: '#1c110a' }}
        >
          Rejuvenate
          <br />
          <em style={{ color: '#c8956c', fontStyle: 'italic' }}>Your Mind,</em>
          <br />
          Body &amp; Soul
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="origin-left mb-6"
          style={{ height: 3, width: 72, background: 'linear-gradient(90deg, #c8956c, #e8c9a8)', borderRadius: 99 }}
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.38 }}
          className="text-base sm:text-lg leading-relaxed mb-3 max-w-[420px]"
          style={{ color: '#7a5c46' }}
        >
          Premium massage &amp; wellness spa in Sec-53, Noida.
          Experience luxury treatments by expert therapists —
          available 24 hours a day, every day.
        </motion.p>

        {/* Feature bullets */}
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.46 }}
          className="flex flex-col gap-2 mb-10"
        >
          {['Certified expert therapists', '100% natural & organic products', 'Private, hygienic rooms'].map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-sm" style={{ color: '#5c4232' }}>
              <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: '#f0e0d0' }}>
                <FiCheck size={11} style={{ color: '#c8956c' }} strokeWidth={3} />
              </span>
              {f}
            </li>
          ))}
        </motion.ul>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.54 }}
          className="flex flex-wrap items-center gap-4 mb-12"
        >
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white text-sm shadow-lg transition-all duration-300 hover:scale-[1.04] hover:shadow-xl"
            style={{ background: 'linear-gradient(135deg, #c8956c 0%, #a0673a 100%)' }}
          >
            Book Appointment <FiArrowRight size={15} />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border-2 transition-all duration-300 hover:scale-[1.04] hover:border-[#c8956c] hover:text-[#c8956c]"
            style={{ borderColor: '#d4bfaa', color: '#3d2412', background: 'transparent' }}
          >
            Explore Services
          </Link>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.62 }}
          className="flex flex-wrap gap-5 pb-10 mb-10 border-b"
          style={{ borderColor: '#e8d5c4' }}
        >
          {trustBadges.map((b, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: '#f5ece4' }}>
                {b.icon}
              </div>
              <div>
                <div className="text-xs font-semibold" style={{ color: '#1c110a' }}>{b.label}</div>
                <div className="text-[11px]" style={{ color: '#9c7a64' }}>{b.sub}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Info strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.72 }}
          className="flex flex-wrap gap-6"
        >
          <div className="flex items-center gap-2 text-sm font-medium" style={{ color: '#7a5c46' }}>
            <FiClock size={14} style={{ color: '#c8956c' }} />Open 24/7
          </div>
          <a href={SPA_INFO.mapLink} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#c8956c]"
            style={{ color: '#7a5c46' }}>
            <FiMapPin size={14} style={{ color: '#c8956c' }} />Sec-53, Noida
          </a>
          <a href={SPA_INFO.phoneLink}
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#c8956c]"
            style={{ color: '#7a5c46' }}>
            <FiPhone size={14} style={{ color: '#c8956c' }} />{SPA_INFO.phone}
          </a>
        </motion.div>
      </div>

      {/* ══════════════ RIGHT IMAGE PANEL ══════════════ */}
      <div className="hidden lg:block absolute right-0 top-0 w-[50%] h-full overflow-hidden">

        {/* Warm peach-beige BG */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(140deg, #f7e8d8 0%, #e8c9a0 55%, #d4a87a 100%)'
        }} />

        {/* Main image — no blend mode so left panel stays clean */}
        <motion.img
          initial={{ opacity: 0, scale: 1.07 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1400&q=90&auto=format&fit=crop&crop=center"
          alt="Luxury Spa Treatment"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Left-edge fade — blends image into left panel seamlessly */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #fdf8f4 0%, rgba(253,248,244,0.25) 20%, transparent 42%)' }}
        />
        {/* Dark vignette at bottom for card legibility */}
        <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(28,17,10,0.50) 0%, transparent 100%)' }}
        />

        {/* ── Rating badge ── */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.85 }}
          className="absolute top-28 left-12 flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl"
          style={{ background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(16px)' }}
        >
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => <FiStar key={i} size={14} fill="#f5a623" stroke="none" />)}
          </div>
          <div>
            <div className="text-sm font-bold" style={{ color: '#1c110a' }}>4.9 Rating</div>
            <div className="text-[11px]" style={{ color: '#9c7a64' }}>500+ Reviews</div>
          </div>
        </motion.div>

        {/* ── Discount circle ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 1.0, type: 'spring', stiffness: 220 }}
          className="absolute top-24 right-8 w-[86px] h-[86px] rounded-full flex flex-col items-center justify-center shadow-xl text-center"
          style={{ background: 'linear-gradient(135deg, #c8956c, #8f5430)' }}
        >
          <span className="text-white font-extrabold text-2xl leading-none">20%</span>
          <span className="text-white/80 text-[9px] uppercase tracking-widest">OFF</span>
          <span className="text-white/65 text-[8px] leading-none mt-0.5">First Visit</span>
        </motion.div>

        {/* ── Happy clients ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 1.0 }}
          className="absolute bottom-16 left-10 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl"
          style={{ background: 'rgba(255,255,255,0.90)', backdropFilter: 'blur(16px)' }}
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: '#f5ece4' }}>😊</div>
          <div>
            <div className="text-2xl font-bold font-serif leading-none" style={{ color: '#1c110a' }}>10K+</div>
            <div className="text-xs mt-0.5" style={{ color: '#9c7a64' }}>Happy Clients</div>
          </div>
        </motion.div>

        {/* ── Open Now ── */}
        <motion.div
          animate={{ scale: [1, 1.025, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-16 right-8 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl"
          style={{ background: 'rgba(255,255,255,0.90)', backdropFilter: 'blur(16px)' }}
        >
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
          <div>
            <div className="text-sm font-bold" style={{ color: '#1c110a' }}>Open Now</div>
            <div className="text-xs" style={{ color: '#9c7a64' }}>24 Hours • 7 Days</div>
          </div>
        </motion.div>

        {/* ── Floating petals ── */}
        <motion.div
          animate={{ y: [0, -16, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-[18%] w-14 h-14 rounded-full flex items-center justify-center text-3xl pointer-events-none"
          style={{ background: 'rgba(255,255,255,0.22)', backdropFilter: 'blur(6px)' }}
        >🌸</motion.div>

        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute top-[36%] right-16 w-10 h-10 rounded-full flex items-center justify-center text-2xl pointer-events-none"
          style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(4px)' }}
        >✨</motion.div>
      </div>

      {/* Mobile BG */}
      <div className="absolute inset-0 lg:hidden pointer-events-none"
        style={{ background: 'linear-gradient(160deg, #fdf8f4 0%, #ead4be 100%)' }}
      />
    </section>
  );
};

export default Hero;
