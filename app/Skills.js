import React, { Component } from 'react'

const levels = ['Beginner', 'Intermediate', 'Advanced', 'Expert']
const skillList = [
  { skill: 'PHP', level: 3 },
  { skill: 'HTML', level: 4 },
  { skill: 'CSS', level: 3 },
  { skill: 'Javascript', level: 3 },
  { skill: 'Node', level: 2 },
  { skill: 'React', level: 3 },
  { skill: 'VueJS', level: 3 },
  { skill: 'AngularJS', level: 2 },
  { skill: 'KnockoutJS', level: 3 },
  { skill: 'Ruby', level: 2 },
  { skill: 'Ruby on Rails', level: 2 },
  { skill: 'Ember', level: 1 },
  { skill: 'MySQL', level: 3 },
  { skill: 'PostgreSQ', level: 2 },
  { skill: 'Mongo', level: 2 },
  { skill: 'Go', level: 2 },
  { skill: 'WordPress', level: 2 },
  { skill: 'Drupal', level: 3 },
  { skill: 'Flash', level: 3 },
  { skill: 'Perl', level: 2 }
]

const Stars = ({ count, isOver = false }) => {
  let starGroup = []
  for (let i = 0; i < 4; i++) {
    if (i < count) {
      starGroup.push('star')
    } else {
      starGroup.push('star-outline')
    }
  }
  return (
    <div className="stars">
      {isOver
        ? levels[count - 1]
        : starGroup.map((name, i) => <ion-icon key={i} name={name} />)}
    </div>
  )
}
let over = null
class Skills extends Component {
  state = {
    skill: ''
  }
  handleOver = skill => event => {
    this.setState({ skill })
  }
  handleOut = event => {
    this.setState({ skill: '' })
  }
  render() {
    return (
      <div id="professional-skills">
        <h2>Professional Skills</h2>
        <ul className="skill-list">
          {skillList.map(({ skill, level }) => (
            <li
              key={skill}
              onMouseEnter={this.handleOver(skill)}
              onMouseLeave={this.handleOut}
            >
              <b>{skill}:</b>{' '}
              <Stars count={level} isOver={skill === this.state.skill} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Skills
