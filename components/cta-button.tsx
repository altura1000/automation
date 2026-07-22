import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'accent' | 'outline' | 'ghost'
type Size = 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md',
  accent:
    'bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm hover:shadow-md',
  outline:
    'border border-border bg-card text-foreground hover:border-accent/50 hover:bg-secondary',
  ghost: 'text-foreground hover:bg-secondary',
}

const sizes: Record<Size, string> = {
  md: 'h-10 px-5 text-sm',
  lg: 'h-12 px-7 text-base',
}

type CtaButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  size?: Size
  children: ReactNode
}

export function CtaButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: CtaButtonProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-px',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}