import React from 'react'
import "./style.css"
import Jobs from '../data/jobs'
import Job from "./../component/Job"
import {Form, FormGroup, Button, style} from 'react-bootstrap'
import {Typeahead} from 'react-bootstrap-typeahead';
import {withRouter} from 'react-router';

class SearchPage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      search:[],
      region:[],
      result:[]
     
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    var res =[]
    const info = this.props.location.state

    console.log(info)
    if(info !== undefined){
      if(info.domain.length !== 0){
        info.domain.map((e) => {
          console.log(e)
          Jobs.map((l) => {
            if(l.type === e){
              if(l.jobTtitle === info.search.join() || l.company === info.search.join()){
                if(l.location === info.region.join()){
                  res.unshift(l)
                }else{
                  res.push(l)
                }
              }else{
                res.push(l)
              }
            }else{
              
            }
          })
        })
      }else{
        Jobs.map((e)=> {
          if(e.jobTtitle === info.search.join() || e.company === info.search.join() ){
            if(e.location === info.region.join()){
              res.unshift(e);
    
            }else{
              res.push(e);
            }
          }
        });
      }
      
    }
   
      this.setState({result:res});
  }

  
  handleSubmit = event => {
   
    event.preventDefault();
    var res =[]
    Jobs.map((e)=> {
      if(e.jobTtitle === this.state.search.join() || e.company === this.state.search.join() ){
        if(e.location === this.state.region.join()){
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
          <FormGroup controlId="search" style={{width: "60%" ,marginRight: "5px"}} >
                  
                  <Typeahead
                    minLength={2}
                   id="search"
            
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
                    selected = {this.state.search}
                    placeholder="Job title, Company name, .."
                  />
                 
              </FormGroup>
          
               <FormGroup controlId="region" style={{width: "40%", marginRight: "5px"}}>
            
                  <Typeahead
                    minLength={2}
                    id="search"
                    onChange={(selectedOptions) =>  this.setState({region : selectedOptions})}
                    options={["Ottawa, ON","Richmond, VA" ,
                      "Montreal, QC", "Quebec, QC" ,
                      "Regina, SK",
                      "Halifax, NS", "Edmonton, Alb" , "Kanata, ON"
                    ]}
                    selected = {this.state.region}
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
export default  withRouter(SearchPage);