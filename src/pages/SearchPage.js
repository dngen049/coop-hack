import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import Jobs from '../data/jobs'
import Job from "./../component/Job"
import {Form, FormGroup, FormControl, Button, style} from 'react-bootstrap'

export default class SearchPage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      search:"",
      region:"",
      result:[]
     
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount(){
   
   if(this.state.search === "" && this.props.location.state !== undefined ){
     this.setState({
           search:this.props.location.state.search,
           region:this.props.location.state.region 
          })
          var res =[]
          Jobs.map((e)=> {
            if(e.jobTtitle.includes(this.state.search) ){
              if(e.location.includes(this.state.region)){
                res.unshift(e);
      
              }else{
                res.push(e);
              }
            }
          });
          this.setState({result:res});
        }
      }
  handleChange = event => {
    this.setState({
        [event.target.id]: event.target.value,
    });
  }
  
  handleSubmit = event => {

    event.preventDefault();
    
    var res =[]
    Jobs.map((e)=> {
      if(e.jobTtitle === this.state.search ){
        if(e.location === this.state.region){

          res.unshift(e);

        }else{
          res.push(e);
        }
      }
    });
    console.log(res)
    this.setState({result:res});
    
  }
  render(){

    
    return (
      <div className="container">
      <main class="main">
      <div class="container">
          <div class="col-xs-12">
          <Form style={{display:"flex", marginTop:"20px"}} onSubmit={this.handleSubmit}  >
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

                       
                      `}
                    </style>
                    <Button
                        variant="outline-primary"
                        block
                        type="submit">
                        <span className="fa fa-search"></span>
                    </Button>

                    
                    
                   
                
               
                </Form>
            <div class="section-title-wrap">
              <h3 class="section-title">
                <b>{this.state.result.length}</b> Jobs Found
              </h3>
            </div>
            <div class="item-listing">
              {this.state.result.map( e => <Job JobID={e.jobID} title={e.jobTtitle} company={e.company} location={e.location} />)}
          
              {/* <div class="list-item-secondary-wrap">
                <a href="" className="btn btn-round btn-white btn-transparent">Load More Jobs</a>
              </div> */}
            </div>
          </div>
         
      </div>
    </main>
    </div>

    )
  }
}