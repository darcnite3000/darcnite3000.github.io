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
          <strong>Generic Work:</strong> <span>35/hr</span>{' '}
          <Link to="/freelance/generic" class="more-link">
            More
          </Link>
        </li>
        <li>
          <strong>EMDs:</strong>{' '}
          <span>
            250-350 per email<sup>1</sup>
          </span>{' '}
          <Link to="/freelance/edm" class="more-link">
            More
          </Link>
        </li>
        <li>
          <strong>Splash Page:</strong>{' '}
          <span>
            500+<sup>2</sup>
          </span>{' '}
          <Link to="/freelance/splash" class="more-link">
            More
          </Link>
        </li>
        <li>
          <strong>SPA/Static Site:</strong>{' '}
          <span>
            1000+<sup>2</sup>
          </span>{' '}
          <Link to="/freelance/spa" class="more-link">
            More
          </Link>
        </li>
        <li>
          <strong>CMS Based/Full Site:</strong>{' '}
          <span>
            2000+<sup>2</sup>
          </span>{' '}
          <Link to="/freelance/fullsite" class="more-link">
            More
          </Link>
        </li>
      </ul>
      <aside>
        <p>1. Price increases due to complexity of the email.</p>
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
      <p>$35 per hour</p>
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
      <p>$250-350 per email</p>
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
      <p>$500+</p>
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
      <p>$1000+</p>
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
      <p>$2000+</p>
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
