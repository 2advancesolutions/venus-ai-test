import { Trash2, Paperclip, Clock, Bell, Send } from 'lucide-react'

interface ActionBarProps {
  onDelete?: () => void
  onAttach?: () => void
  onSchedule?: () => void
  onRemindMe?: () => void
  onSendLater?: () => void
  onSend: () => void
  canSend: boolean
}

export const ActionBar = ({
  onDelete,
  onAttach,
  onSchedule,
  onRemindMe,
  onSendLater,
  onSend,
  canSend
}: ActionBarProps) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 bg-white">
      <div className="flex items-center gap-2">
        <button
          onClick={onDelete}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          title="Delete"
        >
          <Trash2 className="w-5 h-5 text-gray-500" />
        </button>
        <button
          onClick={onAttach}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          title="Attach file"
        >
          <Paperclip className="w-5 h-5 text-gray-500" />
        </button>
        <button
          onClick={onSchedule}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          title="Schedule"
        >
          <Clock className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onRemindMe}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          <Bell className="w-4 h-4" />
          Remind me
        </button>
        <button
          onClick={onSendLater}
          className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          <Clock className="w-4 h-4" />
          Send later
        </button>
        <button
          onClick={onSend}
          disabled={!canSend}
          className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
            canSend
              ? 'bg-gray-900 text-white hover:bg-gray-800'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <Send className="w-4 h-4" />
          Send
        </button>
      </div>
    </div>
  )
}
