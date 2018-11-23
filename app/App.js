import React, { Component } from 'react'

import { Route, Link, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Particles from 'particlesjs'
import './app.css'
import Work from './Work'
import Freelance from './Freelance'
import About from './About'
import Education from './Education'
import Hobbies from './Hobbies'
import Skills from './Skills'

class App extends Component {
  componentDidMount() {
    Particles.init({
      selector: '.background',
      connectParticles: true,
      maxParticles: 70,
      color: ['#ffffff', '#cccccc', '#aaaaaa']
    })
  }
  render() {
    return (
      <Route
        render={({ location }) => (
          <div>
            <header>
              <h1>
                <img className="face" src="/me.jpg" alt="Tristan Smith" />
                <span>Tristan Smith</span>
              </h1>
              <nav>
                <Link to="/">About Me</Link>
                <Link to="/freelance">Freelance</Link>
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
                  <Route path="/freelance" component={Freelance} />
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
                <span>
                  <ion-icon name="business" title="ABN" /> 7425 260 4937
                </span>
                <a href="tel:+61431071276">
                  <ion-icon name="call" title="Mobile" /> +61 431 071 276
                </a>
                <a href="mail:darcnite3000@gmail.com">
                  <ion-icon name="mail" title="Email" /> darcnite3000@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/tristan-smith45/"
                  target="_blank"
                >
                  <ion-icon name="logo-linkedin" title="LinkedIn" />{' '}
                  tristan-smith45
                </a>
                <a href="https://github.com/darcnite3000/" target="_blank">
                  <ion-icon name="logo-github" title="GitHub" /> darcnite3000
                </a>
                <a href="skype:tristan_smith45">
                  <ion-icon name="logo-skype" title="Skype" /> tristan_smith45
                </a>
              </div>
            </footer>
            <canvas className="background" />
          </div>
        )}
      />
    )
  }
}

export default App
