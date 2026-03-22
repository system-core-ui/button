import type { ButtonHTMLAttributes, ReactNode } from 'react';

// ─── Types ──────────────────────────────────────────────

export type ButtonVariant = 'contained' | 'outlined' | 'text' | 'ghost';
export type ButtonColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
export type ButtonSize = 'sm' | 'md' | 'lg';

// ─── Button Props ───────────────────────────────────────

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant (default: 'contained') */
  variant?: ButtonVariant;
  /** Theme color (default: 'primary') */
  color?: ButtonColor;
  /** Button size (default: 'md') */
  size?: ButtonSize;
  /** Icon before the label */
  startIcon?: ReactNode;
  /** Icon after the label */
  endIcon?: ReactNode;
  /** Show loading spinner and disable interaction */
  loading?: boolean;
  /** Stretch to full width of parent */
  fullWidth?: boolean;
  /** Pill shape (fully rounded corners) */
  rounded?: boolean;
  /** Button content */
  children?: ReactNode;
}

// ─── IconButton Props ───────────────────────────────────

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant (default: 'ghost') */
  variant?: ButtonVariant;
  /** Theme color (default: 'primary') */
  color?: ButtonColor;
  /** Button size (default: 'md') */
  size?: ButtonSize;
  /** Pill/circle shape (default: true) */
  rounded?: boolean;
  /** Show loading spinner */
  loading?: boolean;
  /** Icon element (required) */
  children: ReactNode;
}
