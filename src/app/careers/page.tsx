import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Briefcase, Rocket, Heart, Coffee, Globe, ArrowRight } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Careers | Vidyakrit',
  description: 'Join the Vidyakrit team. We are building the future of enterprise software and ed-tech.',
};

export default function CareersPage() {
  return (
    <>
      <section className={styles.header}>
        <div className="container">
          <h1 className="display-hero">Join Our Team</h1>
          <p className="text-body-premium" style={{ maxWidth: '600px', margin: '0 auto' }}>
            We're on a mission to build world-class software that solves real business problems. Help us shape the future of ed-tech and enterprise applications.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          
          <div className={styles.talentNetworkCard}>
            <div className={styles.talentHeader}>
              <div className={styles.iconWrapper}>
                <Briefcase size={32} />
              </div>
              <h2 className="display-section" style={{ fontSize: '2rem' }}>Join the Talent Network</h2>
              <p className="text-body-premium">
                We are not actively hiring for specific roles today, but we are always looking for exceptional engineers and designers. Drop your details below, and we'll reach out when a perfect role opens up.
              </p>
            </div>

            <form className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Full Name</label>
                <input type="text" className={styles.input} placeholder="Jane Doe" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address</label>
                <input type="email" className={styles.input} placeholder="jane@example.com" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Primary Skillset</label>
                <select className={styles.select}>
                  <option>Frontend Engineering (React/Next.js)</option>
                  <option>Backend Engineering (Node/Go/Python)</option>
                  <option>UI/UX Design</option>
                  <option>Mobile Development (React Native/Swift)</option>
                  <option>Product Management</option>
                  <option>Other</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>LinkedIn or Portfolio URL</label>
                <input type="url" className={styles.input} placeholder="https://linkedin.com/in/..." />
              </div>
              <div className={`${styles.formGroup} ${styles.fullWidth} ${styles.submitWrapper}`}>
                <Button size="lg" href="#">
                  Join Network <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                </Button>
              </div>
            </form>
          </div>

          <div className={styles.benefits}>
            <h2 className={styles.benefitsTitle}>Why work at Vidyakrit?</h2>
            <div className={styles.benefitsGrid}>
              
              <div className={styles.benefitCard}>
                <Rocket size={32} className={styles.benefitIcon} />
                <h3 className={styles.benefitTitle}>Impactful Work</h3>
                <p className={styles.benefitDesc}>
                  Build software that is used by thousands of students, teachers, and professionals every single day.
                </p>
              </div>

              <div className={styles.benefitCard}>
                <Globe size={32} className={styles.benefitIcon} />
                <h3 className={styles.benefitTitle}>Remote Friendly</h3>
                <p className={styles.benefitDesc}>
                  We believe in hiring the best talent, regardless of geography. Enjoy flexible working hours and remote options.
                </p>
              </div>

              <div className={styles.benefitCard}>
                <Heart size={32} className={styles.benefitIcon} />
                <h3 className={styles.benefitTitle}>Health & Wellness</h3>
                <p className={styles.benefitDesc}>
                  Your health comes first. We offer comprehensive wellness programs and value work-life balance above all.
                </p>
              </div>

              <div className={styles.benefitCard}>
                <Coffee size={32} className={styles.benefitIcon} />
                <h3 className={styles.benefitTitle}>Continuous Learning</h3>
                <p className={styles.benefitDesc}>
                  Get access to premium courses, conferences, and a team that constantly pushes you to learn new technologies.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
