import { Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ComposerHeader } from './components/ComposerHeader'
import { FromField } from './components/FromField'
import { RecipientField } from './components/RecipientField'
import { RichTextEditor } from './components/RichTextEditor'
import { SignatureSection } from './components/SignatureSection'
import { FileAttachment } from './components/FileAttachment'
import { ActionBar } from './components/ActionBar'
import { useEmailComposer } from './hooks/useEmailComposer'

interface EmailComposerProps {
  isOpen: boolean
  onClose: () => void
}

const EmailComposer = ({ isOpen, onClose }: EmailComposerProps) => {
  const {
    draft,
    showCC,
    showBCC,
    setShowCC,
    setShowBCC,
    addRecipient,
    removeRecipient,
    updateBody,
    addAttachment,
    removeAttachment,
    getCharacterCount,
    canSend
  } = useEmailComposer()

  // Add initial attachment for demo
  useEffect(() => {
    if (isOpen && draft.attachments.length === 0) {
      // Simulate adding the demo PDF file
      const demoFile = new File([''], 'Tech design requirements.pdf', { type: 'application/pdf' })
      Object.defineProperty(demoFile, 'size', { value: 204800 }) // 200 KB
      addAttachment(demoFile)
    }
  }, [isOpen])

  const handleSend = () => {
    console.log('Sending email:', draft)
    alert('Email sent! (This is a demo - check console for draft data)')
    onClose()
  }

  const handleAttach = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.multiple = true
    input.onchange = (e) => {
      const files = (e.target as HTMLInputElement).files
      if (files) {
        Array.from(files).forEach(file => addAttachment(file))
      }
    }
    input.click()
  }

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen && (e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        if (canSend()) {
          handleSend()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, canSend, draft])

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-xl bg-white shadow-2xl transition-all">
                <div className="flex flex-col max-h-[90vh]">
                  <ComposerHeader
                    onMinimize={() => console.log('Minimize')}
                    onPopout={() => console.log('Pop out')}
                    onCopy={() => console.log('Copy')}
                  />

                  <div className="flex-1 overflow-y-auto">
                    <FromField sender={draft.from} />

                    <RecipientField
                      label="To"
                      type="to"
                      recipients={draft.to}
                      onAdd={(recipient) => addRecipient('to', recipient)}
                      onRemove={(email) => removeRecipient('to', email)}
                      showCCBCC={!showCC && !showBCC}
                      onShowCC={() => setShowCC(true)}
                      onShowBCC={() => setShowBCC(true)}
                    />

                    {showCC && (
                      <RecipientField
                        label="Cc"
                        type="cc"
                        recipients={draft.cc}
                        onAdd={(recipient) => addRecipient('cc', recipient)}
                        onRemove={(email) => removeRecipient('cc', email)}
                      />
                    )}

                    {showBCC && (
                      <RecipientField
                        label="Bcc"
                        type="bcc"
                        recipients={draft.bcc}
                        onAdd={(recipient) => addRecipient('bcc', recipient)}
                        onRemove={(email) => removeRecipient('bcc', email)}
                      />
                    )}

                    <RichTextEditor
                      content={draft.body}
                      onChange={updateBody}
                    />

                    <SignatureSection
                      signature={draft.signature}
                      characterCount={getCharacterCount()}
                    />

                    <FileAttachment
                      attachments={draft.attachments}
                      onAdd={addAttachment}
                      onRemove={removeAttachment}
                    />
                  </div>

                  <ActionBar
                    onDelete={onClose}
                    onAttach={handleAttach}
                    onSchedule={() => console.log('Schedule')}
                    onRemindMe={() => console.log('Remind me')}
                    onSendLater={() => console.log('Send later')}
                    onSend={handleSend}
                    canSend={canSend()}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default EmailComposer
