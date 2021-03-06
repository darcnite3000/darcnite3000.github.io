import React from 'react'

const About = () => (
  <div id="about-me">
    <h2>About Me</h2>
    <p>Currently based in Ballina on the Far North Coast of NSW, Australia</p>
    <p>
      I've been working in the web industry for over 11 years and have seen the
      progression from Perl to PHP and from Flash to HTML5 ads, and am still
      interested in the new front end technology coming out.
    </p>
    <p>
      I'm used to rapid development, and emergency fixes in getting ads, sites
      and tools into production.
    </p>
    <h3>Portfolio</h3>
    <ul className="gallery">
      <li>
        <a href="/port_work/email_01/email.html" target="_blank">
          <img src="/port_work/email_01/email.png" alt="Responsive EDM" />
        </a>
      </li>
      <li>
        <a href="https://blendinsurancesolutions.com.au" target="_blank">
          <img src="/port_work/blend.png" alt="Vue Single Page App" />
        </a>
      </li>
    </ul>
  </div>
)
export default About
