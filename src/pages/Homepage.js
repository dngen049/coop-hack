import React from 'react'
import { Link } from 'react-router-dom'
import {Form, FormGroup, FormControl, Button} from 'react-bootstrap'
import CountUp from 'react-countup';
import "./HomePage.css"

export default class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.state={
        search:"",
        region:"",
        domain:"",
    }
  }


  render(){
    return (
      <div style={{width:"100%"}}>
        <div className="Home-content">
          <div className="container" style={{marginTop:"60px"}}>
              <h1>Find Job</h1>
              <div>
              <Form style={{display:"flex", marginTop:"20px"}}>
                    <FormGroup controlId="search" style={{width: "60%",marginRight: "5px"}} >
                  
                        <FormControl 
                        style={{height: "50px"}}
                        placeholder="Job title, Company name, .."
                        value={this.state.search}
                        // onChange={this.handleChange}
                        />
                       
                    </FormGroup>
                
                     <FormGroup controlId="region" style={{width: "40%", marginRight: "5px"}}>
                  
                        <FormControl
                         style={{ height: "50px"}}
                        placeholder="City, Province, .."
                        value={this.state.region}
                        // onChange={this.handleChange} <FormControl.Feedback  type="invalid"
                        />
                         
                    </FormGroup>
                    <Button
                        variant="outline-primary"
                        block
                        style={{ width: "50px", backgroundColor: "white",height: "50px"}}
                        type="submit">
                        <span className="fa fa-search"></span>
                    </Button>

                    
                    
                   
                
               
                </Form>
              </div>
          </div>
        </div>
        <div className="container" style={{marginTop:"-100px", display:"flex", justifyContent:"center", textAlign:"center"}} >
            <div className="domain-service" >
              <span className="fa fa-cogs" style={{fontSize: "100px",color: "#007bff", maxWidth: "150px",marginBottom: "33px"}}></span>
              <h4 style={{ color: "#232323",fontSize: "22px"}}>Engineering</h4>
            </div>
            <div className="domain-service" >
              <span className="fa fa-dollar" style={{fontSize: "100px",color: "#007bff", maxWidth: "150px",marginBottom: "33px"}}></span>
              <h4 style={{ color: "#232323",fontSize: "22px"}}>Finance</h4>
            </div>
            <div className="domain-service" >
              <span className="fa fa-phone" style={{fontSize: "100px",color: "#007bff", maxWidth: "150px",marginBottom: "33px"}}></span>
              <h4 style={{ color: "#232323",fontSize: "22px"}}>Telecommunication</h4>
            </div>
            <div className="domain-service">
              <span className="fa fa-plus-square" style={{fontSize: "100px",color: "#007bff", maxWidth: "150px",marginBottom: "33px"}}></span>
              <h4 style={{ color: "#232323",fontSize: "22px"}}>Medical</h4>
            </div>
        </div>
        <div className="container"  style={{ display:"flex", justifyContent:"left", textAlign:"center", marginBottom:"0"}}>
            <div  style={{ width:"200px", height:"fit-content",   padding:"40px 40px", textAlign:"center", marginRight:"40px"}}>
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