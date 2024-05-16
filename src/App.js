import React from 'react'

import { ErrorHandler } from '@arik-portfolio/components'
import FrontPage from '@arik-portfolio/Pages/FrontPage'

function App() {
  return (
    <>
      <ErrorHandler>
        <FrontPage />
      </ErrorHandler>
    </>
  )
}

export default App
