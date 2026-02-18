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

  return (
    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
      {/* PDF Icon */}
      <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
        <FileText className="w-5 h-5 text-red-600" />
      </div>

      {/* File Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium text-gray-900 truncate">{file.name}</span>
          <span className="text-xs text-gray-500 flex-shrink-0">{formatFileSize(file.size)}</span>
        </div>
        
        {/* Progress Bar */}
        {file.progress < 100 ? (
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${file.progress}%` }}
                />
              </div>
              <span className="text-xs text-gray-500">{file.progress}%</span>
            </div>
            <span className="text-xs text-gray-500">Uploading...</span>
          </div>
        ) : (
          <span className="text-xs text-green-600">Upload complete</span>
        )}
      </div>

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
