import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import Mention from '@tiptap/extension-mention'
import { Bold, Italic, Link as LinkIcon, Image, List, ListOrdered } from 'lucide-react'

interface RichTextEditorProps {
  content: string
  onChange: (content: string) => void
}

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 underline cursor-pointer',
        },
      }),
      Placeholder.configure({
        placeholder: 'Type your message here...',
      }),
      Mention.configure({
        HTMLAttributes: {
          class: 'text-blue-600 font-medium',
        },
        suggestion: {
          items: ({ query }) => {
            return [
              'John Doe',
              'Jane Smith',
              'Mike Johnson',
              'Sarah Williams',
            ].filter(item => item.toLowerCase().includes(query.toLowerCase()))
          },
        },
      }),
    ],
    content: content || `<p>Hey there,</p><p>Can you review the new <u>admin dashboard</u>? It looks <em>much</em> better with the latest updates.</p><p><a href="https://example.com/preview">Here's a preview link</a> to check out.</p><p>Let me know what you think!</p>`,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm max-w-none focus:outline-none min-h-[200px] text-gray-900',
      },
    },
  })

  if (!editor) {
    return null
  }

  const addLink = () => {
    const url = window.prompt('Enter URL')
    if (url) {
      editor.chain().focus().setLink({ href: url }).run()
    }
  }

  return (
    <div className="space-y-3">
      {/* Toolbar */}
      <div className="flex items-center gap-1 pb-3 border-b border-gray-200">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-gray-100 transition-colors ${
            editor.isActive('bold') ? 'bg-gray-100 text-gray-900' : 'text-gray-500'
          }`}
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-gray-100 transition-colors ${
            editor.isActive('italic') ? 'bg-gray-100 text-gray-900' : 'text-gray-500'
          }`}
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </button>
        <div className="w-px h-6 bg-gray-200 mx-1" />
        <button
          onClick={addLink}
          className={`p-2 rounded hover:bg-gray-100 transition-colors ${
            editor.isActive('link') ? 'bg-gray-100 text-gray-900' : 'text-gray-500'
          }`}
          title="Add link"
        >
          <LinkIcon className="w-4 h-4" />
        </button>
        <button
          className="p-2 rounded hover:bg-gray-100 transition-colors text-gray-500"
          title="Add image"
        >
          <Image className="w-4 h-4" />
        </button>
        <div className="w-px h-6 bg-gray-200 mx-1" />
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-gray-100 transition-colors ${
            editor.isActive('bulletList') ? 'bg-gray-100 text-gray-900' : 'text-gray-500'
          }`}
          title="Bullet list"
        >
          <List className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-gray-100 transition-colors ${
            editor.isActive('orderedList') ? 'bg-gray-100 text-gray-900' : 'text-gray-500'
          }`}
          title="Numbered list"
        >
          <ListOrdered className="w-4 h-4" />
        </button>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} />
    </div>
  )
}
