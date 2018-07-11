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
        <a href="#about">About Me</a>
        <a href="#education">Education</a>
        <a href="#work">Work</a>
        <a href="#hobbies-interests">Hobbies/Interests</a>
        <a href="#professional-skills">Skills</a>
        <a href="https://www.linkedin.com/in/tristan-smith45/">
          <ion-icon name="logo-linkedin" />
        </a>
        <a href="https://github.com/darcnite3000/">
          <ion-icon name="logo-github" />
        </a>
        <a href="my_resume.pdf" title="Resume" download>
          <ion-icon name="download" />R&#233;sum&#233;
        </a>
      </nav>
    </header>
    <div id="body">
      <About />
      <Education />
      <Work />
      <Hobbies />
      <Skills />
    </div>
    <footer>
      <div class="contact-list">
        <a href="tel:+61431071276">
          <ion-icon name="call" /> +61 431 071 276
        </a>
        <a href="mail:darcnite3000@gmail.com">
          <ion-icon name="mail" /> darcnite3000@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/tristan-smith45/">
          <ion-icon name="logo-linkedin" /> tristan-smith45
        </a>
        <a href="https://github.com/darcnite3000/">
          <ion-icon name="logo-github" /> darcnite3000
        </a>
        <a href="skype:tristan_smith45">
          <ion-icon name="logo-skype" /> tristan_smith45
        </a>
      </div>
    </footer>
  </div>
)

render(<App />, document.getElementById('app'))
