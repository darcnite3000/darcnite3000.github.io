import React from 'react'

const Freelance = () => {
  return (
    <div id="freelance">
      <h2>Freelance Work</h2>
      <p>
        I am open to any freelance work for frontend design including EDMs,
        Splash Pages, SPAs, CMS based websites (Drupal, Wordpress, etc.), Other
        Websites.
      </p>
      <h3>Freelance Priceing:</h3>
      <ul>
        <li>
          <strong>Generic Work:</strong> <span>35/hr</span>
        </li>
        <li>
          <strong>EMDs:</strong>{' '}
          <span>
            250-350 per email<sup>1</sup>
          </span>
        </li>
        <li>
          <strong>Splash Page:</strong>{' '}
          <span>
            500+<sup>2</sup>
          </span>
        </li>
        <li>
          <strong>SPA/Static Site:</strong>{' '}
          <span>
            1000+<sup>2</sup>
          </span>
        </li>
        <li>
          <strong>CMS Based/Full Site:</strong>{' '}
          <span>
            2000+<sup>2</sup>
          </span>
        </li>
      </ul>
      <p>1. Price increases due to complexity of the email.</p>
      <p>
        2. Prices are negotiable, and depend on the complexity and interactivity
        required for the site.
      </p>
    </div>
  )
}

export default Freelance
