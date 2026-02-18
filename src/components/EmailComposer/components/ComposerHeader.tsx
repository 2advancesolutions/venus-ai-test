import { Minus, Maximize2, Copy, X } from 'lucide-react'

interface ComposerHeaderProps {
  onClose: () => void
}

export default function ComposerHeader({ onClose }: ComposerHeaderProps) {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900">New message</h2>
      <div className="flex items-center gap-2">
        <button
          className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
          title="Minimize"
        >
          <Minus className="w-4 h-4" />
        </button>
        <button
          className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
          title="Pop-out"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
        <button
          className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
          title="Copy"
        >
          <Copy className="w-4 h-4" />
        </button>
        <button
          onClick={onClose}
          className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
          title="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
