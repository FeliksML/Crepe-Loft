'use client';

import { cn } from '@/lib/utils';

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export const CTAButton = ({
  children,
  href,
  onClick,
  className,
  variant = 'primary',
}: CTAButtonProps) => {
  const baseStyles = cn(
    'inline-flex items-center justify-center',
    'rounded-full px-8 py-3',
    'font-sans font-medium text-base',
    'transition-all duration-200 ease-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'active:translate-y-0.5 active:shadow-md',
  );

  const variantStyles = {
    primary: cn(
      'bg-primary-500 text-white',
      'shadow-[0_8px_14px_rgba(200,81,126,0.25)]',
      'hover:bg-primary-600 hover:shadow-[0_10px_18px_rgba(200,81,126,0.35)]',
      'focus:ring-primary-300/40',
      'dark:bg-primary-500 dark:text-white',
      'dark:hover:bg-primary-600',
    ),
    secondary: cn(
      'bg-secondary-200 text-primary-700',
      'shadow-[0_6px_12px_rgba(67,48,46,0.12)]',
      'hover:bg-secondary-300 hover:shadow-[0_8px_16px_rgba(67,48,46,0.18)]',
      'focus:ring-secondary-400/40',
      'dark:bg-primary-800 dark:text-primary-100',
      'dark:hover:bg-primary-700',
    ),
  };

  const combinedStyles = cn(baseStyles, variantStyles[variant], className);

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};
