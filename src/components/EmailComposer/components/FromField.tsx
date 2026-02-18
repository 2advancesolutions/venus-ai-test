import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'
import { EmailSender } from '../types'

interface FromFieldProps {
  sender: EmailSender
  onChangeSender?: (sender: EmailSender) => void
}

export const FromField = ({ sender }: FromFieldProps) => {
  return (
    <div className="flex items-center gap-3 px-6 py-3 border-b border-gray-200">
      <span className="text-sm text-gray-500 w-16">From</span>
      
      <Menu as="div" className="relative flex-1">
        <Menu.Button className="flex items-center gap-3 w-full hover:bg-gray-50 rounded-lg px-2 py-1 transition-colors">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium">
            {sender.avatar || sender.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1 text-left">
            <div className="text-sm font-medium text-gray-900">{sender.name}</div>
            <div className="text-sm text-gray-500">{sender.email}</div>
          </div>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 mt-2 w-80 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            <div className="p-2">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-50' : ''
                    } flex items-center gap-3 w-full rounded-lg px-3 py-2 text-sm`}
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium">
                      OR
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium text-gray-900">Olivia Rhye</div>
                      <div className="text-sm text-gray-500">hello@oliviarhye.com</div>
                    </div>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
