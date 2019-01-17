import React from 'react'
import { Link } from 'react-router-dom'

const Freelance = () => {
  return (
    <div id="freelance">
      <h2>Freelance Work</h2>
      <p>
        I am open to any freelance work for frontend design including EDMs,
        Splash Pages, SPAs, CMS based websites (Drupal, Wordpress, etc.), Other
        Websites.
      </p>
      <h3>Freelance Pricing:</h3>
      <ul>
        <li>
          <Link to="/freelance/generic">
            <strong>Generic Work:</strong>
          </Link>{' '}
          <span className="pricing">$35/hr</span>{' '}
          <Link to="/freelance/generic">
            <ion-icon name="information-circle-outline" />
          </Link>
        </li>
        <li>
          <Link to="/freelance/edm">
            <strong>EMDs:</strong>
          </Link>{' '}
          <span className="pricing">$250 per email</span>
          <sup>1</sup>{' '}
          <Link to="/freelance/edm">
            <ion-icon name="information-circle-outline" />
          </Link>
        </li>
        <li>
          <Link to="/freelance/splash">
            <strong>Splash Page:</strong>
          </Link>{' '}
          <span className="pricing">$500+</span>
          <sup>2</sup>{' '}
          <Link to="/freelance/splash">
            <ion-icon name="information-circle-outline" />
          </Link>
        </li>
        <li>
          <Link to="/freelance/spa">
            <strong>SPA/Static Site:</strong>
          </Link>{' '}
          <span className="pricing">$1000+</span>
          <sup>2</sup>{' '}
          <Link to="/freelance/spa">
            <ion-icon name="information-circle-outline" />
          </Link>
        </li>
        <li>
          <Link to="/freelance/fullsite">
            <strong>CMS Based/Full Site:</strong>
          </Link>{' '}
          <span className="pricing">$2000+</span>
          <sup>2</sup>{' '}
          <Link to="/freelance/fullsite">
            <ion-icon name="information-circle-outline" />
          </Link>
        </li>
      </ul>
      <aside className="notes">
        <p>
          1. Price increases due to complexity of the email, and modified
          versions of the same email are charged at the hourly rate.
        </p>
        <p>
          2. Prices are negotiable, and depend on the complexity and
          interactivity required for the site.
        </p>
      </aside>
    </div>
  )
}

export const Generic = () => {
  return (
    <div id="freelance-generic">
      <h2>Freelance Work</h2>
      <h3>Generic Work</h3>
      <p className="pricing">$35 per hour</p>
      <p>
        I label generic work as any non-specific work such as site fixes and
        updates. This can be fixes or updates in most any Web Focused language.
      </p>
      <Link to="/freelance">Back</Link>
    </div>
  )
}

export const EDM = () => {
  return (
    <div id="freelance-edms">
      <h2>Freelance Work</h2>
      <h3>Electronic Direct Mail (EDM)</h3>
      <p className="pricing">$250-350 per email</p>
      <p>
        EDMs are html pages designed for use as emails. The emails I create
        should work in most email clients and are designed to be responsive.
      </p>
      <p>
        Most emails should easily hit the low end of my pricing, but I leave
        room to increase the price per email up if the design is more complex,
        or if the responsive needs are more than basic.
      </p>
      <Link to="/freelance">Back</Link>
    </div>
  )
}

export const Splash = () => {
  return (
    <div id="freelance-splash">
      <h2>Freelance Work</h2>
      <h3>Splash Pages</h3>
      <p className="pricing">$500+</p>
      <p>
        Splash Pages, or single html pages are negotiable based on the amount of
        complexivity involved with the page, but is assumed to be less complex
        than a SPA
      </p>
      <p>These will typically involve HTML (simple PHP) and CSS</p>
      <Link to="/freelance">Back</Link>
    </div>
  )
}

export const SPA = () => {
  return (
    <div id="freelance-spa">
      <h2>Freelance Work</h2>
      <h3>SPA/Static Sites</h3>
      <p className="pricing">$1000+</p>
      <p>
        Single Page Application (SPA) and Static Sites are negotiable based on
        the complexity and number of pages involved.
      </p>
      <p>
        These will typically involve HTML (simple PHP), CSS and Javascript
        (Vanilla, React, or Vue)
      </p>
      <Link to="/freelance">Back</Link>
    </div>
  )
}

export const FullSite = () => {
  return (
    <div id="freelance-full">
      <h2>Freelance Work</h2>
      <h3>CMS Based/Full Site</h3>
      <p className="pricing">$2000+</p>
      <p>
        CMS Based and Full Sites are negotiable based on the complexity and
        number of pages involved.
      </p>
      <p>
        These will typically involve HTML, PHP, CSS, Javascript (Vanilla, React,
        or Vue), and a backend system (or CMS)
      </p>
      <Link to="/freelance">Back</Link>
    </div>
  )
}

export default Freelance
