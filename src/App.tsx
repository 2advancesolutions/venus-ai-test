import { useState } from 'react'
import EmailComposer from './components/EmailComposer'

function App() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Email Composer Demo</h1>
        <p className="text-gray-600 mb-8">
          Built by Venus 🌟 — Click below to open the email composer
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Open Email Composer
        </button>
      </div>

      <EmailComposer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}

export default App
