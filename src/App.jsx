import { RouterProvider } from 'react-router-dom'
import { Router } from './core/router/app.router'
import RootProvider from './core/providers/RootProvider'

function App() {

  return (
    <>
      <RootProvider>
        <RouterProvider router={Router} />
      </RootProvider>
    </>
  )
}

export default App
