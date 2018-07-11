import React from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './app.css'
import Work from './Work'
import About from './About'
import Education from './Education'
import Hobbies from './Hobbies'
import Skills from './Skills'

const App = () => (
  <Router>
    <Route
      render={({ location }) => (
        <div>
          <header>
            <h1>Tristan Smith</h1>
            <nav>
              <Link to="/">About Me</Link>
              <Link to="/education">Education</Link>
              <Link to="/work">Work</Link>
              <Link to="/hobbies-interests">Hobbies/Interests</Link>
              <Link to="/professional-skills">Skills</Link>
              <a href="/my_resume.pdf" title="Resume" download>
                <ion-icon name="download" />R&#233;sum&#233;
              </a>
              <a
                href="https://www.linkedin.com/in/tristan-smith45/"
                target="_blank"
              >
                <ion-icon name="logo-linkedin" />
              </a>
              <a href="https://github.com/darcnite3000/" target="_blank">
                <ion-icon name="logo-github" />
              </a>
            </nav>
          </header>
          <TransitionGroup id="body">
            <CSSTransition key={location.key} timeout={200} classNames="fade">
              <Switch location={location}>
                <Route exact path="/" component={About} />
                <Route path="/education" component={Education} />
                <Route path="/work" component={Work} />
                <Route path="/hobbies-interests" component={Hobbies} />
                <Route path="/professional-skills" component={Skills} />
                <Route render={() => <div>Not Found</div>} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          <footer>
            <div className="contact-list">
              <a href="tel:+61431071276">
                <ion-icon name="call" /> +61 431 071 276
              </a>
              <a href="mail:darcnite3000@gmail.com">
                <ion-icon name="mail" /> darcnite3000@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/tristan-smith45/"
                target="_blank"
              >
                <ion-icon name="logo-linkedin" /> tristan-smith45
              </a>
              <a href="https://github.com/darcnite3000/" target="_blank">
                <ion-icon name="logo-github" /> darcnite3000
              </a>
              <a href="skype:tristan_smith45">
                <ion-icon name="logo-skype" /> tristan_smith45
              </a>
            </div>
          </footer>
        </div>
      )}
    />
  </Router>
)

export default App
