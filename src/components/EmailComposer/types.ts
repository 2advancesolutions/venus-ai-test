export interface Recipient {
  email: string
  name?: string
}

export interface EmailSender {
  name: string
  email: string
  avatar?: string
}

export interface FileAttachment {
  id: string
  name: string
  size: number
  type: string
  progress: number
  status: 'uploading' | 'complete' | 'error'
}

export interface EmailDraft {
  from: EmailSender
  to: Recipient[]
  cc: Recipient[]
  bcc: Recipient[]
  subject: string
  body: string
  signature: string
  attachments: FileAttachment[]
}

export type RecipientFieldType = 'to' | 'cc' | 'bcc'
