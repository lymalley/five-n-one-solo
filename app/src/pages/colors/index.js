import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const li = color => {
  return (
    <li key={color.id} style={{ color: color.value }}>
      {color.name}
    </li>
  )
}

const Colors = props => (
  <div>
    <Link to="/colors/new">Add New Color</Link>
    <h1>Colors</h1>
    <ul>{map(li, props.colors)}</ul>
  </div>
)

const mapStateToProps = state => {
  return { colors: state.colors }
}

export default connect(mapStateToProps)(Colors)
