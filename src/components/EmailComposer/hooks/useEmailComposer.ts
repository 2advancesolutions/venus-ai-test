import { useState } from 'react'
import { EmailData, Recipient, FileAttachment } from '../../../types'

export function useEmailComposer() {
  const [showCC, setShowCC] = useState(false)
  const [showBCC, setShowBCC] = useState(false)

  const [emailData, setEmailData] = useState<EmailData>({
    from: {
      name: 'Olivia Rhye',
      email: 'hello@oliviarhye.com',
    },
    to: [
      { email: 'phoenix@catalog.com' },
      { email: 'candice@catalog.com' },
    ],
    cc: [],
    bcc: [],
    subject: '',
    body: '',
    signature: 'Olivia Rhye',
    attachments: [
      {
        id: '1',
        name: 'Tech design requirements.pdf',
        size: 200 * 1024, // 200 KB
        progress: 70,
        type: 'application/pdf',
      },
    ],
  })

  const updateField = <K extends keyof EmailData>(
    field: K,
    value: EmailData[K]
  ) => {
    setEmailData((prev) => ({ ...prev, [field]: value }))
  }

  const addRecipient = (field: 'to' | 'cc' | 'bcc', email: string) => {
    const recipient: Recipient = { email }
    setEmailData((prev) => ({
      ...prev,
      [field]: [...prev[field], recipient],
    }))
  }

  const removeRecipient = (field: 'to' | 'cc' | 'bcc', email: string) => {
    setEmailData((prev) => ({
      ...prev,
      [field]: prev[field].filter((r) => r.email !== email),
    }))
  }

  const addAttachment = () => {
    // Simulate file picker
    const input = document.createElement('input')
    input.type = 'file'
    input.multiple = true
    input.onchange = (e) => {
      const files = (e.target as HTMLInputElement).files
      if (files) {
        Array.from(files).forEach((file) => {
          const attachment: FileAttachment = {
            id: Math.random().toString(36).substr(2, 9),
            name: file.name,
            size: file.size,
            progress: 0,
            type: file.type,
          }
          setEmailData((prev) => ({
            ...prev,
            attachments: [...prev.attachments, attachment],
          }))
          
          // Simulate upload progress
          simulateUploadProgress(attachment.id)
        })
      }
    }
    input.click()
  }

  const simulateUploadProgress = (attachmentId: string) => {
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      if (progress > 100) {
        clearInterval(interval)
        return
      }
      updateAttachmentProgress(attachmentId, progress)
    }, 200)
  }

  const removeAttachment = (attachmentId: string) => {
    setEmailData((prev) => ({
      ...prev,
      attachments: prev.attachments.filter((a) => a.id !== attachmentId),
    }))
  }

  const updateAttachmentProgress = (attachmentId: string, progress: number) => {
    setEmailData((prev) => ({
      ...prev,
      attachments: prev.attachments.map((a) =>
        a.id === attachmentId ? { ...a, progress } : a
      ),
    }))
  }

  const handleSend = (onClose: () => void) => {
    // Validate required fields
    if (emailData.to.length === 0) {
      alert('Please add at least one recipient')
      return
    }

    console.log('Sending email:', emailData)
    alert('Email sent! (This is a demo)')
    onClose()
  }

  return {
    emailData,
    updateField,
    addRecipient,
    removeRecipient,
    addAttachment,
    removeAttachment,
    updateAttachmentProgress,
    handleSend,
    showCC,
    setShowCC,
    showBCC,
    setShowBCC,
  }
}
