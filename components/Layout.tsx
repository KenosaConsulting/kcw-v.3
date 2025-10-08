import React, { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { MenuIcon, XIcon } from './icons';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-40 w-full executive-nav ${scrolled ? 'scrolled' : ''}`}>
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                <Link to="/" className="flex items-center space-x-3 group">
                    {/* Kenosa Logo - Professional Geometric K */}
                    <div className="relative">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 100 100" 
                            className="h-10 w-10 relative z-10 transition-transform duration-300 group-hover:scale-105"
                        >
                            {/* Navy sections forming the K through negative space */}
                            <g>
                                {/* Top left triangle */}
                                <path d="M 0 0 L 40 0 L 0 40 Z" fill="#0A1628" />
                                {/* Top right rectangle */}
                                <path d="M 50 0 L 100 0 L 100 45 L 50 45 Z" fill="#0A1628" />
                                {/* Bottom left rectangle */}
                                <path d="M 0 50 L 0 100 L 45 100 L 45 50 Z" fill="#0A1628" />
                                {/* Bottom right triangle */}
                                <path d="M 55 55 L 100 55 L 100 100 L 55 100 Z" fill="#0A1628" />
                            </g>
                        </svg>
                        {/* Subtle gold accent on hover */}
                        <div className="absolute inset-0 blur-xl bg-executive-gold/0 group-hover:bg-executive-gold/10 transition-all duration-500 rounded"></div>
                    </div>
                    <span className="text-2xl font-serif font-bold text-executive-navy">Kenosa Consulting</span>
                </Link>

                <nav className="hidden md:flex items-center space-x-8">
                    {NAV_LINKS.map(link => (
                        <NavLink
                            key={link.href}
                            to={link.href}
                            className={({ isActive }) =>
                                `text-sm font-medium tracking-wide transition-all relative ${
                                    isActive 
                                        ? 'text-executive-navy font-semibold' 
                                        : 'text-slate-600 hover:text-executive-navy'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {link.label}
                                    {isActive && (
                                        <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-executive-gold"></span>
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <button className="executive-button-gold">
                        <Link to="/contact">Contact Us</Link>
                    </button>
                </div>

                <button
                    className="md:hidden text-executive-navy hover:text-trust-blue transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-neutral-pearl border-t border-slate-200"
                    >
                        <nav className="flex flex-col px-4 py-4">
                            {NAV_LINKS.map(link => (
                                <NavLink
                                    key={link.href}
                                    to={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `block px-4 py-3 text-base font-medium transition-all rounded ${
                                            isActive 
                                                ? 'bg-executive-navy/5 text-executive-navy' 
                                                : 'text-slate-600 hover:bg-slate-50 hover:text-executive-navy'
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                            <div className="mt-4">
                                <button className="executive-button-primary w-full">
                                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                                        Contact Us
                                    </Link>
                                </button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="border-t border-slate-200 bg-slate-50">
            {/* Gold accent line */}
            <div className="h-px bg-gradient-to-r from-transparent via-executive-gold/30 to-transparent"></div>
            
            <div className="container mx-auto px-4 py-12 md:px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 100 100" 
                                className="h-8 w-8"
                            >
                                <g>
                                    <path d="M 0 0 L 40 0 L 0 40 Z" fill="#0A1628" />
                                    <path d="M 50 0 L 100 0 L 100 45 L 50 45 Z" fill="#0A1628" />
                                    <path d="M 0 50 L 0 100 L 45 100 L 45 50 Z" fill="#0A1628" />
                                    <path d="M 55 55 L 100 55 L 100 100 L 55 100 Z" fill="#0A1628" />
                                </g>
                            </svg>
                            <span className="text-xl font-serif font-bold text-executive-navy">Kenosa Consulting</span>
                        </div>
                        <p className="text-sm text-slate-600 max-w-md">
                            Strategic intelligence and consulting services for forward-thinking enterprises.
                        </p>
                    </div>
                    
                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-executive-navy mb-4">Quick Links</h4>
                        <nav className="flex flex-col space-y-2">
                            {NAV_LINKS.slice(0, 4).map(link => (
                                <Link 
                                    key={link.href} 
                                    to={link.href} 
                                    className="text-sm text-slate-600 hover:text-trust-blue transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    
                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-executive-navy mb-4">Contact</h4>
                        <div className="space-y-2 text-sm text-slate-600">
                            <p>nkalosakenyon@kenosaconsulting.com</p>
                            <p>(305) 522-8140</p>
                        </div>
                    </div>
                </div>
                
                {/* Bottom Bar */}
                <div className="border-t border-slate-200 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-slate-500">
                            &copy; {currentYear} Kenosa Consulting. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link to="/privacy" className="text-sm text-slate-500 hover:text-trust-blue transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="text-sm text-slate-500 hover:text-trust-blue transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const ScrollToTop: React.FC = () => {
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 executive-button-primary rounded-full p-3 shadow-elegant-lg"
                    aria-label="Scroll to top"
                >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export const Layout: React.FC = () => {
    useScrollToTop();
    const location = useLocation();

    return (
        <div className="flex min-h-screen flex-col bg-slate-50">
            {/* Subtle texture overlay */}
            <div className="fixed inset-0 subtle-paper-texture pointer-events-none opacity-30"></div>
            
            <Header />
            
            <main className="flex-grow relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="container mx-auto px-4 py-12 md:px-6 md:py-16"
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>
            
            <Footer />
            <ScrollToTop />
        </div>
    );
};