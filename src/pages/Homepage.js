import React from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="container">
        <h1>Welcome Page</h1>
        <p>
          <Link to="/App">Go to app Page</Link> .
          <Link to="/Profile">Go to profile Page</Link> .
          <Link to="/Search">Go to Search Page</Link> .
        </p>
      </div>
    )
  }
}