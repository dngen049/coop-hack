import React from 'react'
import LogIn from './../component/LogIn'
import "./WelcomePage.css"
import Quote from './../component/Quote'

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
          <div className="Quote" style={{marginTop:"50px"}}>
                <Quote/>
                <Quote/>
                <Quote/>
          </div>
        </div>
      
      </div>
    )
  }
}
