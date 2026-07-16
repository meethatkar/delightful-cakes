import { cn } from '@/utils';
import { useId } from 'react'

const Input = ({
  type,
  label,
  placeholder,
  className,
  value,
  onChange,
  required,
  disabled,
  error,
  helperText,
  ...props
}) => {
  const inputID = useId();
  return (
    <div className='flex flex-col gap-2'>
      {label && (
        <label htmlFor={inputID} className='text-sm font-medium text-text'>
          {label}
          {required && <span className='text-red-500'>*</span>}
        </label>
      )}
      <input
        className={cn("w-full rounded-xl border border-border bg-surface px-4 py-3 text-text outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-60", className, error && "border-error")}
        {...props}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        id={inputID}
      />
      {
        helperText && (<p className='text-black/50'> {helperText} </p>)
      }
      {
        error && (<p> {error} </p>)
      }
    </div>
  )
}

export default Input