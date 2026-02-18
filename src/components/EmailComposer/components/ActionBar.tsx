import { Trash2, Paperclip, Clock } from 'lucide-react'

interface ActionBarProps {
  onDelete: () => void
  onAttach: () => void
  onSchedule: () => void
  onRemindMe: () => void
  onSendLater: () => void
  onSend: () => void
}

export default function ActionBar({
  onDelete,
  onAttach,
  onSchedule,
  onRemindMe,
  onSendLater,
  onSend,
}: ActionBarProps) {
  return (
    <div className="px-6 py-4 border-t border-gray-200 bg-white">
      <div className="flex items-center justify-between">
        {/* Left Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onDelete}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
            title="Delete"
          >
            <Trash2 className="w-5 h-5" />
          </button>
          <button
            onClick={onAttach}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
            title="Attach file"
          >
            <Paperclip className="w-5 h-5" />
          </button>
          <button
            onClick={onSchedule}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
            title="Schedule"
          >
            <Clock className="w-5 h-5" />
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onRemindMe}
            className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Remind me
          </button>
          <button
            onClick={onSendLater}
            className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Send later
          </button>
          <button
            onClick={onSend}
            className="px-6 py-2 text-sm font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
