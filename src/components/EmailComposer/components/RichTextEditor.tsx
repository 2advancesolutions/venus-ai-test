import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Mention from '@tiptap/extension-mention'
import { 
  Bold, 
  Italic, 
  Link as LinkIcon, 
  Image, 
  List, 
  ListOrdered 
} from 'lucide-react'

interface RichTextEditorProps {
  content: string
  onChange: (content: string) => void
}

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) return null

  const buttonClass = (isActive: boolean) =>
    `p-2 rounded hover:bg-gray-100 transition-colors ${
      isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-500'
    }`

  return (
    <div className="flex items-center gap-1 px-4 py-2 border-b border-gray-200">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={buttonClass(editor.isActive('bold'))}
        title="Bold"
      >
        <Bold className="w-5 h-5" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={buttonClass(editor.isActive('italic'))}
        title="Italic"
      >
        <Italic className="w-5 h-5" />
      </button>
      <button
        onClick={() => {
          const url = window.prompt('Enter URL')
          if (url) {
            editor.chain().focus().setLink({ href: url }).run()
          }
        }}
        className={buttonClass(editor.isActive('link'))}
        title="Link"
      >
        <LinkIcon className="w-5 h-5" />
      </button>
      <button
        onClick={() => {
          const url = window.prompt('Enter image URL')
          if (url) {
            editor.chain().focus().setImage({ src: url }).run()
          }
        }}
        className={buttonClass(false)}
        title="Image"
      >
        <Image className="w-5 h-5" />
      </button>
      <div className="w-px h-6 bg-gray-200 mx-2" />
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={buttonClass(editor.isActive('bulletList'))}
        title="Bullet List"
      >
        <List className="w-5 h-5" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={buttonClass(editor.isActive('orderedList'))}
        title="Numbered List"
      >
        <ListOrdered className="w-5 h-5" />
      </button>
    </div>
  )
}

const initialContent = `<p>Hi Phoenix and Candice,</p><p>I wanted to share the latest updates on the <u>admin dashboard</u> redesign. I think you'll find the changes <em>much</em> more intuitive!</p><p>We've made several improvements:</p><ul><li>Streamlined navigation</li><li>Better data visualization</li><li>Faster load times</li></ul><p>@mention feature works great too! Check it out and let me know what you think. If you have any questions, <a href="https://example.com/preview">here's a preview link</a>.</p><p>Looking forward to your feedback!</p>`

export const RichTextEditor = ({ content, onChange }: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 underline',
        },
      }),
      Mention.configure({
        HTMLAttributes: {
          class: 'mention',
        },
      }),
    ],
    content: initialContent,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  return (
    <div className="border-b border-gray-200">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  )
}
