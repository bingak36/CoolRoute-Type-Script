import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './Button.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string
  arrow?: boolean
  to?: string
  children?: ReactNode
}

function Button({
  variant = 'primary',
  arrow = false,
  to,
  className = '',
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  const buttonClassName = ['button', `button--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      <span>{children}</span>
      {arrow && <span className="button__arrow">{'→'}</span>}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={buttonClassName}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} className={buttonClassName} {...props}>
      {content}
    </button>
  )
}

export default Button
