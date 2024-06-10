import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App({}) {
  const [count, setCount] = useState(0)
  let myObj ={
    username:"ravikant",
    age:27
  }
  let newArray =[1,2,3]
  return (
    <>
      <h1 className='bg-green-50 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
      <Card channel="chai or code" btnText="visit me" someObj={myObj} newArr={newArray} />
      <Card channel="code or chai" btnText="click me" ravi='singh'/>
      
    </>
  )
}

export default App
