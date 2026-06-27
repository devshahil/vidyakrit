import React from 'react';
import styles from './Card.module.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'premium' | 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'dark';
}

export const Card = ({ children, className, variant = 'premium', ...props }: CardProps) => {
  return (
    <div className={`${styles.card} ${styles[variant]} ${className || ''}`.trim()} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={`${styles.title} ${className || ''}`.trim()} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={`${styles.description} ${className || ''}`.trim()} {...props}>
    {children}
  </p>
);

export const CardFooter = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`${styles.footer} ${className || ''}`.trim()} {...props}>
    {children}
  </div>
);
