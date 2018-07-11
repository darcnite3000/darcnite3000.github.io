import React from 'react'
import { render } from 'react-dom'
import './app.css'
import Work from './Work'
import About from './About'
import Education from './Education'
import Hobbies from './Hobbies'
import Skills from './Skills'

const App = () => (
  <div>
    <header>
      <h1>Tristan Smith</h1>
      <nav>
        <a href="my_resume.pdf" download>
          <ion-icon name="download" />Resume
        </a>
      </nav>
    </header>
    <div id="body">
      <div id="contact">
        <h2>Contact</h2>
        <div class="list">
          <a href="tel:+61431071276">
            <ion-icon name="call" />+61431071276
          </a>
          <a href="mail:darcnite3000@gmail.com">
            <ion-icon name="mail" />darcnite3000@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/tristan-smith45/">
            <ion-icon name="logo-linkedin" />https://www.linkedin.com/in/tristan-smith45/
          </a>
          <a href="https://github.com/darcnite3000/">
            <ion-icon name="logo-github" />https://github.com/darcnite3000/
          </a>
          <a href="skype:tristan_smith45">
            <ion-icon name="logo-skype" />tristan_smith45
          </a>
        </div>
      </div>
      <About />
      <Education />
      <Work />
      <Hobbies />
      <Skills />
    </div>
  </div>
)

render(<App />, document.getElementById('app'))
