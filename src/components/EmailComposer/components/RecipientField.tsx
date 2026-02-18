import { useState, KeyboardEvent } from 'react'
import { X } from 'lucide-react'
import { Recipient } from '../../../types'

interface RecipientFieldProps {
  label: string
  recipients: Recipient[]
  onAdd: (email: string) => void
  onRemove: (email: string) => void
  showCC?: boolean
  showBCC?: boolean
  onToggleCC?: () => void
  onToggleBCC?: () => void
}

export default function RecipientField({
  label,
  recipients,
  onAdd,
  onRemove,
  showCC,
  showBCC,
  onToggleCC,
  onToggleBCC,
}: RecipientFieldProps) {
  const [inputValue, setInputValue] = useState('')

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',' || e.key === ' ') {
      e.preventDefault()
      const email = inputValue.trim()
      if (email && isValidEmail(email)) {
        onAdd(email)
        setInputValue('')
      }
    } else if (e.key === 'Backspace' && inputValue === '' && recipients.length > 0) {
      onRemove(recipients[recipients.length - 1].email)
    }
  }

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  return (
    <div className="px-6 py-3 border-b border-gray-200">
      <div className="flex items-start gap-3">
        <span className="text-sm font-medium text-gray-700 w-16 pt-1.5">{label}</span>
        <div className="flex-1 flex flex-wrap items-center gap-2">
          {recipients.map((recipient) => (
            <div
              key={recipient.email}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700"
            >
              <span>{recipient.email}</span>
              <button
                onClick={() => onRemove(recipient.email)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={recipients.length === 0 ? 'Add recipients...' : ''}
            className="flex-1 min-w-[200px] text-sm text-gray-900 placeholder-gray-400 focus:outline-none py-1.5"
          />
        </div>
        {label === 'To' && (
          <div className="flex items-center gap-2 ml-2">
            {!showCC && onToggleCC && (
              <button
                onClick={onToggleCC}
                className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
              >
                CC
              </button>
            )}
            {!showBCC && onToggleBCC && (
              <button
                onClick={onToggleBCC}
                className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
              >
                BCC
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
