import React from 'react'
import {withRouter} from 'react-router';
import {Form, FormGroup, FormControl, Button, style} from 'react-bootstrap'
import CountUp from 'react-countup';
import "./HomePage.css"

class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.state={
        search:"",
        region:"",
        EngSelected:false,
        FinSelected: false,
        TeleComSelected: false,
        MedSelected: false,
    }
    
  }
  handleChange = event => {
    this.setState({
        [event.target.id]: event.target.value,
    });
  }
  handleSubmit = event => {
    var dom="";
    if(this.state.EngSelected){
      dom= dom + "Engineering "
    }
    if(this.state.FinSelected){
      dom = dom + "Finance "
    }
    if(this.state.TeleComSelected){
      dom = dom + "Telecommunication "
    }
    if(this.state.MedSelected){
      dom = dom + "Medicale "
    }
    dom = dom.split(" ")
    this.props.history.push('/Search', { search: this.state.search, region: this.state.region, domain:dom.join() })
  }
 
  render(){
    return (
      <div style={{width:"100%"}}>
        <div className="Home-content">
          <div className="container" style={{marginTop:"60px"}}>
              <h1>Find Job</h1>
              <div>
              <Form style={{display:"flex", marginTop:"20px"}}  onSubmit={this.handleSubmit}>
                    <FormGroup controlId="search" style={{width: "60%",marginRight: "5px"}} >
                  
                        <FormControl 
                        style={{height: "50px"}}
                        placeholder="Job title, Company name, .."
                        value={this.state.search}
                        onChange={this.handleChange}
                        autoComplete="true"
                        />
                       
                    </FormGroup>
                
                     <FormGroup controlId="region" style={{width: "40%", marginRight: "5px"}}>
                  
                        <FormControl
                         style={{ height: "50px"}}
                        placeholder="City, Province, .."
                        value={this.state.region}
                        onChange={this.handleChange}
                        />
                         
                    </FormGroup>
                    <style type="text/css">
                      {`
                        form > button.btn {
                          width: 50px; 
                          background-color: white;
                          height: 50px;
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