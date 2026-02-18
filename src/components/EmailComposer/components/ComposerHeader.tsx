import { Minus, Maximize2, Copy } from 'lucide-react'

interface ComposerHeaderProps {
  onMinimize?: () => void
  onPopout?: () => void
  onCopy?: () => void
}

export const ComposerHeader = ({ onMinimize, onPopout, onCopy }: ComposerHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      <h2 className="text-lg font-semibold text-gray-900">New message</h2>
      
      <div className="flex items-center gap-2">
        <button
          onClick={onMinimize}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          title="Minimize"
        >
          <Minus className="w-5 h-5 text-gray-500" />
        </button>
        <button
          onClick={onPopout}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          title="Pop out"
        >
          <Maximize2 className="w-5 h-5 text-gray-500" />
        </button>
        <button
          onClick={onCopy}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          title="Copy"
        >
          <Copy className="w-5 h-5 text-gray-500" />
        </button>
      </div>
    </div>
  )
}
