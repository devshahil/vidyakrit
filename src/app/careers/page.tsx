import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Briefcase, Rocket, Heart, Coffee, Globe } from 'lucide-react';
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
          <h1 className={styles.title}>Join Our Team</h1>
          <p className={styles.subtitle}>
            We're on a mission to build world-class software that solves real business problems. Help us shape the future of ed-tech and enterprise applications.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          
          <div className={styles.emptyState}>
            <div className={styles.iconWrapper}>
              <Briefcase size={40} />
            </div>
            <h2 className={styles.emptyStateTitle}>No Open Roles Currently</h2>
            <p className={styles.emptyStateDesc}>
              We are not actively hiring for any specific positions right now, but our team is always growing. If you believe you'd be a great fit for Vidyakrit, we'd still love to hear from you!
            </p>
            <Button size="lg" href="mailto:hello@vidyakrit.in">
              Send us your Resume
            </Button>
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
