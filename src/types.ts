export interface Recipient {
  email: string;
  name?: string;
}

export interface FileAttachment {
  id: string;
  name: string;
  size: number;
  progress: number;
  type: string;
}

export interface EmailData {
  from: {
    name: string;
    email: string;
    avatar?: string;
  };
  to: Recipient[];
  cc: Recipient[];
  bcc: Recipient[];
  subject: string;
  body: string;
  signature: string;
  attachments: FileAttachment[];
}

export interface EditorCommand {
  name: string;
  icon: React.ReactNode;
  action: () => void;
  isActive?: boolean;
}
