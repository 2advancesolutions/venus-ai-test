import { Menu, Transition } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'
import { Fragment } from 'react'

interface FromFieldProps {
  from: {
    name: string
    email: string
    avatar?: string
  }
  onChange: (from: any) => void
}

export default function FromField({ from }: FromFieldProps) {
  return (
    <div className="px-6 py-3 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-700 w-16">From</span>
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center gap-3 hover:bg-gray-50 rounded-lg px-2 py-1 transition-colors">
              {/* Avatar */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-sm font-medium">
                {from.name.split(' ').map(n => n[0]).join('')}
              </div>
              {/* Name and Email */}
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium text-gray-900">{from.name}</span>
                <span className="text-xs text-gray-500">{from.email}</span>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
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
              <Menu.Items className="absolute left-0 mt-2 w-64 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                <div className="p-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-gray-100' : ''
                        } group flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm`}
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-sm font-medium">
                          OR
                        </div>
                        <div className="flex flex-col items-start">
                          <span className="text-sm font-medium text-gray-900">Olivia Rhye</span>
                          <span className="text-xs text-gray-500">hello@oliviarhye.com</span>
                        </div>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  )
}
