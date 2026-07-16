import { cn } from '@/utils';
import { useId } from 'react'

const TextArea = ({
  label,
  placeholder,
  className,
  value,
  onChange,
  required,
  disabled,
  error,
  helperText,
  rows = 5,
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
      <textarea
        className={cn("w-full rounded-xl border border-border bg-surface px-4 py-3 text-text outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-60 min-h-32 resize-none", className, error && "border-error")}
        {...props}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        id={inputID}
        rows={rows}
      />
      {
        helperText && (<p className='text-textMuted text-sm'> {helperText} </p>)
      }
      {
        error && (<p className='text-sm text-red-400'> {error} </p>)
      }
    </div>
  )
}

export default TextArea