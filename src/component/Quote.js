import React from 'react';




class Quote extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() { 
     
        
        return (
           
                <div style={{ padding:"40px", width:"max-content", height:"fit-content",   boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 19px 0px",borderRadius: "20px",  margin:"5px"}}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
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
                                </td>
                                <td>
                                    <p style={{}}><span className="fa fa-quote-left"></span> I found my next coop <br/>
                                                                                            term with <br/>
                                                                                            thanks to this app <span className="fa fa-quote-right"></span>    
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                     <h5 style={{textAlign:"right"}}>- Mr iglesias Gozalez</h5>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                   
                
                </div>
          
      );
    }
  }


export default  Quote;