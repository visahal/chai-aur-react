import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
function Myapp(){
  return(
    <div>
      <h1>Custom app</h1>
    </div>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Myapp/>;
  </StrictMode>,
)
