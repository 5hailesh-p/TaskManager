import { useState } from 'react'
import './App.css'
import TaskManager from './components/Taskmanager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <TaskManager/>
    </div>
     
     
       
    </>
  )
}

export default App
