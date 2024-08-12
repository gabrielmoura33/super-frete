import React from 'react'

interface ButtonProps {
  disabled?: boolean
  onClick: () => void
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`py-4 rounded-lg font-semibold ${disabled ? 'bg-[#F2F2F2]' : 'bg-[#0FAE79] text-white'}`}
    >
      {children}
    </button>
  )
}

export { Button }
