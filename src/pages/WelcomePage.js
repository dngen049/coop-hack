import React from 'react'
import { Link } from 'react-router-dom'
import LogIn from './../component/LogIn'

export default class WelcomePage extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="container" style={{display:"flex", flexDirection:"row", flexWrap:"wrap", height:"100vh"}}>
        
        <div className="description" style={{flexGrow:"2"}}>
          <h1>Coop Hack</h1>
          <ul>
            <li>The biggest job board for university coop Student</li>
            <li>We have a team of expert actively finding new oppotunities</li>
            <li>Start applying for your next coop term today !</li>
          </ul>
        </div>
        <div className="Auth" style={{flexGrow:"2", textAlign:"center",     boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", borderRadius: "19px"}} >
          <LogIn/>
         
        </div>
        <div className="Quote" style={{alignItems:"flex-end", flexGrow:"2", textAlign:"center"}}>
            <div style={{display:"inline-flex", padding:"40px"}}>
              <img className="Profile-pic" style={{borderRadius: "50%", height: "100px",
              width: "100px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "multiply",
              verticalAlign: "middle",
              textAlign: "center",
              color: "transparent",
              transition:" all .3s ease",
              textDecoration: "none"}} src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"></img>
              <p style={{textAlign:"center",verticalAlign:"middle"}}><span className="fa fa-quote-left"></span>  I found my next coop <br/>
                    term with <br/>
                    thanks to this app  <span className="fa fa-quote-right"></span></p>
            </div>
            <div style={{display:"inline-flex", padding:"40px"}}>
              <img className="Profile-pic" style={{borderRadius: "50%", height: "100px",
              width: "100px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "multiply",
              verticalAlign: "middle",
              textAlign: "center",
              color: "transparent",
              transition:" all .3s ease",
              textDecoration: "none"}} src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"></img>
              <p style={{textAlign:"center",verticalAlign:"middle"}}><span className="fa fa-quote-left"></span>  I found my next coop <br/>
                    term with <br/>
                    thanks to this app  <span className="fa fa-quote-right"></span></p>
            </div>
            
            <div style={{display:"inline-flex", padding:"40px"}}>
              <img className="Profile-pic" style={{borderRadius: "50%", height: "100px",
              width: "100px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "multiply",
              verticalAlign: "middle",
              textAlign: "center",
              color: "transparent",
              transition:" all .3s ease",
              textDecoration: "none"}} src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"></img>
              <p style={{textAlign:"center",verticalAlign:"middle"}}><span className="fa fa-quote-left"></span>  I found my next coop <br/>
                    term with <br/>
                    thanks to this app  <span className="fa fa-quote-right"></span></p>
            </div>
            
          </div>
      </div>
    )
  }
}
