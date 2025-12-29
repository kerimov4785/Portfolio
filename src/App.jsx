import { useState } from 'react'
import Intro from './Components/Intro1'
import Main from './Page/Main'

function App() {
  let [animEnd, setAnimEnd] = useState(false)
  return (
    <>
      {window.innerWidth >= 1024 ? <Intro setAnimEnd={setAnimEnd} /> : null}
      {animEnd || window.innerWidth <= 1024 ? <Main /> : null}
    </>
  )
}

export default App
