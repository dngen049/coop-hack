import React from 'react'
import { Link } from 'react-router-dom'
import LogIn from './../component/LogIn'
import "./WelcomePage.css"
export default class WelcomePage extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div style={{width:"100%"}}>
        <div className="content">
          <div className="container" style={{display:"flex", flexDirection:"row", flexWrap:"wrap", }}>
            
              <div style={{flexGrow:"2", width:"50%"}}>
                <h1 style={{fontWeight:"bolder", fontSize:"80px"}}>Coop Hack</h1>
                <ul className="description">
                  <li>The biggest job board for <br/> university coop Student</li>
                  <li>We have a team of expert actively <br/> finding new oppotunities</li>
                  <li>Start applying for your next coop term today !</li>
                </ul>
              </div>
              <div className="Auth" style={{ height: "500px", flexGrow:"2", textAlign:"center",     boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", borderRadius: "19px", backgroundColor:"white"}} >
                <LogIn/>
              
              </div>
         

        </div>
        </div>

        <div className="container" style={{backgroundAttachment:"fixed"}}>
          <div className="Quote" style={{alignItems:"flex-end", flexGrow:"2", textAlign:"center", marginTop:"50px"}}>
                <div style={{display:"inline-flex", padding:"40px",  boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 19px 0px",borderRadius: "20px", margin:"5px"}}>
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
                <div style={{display:"inline-flex", padding:"40px",  boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 19px 0px",borderRadius: "20px",  margin:"5px"}}>
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
                
                <div style={{display:"inline-flex", padding:"40px",  boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 19px 0px",borderRadius: "20px",  margin:"5px"}}>
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
                        thanks to this app  <span className="fa fa-quote-right"></span>
                        
                        </p>
                        
                       
                </div>
                
              </div>
        </div>
      
      </div>
    )
  }
}
