interface SignatureSectionProps {
  signature: string
  onChange: (signature: string) => void
}

export default function SignatureSection({ signature, onChange }: SignatureSectionProps) {
  const charCount = signature.length

  return (
    <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="text-sm font-medium text-gray-900 mb-1">Signature</div>
          <textarea
            value={signature}
            onChange={(e) => onChange(e.target.value)}
            className="w-full text-sm text-gray-700 bg-transparent resize-none focus:outline-none"
            rows={2}
            placeholder="Add your signature..."
          />
        </div>
        <div className="text-xs text-gray-500 pt-1">
          {charCount}
        </div>
      </div>
    </div>
  )
}
