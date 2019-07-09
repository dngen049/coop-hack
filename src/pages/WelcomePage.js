import React from 'react'
import { Link } from 'react-router-dom'

export default class WelcomePage extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="container" style={{display:"flex", flexDirection:"row", flexWrap:"wrap", height:"100vh"}}>
        {/* <h1>Welcome Page</h1>
        <p>
          <Link to="/HomePage">Go to My Home Page</Link> .
        </p> */}
        <div className="description" style={{flexGrow:"2"}}>
          <h1>Coop Hack</h1>
          <ul>
            <li>The biggest job board for university coop Student</li>
            <li>We have a team of expert actively finding new oppotunities</li>
            <li>Start applying for your next coop term today !</li>
          </ul>
        </div>
        <div className="Auth" style={{flexGrow:"2"}} >
          <div>
              <h3>Login</h3>
              <form>
                <input placeholder="Username"></input>
                <input placeholder="Password"></input>
                <div>
                  <a>Forgot Password</a>
                </div>
                <div>
                  <button>Log in</button>
                  <button>Sign up</button>
                </div>
              </form>
          </div>
         
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
              <p style={{textAlign:"center",verticalAlign:"middle"}}>"I found my next coop <br/>
                    term with <br/>
                    thanks to this app"</p>
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
              <p style={{textAlign:"center",verticalAlign:"middle"}}>"I found my next coop <br/>
                    term with <br/>
                    thanks to this app"</p>
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
              <p style={{textAlign:"center",verticalAlign:"middle"}}>"I found my next coop <br/>
                    term with <br/>
                    thanks to this app"</p>
            </div>
            
          </div>
      </div>
    )
  }
}
