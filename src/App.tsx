import { useState } from 'react'
import EmailComposer from './components/EmailComposer'

function App() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Email Composer Demo</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Open Email Composer
        </button>
        
        <EmailComposer 
          isOpen={isOpen} 
          onClose={() => setIsOpen(false)} 
        />
      </div>
    </div>
  )
}

export default App
