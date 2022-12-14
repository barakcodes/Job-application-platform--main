import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/solid'
import { FC } from 'react'
import {  UsersIcon } from '@heroicons/react/outline'


const stats = [
  { id: 3, name: 'Solana Balance', stat: '20.56', icon: UsersIcon, change: '3.2%', changeType: 'decrease' },
  { id: 1, name: 'Profile Views', stat: '3848', icon: UsersIcon, change: '122', changeType: 'increase' },
  { id: 2, name: 'Avg. Rating', stat: '4.2 Stars', icon: UsersIcon, change: '5.4%', changeType: 'increase' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const StatIcons: FC = ({}) => {
  return (
    <div>
      <h3 className="text-lg font-medium leading-6 text-black">Last 30 days</h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-accent-focus px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-primary-content p-3">
                <item.icon className="h-6 w-6 text-black" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-300">{item.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-white">{item.stat}</p>
              <p
                className={classNames(
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                ) : (
                  <ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                )}

                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                {item.change}
              </p>
              <div className="absolute inset-x-0 bottom-0 bg-secondary px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a href="#" className="font-medium text-white hover:text-indigo-500">
                    {' '}
                    View all<span className="sr-only"> {item.name} stats</span>
                  </a>
                </div>
              </div>
              
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}