import { lazy, Suspense } from 'react'
import './App.css'

function App() {

  const UseState1 = lazy(() => import('./pages/UseState1'))
  const UseState2 = lazy(() => import('./pages/UseState2'))
  const UseState3 = lazy(()=> import('./pages/UseState3'))
  const UseState4 = lazy(()=> import('./pages/UseState4'))
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <UseState1/>
      <UseState2/>
      <UseState3/>
      <UseState4/>
    </Suspense>
    </>
  )
}

export default App
