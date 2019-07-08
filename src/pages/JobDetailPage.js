import React from 'react'
import { Link } from 'react-router-dom'

export default class JobDetailPage extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="container">
        <h1>Job detail Page</h1>
        <p>Job id {this.props.match.params.id}</p>
        
      </div>
    )
  }
}