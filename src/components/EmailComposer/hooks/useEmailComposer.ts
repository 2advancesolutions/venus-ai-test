import { useState, useCallback } from 'react'
import { EmailDraft, Recipient, FileAttachment, RecipientFieldType } from '../types'

const initialSender = {
  name: 'Olivia Rhye',
  email: 'hello@oliviarhye.com',
  avatar: 'OR'
}

const initialRecipients: Recipient[] = [
  { email: 'phoenix@catalog.com', name: 'Phoenix' },
  { email: 'candice@catalog.com', name: 'Candice' }
]

export const useEmailComposer = () => {
  const [draft, setDraft] = useState<EmailDraft>({
    from: initialSender,
    to: initialRecipients,
    cc: [],
    bcc: [],
    subject: '',
    body: '',
    signature: 'Olivia Rhye',
    attachments: []
  })

  const [showCC, setShowCC] = useState(false)
  const [showBCC, setShowBCC] = useState(false)

  const addRecipient = useCallback((type: RecipientFieldType, recipient: Recipient) => {
    setDraft(prev => ({
      ...prev,
      [type]: [...prev[type], recipient]
    }))
  }, [])

  const removeRecipient = useCallback((type: RecipientFieldType, email: string) => {
    setDraft(prev => ({
      ...prev,
      [type]: prev[type].filter(r => r.email !== email)
    }))
  }, [])

  const updateBody = useCallback((body: string) => {
    setDraft(prev => ({ ...prev, body }))
  }, [])

  const updateSubject = useCallback((subject: string) => {
    setDraft(prev => ({ ...prev, subject }))
  }, [])

  const addAttachment = useCallback((file: File) => {
    const newAttachment: FileAttachment = {
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
      progress: 0,
      status: 'uploading'
    }

    setDraft(prev => ({
      ...prev,
      attachments: [...prev.attachments, newAttachment]
    }))

    // Simulate upload progress
    simulateUpload(newAttachment.id)

    return newAttachment.id
  }, [])

  const simulateUpload = (attachmentId: string) => {
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setDraft(prev => ({
        ...prev,
        attachments: prev.attachments.map(att =>
          att.id === attachmentId
            ? { ...att, progress, status: progress >= 100 ? 'complete' : 'uploading' }
            : att
        )
      }))

      if (progress >= 100) {
        clearInterval(interval)
      }
    }, 200)
  }

  const removeAttachment = useCallback((id: string) => {
    setDraft(prev => ({
      ...prev,
      attachments: prev.attachments.filter(att => att.id !== id)
    }))
  }, [])

  const getCharacterCount = useCallback(() => {
    return draft.signature.length
  }, [draft.signature])

  const canSend = useCallback(() => {
    return draft.to.length > 0 && (draft.body.length > 0 || draft.attachments.length > 0)
  }, [draft.to, draft.body, draft.attachments])

  return {
    draft,
    showCC,
    showBCC,
    setShowCC,
    setShowBCC,
    addRecipient,
    removeRecipient,
    updateBody,
    updateSubject,
    addAttachment,
    removeAttachment,
    getCharacterCount,
    canSend
  }
}
