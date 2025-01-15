'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <></>
    )
  }

  return resolvedTheme === 'dark' ? (
    <FiSun onClick={() => setTheme('light')}  className="size-8"/>
  ) : (
    <FiMoon onClick={() => setTheme('dark')} className="size-8"/>
  )
}
