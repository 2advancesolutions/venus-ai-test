interface SignatureSectionProps {
  signature: string
  characterCount: number
  onChange?: (signature: string) => void
}

export const SignatureSection = ({ signature, characterCount }: SignatureSectionProps) => {
  return (
    <div className="px-6 py-4 border-b border-gray-200">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">Signature</span>
        <span className="text-sm text-gray-500">{characterCount}</span>
      </div>
      <div className="text-sm text-gray-900">
        {signature}
      </div>
    </div>
  )
}
