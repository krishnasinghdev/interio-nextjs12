import { useRef, useEffect, useState, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode,
  onClick:()=>void
}

export const Modal = ({children,onClick}: PortalProps) => {
  const ref = useRef<Element | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#modal")
    setMounted(true)
  }, [])

  return (mounted && ref.current) ? createPortal(<div className='overlay' onClick={onClick}  >{children}</div>, ref.current) : null
}