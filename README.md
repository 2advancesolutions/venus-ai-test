# Email Composition Interface

A fully-featured email composition interface built with React, TypeScript, and TailwindCSS. Built by Venus 🌟

## Features

✨ **Modern UI Components**
- Clean, Gmail-inspired design with subtle animations
- Responsive modal dialog with focus trap
- Beautiful color scheme and typography

📧 **Email Composition**
- From field with sender dropdown
- To/CC/BCC recipient fields with chip-based input
- Email validation and multi-recipient support
- Quick CC/BCC toggle buttons

✍️ **Rich Text Editor** (powered by Tiptap)
- Bold, italic, underline formatting
- Link insertion with preview
- Bullet and numbered lists
- @mention support
- Full HTML content editing

📎 **File Attachments**
- Drag-and-drop file upload
- Upload progress indicators
- File type detection with icons
- Remove attachments functionality

🎨 **User Experience**
- Character counter for signatures
- Keyboard shortcuts (Cmd/Ctrl+Enter to send, Esc to close)
- Form validation (can't send without recipients)
- Smooth transitions and hover states
- Accessible (ARIA labels, keyboard navigation)

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first styling
- **Headless UI** - Accessible components (Dialog, Menu)
- **Tiptap** - Rich text editor
- **React Dropzone** - File upload handling
- **Lucide React** - Icon library
- **Vite** - Build tool

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── EmailComposer/
│       ├── index.tsx                    # Main composer component
│       ├── types.ts                     # TypeScript interfaces
│       ├── hooks/
│       │   └── useEmailComposer.ts      # State management hook
│       └── components/
│           ├── ComposerHeader.tsx       # Title + action buttons
│           ├── FromField.tsx            # Sender dropdown
│           ├── RecipientField.tsx       # To/CC/BCC with chips
│           ├── RichTextEditor.tsx       # Formatting toolbar + editor
│           ├── SignatureSection.tsx     # Signature with char count
│           ├── FileAttachment.tsx       # Upload progress card
│           └── ActionBar.tsx            # Bottom buttons
├── App.tsx                              # Root component
├── main.tsx                             # App entry point
└── index.css                            # Global styles + Tailwind
```

## Component Details

### EmailComposer
Main modal component that orchestrates all subcomponents. Handles:
- Modal open/close state
- Focus management
- Keyboard shortcuts
- Send logic

### useEmailComposer Hook
Centralized state management for:
- Email draft (from, to, cc, bcc, body, signature, attachments)
- Recipient management (add/remove)
- File upload simulation
- Form validation

### RichTextEditor
Powered by Tiptap with custom toolbar. Features:
- 6 formatting options (bold, italic, link, image, bullet list, numbered list)
- @mention extension
- Real-time HTML output

### RecipientField
Smart input field that:
- Converts typed emails into chips
- Validates email format
- Supports keyboard navigation (Enter, Comma, Space to add; Backspace to remove)
- Shows/hides CC/BCC fields on demand

### FileAttachment
Upload interface with:
- React Dropzone integration
- Simulated progress (0-100%)
- File size formatting
- Visual progress bar
- PDF icon for document files

## Design Tokens

### Colors
- Background: `#FFFFFF`, `#F9FAFB`
- Text: `#111827` (primary), `#6B7280` (secondary)
- Links: `#2563EB`
- Accents: Red for PDF icons

### Typography
- Font: Inter (sans-serif)
- Weights: 400 (regular), 500 (medium), 600 (semibold)

### Spacing
- Consistent padding: 16px/24px (px-4/px-6, py-4)
- Component gaps: 8px/12px (gap-2/gap-3)

## Testing Checklist

**Functionality:**
- [x] Modal opens and closes
- [x] Add/remove recipients in To/CC/BCC
- [x] Email validation works
- [x] Rich text formatting applies
- [x] Links are clickable
- [x] File upload shows progress
- [x] Character counter updates
- [x] Send button enables/disables correctly
- [x] Keyboard shortcuts work

**Edge Cases:**
- [x] Multiple recipients
- [x] Long email addresses
- [x] Empty fields (Send disabled)
- [x] Multiple file attachments

**Accessibility:**
- [x] Focus trap in modal
- [x] Keyboard navigation
- [x] ARIA labels
- [x] Esc to close

## Future Enhancements

- Draft autosave to localStorage
- Email templates with variables
- Emoji picker
- Rich text image upload (currently prompts for URL)
- Schedule send with date/time picker
- Read receipts
- Email threading
- Dark mode

## Notes

This is a demo implementation. In production, you'd want to:
- Connect to a real email API
- Implement actual file upload to cloud storage
- Add server-side validation
- Store drafts in database
- Add user authentication
- Implement rate limiting

---

Built with ❤️ by Venus 🌟

*"Fixed the email composer — turns out building Gmail is harder than it looks. Who knew."*
