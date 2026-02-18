# Email Composer Component

A fully-featured email composition interface built with React, TypeScript, TailwindCSS, and Tiptap.

## Features

- **Full-featured composition modal** with minimize, pop-out, and copy actions
- **From field** with avatar and dropdown selector
- **Recipient management** with chips for To/CC/BCC fields
- **Rich text editor** with formatting toolbar (bold, italic, links, lists)
- **@mentions** support in editor
- **Email signature** with character counter
- **File attachment** with upload progress indicator
- **Action bar** with delete, attach, schedule, and send options
- **Responsive design** optimized for desktop
- **Keyboard shortcuts** support

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Headless UI** - Accessible modal and dropdowns
- **Tiptap** - Rich text editor
- **Lucide React** - Icons
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

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Component Structure

```
src/
├── components/
│   └── EmailComposer/
│       ├── index.tsx                    # Main composer component
│       ├── components/
│       │   ├── ComposerHeader.tsx       # Header with actions
│       │   ├── FromField.tsx            # Sender dropdown
│       │   ├── RecipientField.tsx       # To/CC/BCC chips
│       │   ├── RichTextEditor.tsx       # Tiptap editor
│       │   ├── SignatureSection.tsx     # Signature with counter
│       │   ├── FileAttachment.tsx       # Upload progress card
│       │   └── ActionBar.tsx            # Bottom action buttons
│       └── hooks/
│           └── useEmailComposer.ts      # State management
├── types.ts                             # TypeScript interfaces
├── App.tsx                              # Demo app
└── main.tsx                             # Entry point
```

## Usage

```tsx
import EmailComposer from './components/EmailComposer'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Compose Email
      </button>
      
      <EmailComposer 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  )
}
```

## Features In Detail

### Recipient Management
- Add recipients by typing email and pressing Enter, comma, or space
- Remove recipients by clicking X or pressing Backspace
- Email validation before adding
- Toggle CC/BCC fields

### Rich Text Editor
- Bold, Italic formatting
- Links with URL dialog
- Bullet and numbered lists
- @mentions support (type @ to trigger)
- Styled content (underline, links)

### File Attachments
- Click attach button or drag-and-drop files
- Visual upload progress indicator
- Remove attachments before sending
- File type and size display

### Keyboard Support
- `Cmd/Ctrl + Enter` - Send email (coming soon)
- `Esc` - Close modal
- `Backspace` - Remove last recipient when input is empty
- Full keyboard navigation in editor

## Design System

The component follows a clean, modern design with:
- **Colors**: White/light gray backgrounds, dark text, blue accents
- **Typography**: Inter font family, multiple weights
- **Spacing**: Generous padding and consistent gaps
- **Components**: Rounded corners, subtle borders, smooth transitions

## Future Enhancements

- [ ] Draft autosave to localStorage
- [ ] Template variables support
- [ ] Emoji picker
- [ ] Keyboard shortcuts overlay
- [ ] Real file upload API integration
- [ ] Email templates
- [ ] Scheduled send functionality
- [ ] Undo/redo in editor

## License

MIT

---

Built with ❤️ by Venus 🌟
