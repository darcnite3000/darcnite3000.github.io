import React from 'react'
import { render } from 'react-dom'
import './app.css'

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
      <div id="about-me">
        <h2>About Me</h2>
        <p>
          I've been working in the web industry for over 11 years and have seen
          the progression from Perl to PHP and from Flash to HTML5 ads, and am
          still interested in the new front end technology coming out. I'm used
          to rapid development, and emergency fixes in getting ads, sites and
          tools into production.
        </p>
      </div>
      <div id="education">
        <h2>Education</h2>
        <ul>
          <li>
            <b>HSC</b> from <i>Alstonville High School</i>
          </li>
          <li>
            <b>BSc Information Technology [Software Engineering]</b> from{' '}
            <i>Southern Cross University</i> - 2006
          </li>
        </ul>
      </div>
      <div id="work">
        <h2>Work</h2>
        <div id="bazar-studios">
          <h3>Bazar Studios - 2006/18</h3>
          <div id="bazar-studios-synopsis">
            <p>
              I joined Bazar Studios almost straight after finishing my Degree
              at SCU starting as a secondary coder and not long after that as
              the only in house coder.
            </p>
            <p>
              The work at Bazar Studios was wide as the company worked primarily
              as an outsourcing company for other agencies, most under NDAs.
              Work which included Flash Ads (both resizes and from design. My
              work predominately on the more interactive ones), HTML Ads (as
              with the flash ads), Flash Sites, Websites (PHP, Straight HTML and
              CMS based, both responsive and not) and EDMs (creating html emails
              from designs that were also responsive). The other main client was
              with an Adult Affiliate Marketing company (GunzBlazing.com) for
              which I made/maintained the approximately 25 sites that they
              managed (about 6 pages per site), the main webmaster portal, the
              promo content for webmasters and tools the generate the content
              from the promo pack system using both PHP and Javascript.
            </p>
            <p>
              In 2016 I started using Drupal 7 for new Sites and worked on
              migrating all the sites for the GunzBlazing from an old Mansion
              CMS, to Drupal 7 (Drupal 8 modules for relations were not stable
              at the time), which required me to extract the content from the
              MySQLDB directly as the Mansion CMS did not have any export tools.
              Also for some of these sites I implemented Drupal Commerce for the
              sale of shirts and licenses to download videos.
            </p>
          </div>
          <div id="bazar-studios-work">
            <p>
              Throughout my work with Bazar Studios I have used in production,
              or for backend tools the following:
            </p>
            <ul>
              <li>
                <b>Flash</b> - using AS2 and AS3
              </li>
              <li>
                <b>Perl</b> - fixing broken mailing scripts
              </li>
              <li>
                <b>HTML/CSS</b> - from Table layouts to Divs and Flex, including
                HTML Email, responsive layouts and SVG.
              </li>
              <li>
                <b>PHP</b> - SQL communication, Dynamic Pages, Image Creation,
                Emails and CURL requests
              </li>
              <li>
                <b>Javascript</b> - for all manners of AJAX communication and
                DOM manipulation (with and without jQuery) inlcuding and entire
                pack system
              </li>
              <li>
                <b>Node.JS</b> - for creating simple use tools such as my
                Auto-Mail script
              </li>
              <li>
                <b>NPM, Bower, Composer</b> - for the including of open source
                libraries
              </li>
              <li>
                <b>Browserify, Babel</b> - for transpilation to browser
                compatible code
              </li>
              <li>
                <b>Webpack, Gulp, Poi</b> - for managing tasks and
                transpilations for JS/CSS
              </li>
              <li>
                <b>Sass</b> - the Scss variation
              </li>
              <li>
                <b>PostCSS</b> - for CSSNext, Autoprefixer and Font-Magician
              </li>
              <li>
                <b>Ruby</b> - for RubyOnRails, Compass and for a page scraper
                allong with Phantom
              </li>
              <li>
                <b>Compass, Neat, Bourbon</b> - for cross browser compatible
                Sass Mixins
              </li>
              <li>
                <b>Coffeescript</b> - as a replacment to js code before es6
              </li>
              <li>
                <b>jQuery, jQuery-UI, jQuery-Mobile</b>
              </li>
              <li>
                <b>BackboneJS</b> - for small modules
              </li>
              <li>
                <b>KnockoutJS</b> - for small modules and as part of a Durandal
                project
              </li>
              <li>
                <b>AngularJS</b> - for small modules and a possible rewrite of
                the pack system
              </li>
              <li>
                <b>Durandal</b> - for an as of yet unreleased project
              </li>
              <li>
                <b>VueJS</b> - for two websites one using the JSX method and one
                with Vue templates
              </li>
              <li>
                <b>React</b> - for back-end tools, a possible site update and
                for a drag and drop proof of concept for a possible client
              </li>
              <li>
                <b>Joomla, Wordpress, Magento, Shopify</b> - for various small
                sites
              </li>
              <li>
                <b>Drupal 7</b> - for multiple Video Member sites
              </li>
              <li>
                <b>Drupal Commerce</b> - for merchandise and the sale of
                downloads via licenses and credits
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="hobbies-interests">
        <h2>Hobbies and Interests</h2>
        <p>
          I try to keep myself up to date with all the current front-end
          libraries and frameworks and continually play with code outside of
          work, subscribing to pretty much all of the CooperPress mailing lists,
          and Egghead.IO
        </p>
        <p>
          My current favourite library/framework of choice is React, as after
          using Knockout and Angular the idea of a DOM system that was all just
          javascript was interesting, and after playing with JSX for a bit, it
          got me hooked, and I am dissapointed that I didn't use it for the two
          sites I used Vue for. At the time I was playing with Vue, and a new
          tool (Poi) which made it simple to run with Vue.
        </p>
        <p>
          I'm a bit of a console gamer as I have a Switch, a PS4 and an XBOX and
          often get hooked on RPGs. I'm looking forward to Kigndom Hearts 3 and
          CyberPunk 2077.
        </p>
        <p>
          I'm also a bit of a reader and can say I have read all of R. E.
          Feists' Magician books, and I am currently reading his latest book
          now.
        </p>
        <p>
          I am also a Referee for Football Far North Coast, and will likely
          continue refereeing football (soccer) wherever I move, as I recently
          got back into this as a method of keeping fit.
        </p>
      </div>
      <div id="professional-skills">
        <h2>Professional Skills</h2>
        <ul>
          <li>
            <b>PHP:</b> Advanced
          </li>
          <li>
            <b>HTML:</b> Expert
          </li>
          <li>
            <b>CSS:</b> Advanced
          </li>
          <li>
            <b>Javascript:</b> Advanced
          </li>
          <li>
            <b>Node:</b> Intermediate
          </li>
          <li>
            <b>React:</b> Advanced
          </li>
          <li>
            <b>VueJS:</b> Intermediate
          </li>
          <li>
            <b>AngularJS:</b> Intermediate
          </li>
          <li>
            <b>KockoutJS:</b> Advanced
          </li>
          <li>
            <b>EmberJS:</b> Beginner
          </li>
          <li>
            <b>Ruby:</b> Intermediate
          </li>
          <li>
            <b>Ruby on Rails:</b> Intermediate
          </li>
          <li>
            <b>MySQL:</b> Advanced
          </li>
          <li>
            <b>PostgreSQL:</b> Intermediate
          </li>
          <li>
            <b>Mongo:</b> Intermediate
          </li>
          <li>
            <b>Go:</b> Intermediate
          </li>
          <li>
            <b>WordPress:</b> Intermediate
          </li>
          <li>
            <b>Drupal:</b> Advanced
          </li>
          <li>
            <b>Flash:</b> Advanced
          </li>
          <li>
            <b>Perl:</b> Intermediate
          </li>
        </ul>
      </div>
    </div>
  </div>
)

render(<App />, document.getElementById('app'))
