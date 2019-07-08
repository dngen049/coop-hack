import React from 'react'
import { Link } from 'react-router-dom'

export default class WelcomePage extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="container">
        <h1>Welcome Page</h1>
        <p>
          <Link to="/HomePage">Go to My Home Page</Link> .
        </p>
      </div>
    )
  }
}