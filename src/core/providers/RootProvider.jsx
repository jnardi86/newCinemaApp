import React from 'react'
import AuthProvider from '../auth/providers/AuthProvider'
import { NextUIProvider } from '@nextui-org/react'
import { darkTheme } from '../themes/themes'
import { HelmetProvider } from "react-helmet-async"




const RootProvider = ({ children }) => {



  return (

    <NextUIProvider theme={darkTheme}>
      <HelmetProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </HelmetProvider>
    </NextUIProvider>
  )
}

export default RootProvider