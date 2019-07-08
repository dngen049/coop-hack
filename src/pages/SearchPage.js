import React from 'react'
import { Link } from 'react-router-dom'

export default class SearchPage extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="container">
        <h1>Search Page</h1>
        <p>
        <Link to="/Job/10002443e">Go this job detail Page</Link> .

        </p>
      </div>
    )
  }
}