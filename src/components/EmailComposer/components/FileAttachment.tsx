import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { FileText, X, Upload } from 'lucide-react'
import { FileAttachment as FileAttachmentType } from '../types'

interface FileAttachmentProps {
  attachments: FileAttachmentType[]
  onAdd: (file: File) => void
  onRemove: (id: string) => void
}

const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return Math.round(bytes / 1024) + ' KB'
  return Math.round(bytes / (1024 * 1024)) + ' MB'
}

export const FileAttachment = ({ attachments, onAdd, onRemove }: FileAttachmentProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach(file => onAdd(file))
  }, [onAdd])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: attachments.length > 0
  })

  if (attachments.length === 0) return null

  return (
    <div className="px-6 py-4 border-b border-gray-200">
      <div className="space-y-3">
        {attachments.map((attachment) => (
          <div
            key={attachment.id}
            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
          >
            <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-red-600" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-900 truncate">
                  {attachment.name}
                </span>
                <button
                  onClick={() => onRemove(attachment.id)}
                  className="p-1 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>{formatFileSize(attachment.size)}</span>
                {attachment.status === 'uploading' && (
                  <>
                    <span>•</span>
                    <span>{attachment.progress}% uploaded</span>
                  </>
                )}
              </div>
              
              {attachment.status === 'uploading' && (
                <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${attachment.progress}%` }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div
        {...getRootProps()}
        className={`mt-3 border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors ${
          isDragActive
            ? 'border-blue-600 bg-blue-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
        <p className="text-sm text-gray-500">
          {isDragActive ? 'Drop files here' : 'Drop files or click to upload'}
        </p>
      </div>
    </div>
  )
}
