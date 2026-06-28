"use client";

import { Button } from "@/components/ui/Button";
import styles from "./page.module.css";
import { Mail, Phone, MapPin } from "lucide-react";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('submitting');

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus('success');
      form.current.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus('error');
    }
  };

  return (
    <section className="section" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
      <div className="container">
        <div className={styles.splitLayout}>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <h1 className={styles.title}>Let's talk about your project</h1>
            <p className={styles.subtitle}>
              Whether you're interested in our School ERP, need a custom software solution, or just want to explore possibilities, our team is ready to help.
            </p>

            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <Mail size={24} color="var(--text-primary)" />
                </div>
                <div className={styles.infoContent}>
                  <span className={styles.infoTitle}>Email Us</span>
                  <a href="mailto:hello@vidyakrit.com" className={styles.infoText}>hello@vidyakrit.com</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <Phone size={24} color="var(--text-primary)" />
                </div>
                <div className={styles.infoContent}>
                  <span className={styles.infoTitle}>Call Us</span>
                  <a href="tel:+917856936201" className={styles.infoText}>+91 78569 36201</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <MapPin size={24} color="var(--text-primary)" />
                </div>
                <div className={styles.infoContent}>
                  <span className={styles.infoTitle}>Visit Us</span>
                  <span className={styles.infoText}>
                    NSSO Colony<br />
                    Khemnichak, Patna<br />
                    Bihar, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className={styles.formCard}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 600 }}>Send us a message</h2>

              {status === 'success' ? (
                <div style={{ padding: '2rem', textAlign: 'center', background: 'var(--bg-secondary)', borderRadius: 'var(--border-radius-md)' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-green)' }}>Message Sent Successfully!</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>We'll get back to you within 24 hours.</p>
                  <Button style={{ marginTop: '1.5rem' }} onClick={() => setStatus('idle')}>Send Another</Button>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit}>
                  {status === 'error' && (
                    <div style={{ padding: '1rem', marginBottom: '1rem', background: '#ffebee', color: '#c62828', borderRadius: '4px' }}>
                      Failed to send message. Please try again later.
                    </div>
                  )}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="firstName">First Name</label>
                      <input required type="text" id="firstName" name="firstName" className={styles.input} placeholder="John" />
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="lastName">Last Name</label>
                      <input required type="text" id="lastName" name="lastName" className={styles.input} placeholder="Doe" />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">Work Email</label>
                    <input required type="email" id="email" name="email" className={styles.input} placeholder="john@company.com" />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="interest">I'm interested in</label>
                    <select id="interest" name="interest" className={styles.input} required>
                      <option value="">Select an option</option>
                      <option value="school-erp">School ERP Demo</option>
                      <option value="custom-software">Custom Software Development</option>
                      <option value="website">Website / Web App</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="message">Message</label>
                    <textarea required id="message" name="message" className={styles.textarea} placeholder="Tell us about your project or requirements..."></textarea>
                  </div>

                  <Button type="submit" size="lg" style={{ width: '100%', marginTop: '0.5rem' }} disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
