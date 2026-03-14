'use client'

import { useState, useEffect } from 'react'
import { getOpenStatus, hoursConfig } from '../lib/hours'

export default function OpenStatus({ className = '', dotClassName = '' }) {
  const [status, setStatus] = useState(null)

  useEffect(() => {
    setStatus(getOpenStatus(new Date(), hoursConfig))
  }, [])

  const dotColor =
    status === null
      ? 'bg-gray-400'
      : !status.isOpen
        ? 'bg-red-500'
        : status.closingSoon
          ? 'bg-yellow-500'
          : 'bg-green-500'

  return (
    <p className={`inline-flex items-baseline gap-1 ${className}`}>
      <span
        className={`h-3 w-3 shrink-0 rounded-full ${dotColor} ${dotClassName}`.trim()}
        aria-hidden
      />
      {status === null ? '—' : status.label}
    </p>
  )
}
