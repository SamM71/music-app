import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Info() {
  return (
    <>
      <h1>The Kooks</h1>
      <div className="info">
        <p>
          Genre: Pop-rock
        </p>
        <p>
          The Kooks are an English pop-rock band formed in 2004 in Brighton. The band currently consists of Luke Pritchard (vocals/rhythm guitar), Hugh Harris (lead guitar/synthesizer/bass) and Alexis Nunez (drums).
        </p>
      </div>
    </>
  )
}

function App() {
  return (
    <Info />
  )

}

export default App
