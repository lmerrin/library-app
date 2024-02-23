import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Library</h1>
    <div className="book-card">
        <h3>Native Lands Forigen Desires</h3>
        <p>Year: 1993</p>
        <p>Author: Lilikala Kameeleihiwa</p>
      </div>

    </>
  )
}

export default App
