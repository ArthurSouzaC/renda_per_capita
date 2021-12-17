import { Route, Routes as ReactRoutes, BrowserRouter } from 'react-router-dom'

import Main from './Main'
import Info from './Info'

// Roteamento da aplicação
export default function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route element={<Main />} path="/" exact/>
        <Route element={<Info />} path="/info"/>
      </ReactRoutes>
    </BrowserRouter>
  )
}