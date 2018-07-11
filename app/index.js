import React from 'react'
import { render } from 'react-dom'

const App = () => (
  <div>
    <header>
      <h1>Tristan Smith</h1>
      <nav>
        <a href="/">Home</a>
        <a href="resume.md">Resume</a>
      </nav>
    </header>
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
      quibusdam id similique distinctio assumenda neque quam dolorum dolor
      voluptates reprehenderit facilis, porro tempora fuga modi debitis eos
      ullam deleniti facere!
    </div>
  </div>
)

render(<App />, document.getElementById('app'))
