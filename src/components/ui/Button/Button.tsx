import React from 'react'

import { NextPage } from 'next'

import { cn } from '@/utils/cn'

type Color = 'primary' | 'secondary' | 'success' | 'error'
type Variant = 'text' | 'contained' | 'outlined'
type Size = 'sm' | 'md' | 'lg'

interface Props {
    children: React.ReactNode
    className?: string
    variant: Variant
    size: Size
    color?: Color
    startIcon?: React.ReactNode
    endIcon?: React.ReactNode
    loading?: boolean
    onClick?: () => void
    disableElevation?: boolean
    disabled?: boolean
}

/**
 *
 * Button
 *
 */
const Button: NextPage<Props> = ({
    children,
    className,
    endIcon,
    startIcon,
    color = 'primary',
    loading,
    variant,
    size,
    onClick,
    disabled,
    disableElevation,
}) => {
    const sizes: Record<Size, string> = {
        sm: 'text-sm px-3',
        lg: 'text-lg px-3 py-2',
        md: 'text-md px-3 py-1',
    }
    const variants: Record<Variant, string> = {
        text: 'bg-none',
        contained: 'text-white border-none',
        outlined: 'bg-none border',
    }
    const colors: Record<Color, string> = {
        primary: `text-primary bg-primary/90 border-primary/40 hover:border-primary ${
            variant === 'contained'
                ? 'hover:bg-primary/100'
                : 'hover:bg-primary/5'
        }`,
        secondary: `text-secondary bg-secondary/90 border-secondary/40 hover:border-secondary ${
            variant === 'contained'
                ? 'hover:bg-secondary/100'
                : 'hover:bg-secondary/5'
        }`,
        success: `text-success bg-success/90 border-success/40 hover:border-success ${
            variant === 'contained'
                ? 'hover:bg-success/100'
                : 'hover:bg-success/5'
        }`,
        error: `text-error bg-error/90 border-error/40 hover:border-error ${
            variant === 'contained' ? 'hover:bg-error/100' : 'hover:bg-error/5'
        }`,
    }

    return (
        <div className={cn('min-w-[30px]')}>
            <button
                disabled={disabled || loading}
                className={cn(
                    'w-full gap-3 flex transition-colors justify-center items-center whitespace-nowrap shadow-sm hover:shadow-md rounded-md',
                    sizes[size],
                    colors[color],
                    variants[variant],
                    className,
                    {
                        'shadow-none hover:shadow-none': disableElevation,
                    },
                    {
                        'text-gray-400 bg-gray-300/60 border-gray-400/50 pointer-events-none':
                            disabled,
                    }
                )}
                onClick={onClick}
            >
                {loading && (
                    <div
                        id="spinner"
                        data-testid={'spinner-id'}
                        className="h-6 w-6 animate-spin rounded-full border-4 border-solid border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    />
                )}
                <div>{startIcon && startIcon}</div>
                {children}
                <div>{endIcon && endIcon}</div>
            </button>
        </div>
    )
}

Button.defaultProps = {
    size: 'md',
    variant: 'contained',
    loading: false,
    disableElevation: false,
    disabled: false,
}

export default Button
