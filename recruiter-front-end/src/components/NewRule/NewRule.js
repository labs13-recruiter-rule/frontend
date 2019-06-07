/* IMPORTS */
import React from 'react'
import { render } from 'react-dom'
import {
  Button,
  Container,
  Divider,
  Header
} from 'semantic-ui-react'
/* IMPORTS */

class NewRule extends React.Component {
  componentDidMount() {
    const selection = document.createElement('div')
    selection.classList.add('ui-selection')
    document.body.appendChild(selection)

    let currentElement

    const handleIndicatorMouse = function(e) {
      if (e.target.tagName === 'I' || e.target.classList.contains('ui')) {
        currentElement = e.target
      }

      const {
        top,
        left,
        width,
        height,
      } = currentElement.getBoundingClientRect()

      if (e.type === 'mouseover') {
        selection.setAttribute(
          'data-component',
          currentElement.className.split(' ').join('.'),
        )
        selection.classList.add('visible')
        selection.style.top = top + 'px'
        selection.style.left = left + 'px'
        selection.style.width = width + 'px'
        selection.style.height = height + 'px'
      } else {
        selection.classList.remove('visible')
      }

      e.stopPropagation()
    }
  }

  render() {
    return (
      <Container>
        <Header size='huge'>Recruiter Rule</Header>
        <Divider hidden />
        <div className="tipText">
          <p>No rules setup. Create your first rule.</p>
        </div>
        <Divider hidden />
        <Button
          content="Create Rule"
          href="#"
          target="_blank"
        />
        <Divider hidden clearing />
      </Container>
    )
  }
}

export default NewRule;