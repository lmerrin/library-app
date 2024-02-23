import { useState } from 'react'
import './App.css'
import BookCard from './components/BookCard/BookCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Library</h1>
    <BookCard/>
    </>
  )
}

export default App
