import React from 'react'
import { Link } from 'react-router-dom'

//composante pour les jobs
class Job extends React.Component{
    constructor(props){
        super(props)
        
        
    }
  
    render(){
        var link = "/Job/"+ this.props.JobID;
      
        return(
           
            <div className="list-item">
                <div className="list-item-main-info">
                <p className="list-item-title">
                    <Link to={link}>{this.props.title}</Link>
                </p>
                <div className="list-item-meta">
                    <a href="" className="list-item-tag item-badge">4.5/5.0</a>
                    <span className="list-item-company">{this.props.company}</span>
                </div>
                </div>
                <div className="list-item-secondary-info">
                <p className="list-item-location">{this.props.location}</p>
                <time className="list-item-time" datetime="2017-01-01">3 hours ago</time>
                </div>
            </div>
        )
    }
}


export default Job;