import Button from '@mui/material/Button'
import React, { useEffect, useState } from 'react'
import LightModeIcon  from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useColorScheme } from '@mui/material/styles'

function DarkMode() {
  const { mode, setMode } = useColorScheme()
  if (!mode) {
    return null
  }
  const handleSetMode = () => {
    switch (mode) {
    case 'dark':
      setMode('light')
      break
    case 'light':
      setMode('dark')
      break
    }
  }

  return (
    <>
      <Button onClick={handleSetMode}>{mode === 'light' ? <LightModeIcon/> : <DarkModeIcon/> }</Button>
    </>
  )
}

export default DarkMode
