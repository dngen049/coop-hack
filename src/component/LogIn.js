import React from 'react';
import { Button, FormGroup, FormControl, Form } from "react-bootstrap"
import {withRouter} from 'react-router';
import './Login.css';

class LogIn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            confirmpassword : "",
            LogMode: true,
            validated:false,
         
        };
        
    }
    validateForm() {
        if(this.state.LogMode){
            return this.state.email.length > 0 && this.state.password.length > 0;
        }else{
            return this.state.email.length > 0 && this.state.password.length > 0 && this.state.confirmpassword.length > 0 && this.state.confirmpassword == this.state.password ;
        }
    }
   

    handleChange = event => {
        this.setState({
        [event.target.id]: event.target.value, validated:false
    });
    }

    handleSubmit = event => {
        event.preventDefault();
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(String(this.state.email).toLowerCase())){
            // console.log(this.state.email + ": " + this.state.password);
            
            this.props.history.push('/HomePage')
        }else{
            this.setState({ validated: true });
        }
        
        
        
    }
    render(){
        let ForgortPassA = {
        };
        if(this.state.LogMode){
            ForgortPassA = {
                display:"initial"
            };
        }else{
            ForgortPassA = {
                display:"none"
            };
        }
        return(
            <div className="Login" style={{margin:"15px"}}>
                
                <h3 style={{marginBottom:"20px"}}>{this.state.LogMode ? "Login" : "Sign up"}</h3>
                <Form noValidate   onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" >
                  
                        <FormControl 
                        placeholder="Email"
                        
                        isInvalid = {this.state.validated}
                        type="email"
                        value={this.state.email}
                        required
                        onChange={this.handleChange}
                        />
                        <FormControl.Feedback type="invalid">
                            invalid Email
                        </FormControl.Feedback>
                    </FormGroup>
                
                     <FormGroup controlId="password">
                  
                        <FormControl
                      
                        isInvalid = {this.state.validated}
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                        type="password"
                        />
                        <FormControl.Feedback  type="invalid">
                            Invalid Password
                        </FormControl.Feedback>
                    </FormGroup>

                    <FormGroup controlId="confirmpassword"  hidden={this.state.LogMode}>
                    
                        <FormControl
                        placeholder="Confirm password"
                        value={this.state.confirmpassword}
                        onChange={this.handleChange}
                        type="password"
                        />
                        <Form.Text style={{textAlign:"left"}}>Make sure it's the same password</Form.Text>
                    </FormGroup>
                
                    
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <div style={{textAlign:"left"}} >
                            <ul className="Auth-link">
                                <li><a style={ForgortPassA} href="#">Forgot Password</a></li>
                                <li><a onClick={() => this.setState({LogMode:!this.state.LogMode})} href="#">{this.state.LogMode ? "Don't have an account" : "Already have an account"}</a></li>
                            </ul>
                            
                        
                        </div>
                        <div  >
                            <Button
                                block
                                style={{width:"100px"}}
                                disabled={!this.validateForm()}
                                type="submit">
                                {this.state.LogMode ? "Login" : "Sign up"}
                            </Button>
                            
                        </div>
                    </div>
                
               
                </Form>
            </div>
        )
    }
}


export default  withRouter(LogIn);