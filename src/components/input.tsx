/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { Control, useController } from 'react-hook-form'

interface TextInputProps {
  name: string
  control: Control<any>
  label: string
  placeholder?: string
  type?: 'text' | 'number'
  mask?: (value: string) => string
  errorMessage?: string
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  control,
  label,
  placeholder,
  type = 'text',
  mask,
  errorMessage,
}) => {
  const {
    field: { onChange, onBlur, value },
  } = useController({
    name,
    control,
  })

  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
    onBlur()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value
    if (mask) {
      newValue = mask(newValue)
    }
    onChange(newValue)
  }

  const shouldFloatLabel = isFocused || value

  return (
    <div className="relative mt-4 mb-6">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        className="block w-full px-4 py-4 text-[1rem] text-gray-600 bg-transparent border rounded-2xl border-grayscale3 outline-none transition-all duration-300 placeholder-transparent"
      />
      <label
        htmlFor={name}
        className={`absolute left-4 top-4 text-gray-400 transition-all duration-300 transform ${
          shouldFloatLabel ? '-translate-y-3.5 text-[0.8rem]' : 'text-[1.2rem]'
        } pointer-events-none`}
      >
        {shouldFloatLabel ? label : placeholder}
      </label>
      {errorMessage && (
        <span className="block mt-1 text-[#F64E6C] text-[0.9rem]">
          {errorMessage}
        </span>
      )}
    </div>
  )
}

export { TextInput }
