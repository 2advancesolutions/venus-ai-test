import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import ComposerHeader from './components/ComposerHeader'
import FromField from './components/FromField'
import RecipientField from './components/RecipientField'
import RichTextEditor from './components/RichTextEditor'
import SignatureSection from './components/SignatureSection'
import FileAttachment from './components/FileAttachment'
import ActionBar from './components/ActionBar'
import { useEmailComposer } from './hooks/useEmailComposer'

interface EmailComposerProps {
  isOpen: boolean
  onClose: () => void
}

export default function EmailComposer({ isOpen, onClose }: EmailComposerProps) {
  const {
    emailData,
    updateField,
    addRecipient,
    removeRecipient,
    addAttachment,
    removeAttachment,
    handleSend,
    showCC,
    setShowCC,
    showBCC,
    setShowBCC,
  } = useEmailComposer()

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
          <div className="fixed inset-0 bg-black/25" />
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
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all">
                <div className="flex flex-col h-[90vh] max-h-[900px]">
                  {/* Header */}
                  <ComposerHeader onClose={onClose} />

                  {/* Scrollable Content */}
                  <div className="flex-1 overflow-y-auto">
                    {/* From Field */}
                    <FromField
                      from={emailData.from}
                      onChange={(from) => updateField('from', from)}
                    />

                    {/* To Field */}
                    <RecipientField
                      label="To"
                      recipients={emailData.to}
                      onAdd={(email) => addRecipient('to', email)}
                      onRemove={(email) => removeRecipient('to', email)}
                      showCC={showCC}
                      showBCC={showBCC}
                      onToggleCC={() => setShowCC(!showCC)}
                      onToggleBCC={() => setShowBCC(!showBCC)}
                    />

                    {/* CC Field */}
                    {showCC && (
                      <RecipientField
                        label="CC"
                        recipients={emailData.cc}
                        onAdd={(email) => addRecipient('cc', email)}
                        onRemove={(email) => removeRecipient('cc', email)}
                      />
                    )}

                    {/* BCC Field */}
                    {showBCC && (
                      <RecipientField
                        label="BCC"
                        recipients={emailData.bcc}
                        onAdd={(email) => addRecipient('bcc', email)}
                        onRemove={(email) => removeRecipient('bcc', email)}
                      />
                    )}

                    {/* Subject */}
                    <div className="px-6 py-3 border-b border-gray-200">
                      <input
                        type="text"
                        placeholder="Subject"
                        value={emailData.subject}
                        onChange={(e) => updateField('subject', e.target.value)}
                        className="w-full text-sm text-gray-900 placeholder-gray-400 focus:outline-none"
                      />
                    </div>

                    {/* Rich Text Editor */}
                    <div className="px-6 py-4">
                      <RichTextEditor
                        content={emailData.body}
                        onChange={(content) => updateField('body', content)}
                      />
                    </div>

                    {/* Signature */}
                    <SignatureSection
                      signature={emailData.signature}
                      onChange={(signature) => updateField('signature', signature)}
                    />

                    {/* Attachments */}
                    {emailData.attachments.length > 0 && (
                      <div className="px-6 py-4 space-y-2">
                        {emailData.attachments.map((file) => (
                          <FileAttachment
                            key={file.id}
                            file={file}
                            onRemove={() => removeAttachment(file.id)}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Action Bar */}
                  <ActionBar
                    onDelete={onClose}
                    onAttach={addAttachment}
                    onSchedule={() => console.log('Schedule')}
                    onRemindMe={() => console.log('Remind me')}
                    onSendLater={() => console.log('Send later')}
                    onSend={() => handleSend(onClose)}
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
