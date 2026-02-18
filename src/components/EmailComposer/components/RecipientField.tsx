import { useState, KeyboardEvent, useRef } from 'react'
import { X } from 'lucide-react'
import { Recipient, RecipientFieldType } from '../types'

interface RecipientFieldProps {
  label: string
  type: RecipientFieldType
  recipients: Recipient[]
  onAdd: (recipient: Recipient) => void
  onRemove: (email: string) => void
  placeholder?: string
  showCCBCC?: boolean
  onShowCC?: () => void
  onShowBCC?: () => void
}

const isValidEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const RecipientField = ({
  label,
  type,
  recipients,
  onAdd,
  onRemove,
  placeholder = 'Add recipient',
  showCCBCC,
  onShowCC,
  onShowBCC
}: RecipientFieldProps) => {
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',' || e.key === ' ') {
      e.preventDefault()
      handleAddRecipient()
    } else if (e.key === 'Backspace' && inputValue === '' && recipients.length > 0) {
      onRemove(recipients[recipients.length - 1].email)
    }
  }

  const handleAddRecipient = () => {
    const email = inputValue.trim().replace(/,$/g, '')
    if (email && isValidEmail(email)) {
      onAdd({ email })
      setInputValue('')
    }
  }

  const handleBlur = () => {
    handleAddRecipient()
  }

  return (
    <div className="flex items-start gap-3 px-6 py-3 border-b border-gray-200">
      <span className="text-sm text-gray-500 w-16 pt-1">{label}</span>
      
      <div className="flex-1 flex flex-wrap items-center gap-2">
        {recipients.map((recipient) => (
          <div
            key={recipient.email}
            className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm"
          >
            <span>{recipient.name || recipient.email}</span>
            <button
              onClick={() => onRemove(recipient.email)}
              className="hover:bg-gray-200 rounded-full p-0.5 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
        
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder={recipients.length === 0 ? placeholder : ''}
          className="flex-1 min-w-[200px] outline-none text-sm text-gray-900 placeholder-gray-400"
        />
      </div>

      {showCCBCC && (
        <div className="flex items-center gap-2">
          <button
            onClick={onShowCC}
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Cc
          </button>
          <button
            onClick={onShowBCC}
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Bcc
          </button>
        </div>
      )}
    </div>
  )
}
