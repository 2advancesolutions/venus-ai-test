import { FileText, X } from 'lucide-react'
import { FileAttachment as FileAttachmentType } from '../../../types'

interface FileAttachmentProps {
  file: FileAttachmentType
  onRemove: () => void
}

export default function FileAttachment({ file, onRemove }: FileAttachmentProps) {
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  const circumference = 2 * Math.PI * 10 // radius = 10
  const strokeDashoffset = circumference - (file.progress / 100) * circumference

  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
      {/* PDF Icon */}
      <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
        <FileText className="w-5 h-5 text-red-600" />
      </div>

      {/* File Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-sm font-medium text-gray-900 truncate">{file.name}</span>
        </div>
        
        {/* Progress Text */}
        {file.progress < 100 ? (
          <span className="text-xs text-gray-500">
            {formatFileSize(file.size)} - {file.progress}% uploaded
          </span>
        ) : (
          <span className="text-xs text-gray-500">{formatFileSize(file.size)}</span>
        )}
      </div>

      {/* Circular Progress Indicator */}
      {file.progress < 100 && (
        <div className="relative w-6 h-6 flex-shrink-0">
          <svg className="w-6 h-6 transform -rotate-90" viewBox="0 0 24 24">
            {/* Background circle */}
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-gray-200"
            />
            {/* Progress circle */}
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="text-blue-600 transition-all duration-300"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      {/* Remove Button */}
      <button
        onClick={onRemove}
        className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
