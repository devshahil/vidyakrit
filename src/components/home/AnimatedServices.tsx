import React from 'react';
import { Code, Layout, Smartphone } from 'lucide-react';
import styles from './AnimatedServices.module.css';

export const AnimatedServices = () => {
  return (
    <>
      <div className={styles.wrapCard}>
        {/* Card 1 */}
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.iconWrapper}>
              <Code size={32} strokeWidth={1.5} />
            </div>
            <h3 className={styles.title}>Custom Enterprise Software</h3>
            <p className={styles.description}>
              Tailored enterprise solutions designed to digitize and scale your unique workflows.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.iconWrapper}>
              <Layout size={32} strokeWidth={1.5} />
            </div>
            <h3 className={styles.title}>Web Applications</h3>
            <p className={styles.description}>
              High-performance web applications engineered with modern, secure technologies.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.iconWrapper}>
              <Smartphone size={32} strokeWidth={1.5} />
            </div>
            <h3 className={styles.title}>Mobile Development</h3>
            <p className={styles.description}>
              Native and cross-platform mobile experiences built to maximize user engagement.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
