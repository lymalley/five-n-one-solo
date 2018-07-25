import React from 'react'
// import { Link } from "react-router-dom"
import { withRouter } from 'react-router'

//
const Form = ({
  history,
  cancelURL,
  id = '',
  name = '',
  value = '',
  onChange,
  onSubmit,
  isColor
}) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        if (name === '' || value === '') alert('Missing Field')
        else {
          onSubmit({ id, name, value })
        }
      }}
    >
      <div>
        <label>Name</label>
      </div>
      <div>
        <input
          type="text"
          onChange={e => onChange('name', e.target.value)}
          value={name}
        />
      </div>
      <React.Fragment>
        {isColor ? (
          <React.Fragment>
            <div>
              <label>Value</label>
            </div>
            <div>
              <input
                type="text"
                onChange={e => onChange('value', e.target.value)}
                value={value}
              />
            </div>
          </React.Fragment>
        ) : null}
      </React.Fragment>
      <div>
        <button type="submit">Submit</button>
        <button onClick={() => history.push(cancelURL)}>Cancel</button>
      </div>
    </form>
  )
}

export default withRouter(Form)
