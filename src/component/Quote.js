import React from 'react';




class Quote extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() { 
     
        
        return (
           
                <div style={{display:"inline-flex", flexDirection:"row", flexWrap:"wrap",  padding:"40px",  boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 19px 0px",borderRadius: "20px",  margin:"5px"}}>
                    <img className="Profile-pic" style={{flexGrow:"2",borderRadius: "50%", height: "100px",
                            width: "100px",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundBlendMode: "multiply",
                            verticalAlign: "middle",
                            textAlign: "center",
                            color: "transparent",
                            transition:" all .3s ease",
                            textDecoration: "none"}} src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"></img>
                    <p style={{textAlign:"center",verticalAlign:"middle", flexGrow:"2",}}><span className="fa fa-quote-left"></span>  I found my next coop <br/>
                        term with <br/>
                        thanks to this app  <span className="fa fa-quote-right"></span>
                        
                        </p>
                    <h5 style={{flexGrow:"2", alignItems:"flex-end"}}>Mr iglesias Gozalez</h5>
                
                </div>
          
      );
    }
  }


export default  Quote;