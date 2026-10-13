"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products/school-erp' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
  ];

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`} aria-label="Main Navigation">
        <div className={`container ${styles.container}`}>
          <Link href="/" className={styles.logo}>
            <span>Vidyakrit</span>
          </Link>

          <div className={styles.navLinks}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.link}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.actions}>
            <Button variant="ghost" href="/contact">Contact</Button>
            <Button href="/contact">Book Consultation</Button>
          </div>

          <button
            type="button"
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Backdrop overlay */}
      <div 
        className={`${styles.backdrop} ${isMobileMenuOpen ? styles.backdropOpen : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`} role="dialog" aria-modal="true">
        <div className={styles.mobileMenuHeader}>
          <Link href="/" className={styles.logo} onClick={() => setIsMobileMenuOpen(false)}>
            <span>Vidyakrit</span>
          </Link>
          <button 
            type="button"
            className={styles.closeBtn}
            onClick={() => setIsMobileMenuOpen(false)} 
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>
        
        <div className={styles.mobileNavLinks}>
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className={styles.mobileNavLink} 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

        <div className={styles.mobileActions}>
          <Button href="/contact" size="lg" className={styles.wFull} onClick={() => setIsMobileMenuOpen(false)}>
            Book Consultation
          </Button>
        </div>
      </div>
    </>
  );
};
