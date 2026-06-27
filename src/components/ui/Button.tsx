import React from 'react';
import styles from './Button.module.css';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link' | 'icon';
  size?: 'default' | 'sm' | 'lg';
  href?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', href, children, ...props }, ref) => {
    const combinedClassName = `${styles.button} ${styles[variant]} ${
      size !== 'default' ? styles[size] : ''
    } ${className || ''}`.trim();

    if (href) {
      return (
        <Link href={href} className={combinedClassName} ref={ref as React.ForwardedRef<HTMLAnchorElement>}>
          {children}
        </Link>
      );
    }

    return (
      <button className={combinedClassName} ref={ref as React.ForwardedRef<HTMLButtonElement>} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
