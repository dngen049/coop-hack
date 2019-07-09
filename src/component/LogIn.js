import React from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap"
import {withRouter} from 'react-router';
import './Login.css';

class LogIn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            confirmpassword : "",
            LogMode: true
         
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
        [event.target.id]: event.target.value
    });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.email + ": " + this.state.password);
        
        this.props.history.push('/HomePage')
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
                <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                  
                    <FormControl 
                    placeholder="Email"
                    autoFocus
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                  
                    <FormControl
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    />
                </FormGroup>

                <FormGroup controlId="confirmpassword" bsSize="large" hidden={this.state.LogMode}>
                  
                    <FormControl
                    placeholder="Confirm password"
                    value={this.state.confirmpassword}
                    onChange={this.handleChange}
                    type="password"
                    />
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
               
               
                </form>
            </div>
        )
    }
}


export default  withRouter(LogIn);