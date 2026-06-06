import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useNavbar } from '../../hooks/useAnimations';
import { NAV_LINKS, SPA_INFO } from '../../utils/constants';

const Navbar = () => {
  const { isScrolled, isMenuOpen, toggleMenu, closeMenu } = useNavbar();
  const location = useLocation();

  const isHome = location.pathname === '/';

  // On home (light hero), unscrolled navbar = dark text on transparent bg
  // On other pages / scrolled = white text on dark bg
  const useDarkText = isHome && !isScrolled;

  useEffect(() => { closeMenu(); }, [location.pathname, closeMenu]);
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* ─── Main Navbar ─── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={isScrolled
          ? { background: 'rgba(28, 17, 10, 0.96)', backdropFilter: 'blur(16px)', boxShadow: '0 2px 24px rgba(0,0,0,0.18)', padding: '10px 0' }
          : { background: useDarkText ? 'rgba(253,248,244,0.85)' : 'rgba(28,17,10,0.92)', backdropFilter: 'blur(12px)', borderBottom: useDarkText ? '1px solid rgba(200,149,108,0.15)' : 'none', padding: '14px 0' }
        }
      >
        <div className="container-custom flex items-center justify-between">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
            <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
              <img
                src="/logo.png"
                alt="Royal Spa Logo"
                className="w-full h-full object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="leading-none">
              <div
                className="text-base font-serif font-bold transition-colors duration-300"
                style={{ color: useDarkText ? '#1c110a' : '#ffffff' }}
              >
                Royal Spa
              </div>
              <div
                className="text-[10px] font-semibold tracking-[0.2em] uppercase mt-0.5 transition-colors duration-300"
                style={{ color: '#c8956c' }}
              >
                Luxury Wellness
              </div>
            </div>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-sm font-medium tracking-wide transition-colors duration-300 pb-0.5"
                style={{
                  color: isActive(link.path)
                    ? '#c8956c'
                    : useDarkText ? '#4a2e1a' : 'rgba(255,255,255,0.85)',
                }}
                onMouseEnter={e => { if (!isActive(link.path)) e.currentTarget.style.color = '#c8956c'; }}
                onMouseLeave={e => { if (!isActive(link.path)) e.currentTarget.style.color = useDarkText ? '#4a2e1a' : 'rgba(255,255,255,0.85)'; }}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                    style={{ background: '#c8956c' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* ── Desktop CTAs ── */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={SPA_INFO.phoneLink}
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-300"
              style={{ color: useDarkText ? '#4a2e1a' : 'rgba(255,255,255,0.85)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#c8956c'}
              onMouseLeave={e => e.currentTarget.style.color = useDarkText ? '#4a2e1a' : 'rgba(255,255,255,0.85)'}
            >
              <FiPhone size={14} />
              {SPA_INFO.phone}
            </a>
            <Link
              to="/booking"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white shadow-md transition-all duration-300 hover:scale-[1.04] hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #c8956c, #9a5f30)' }}
            >
              Book Now
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={toggleMenu}
            id="mobile-menu-toggle"
            className="lg:hidden p-2 rounded-xl transition-colors duration-300"
            style={{ color: useDarkText ? '#1c110a' : '#ffffff' }}
            aria-label="Toggle mobile menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div key="close"
                  initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <FiX size={24} />
                </motion.div>
              ) : (
                <motion.div key="menu"
                  initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <FiMenu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* ─── Mobile Menu ─── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ background: 'rgba(28,17,10,0.55)', backdropFilter: 'blur(4px)' }}
              onClick={closeMenu}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 max-w-full z-50 lg:hidden flex flex-col"
              style={{ background: '#1c110a' }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6"
                style={{ borderBottom: '1px solid rgba(200,149,108,0.2)' }}>
                <div>
                  <div className="text-base font-serif font-bold text-white">Royal Spa</div>
                  <div className="text-[10px] font-semibold tracking-[0.2em] uppercase mt-0.5" style={{ color: '#c8956c' }}>
                    Luxury Wellness
                  </div>
                </div>
                <button onClick={closeMenu} className="p-2 rounded-full text-white/60 hover:text-white transition-colors">
                  <FiX size={20} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto py-6 px-5">
                <div className="flex flex-col gap-1">
                  {NAV_LINKS.map((link, idx) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 28 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.07, duration: 0.35 }}
                    >
                      <Link
                        to={link.path}
                        onClick={closeMenu}
                        className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-250"
                        style={isActive(link.path)
                          ? { background: 'rgba(200,149,108,0.15)', color: '#c8956c', border: '1px solid rgba(200,149,108,0.25)' }
                          : { color: 'rgba(255,255,255,0.75)' }
                        }
                      >
                        {link.label}
                        {isActive(link.path) && (
                          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#c8956c' }} />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA buttons */}
                <div className="mt-8 pt-6 flex flex-col gap-3"
                  style={{ borderTop: '1px solid rgba(200,149,108,0.2)' }}>
                  <Link
                    to="/booking"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-white shadow-md"
                    style={{ background: 'linear-gradient(135deg, #c8956c, #9a5f30)' }}
                  >
                    Book Appointment
                  </Link>
                  <a
                    href={SPA_INFO.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm border transition-all"
                    style={{ borderColor: 'rgba(200,149,108,0.35)', color: 'rgba(255,255,255,0.8)' }}
                  >
                    <FaWhatsapp size={16} style={{ color: '#25D366' }} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-6" style={{ borderTop: '1px solid rgba(200,149,108,0.15)', background: 'rgba(0,0,0,0.25)' }}>
                <div className="flex items-center gap-2 text-sm">
                  <FiPhone size={13} style={{ color: '#c8956c' }} />
                  <a href={SPA_INFO.phoneLink} className="font-medium text-white/80 hover:text-white transition-colors">
                    {SPA_INFO.phone}
                  </a>
                </div>
                <div className="mt-1 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{SPA_INFO.hours}</div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
