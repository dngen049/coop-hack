import React from 'react'
import {withRouter} from 'react-router';
import {Typeahead} from 'react-bootstrap-typeahead';
import {Form, FormGroup, Button} from 'react-bootstrap'
import CountUp from 'react-countup';
import "./HomePage.css"

class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.state={
        search:[],
        region:[],
        EngSelected:false,
        FinSelected: false,
        TeleComSelected: false,
        MedSelected: false,
    }
    
  }
  
  //Cette fonction quand le user clique le bouton de recherche
  handleSubmit = event => {
    var dom=[]; //on verifie les domaine choisi et on cree un array des domaine choisi
    if(this.state.EngSelected){
      dom.push("Engineering")
    }
    if(this.state.FinSelected){
      dom.push("Finance")
    }
    if(this.state.TeleComSelected){
      dom.push("Telecommunication")
    }
    if(this.state.MedSelected){
      dom.push("Medical")
    }
    //on redirige a la page de Recherche avec les parametres 
    this.props.history.push('/coop-hack/Search', { search: this.state.search, region: this.state.region, domain:dom }) 
  }
 
  render(){
    var options = [ "User Experience Designer", "Software Developper", "Web Developper"]
    return (
      <div style={{width:"100%"}}>
        <div className="Home-content">
          <div className="container" style={{marginTop:"60px"}}>
              <h1>Find Job</h1>
              <div>
              <Form style={{display:"flex", marginTop:"20px"}}  onSubmit={this.handleSubmit}>
                    <FormGroup controlId="search" style={{width: "60%" ,marginRight: "5px"}} >
                  
                        <Typeahead
                          minLength={2}
                         id="search"
                          value={this.state.search}
                          onChange={(selectedOptions) =>  this.setState({search : selectedOptions})}
                          options={["User Experience Designer","McIntire Solutions, LLC" ,
                           "Software Developper", "Shopify" ,
                            "Web Developper", "Google, Inc." ,
                            "Mobile Developper", "Amazon" ,
                            "Full Stack Developper", "Nokia",
                            "Co-op/Intern : Python Mathlab Programmer","Ciena",
                            "Lion Tamer", "Amazing Circus", "Private Equity Analyst – Paid Internship",  "Senior Vice President" ,
                            "Ottawa Skin Clinic", "Medical Aesthetic Receptionist", "Medical / Writer Researcher", "Thera-Business",
                            "Fiber Splicing Technician", "Telecom engineer"
                          ]}
                          placeholder="Job title, Company name, .."
                        />
                       
                    </FormGroup>
                
                     <FormGroup controlId="region" style={{width: "40%", marginRight: "5px"}}>
                  
                        <Typeahead
                          minLength={2}
                          id="search"
                          value={this.state.search}
                          onChange={(selectedOptions) =>  this.setState({region : selectedOptions})}
                          options={["Ottawa, ON","Richmond, VA" ,
                            "Montreal, QC", "Quebec, QC" ,
                            "Regina, SK", 
                            "Halifax, NS", "Edmonton, Alb" , "Kanata, ON", "Toronto, ON"
                          ]}
                          placeholder="City, Province, .."
                      />
                         
                    </FormGroup>
                    <style type="text/css">
                      {`
                        form > button.btn {
                          width: fit-content; 
                          background-color: white;
                          height: fit-content;
                        }

                        form > button.btn:hover {
                          background-color: transparent;
                          border-color:white;
                          z-index: 5;
                          transition-duration: 0.5s;
                          transform: scale(1.1, 1.1);
                        }
                      `}
                    </style>
                    <Button
                        variant="outline-primary"
                        block
                        type="submit">
                        <span className="fa fa-search"></span>
                    </Button>

                    
                    
                   
                
               
                </Form>
              </div>
          </div>
        </div>
        <div className="container" style={{marginTop:"-100px", display:"flex", justifyContent:"center", textAlign:"center"}} >
           
            
             <div className="btn-group" data-toggle="buttons">
               <label className="btn btn-light" onClick={() => this.setState({EngSelected:!this.state.EngSelected})} style={{minWidth: "200px", width: "max-content", height: "250px", marginRight: "40px", padding: "40px", textAlign: "center", borderRadius: "20px"}} >
                 <span className="fa fa-cogs" style={{fontSize: "100px",color: "#007bff", maxWidth: "150px",marginBottom: "33px"}}></span>
                 <h4 style={{ color: "#232323",fontSize: "22px"}}>Engineering</h4>
               </label>
               <label  className="btn btn-light" onClick={() => this.setState({FinSelected:!this.state.FinSelected})} style={{minWidth: "200px", width: "max-content", height: "250px", marginRight: "40px", padding: "40px", textAlign: "center", borderRadius: "20px"}} >
                 <span className="fa fa-dollar" style={{fontSize: "100px",color: "#007bff", maxWidth: "150px",marginBottom: "33px"}}></span>
                 <h4 style={{ color: "#232323",fontSize: "22px"}}>Finance</h4>
               </label>
               <label  className="btn btn-light" onClick={() => this.setState({TeleComSelected:!this.state.TeleComSelected})} style={{minWidth: "200px", width: "max-content", height: "250px", marginRight: "40px", padding: "40px", textAlign: "center", borderRadius: "20px"}}>
                 <span className="fa fa-phone" style={{fontSize: "100px",color: "#007bff", maxWidth: "150px",marginBottom: "33px"}}></span>
                 <h4 style={{ color: "#232323",fontSize: "22px"}}>Telecommunication</h4>
               </label>
               <label  className="btn btn-light" onClick={() => this.setState({MedSelected:!this.state.MedSelected})} style={{minWidth: "200px", width: "max-content", height: "250px", marginRight: "40px", padding: "40px", textAlign: "center", borderRadius: "20px"}}>
                 <span className="fa fa-plus-square" style={{fontSize: "100px",color: "#007bff", maxWidth: "150px",marginBottom: "33px"}}></span>
                 <h4 style={{ color: "#232323",fontSize: "22px"}}>Medical</h4>
               </label>
            </div>
          
        </div>
        <div className="container"  style={{ display:"flex", justifyContent:"left", textAlign:"center", marginBottom:"0"}}>
            <div style={{ width:"200px", height:"fit-content",   padding:"40px 40px", textAlign:"center", marginRight:"40px"}}>
              <h1  style={{ color: "#232323", fontWeight:"bolder"}}><CountUp end={1528}></CountUp></h1>
              <h4 style={{ color: "#232323",fontSize: "22px"}}>Job Posted</h4>
            </div>
            <div  style={{width:"200px", height:"fit-content",  padding:"40px 40px", textAlign:"center", marginRight:"40px"}}>
              <h1  style={{ color: "#232323", fontWeight:"bolder"}}><CountUp end={387}></CountUp></h1>
              <h4 style={{ color: "#232323",fontSize: "22px"}}>Employers</h4>
            </div>
            <div  style={{ width:"200px", height:"fit-content",  padding:"40px 40px", textAlign:"center", marginRight:"40px"}}>
              <h1  style={{ color: "#232323", fontWeight:"bolder"}}><CountUp end={156}></CountUp></h1>
              <h4 style={{ color: "#232323",fontSize: "22px"}}>New job posted this week</h4>
            </div>
        </div>
      </div>
      
    )
  }
}

export default  withRouter(HomePage);